"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const core_1 = require("@11z/core");
const store_se_1 = require("./service/store.se");
const types_1 = require("./utils/types");
const params_1 = require("./lib/extract/params");
const guards_1 = require("./utils/guards");
const errors_1 = require("./lib/errors");
const throw_error_1 = require("./lib/throw.error");
const catch_async_errors_1 = require("./lib/catch-async-errors");
const package_json_1 = require("express/package.json");
class Router {
    /**
     * @param app express initial.
     */
    constructor(app) {
        this._app = app;
    }
    /**
     * Attach and register application's decorated route.
     *
     * @param prefix prefix path.
     * @param Handlers route handlers.
     *
     * Possible signatures:
     * * `router.attach(prefix, [route, ...]) => void`
     */
    attach(prefix, Handlers) {
        const Routes = this.removeDuplicatedArr(Handlers);
        // Catch route async errors.
        if (parseInt(package_json_1.version, 10) <= 4) {
            (0, catch_async_errors_1.patchRouterParam)();
        }
        Routes.forEach((Route) => {
            const routeMetadata = store_se_1.Store.container.get(Route, types_1.MetadataKeys.__route__); // Parents.
            const routeMidsMetadata = store_se_1.Store.container.get(Route, types_1.MetadataKeys.__route_middleware__); // Parents.
            const Apis = this.removeDuplicatedArr(routeMetadata.Apis);
            Apis.forEach((Api) => {
                // Define injector.
                (0, core_1.defineInjector)(Api);
                // Router handler.
                this.routerHandler(prefix, Api, routeMidsMetadata, routeMetadata.routeOptions.router, this.getInstance);
            });
        });
        // Execute error handler.
        this.errorHandlers();
    }
    /**
     * No docs description yet.
     *
     * @param prefix prefix path.
     * @param RouteApi route api handler.
     * @param router express.Router()
     * @param _getInstance get instance value.
     */
    routerHandler(prefix, Api, routeMids, router, _getInstance) {
        const apiRouteInstance = _getInstance(Api);
        const apiRouteMethodNames = Object.getOwnPropertyNames(Object.getPrototypeOf(new Api())).filter((p) => p !== 'constructor');
        // Metadata constance.
        const apiMetadata = store_se_1.Store.container.get(Api, types_1.MetadataKeys.__api__); // Parents.
        // Throw.
        if (!apiMetadata)
            throw (0, throw_error_1.ThrowError)('ApiError', 'No api found. use `@Api()` instead.');
        // Url path logic.
        const preUrlPath = this.removeTrailingSlash(prefix);
        const apiUrlPath = this.removeTrailingSlash(apiMetadata.url);
        apiRouteMethodNames.forEach((name) => {
            const apiMethodsMetadata = store_se_1.Store.container.getOwn(Api.prototype, types_1.MetadataKeys.__api_method__, name); // A child of apiMetadata.
            // Throw.
            if (!apiMethodsMetadata)
                throw (0, throw_error_1.ThrowError)('ApiMethodError', 'No api method found. use `@Get()` or any http methods instead.');
            apiMethodsMetadata === null || apiMethodsMetadata === void 0 ? void 0 : apiMethodsMetadata.forEach((method) => {
                const apiMethodParamsMetadata = store_se_1.Store.container.getOwn(Api.prototype, types_1.MetadataKeys.__api_method_params__, method.propertyKey); // A child of apiMetadata.
                const apiMethodMidsMetadata = store_se_1.Store.container.getOwn(Api.prototype, types_1.MetadataKeys.__api_method_middleware__, method.propertyKey); // A child of apiMetadata.
                const apiMethodValidationMetadata = store_se_1.Store.container.getOwn(Api.prototype, types_1.MetadataKeys.__api_method_validation__, method.propertyKey); // A child of apiMetadata.
                // Url path logic.
                const methodUrlPath = this.removeTrailingSlash(method.url);
                const routerUrlPath = `${apiUrlPath}${methodUrlPath}`;
                // Original declared Fn.
                const declaredFn = method.descriptor.value;
                // Method logic.
                method.descriptor.value = function (req, res, next) {
                    // Extract params as an arguments.
                    const args = (0, params_1.extractParams)(req, res, next)(apiMethodParamsMetadata);
                    // Apply response status.
                    res.status(method.status);
                    // Apply custom arguments.
                    const result = declaredFn.apply(apiRouteInstance, args);
                    /**
                     * Custom response result.
                     *
                     * Possible signatures:
                     * return a general string, boolean, number, promise, oject, array.
                     * or a regular res.send()
                     */
                    if ((0, guards_1.isPromise)(result)) {
                        result
                            .then((value) => {
                            !res.headersSent && res.send(value);
                        })
                            .catch((err) => {
                            next(err);
                        });
                    }
                    else if ((0, guards_1.isServerResponse)(result)) {
                        !res.headersSent && res.send(result);
                    }
                    else if ((0, guards_1.isReadableStream)(result)) {
                        result.pipe(res);
                    }
                    else if (result !== undefined) {
                        !res.headersSent && res.send(result);
                    }
                    return result; // Return the custom argument's result.
                };
                // Mids and validation constance.
                const mMids = this.removeDuplicatedArr(apiMethodMidsMetadata);
                const rMids = this.removeDuplicatedArr(routeMids);
                const validation = apiMethodValidationMetadata ? this.validateResource(apiMethodValidationMetadata) : [];
                // Inject router fn into the router provider.
                router[method.method](routerUrlPath, validation, ...rMids, ...mMids, this.catchAsyncErrors(method.descriptor.value));
            });
        });
        // Register router.
        this._app.use(preUrlPath, router);
    }
    /**
     * If the function passed in is not an async function, return the function. If it is an async
     * function, return a function that resolves the async function and catches any errors.
     * @param {Function} fn - Function - The function to be wrapped
     * @returns A function that takes in a request, response, and next function.
     */
    catchAsyncErrors(fn) {
        if (fn.constructor.name !== 'AsyncFunction')
            return fn;
        return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
    }
    /**
     * No docs description yet.
     */
    errorHandlers() {
        // 404 handler.
        this._app.use((_req, res) => {
            res.status(404).send({
                status: 404,
                error: 'NOT_FOUND',
                message: 'The route you were looking for does not exist or has been removed.'
            });
        });
        // Global handler.
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._app.use((err, _req, res, _next) => {
            // Response logic.
            if (err instanceof errors_1.CustomError) {
                res.status(err.status).send({
                    status: err.status,
                    error: err.error,
                    message: err.message
                });
            }
            else {
                // Log error on the backend side.
                console.error(err.stack);
                res.status(500).send({
                    status: 500,
                    error: 'INTERNAL_SERVER_ERROR',
                    message: 'Something bad just happened!'
                });
            }
        });
    }
    /**
     * No docs description yet.
     *
     * @param schema any object schema.
     * @returns
     */
    validateResource(schema) {
        return async (req, res, next) => {
            var _a, _b, _c, _d;
            try {
                await schema.parseAsync({
                    body: req.body,
                    query: req.query,
                    params: req.params
                });
                return next();
            }
            catch (err) {
                if (err instanceof Error) {
                    res.status(422).send({
                        status: 422,
                        error: 'UNPROCESSABLE_ENTITY',
                        message: `${(_b = (_a = err === null || err === void 0 ? void 0 : err.issues) === null || _a === void 0 ? void 0 : _a.at(0)) === null || _b === void 0 ? void 0 : _b.path.at(1)}: ${(_d = (_c = err === null || err === void 0 ? void 0 : err.issues) === null || _c === void 0 ? void 0 : _c.at(0)) === null || _d === void 0 ? void 0 : _d.message}` || 'Validation error.'
                    });
                }
                else {
                    res.status(422).send({
                        status: 422,
                        error: 'UNPROCESSABLE_ENTITY',
                        message: 'Validation error.'
                    });
                }
            }
        };
    }
    /**
     * No docs description yet.
     *
     * @param Api
     * @returns
     */
    getInstance(Api) {
        try {
            return core_1.Injector.get(Api);
        }
        catch (_) {
            return new Api();
        }
    }
    /**
     * Remove trailing slash from a string.
     * Example: Sometimes a url contain unused slashes `/api/v1/users////`
     * This will be convert to this `/api/v1/users` to prevent route crashing.
     *
     * @param str
     * @returns
     */
    removeTrailingSlash(path) {
        if (typeof path === 'string')
            return path.replace(/\/+$/, String());
        return path;
    }
    /**
     * Remove duplicated array.
     * Example: [1, 1, 2, 3] => [1, 2, 3]
     *
     * @returns
     */
    removeDuplicatedArr(arr) {
        return Array.from(new Set(arr));
    }
}
exports.Router = Router;
//# sourceMappingURL=entry.js.map
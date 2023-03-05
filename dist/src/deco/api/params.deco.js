"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ctx = exports.Headers = exports.Cookies = exports.Body = exports.Query = exports.Params = exports.Next = exports.Res = exports.Req = void 0;
const store_se_1 = require("../../service/store.se");
const types_1 = require("../../utils/types");
/**
 * A named URL segments that are used to capture the values specified at their position in the URL factory.
 *
 * @param type parameter index.
 * @returns
 */
function PARAMS_DECORATOR_FACTORY(type) {
    return (name) => {
        return (Target, propertyKey, index) => {
            // Here we check does api method param metadata exist or not?.
            const paramsMetadata = store_se_1.Store.container.has(Target.constructor.prototype, types_1.MetadataKeys.__api_method_params__, propertyKey)
                ? // If it does exist we will get it from there.
                    store_se_1.Store.container.getOwn(Target.constructor.prototype, types_1.MetadataKeys.__api_method_params__, propertyKey)
                : // If it does not exist set it to an empty array.
                    [];
            // Push each object property into the head variable.
            // Why do we need to do this?
            // Because sometime a class does contain many methods.
            paramsMetadata.push({
                type,
                name,
                index,
                propertyKey
            });
            // Define a new metadata object and set it up in the container Store.
            store_se_1.Store.container.define(Target.constructor.prototype, paramsMetadata, types_1.MetadataKeys.__api_method_params__, propertyKey);
        };
    };
}
/**
 * Express's `request`.
 *
 * @example [health(@Req() req: Request)]
 */
exports.Req = PARAMS_DECORATOR_FACTORY(types_1.ParameterIndices.REQUEST);
/**
 * Express's `response`.
 *
 * @example [health(@Res() res: Response)]
 */
exports.Res = PARAMS_DECORATOR_FACTORY(types_1.ParameterIndices.RESPONSE);
/**
 * Express's `next function`.
 *
 * @example [health(@Next() next: NextFunction)]
 */
exports.Next = PARAMS_DECORATOR_FACTORY(types_1.ParameterIndices.NEXT);
/**
 * Express's `request params`.
 *
 * @example [health(@Params() params: object)]
 */
exports.Params = PARAMS_DECORATOR_FACTORY(types_1.ParameterIndices.PARAMS);
/**
 * Express's `request query`.
 *
 * @example [health(@Query() query: object)]
 */
exports.Query = PARAMS_DECORATOR_FACTORY(types_1.ParameterIndices.QUERY);
/**
 * Express's `request body`.
 *
 * @example [health(@Body() body: object)]
 */
exports.Body = PARAMS_DECORATOR_FACTORY(types_1.ParameterIndices.BODY);
/**
 * Express's `request cookies`.
 *
 * @example [health(@Cookies() cookies: object)]
 */
exports.Cookies = PARAMS_DECORATOR_FACTORY(types_1.ParameterIndices.COOKIES);
/**
 * Express's `request headers`.
 *
 * @example [health(@Headers() headers: object)]
 */
exports.Headers = PARAMS_DECORATOR_FACTORY(types_1.ParameterIndices.HEADERS);
/**
 * Express's `request`.
 *
 * @example [health(@Ctx('user') user: object)]
 */
exports.Ctx = PARAMS_DECORATOR_FACTORY(types_1.ParameterIndices.CONTEXT);
//# sourceMappingURL=params.deco.js.map
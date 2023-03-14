import { PathParams } from './utils/types';
import { Express } from 'express';
export declare class Router {
    /**
     * @property `_app` express initialize.
     */
    private readonly _app;
    /**
     * @param initial express initial.
     */
    constructor({ initial }: {
        initial: Express;
    });
    /**
     * Attach and register application's decorated route.
     *
     * @param prefix prefix path.
     * @param Handlers route handlers.
     *
     * Possible signatures:
     * * `router.attach(prefix, [route, ...]) => void`
     */
    attach<T = unknown>(prefix: PathParams, Handlers: T[]): void;
    /**
     * No docs description yet.
     *
     * @param prefix prefix path.
     * @param RouteApi route api handler.
     * @param router express.Router()
     * @param _getInstance get instance value.
     */
    private routerHandler;
    /**
     * No docs description yet.
     */
    private errorHandlers;
    /**
     * No docs description yet.
     *
     * @param schema any object schema.
     * @returns
     */
    private validateResource;
    /**
     * No docs description yet.
     *
     * @param Api
     * @returns
     */
    private getInstance;
    /**
     * Remove trailing slash from a string.
     * Example: Sometimes a url contain unused slashes `/api/v1/users////`
     * This will be convert to this `/api/v1/users` to prevent route crashing.
     *
     * @param str
     * @returns
     */
    private removeTrailingSlash;
    /**
     * Remove duplicated array.
     * Example: [1, 1, 2, 3] => [1, 2, 3]
     *
     * @returns
     */
    private removeDuplicatedArr;
}

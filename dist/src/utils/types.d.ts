import { RequestHandler, Router as ExRouter } from 'express';
import { AnyZodObject } from 'zod';
/**
 * NonSafe type is `any` type.
 */
export type NonSafe = any;
/**
 * Generic type for class definitions.
 */
export type Constructable<T = unknown> = new (...args: NonSafe[]) => T;
/**
 * Possible metadata key.
 */
export declare enum MetadataKeys {
    __api__ = "key:__api__",
    __api_method__ = "key:__api_method__",
    __api_method_middleware__ = "key:__api_method_middleware__",
    __api_method_params__ = "key:__api_method_params__",
    __api_method_validation__ = "key:__api_method_validation__",
    __route__ = "key:__route__",
    __route_middleware__ = "key:__route_middleware__"
}
/**
 * Possible http method.
 */
export declare enum HttpMethods {
    Get = "get",
    Post = "post",
    Put = "put",
    Patch = "patch",
    Delete = "delete"
}
/**
 * Possible parameter index.
 */
export declare enum ParameterIndices {
    REQUEST = 0,
    RESPONSE = 1,
    PARAMS = 2,
    BODY = 3,
    QUERY = 4,
    HEADERS = 5,
    COOKIES = 6,
    NEXT = 7,
    CONTEXT = 8
}
/**
 * Possible path params type.
 */
export type PathParams = string | RegExp | Array<string | RegExp>;
/**
 * Possible api type.
 */
export interface Api {
    /**
     * Url path. the parents url path.
     */
    readonly url: PathParams;
}
/**
 * Possible api method type.
 */
export interface ApiMethod {
    /**
     * Http method.
     */
    readonly method: HttpMethods;
    /**
     * Url path.
     */
    readonly url: PathParams;
    /**
     * Status code.
     */
    readonly status: number;
    /**
     * Method key or name.
     */
    readonly propertyKey: string | symbol;
    /**
     * Method value.
     */
    readonly descriptor: PropertyDescriptor;
}
/**
 * Possible middleware type.
 */
export type Middleware = RequestHandler;
/**
 * Possible api method params type.
 */
export interface ApiMethodParams {
    /**
     * Parameter index type.
     */
    readonly type: ParameterIndices;
    /**
     * Parameter name.
     */
    readonly name?: string;
    /**
     * Parameter index.
     */
    readonly index: number;
    /**
     * Method key or name.
     */
    readonly propertyKey: string | symbol;
}
/**
 * Possible route type.
 */
export interface Route<T = unknown> {
    /**
     * Api handler.
     */
    readonly Apis: Constructable<T>[];
    /**
     * Route options.
     */
    readonly routeOptions: {
        router: ExRouter;
    };
}
/**
 * Possible validate request type.
 */
export type ValidateRequest = {
    body?: AnyZodObject;
    params?: AnyZodObject;
    query?: AnyZodObject;
};

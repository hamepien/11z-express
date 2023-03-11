import { PathParams } from '../../utils/types';
/**
 * A specific endpoint for HTTP requests factory.
 *
 * @param method http method type.
 * @param url url path.
 * @param status status code.
 * @returns
 */
export declare function METHOD_DECORATOR_FACTORY<M extends string>(method: M, url?: PathParams, status?: number): MethodDecorator;
/**
 * `get` http method.
 *
 * @example [@Get('/') public health() {}]
 */
export declare function Get(url?: PathParams): MethodDecorator;
export declare function Get(status?: number): MethodDecorator;
export declare function Get(url?: PathParams, status?: number): MethodDecorator;
/**
 * `post` http method.
 *
 * @example [@Post('/') public health() {}]
 */
export declare function Post(url?: PathParams): MethodDecorator;
export declare function Post(status?: number): MethodDecorator;
export declare function Post(url?: PathParams, status?: number): MethodDecorator;
/**
 * `put` http method.
 *
 * @example [@Put('/') public health() {}]
 */
export declare function Put(url?: PathParams): MethodDecorator;
export declare function Put(status?: number): MethodDecorator;
export declare function Put(url?: PathParams, status?: number): MethodDecorator;
/**
 * `patch` http method.
 *
 * @example [@Patch('/') public health() {}]
 */
export declare function Patch(url?: PathParams): MethodDecorator;
export declare function Patch(status?: number): MethodDecorator;
export declare function Patch(url?: PathParams, status?: number): MethodDecorator;
/**
 * `delete` http method.
 *
 * @example [@Delete('/') public health() {}]
 */
export declare function Delete(url?: PathParams): MethodDecorator;
export declare function Delete(status?: number): MethodDecorator;
export declare function Delete(url?: PathParams, status?: number): MethodDecorator;

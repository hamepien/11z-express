import { AnyZodObject } from 'zod';
/**
 * Validation middleware. A function which is called before the route handler.
 *
 * @param schema schema object.
 * @returns
 */
export declare function Validation(schema: AnyZodObject): MethodDecorator;

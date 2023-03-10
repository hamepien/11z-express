/**
 * It wraps the function passed to `Router.param` with a function that calls the original function, but
 * also calls `next()` if the original function throws an error
 * @returns The original param function is being returned.
 */
export declare function patchRouterParam(): void;

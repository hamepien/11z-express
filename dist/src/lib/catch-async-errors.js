"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchRouterParam = void 0;
const Layer = require('express/lib/router/layer');
const Router = require('express/lib/router');
const last = (arr = []) => arr[arr.length - 1];
const noop = Function.prototype;
/**
 * It takes an object with functions as properties and returns a function with the same properties
 * @param oldFn - The function you want to copy the properties from.
 * @param newFn - { (...args: NonSafe[]): Function; [x: string]: NonSafe }
 * @returns A function that takes a function and returns a function.
 */
function copyFnProps(oldFn, newFn) {
    Object.keys(oldFn).forEach((key) => {
        newFn[key] = oldFn[key];
    });
    return newFn;
}
/**
 * It takes a function and returns a new function that calls the original function and then calls the
 * next function in the chain if the original function returns a promise
 * @param fn - { [x: string]: Function } & Function
 * @returns A function that takes in a function and returns a new function.
 */
function wrap(fn) {
    const newFn = function newFn(...args) {
        const result = fn.apply(this, args);
        const next = (args.length === 5 ? args[2] : last(args)) || noop;
        if (result && result.catch)
            result.catch((err) => next(err));
        return result;
    };
    Object.defineProperty(newFn, 'length', {
        value: fn.length,
        writable: false
    });
    return copyFnProps(fn, newFn);
}
/**
 * It wraps the function passed to `Router.param` with a function that calls the original function, but
 * also calls `next()` if the original function throws an error
 * @returns The original param function is being returned.
 */
function patchRouterParam() {
    const originalParam = Router.prototype.constructor.param;
    Router.prototype.constructor.param = function param(name, fn) {
        fn = wrap(fn);
        return originalParam.call(this, name, fn);
    };
}
exports.patchRouterParam = patchRouterParam;
/* Creating a getter and setter for the `handle` property on the `Layer` class. */
Object.defineProperty(Layer.prototype, 'handle', {
    enumerable: true,
    get() {
        return this.__handle;
    },
    set(fn) {
        fn = wrap(fn);
        this.__handle = fn;
    }
});
//# sourceMappingURL=catch-async-errors.js.map
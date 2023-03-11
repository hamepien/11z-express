"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Patch = exports.Put = exports.Post = exports.Get = exports.METHOD_DECORATOR_FACTORY = void 0;
const store_se_1 = require("../../service/store.se");
const types_1 = require("../../utils/types");
/**
 * A specific endpoint for HTTP requests factory.
 *
 * @param method http method type.
 * @param url url path.
 * @param status status code.
 * @returns
 */
function METHOD_DECORATOR_FACTORY(method, url = '/', status = 200) {
    return (Target, propertyKey, descriptor) => {
        // Here we check does api method metadata exist or not?.
        const apiMethodsMetadata = store_se_1.Store.container.has(Target.constructor.prototype, types_1.MetadataKeys.__api_method__, propertyKey)
            ? // If it does exist we will get it from there.
                store_se_1.Store.container.getOwn(Target.constructor.prototype, types_1.MetadataKeys.__api_method__, propertyKey)
            : // If it does not exist set it to an empty array.
                [];
        // Push each object property into the head variable.
        // Why do we need to do this?
        // Because sometime a class does contain many methods.
        apiMethodsMetadata.push({
            url,
            method: method,
            status,
            descriptor,
            propertyKey
        });
        // Define a new metadata object and set it up in the container Store.
        store_se_1.Store.container.define(Target.constructor.prototype, apiMethodsMetadata, types_1.MetadataKeys.__api_method__, propertyKey);
    };
}
exports.METHOD_DECORATOR_FACTORY = METHOD_DECORATOR_FACTORY;
function Get(arg1, arg2) {
    const url = typeof arg1 === 'string' ? arg1 : '/';
    const status = typeof arg1 === 'number' ? arg1 : undefined || typeof arg2 === 'number' ? arg2 : undefined;
    return METHOD_DECORATOR_FACTORY(types_1.HttpMethods.Get, url, status);
}
exports.Get = Get;
function Post(arg1, arg2) {
    const url = typeof arg1 === 'string' ? arg1 : '/';
    const status = typeof arg1 === 'number' ? arg1 : undefined || typeof arg2 === 'number' ? arg2 : undefined;
    return METHOD_DECORATOR_FACTORY(types_1.HttpMethods.Post, url, status);
}
exports.Post = Post;
function Put(arg1, arg2) {
    const url = typeof arg1 === 'string' ? arg1 : '/';
    const status = typeof arg1 === 'number' ? arg1 : undefined || typeof arg2 === 'number' ? arg2 : undefined;
    return METHOD_DECORATOR_FACTORY(types_1.HttpMethods.Put, url, status);
}
exports.Put = Put;
function Patch(arg1, arg2) {
    const url = typeof arg1 === 'string' ? arg1 : '/';
    const status = typeof arg1 === 'number' ? arg1 : undefined || typeof arg2 === 'number' ? arg2 : undefined;
    return METHOD_DECORATOR_FACTORY(types_1.HttpMethods.Patch, url, status);
}
exports.Patch = Patch;
function Delete(arg1, arg2) {
    const url = typeof arg1 === 'string' ? arg1 : '/';
    const status = typeof arg1 === 'number' ? arg1 : undefined || typeof arg2 === 'number' ? arg2 : undefined;
    return METHOD_DECORATOR_FACTORY(types_1.HttpMethods.Delete, url, status);
}
exports.Delete = Delete;
//# sourceMappingURL=method.deco.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = void 0;
const store_se_1 = require("../../service/store.se");
const types_1 = require("../../utils/types");
/**
 * A function which is called before the route handler factory.
 *
 * @param mids execute any code.
 * @param key metadata key.
 * @returns
 */
function MIDDLEWARE_DECORATOR_FACTORY(mids, key) {
    return (Target, propertyKey) => {
        // If typeof Target is an object.
        if (typeof Target === 'object') {
            // Here we check does api method middleware metadata exist or not?.
            const apiMidsMetadata = store_se_1.Store.container.has(Target.constructor.prototype, key, propertyKey)
                ? // If it does exist we will get it from there.
                    store_se_1.Store.container.getOwn(Target.constructor.prototype, key, propertyKey)
                : // If it does not exist set it to an empty array.
                    [];
            // Define a new metadata object and set it up in the container Store.
            store_se_1.Store.container.define(Target.constructor.prototype, mids.concat(apiMidsMetadata), key, propertyKey);
        }
        // If typeof Target is a function.
        // NOTE: isolated.
        if (typeof Target === 'function') {
            // Here we check does route middleware metadata exist or not?.
            const routeMidsMetadata = store_se_1.Store.container.has(Target, types_1.MetadataKeys.__route_middleware__)
                ? // If it does exist we will get it from there.
                    store_se_1.Store.container.getOwn(Target, types_1.MetadataKeys.__route_middleware__)
                : // If it does not exist set it to an empty array.
                    [];
            // Define a new metadata object and set it up in the container Store.
            store_se_1.Store.container.define(Target, mids.concat(routeMidsMetadata), types_1.MetadataKeys.__route_middleware__);
        }
    };
}
/**
 * A function which is called before the route handler.
 *
 * @param mids execute any code.
 * @returns
 */
function Middleware(mids) {
    return MIDDLEWARE_DECORATOR_FACTORY(mids, types_1.MetadataKeys.__api_method_middleware__);
}
exports.Middleware = Middleware;
//# sourceMappingURL=middleware.deco.js.map
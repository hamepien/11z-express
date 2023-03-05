"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
const store_se_1 = require("../../service/store.se");
const types_1 = require("../../utils/types");
/**
 * Validation middleware. A function which is called before the route handler.
 *
 * @param schema schema object.
 * @returns
 */
function Validation(schema) {
    return (Target, propertyKey) => {
        // Define a new metadata object and set it up in the container Store.
        store_se_1.Store.container.define(Target.constructor.prototype, schema, types_1.MetadataKeys.__api_method_validation__, propertyKey);
    };
}
exports.Validation = Validation;
//# sourceMappingURL=validation.deco.js.map
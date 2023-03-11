"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const store_se_1 = require("../../service/store.se");
const types_1 = require("../../utils/types");
/**
 * A class defined with methods for handling one or more requests.
 *
 * @param url url path.
 * @example [@Api() class Api {}]
 * @returns
 */
function Api(url = '/') {
    return (Target) => {
        // Define a new metadata object and set it up in the container Store.
        store_se_1.Store.container.define(Target, { url }, types_1.MetadataKeys.__api__);
    };
}
exports.Api = Api;
//# sourceMappingURL=api.deco.js.map
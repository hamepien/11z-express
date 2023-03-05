"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const store_se_1 = require("../../service/store.se");
const types_1 = require("../../utils/types");
/**
 * No docs description yet.
 *
 * @param Apis api handlers.
 * @param routeOptions route options.
 * @returns
 */
function Route(Apis, routeOptions) {
    return (Target) => {
        // Define a new metadata object and set it up in the container Store.
        store_se_1.Store.container.define(Target, { Apis: Apis, routeOptions }, types_1.MetadataKeys.__route__);
    };
}
exports.Route = Route;
//# sourceMappingURL=route.deco.js.map
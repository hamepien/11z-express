"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterIndices = exports.HttpMethods = exports.MetadataKeys = void 0;
/**
 * Possible metadata key.
 */
var MetadataKeys;
(function (MetadataKeys) {
    MetadataKeys["__api__"] = "key:__api__";
    MetadataKeys["__api_method__"] = "key:__api_method__";
    MetadataKeys["__api_method_middleware__"] = "key:__api_method_middleware__";
    MetadataKeys["__api_method_params__"] = "key:__api_method_params__";
    MetadataKeys["__api_method_validation__"] = "key:__api_method_validation__";
    MetadataKeys["__route__"] = "key:__route__";
    MetadataKeys["__route_middleware__"] = "key:__route_middleware__";
})(MetadataKeys = exports.MetadataKeys || (exports.MetadataKeys = {}));
/**
 * Possible http method.
 */
var HttpMethods;
(function (HttpMethods) {
    HttpMethods["Get"] = "get";
    HttpMethods["Post"] = "post";
    HttpMethods["Put"] = "put";
    HttpMethods["Patch"] = "patch";
    HttpMethods["Delete"] = "delete";
})(HttpMethods = exports.HttpMethods || (exports.HttpMethods = {}));
/**
 * Possible parameter index.
 */
var ParameterIndices;
(function (ParameterIndices) {
    ParameterIndices[ParameterIndices["REQUEST"] = 0] = "REQUEST";
    ParameterIndices[ParameterIndices["RESPONSE"] = 1] = "RESPONSE";
    ParameterIndices[ParameterIndices["PARAMS"] = 2] = "PARAMS";
    ParameterIndices[ParameterIndices["BODY"] = 3] = "BODY";
    ParameterIndices[ParameterIndices["QUERY"] = 4] = "QUERY";
    ParameterIndices[ParameterIndices["HEADERS"] = 5] = "HEADERS";
    ParameterIndices[ParameterIndices["COOKIES"] = 6] = "COOKIES";
    ParameterIndices[ParameterIndices["NEXT"] = 7] = "NEXT";
    ParameterIndices[ParameterIndices["CONTEXT"] = 8] = "CONTEXT";
})(ParameterIndices = exports.ParameterIndices || (exports.ParameterIndices = {}));
//# sourceMappingURL=types.js.map
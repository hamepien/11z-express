"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractParams = void 0;
const types_1 = require("../../utils/types");
/**
 * No docs description yet.
 *
 * @param req express `request`.
 * @param res express `response`.
 * @param next express `next function`.
 * @returns
 */
function extractParams(req, res, next) {
    return (params) => {
        // check if there is no params:
        // return the regular params [req, res, next]
        if (!params)
            return [req, res, next];
        // declared empty args array.
        const args = [];
        // params logic.
        params.forEach(({ index, type, name }) => {
            switch (type) {
                case types_1.ParameterIndices.REQUEST:
                    args[index] = getParam(req, name);
                    break;
                case types_1.ParameterIndices.RESPONSE:
                    args[index] = getParam(res, name);
                    break;
                case types_1.ParameterIndices.NEXT:
                    args[index] = getParam(next, name);
                    break;
                case types_1.ParameterIndices.PARAMS:
                    args[index] = getParam(req.params, name);
                    break;
                case types_1.ParameterIndices.QUERY:
                    args[index] = getParam(req.query, name);
                    break;
                case types_1.ParameterIndices.BODY:
                    args[index] = getParam(req.body, name);
                    break;
                case types_1.ParameterIndices.COOKIES:
                    args[index] = getParam(req.cookies, name);
                    break;
                case types_1.ParameterIndices.HEADERS:
                    args[index] = getParam(req.headers, name);
                    break;
                case types_1.ParameterIndices.CONTEXT:
                    args[index] = getParam(req, name);
                    break;
            }
        });
        return args; // return args.
    };
}
exports.extractParams = extractParams;
/**
 * No docs yet.
 *
 * @param paramType parameter type.
 * @param name request name.
 * @returns
 */
function getParam(paramType, name) {
    return name ? paramType[name] : paramType;
}
//# sourceMappingURL=params.js.map
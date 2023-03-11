"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = exports.UnauthorizedError = exports.NotFoundError = exports.ForbiddenError = exports.CustomError = exports.ConflictError = exports.Router = exports.Validation = exports.Route = exports.Res = exports.Req = exports.Query = exports.Put = exports.Post = exports.Patch = exports.Params = exports.Next = exports.Middleware = exports.METHOD_DECORATOR_FACTORY = exports.Headers = exports.Get = exports.Delete = exports.Ctx = exports.Cookies = exports.Body = exports.Api = void 0;
/** Export all decorators. */
var deco_1 = require("./deco");
Object.defineProperty(exports, "Api", { enumerable: true, get: function () { return deco_1.Api; } });
Object.defineProperty(exports, "Body", { enumerable: true, get: function () { return deco_1.Body; } });
Object.defineProperty(exports, "Cookies", { enumerable: true, get: function () { return deco_1.Cookies; } });
Object.defineProperty(exports, "Ctx", { enumerable: true, get: function () { return deco_1.Ctx; } });
Object.defineProperty(exports, "Delete", { enumerable: true, get: function () { return deco_1.Delete; } });
Object.defineProperty(exports, "Get", { enumerable: true, get: function () { return deco_1.Get; } });
Object.defineProperty(exports, "Headers", { enumerable: true, get: function () { return deco_1.Headers; } });
Object.defineProperty(exports, "METHOD_DECORATOR_FACTORY", { enumerable: true, get: function () { return deco_1.METHOD_DECORATOR_FACTORY; } });
Object.defineProperty(exports, "Middleware", { enumerable: true, get: function () { return deco_1.Middleware; } });
Object.defineProperty(exports, "Next", { enumerable: true, get: function () { return deco_1.Next; } });
Object.defineProperty(exports, "Params", { enumerable: true, get: function () { return deco_1.Params; } });
Object.defineProperty(exports, "Patch", { enumerable: true, get: function () { return deco_1.Patch; } });
Object.defineProperty(exports, "Post", { enumerable: true, get: function () { return deco_1.Post; } });
Object.defineProperty(exports, "Put", { enumerable: true, get: function () { return deco_1.Put; } });
Object.defineProperty(exports, "Query", { enumerable: true, get: function () { return deco_1.Query; } });
Object.defineProperty(exports, "Req", { enumerable: true, get: function () { return deco_1.Req; } });
Object.defineProperty(exports, "Res", { enumerable: true, get: function () { return deco_1.Res; } });
Object.defineProperty(exports, "Route", { enumerable: true, get: function () { return deco_1.Route; } });
Object.defineProperty(exports, "Validation", { enumerable: true, get: function () { return deco_1.Validation; } });
/** Export regular stuffs */
var entry_1 = require("./entry");
Object.defineProperty(exports, "Router", { enumerable: true, get: function () { return entry_1.Router; } });
var errors_1 = require("./lib/errors");
Object.defineProperty(exports, "ConflictError", { enumerable: true, get: function () { return errors_1.ConflictError; } });
Object.defineProperty(exports, "CustomError", { enumerable: true, get: function () { return errors_1.CustomError; } });
Object.defineProperty(exports, "ForbiddenError", { enumerable: true, get: function () { return errors_1.ForbiddenError; } });
Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function () { return errors_1.NotFoundError; } });
Object.defineProperty(exports, "UnauthorizedError", { enumerable: true, get: function () { return errors_1.UnauthorizedError; } });
Object.defineProperty(exports, "ValidationError", { enumerable: true, get: function () { return errors_1.ValidationError; } });
//# sourceMappingURL=index.js.map
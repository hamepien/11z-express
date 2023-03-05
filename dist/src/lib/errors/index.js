"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenError = exports.ValidationError = exports.ConflictError = exports.NotFoundError = exports.UnauthorizedError = void 0;
const tslib_1 = require("tslib");
const custom_error_1 = require("./custom.error");
/** Export custom error. */
tslib_1.__exportStar(require("./custom.error"), exports);
/**
 * No docs description yet.
 */
class UnauthorizedError extends custom_error_1.CustomError {
    constructor(message) {
        super(message);
        this.message = message;
        this.status = 401;
        this.error = 'UNAUTHORIZED';
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}
exports.UnauthorizedError = UnauthorizedError;
/**
 * No docs description yet.
 */
class NotFoundError extends custom_error_1.CustomError {
    constructor(message) {
        super(message);
        this.message = message;
        this.status = 404;
        this.error = 'NOT_FOUND';
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
exports.NotFoundError = NotFoundError;
/**
 * No docs description yet.
 */
class ConflictError extends custom_error_1.CustomError {
    constructor(message) {
        super(message);
        this.message = message;
        this.status = 409;
        this.error = 'CONFLICT';
        Object.setPrototypeOf(this, ConflictError.prototype);
    }
}
exports.ConflictError = ConflictError;
/**
 * No docs description yet.
 */
class ValidationError extends custom_error_1.CustomError {
    constructor(message) {
        super(message);
        this.message = message;
        this.status = 422;
        this.error = 'UNPROCESSABLE_ENTITY';
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}
exports.ValidationError = ValidationError;
/**
 * No docs description yet.
 */
class ForbiddenError extends custom_error_1.CustomError {
    constructor(message) {
        super(message);
        this.message = message;
        this.status = 403;
        this.error = 'FORBIDDEN';
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
}
exports.ForbiddenError = ForbiddenError;
//# sourceMappingURL=index.js.map
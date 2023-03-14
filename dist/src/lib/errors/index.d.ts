import { CustomError } from './custom.error';
/** Export custom error. */
export * from './custom.error';
/**
 * No docs description yet.
 */
export declare class UnauthorizedError extends CustomError {
    readonly message: string;
    readonly status = 401;
    readonly error = "UNAUTHORIZED";
    constructor(message: string);
}
/**
 * No docs description yet.
 */
export declare class NotFoundError extends CustomError {
    readonly message: string;
    readonly status = 404;
    readonly error = "NOT_FOUND";
    constructor(message: string);
}
/**
 * No docs description yet.
 */
export declare class ConflictError extends CustomError {
    readonly message: string;
    readonly status = 409;
    readonly error = "CONFLICT";
    constructor(message: string);
}
/**
 * No docs description yet.
 */
export declare class UnprocessableError extends CustomError {
    readonly message: string;
    readonly status = 422;
    readonly error = "UNPROCESSABLE_ENTITY";
    constructor(message: string);
}
/**
 * No docs description yet.
 */
export declare class ForbiddenError extends CustomError {
    readonly message: string;
    readonly status = 403;
    readonly error = "FORBIDDEN";
    constructor(message: string);
}

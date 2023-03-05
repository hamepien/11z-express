/**
 * No docs description yet.
 */
export declare abstract class CustomError extends Error {
    readonly message: string;
    abstract readonly status: number;
    abstract readonly error: string;
    constructor(message: string);
}

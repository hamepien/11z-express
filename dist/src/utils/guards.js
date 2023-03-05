"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isServerResponse = exports.isPromise = exports.isReadableStream = void 0;
const stream_1 = require("stream");
const http_1 = require("http");
/**
 * No docs description yet.
 *
 * @param result a result returned from a function.
 * @returns boolean
 */
function isReadableStream(result) {
    return result instanceof stream_1.Readable;
}
exports.isReadableStream = isReadableStream;
/**
 * No docs description yet.
 *
 * @param result a result returned from a function.
 * @returns boolean
 */
function isPromise(result) {
    return result instanceof Promise;
}
exports.isPromise = isPromise;
/**
 * No docs description yet.
 *
 * @param result a result returned from a function.
 * @returns boolean
 */
function isServerResponse(result) {
    return result instanceof http_1.ServerResponse;
}
exports.isServerResponse = isServerResponse;
//# sourceMappingURL=guards.js.map
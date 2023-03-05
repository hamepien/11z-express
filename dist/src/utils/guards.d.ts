/// <reference types="node" />
/// <reference types="node" />
import { Readable } from 'stream';
import { NonSafe } from './types';
import { ServerResponse } from 'http';
/**
 * No docs description yet.
 *
 * @param result a result returned from a function.
 * @returns boolean
 */
export declare function isReadableStream(result: NonSafe): result is Readable;
/**
 * No docs description yet.
 *
 * @param result a result returned from a function.
 * @returns boolean
 */
export declare function isPromise<T = unknown>(result: NonSafe): result is Promise<T>;
/**
 * No docs description yet.
 *
 * @param result a result returned from a function.
 * @returns boolean
 */
export declare function isServerResponse(result: NonSafe): result is ServerResponse;

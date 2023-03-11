"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThrowError = void 0;
/**
 * Throw error based on `subject` and `message` parameters.
 *
 * @param subject error subject.
 * @param message error message.
 * @throws
 */
function ThrowError(subject, message) {
    return Error(`${subject}: ${message}`);
}
exports.ThrowError = ThrowError;
//# sourceMappingURL=throw.error.js.map
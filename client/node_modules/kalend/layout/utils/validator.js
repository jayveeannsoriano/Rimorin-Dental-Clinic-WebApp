"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInput = void 0;
const validateInput = (data) => {
    if (!Array.isArray(data === null || data === void 0 ? void 0 : data.events)) {
        throw Error('Events must be array');
    }
};
exports.validateInput = validateInput;

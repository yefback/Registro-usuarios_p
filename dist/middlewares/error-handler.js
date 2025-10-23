"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_error_1 = __importDefault(require("../utils/app-error"));
const errorHandler = (err, _req, res, _next) => {
    if (err instanceof app_error_1.default) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    console.error(err);
    return res.status(500).json({ message: "Error interno del servidor" });
};
exports.default = errorHandler;
//# sourceMappingURL=error-handler.js.map
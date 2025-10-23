"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_error_1 = __importDefault(require("../utils/app-error"));
const validateUserBody = (req, _res, next) => {
    const { nombre, correo, edad } = req.body;
    if (!nombre || !correo || typeof edad !== "number") {
        throw new app_error_1.default("Datos de usuario inválidos", 400);
    }
    next();
};
exports.default = validateUserBody;
//# sourceMappingURL=validate-user-body.js.map
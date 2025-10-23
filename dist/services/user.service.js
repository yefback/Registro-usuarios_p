"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const app_error_1 = __importDefault(require("../utils/app-error"));
const userRepository = __importStar(require("../repositories/user.repository"));
const getAllUsers = async () => {
    return userRepository.findAll();
};
exports.getAllUsers = getAllUsers;
const getUserById = async (id) => {
    const user = await userRepository.findById(id);
    if (!user) {
        throw new app_error_1.default("Usuario no encontrado", 404);
    }
    return user;
};
exports.getUserById = getUserById;
const createUser = async (nombre, correo, edad) => {
    return userRepository.create(nombre, correo, edad);
};
exports.createUser = createUser;
const updateUser = async (id, nombre, correo, edad) => {
    const user = await userRepository.update(id, nombre, correo, edad);
    if (!user) {
        throw new app_error_1.default("Usuario no encontrado", 404);
    }
    return user;
};
exports.updateUser = updateUser;
const deleteUser = async (id) => {
    const deleted = await userRepository.remove(id);
    if (!deleted) {
        throw new app_error_1.default("Usuario no encontrado", 404);
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.service.js.map
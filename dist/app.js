"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const not_found_1 = __importDefault(require("./middlewares/not-found"));
const error_handler_1 = __importDefault(require("./middlewares/error-handler"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/usuarios", user_routes_1.default);
app.use(not_found_1.default);
app.use(error_handler_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map
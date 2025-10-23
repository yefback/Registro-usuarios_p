"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const env_1 = __importDefault(require("./config/env"));
const { port } = env_1.default;
app_1.default.listen(port, () => {
    console.log(`Servidor Node escuchando en el puerto ${port}`);
});
//# sourceMappingURL=index.js.map
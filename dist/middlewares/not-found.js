"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFoundHandler = (_req, res) => {
    res.status(404).json({ message: "Recurso no encontrado" });
};
exports.default = notFoundHandler;
//# sourceMappingURL=not-found.js.map
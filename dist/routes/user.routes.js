"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const validate_user_body_1 = __importDefault(require("../middlewares/validate-user-body"));
const router = (0, express_1.Router)();
router.get("/", user_controller_1.getUsers);
router.get("/:id", user_controller_1.getUser);
router.post("/", validate_user_body_1.default, user_controller_1.createUser);
router.put("/:id", validate_user_body_1.default, user_controller_1.updateUser);
router.delete("/:id", user_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map
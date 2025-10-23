import { Router } from "express";

import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller";
import validateUserBody from "../middlewares/validate-user-body";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", validateUserBody, createUser);
router.put("/:id", validateUserBody, updateUser);
router.delete("/:id", deleteUser);

export default router;

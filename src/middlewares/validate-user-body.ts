import { NextFunction, Request, Response } from "express";

import AppError from "../utils/app-error";

const validateUserBody = (req: Request, _res: Response, next: NextFunction) => {
  const { nombre, correo, edad } = req.body;

  if (!nombre || !correo || typeof edad !== "number") {
    throw new AppError("Datos de usuario inválidos", 400);
  }

  next();
};

export default validateUserBody;

import { NextFunction, Request, Response } from "express";

import AppError from "../utils/app-error";

const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  console.error(err);
  return res.status(500).json({ message: "Error interno del servidor" });
};

export default errorHandler;

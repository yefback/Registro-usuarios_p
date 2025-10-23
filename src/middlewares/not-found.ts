import { Request, Response } from "express";

const notFoundHandler = (_req: Request, res: Response) => {
  res.status(404).json({ message: "Recurso no encontrado" });
};

export default notFoundHandler;

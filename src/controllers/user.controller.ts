import { Request, Response } from "express";

import asyncHandler from "../utils/async-handler";
import * as userService from "../services/user.service";

export const getUsers = asyncHandler(async (_req, res: Response) => {
  const usuarios = await userService.getAllUsers();
  res.json(usuarios);
});

export const getUser = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const usuario = await userService.getUserById(id);
  res.json(usuario);
});

export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const { nombre, correo, edad } = req.body;
  const usuario = await userService.createUser(nombre, correo, edad);
  res.status(201).json(usuario);
});

export const updateUser = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { nombre, correo, edad } = req.body;
  const usuario = await userService.updateUser(id, nombre, correo, edad);
  res.json(usuario);
});

export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await userService.deleteUser(id);
  res.status(204).send();
});

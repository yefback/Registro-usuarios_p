import AppError from "../utils/app-error";
import * as userRepository from "../repositories/user.repository";
import { UserDTO } from "../dtos/user.dto";

export const getAllUsers = async (): Promise<UserDTO[]> => {
  return userRepository.findAll();
};

export const getUserById = async (id: number): Promise<UserDTO> => {
  const user = await userRepository.findById(id);
  if (!user) {
    throw new AppError("Usuario no encontrado", 404);
  }
  return user;
};

export const createUser = async (
  nombre: string,
  correo: string,
  edad: number,
): Promise<UserDTO> => {
  return userRepository.create(nombre, correo, edad);
};

export const updateUser = async (
  id: number,
  nombre: string,
  correo: string,
  edad: number,
): Promise<UserDTO> => {
  const user = await userRepository.update(id, nombre, correo, edad);
  if (!user) {
    throw new AppError("Usuario no encontrado", 404);
  }
  return user;
};

export const deleteUser = async (id: number): Promise<void> => {
  const deleted = await userRepository.remove(id);
  if (!deleted) {
    throw new AppError("Usuario no encontrado", 404);
  }
};

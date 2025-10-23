import { QueryResult } from "pg";

import pool from "../db/pool";
import { UserDTO } from "../dtos/user.dto";

const mapRow = (row: QueryResult["rows"][number]): UserDTO => ({
  id: row.id,
  nombre: row.nombre,
  correo: row.correo,
  edad: row.edad,
  createdAt: row.created_at,
});

export const findAll = async (): Promise<UserDTO[]> => {
  const result = await pool.query("SELECT id, nombre, correo, edad, created_at FROM usuarios ORDER BY id ASC");
  return result.rows.map(mapRow);
};

export const findById = async (id: number): Promise<UserDTO | null> => {
  const result = await pool.query(
    "SELECT id, nombre, correo, edad, created_at FROM usuarios WHERE id = $1",
    [id],
  );
  if (result.rowCount === 0) {
    return null;
  }
  return mapRow(result.rows[0]);
};

export const create = async (
  nombre: string,
  correo: string,
  edad: number,
): Promise<UserDTO> => {
  const result = await pool.query(
    `INSERT INTO usuarios (nombre, correo, edad)
     VALUES ($1, $2, $3)
     RETURNING id, nombre, correo, edad, created_at`,
    [nombre, correo, edad],
  );
  return mapRow(result.rows[0]);
};

export const update = async (
  id: number,
  nombre: string,
  correo: string,
  edad: number,
): Promise<UserDTO | null> => {
  const result = await pool.query(
    `UPDATE usuarios
     SET nombre = $1,
         correo = $2,
         edad = $3,
         updated_at = NOW()
     WHERE id = $4
     RETURNING id, nombre, correo, edad, created_at`,
    [nombre, correo, edad, id],
  );
  if (result.rowCount === 0) {
    return null;
  }
  return mapRow(result.rows[0]);
};

export const remove = async (id: number): Promise<boolean> => {
  const result = await pool.query("DELETE FROM usuarios WHERE id = $1", [id]);
  return result.rowCount > 0;
};

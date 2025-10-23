"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.findById = exports.findAll = void 0;
const pool_1 = __importDefault(require("../db/pool"));
const mapRow = (row) => ({
    id: row.id,
    nombre: row.nombre,
    correo: row.correo,
    edad: row.edad,
    createdAt: row.created_at,
});
const findAll = async () => {
    const result = await pool_1.default.query("SELECT id, nombre, correo, edad, created_at FROM usuarios ORDER BY id ASC");
    return result.rows.map(mapRow);
};
exports.findAll = findAll;
const findById = async (id) => {
    const result = await pool_1.default.query("SELECT id, nombre, correo, edad, created_at FROM usuarios WHERE id = $1", [id]);
    if (result.rowCount === 0) {
        return null;
    }
    return mapRow(result.rows[0]);
};
exports.findById = findById;
const create = async (nombre, correo, edad) => {
    const result = await pool_1.default.query(`INSERT INTO usuarios (nombre, correo, edad)
     VALUES ($1, $2, $3)
     RETURNING id, nombre, correo, edad, created_at`, [nombre, correo, edad]);
    return mapRow(result.rows[0]);
};
exports.create = create;
const update = async (id, nombre, correo, edad) => {
    const result = await pool_1.default.query(`UPDATE usuarios
     SET nombre = $1,
         correo = $2,
         edad = $3,
         updated_at = NOW()
     WHERE id = $4
     RETURNING id, nombre, correo, edad, created_at`, [nombre, correo, edad, id]);
    if (result.rowCount === 0) {
        return null;
    }
    return mapRow(result.rows[0]);
};
exports.update = update;
const remove = async (id) => {
    const result = await pool_1.default.query("DELETE FROM usuarios WHERE id = $1", [id]);
    return (result.rowCount ?? 0) > 0;
};
exports.remove = remove;
//# sourceMappingURL=user.repository.js.map
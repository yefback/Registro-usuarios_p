"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const env_1 = __importDefault(require("../config/env"));
const pool = new pg_1.Pool({
    host: env_1.default.db.host,
    port: env_1.default.db.port,
    database: env_1.default.db.database,
    user: env_1.default.db.user,
    password: env_1.default.db.password,
});
exports.default = pool;
//# sourceMappingURL=pool.js.map
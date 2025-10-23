import dotenv from "dotenv";

dotenv.config();

// Función para parsear DATABASE_URL de Render
function parseDatabaseUrl(url: string | undefined) {
  if (!url) return null;
  
  try {
    const dbUrl = new URL(url);
    return {
      host: dbUrl.hostname,
      port: Number(dbUrl.port) || 5432,
      database: dbUrl.pathname.slice(1), // Remueve el '/' inicial
      user: dbUrl.username,
      password: dbUrl.password,
    };
  } catch {
    return null;
  }
}

// Priorizar DATABASE_URL (Render) sobre variables individuales
const dbFromUrl = parseDatabaseUrl(process.env.DATABASE_URL);

const env = {
  port: Number(process.env.PORT ?? 3000),
  db: dbFromUrl ?? {
    host: process.env.DB_HOST ?? "localhost",
    port: Number(process.env.DB_PORT ?? 5432),
    database: process.env.DB_NAME ?? "postgres",
    user: process.env.DB_USER ?? "postgres",
    password: process.env.DB_PASSWORD ?? "postgres",
  },
};

export default env;

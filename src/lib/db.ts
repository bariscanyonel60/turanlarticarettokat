import mysql from "mysql2/promise";

const globalForDb = globalThis as unknown as { mysqlPool?: mysql.Pool };

export function getPool() {
  if (!globalForDb.mysqlPool) {
    const host = process.env.MYSQL_HOST;
    const user = process.env.MYSQL_USER;
    const password = process.env.MYSQL_PASSWORD;
    const database = process.env.MYSQL_DATABASE;
    if (!host || !user || !password || !database) {
      throw new Error("MySQL ayarları eksik.");
    }
    globalForDb.mysqlPool = mysql.createPool({
      host,
      port: Number(process.env.MYSQL_PORT || 3306),
      user,
      password,
      database,
      waitForConnections: true,
      connectionLimit: 4,
      connectTimeout: 8000,
      charset: "utf8mb4",
    });
  }
  return globalForDb.mysqlPool;
}

export function databaseErrorMessage(error: unknown) {
  if (typeof error === "object" && error && "sqlMessage" in error) {
    const message = error.sqlMessage;
    if (typeof message === "string" && message.length > 0) {
      return message;
    }
  }
  return "Veritabanına bağlanılamadı.";
}

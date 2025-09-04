import mysql from "mysql2/promise";

let pool;

if (!global._dbPool) {
  global._dbPool = mysql.createPool({
    host: process.env.DB_HOST, // e.g. yamabiko.proxy.rlwy.net
    user: process.env.DB_USER, // e.g. root
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME, // e.g. railway
    port: process.env.DB_PORT || 3306,
    connectionLimit: 5, // keep it low for serverless
  });
}

pool = global._dbPool;

export const db = pool;

import mysql from "mysql2/promise";
import { parse } from "url";

let pool;

if (!global._dbPool) {
  const url = new URL(process.env.DATABASE_URL);
  global._dbPool = mysql.createPool({
    host: url.hostname,
    port: url.port,
    user: url.username,
    password: url.password,
    database: url.pathname.replace("/", ""),
    connectionLimit: 5,
  });
}

pool = global._dbPool;
export const db = pool;

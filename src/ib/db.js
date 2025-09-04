import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: process.env.DB_HOST, // yamabiko.proxy.rlwy.net
  user: process.env.DB_USER, // root
  password: process.env.DB_PASSWORD, // your password
  database: process.env.DB_NAME, // railway
  port: process.env.DB_PORT, // 45373
});

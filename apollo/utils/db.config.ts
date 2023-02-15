import mysql from "promise-mysql";

export const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  charset: process.env.DB_CHARSET,
};

export default mysql.createPool(dbConfig);

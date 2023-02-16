import mysql from "promise-mysql";
import * as dotenv from "dotenv";
dotenv.config();
export const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    charset: process.env.DB_CHARSET,
};
export default mysql.createPool(dbConfig);

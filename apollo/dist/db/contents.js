import { dbConfig } from "./db.config.js";
import mysql from "mysql2/promise";
const pool1 = mysql.createPool({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
export const contents = async () => {
    const [rows] = await pool1.query(`select * from contents`);
    return rows;
};
export const getContentsId = async (id) => {
    const [rows] = await pool1.query(`select * from contents where cId=${id}`);
    return rows;
};

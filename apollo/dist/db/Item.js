import mysql from "mysql2/promise";
import { dbConfig } from "./db.config.js";
const pool1 = mysql.createPool({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
export const item = async () => {
    const [rows] = await pool1.query("select * from shop");
    return rows;
};
export const getItemId = async (id) => {
    const [rows] = await pool1.query(`select * from shop where sId=${id}`);
    return rows;
};
export const viewCount = async (id) => {
    const [rows] = await pool1.query(`update shop set sView = sView + 1 where sId = ${id}`);
    return rows;
};

import poolPromise, { dbConfig } from "../utils/db.config.js";
import mysql from "mysql2/promise";
import statusUtil from "../status/statusUtil.js";

const pool1 = mysql.createPool({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    port: dbConfig.port,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export const shopLocation = async () => {
    const [rows] = await pool1.query(`select * from shop_location`);
    return rows;
};
export const getLatlng = async (id: number) => {
    const [rows] = await pool1.query(`select * from shop_location where id=${id}`);
    return rows;
};
/*export const countLike = async (id: number, like: number) => {
    const [rows] = await pool1.query(
        `update contents set cLike = ${like} where cId = ${id}`
    );
    return rows;
};*/

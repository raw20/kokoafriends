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
export const likeContents = async () => {
    const [rows] = await pool1.query("select * from contentsLike");
    return rows;
};
export const selectedContentsLike = async () => {
    const [rows] = await pool1.query("select * from contentsLike where ");
    return rows;
};
export const clickLiked = async (lId, user_code, cId, like_check) => {
    const [rows] = await pool1.query(`insert into contentsLike(lId,user_code,cId,like_check) values('${lId}','${user_code}','${cId}','${like_check}') on duplicate key
    update lid = '${lId}' , user_code = '${user_code}', cId='${cId}' , like_check = '${like_check}' `);
    return rows;
};

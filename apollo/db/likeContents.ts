import mysql from "mysql2/promise";
import { dbConfig } from "../utils/db.config.js";
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
  const [rows] = await pool1.query(
    "select * from contentsLike order by lId asc"
  );
  return rows;
};
export const selectedContentsLike = async () => {
  const [rows] = await pool1.query("select * from contentsLike where ");
  return rows;
};
export const clickLiked = async (
  lId: number,
  user_code: number,
  cId: number,
  like_check: number
) => {
  const [rows] = await pool1.query(
    `insert into contentsLike(lId, user_code,cId,like_check) values('${lId}','${user_code}','${cId}','${like_check}') on duplicate key
      update like_check = ${like_check}`
  );
  return rows;
};

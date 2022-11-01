import mysql from "mysql2/promise";
import poolPromise, { dbConfig } from "./db.config.js";
import statusUtil from "../status/statusUtil.js";
const pool1 = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const comments = async () => {
  const [rows] = await pool1.query(
    "select * from comment,user_master where comment.user_code = user_master.user_code"
  );
  return rows;
};
export const getContentsComment = async (id: number) => {
  const [rows] = await pool1.query(
    `select * from comment,user_master where comment.user_code = user_master.user_code and comment.cId=${id}`
  );
  return rows;
};
export const postComment = async (
  tId: number,
  cId: number,
  user_code: number,
  comment: string
) => {
  const [rows] = await pool1.query(
    `insert into comment(tId,cId,user_code,comment) values('${tId}','${cId}','${user_code}','${comment}') `
  );
  return rows;
};
export const deleteComment = async (id: number) => {
  const [rows] = await pool1.query(`DELETE FROM comment where tId=${id}`);
  return rows;
};

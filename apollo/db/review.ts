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
export const review = async () => {
  const [rows] = await pool1.query("select * from review");
  return rows;
};
export const getItemReview = async (id: number) => {
  const [rows] = await pool1.query(
    `select * from review,user_master where review.user_code = user_master.user_code and review.sId=${id}`
  );
  return rows;
};
export const postReview = async (
  rId: number,
  sId: number,
  user_code: number,
  rReview: string
) => {
  const [rows] = await pool1.query(
    `insert into review(rId,sId,user_code,rReview) values('${rId}','${sId}','${user_code}','${rReview}') `
  );
  return rows;
};
export const deleteReview = async (id: number) => {
  const [rows] = await pool1.query(`DELETE FROM review where rId=${id}`);
  return rows;
};


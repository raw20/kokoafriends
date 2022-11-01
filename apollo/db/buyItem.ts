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
export const allUserBuyItemList = async () => {
  const [rows] = await pool1.query("select * from buyItem");
  return rows;
};
export const selectUserBuyItemList = async (user_code: number) => {
  const [rows] = await pool1.query(
    `select * from buyItem,shop where buyItem.sId = shop.sId and buyItem.user_code=${user_code}`
  );
  return rows;
};
export const buyItem = async (
  bId: number,
  sId: number,
  user_code: number,
  bCount: number
) => {
  const [rows] = await pool1.query(
    `insert into buyItem(bId,sId,user_code,bCount) values('${bId}','${sId}','${user_code}','${bCount}') `
  );
  return rows;
};

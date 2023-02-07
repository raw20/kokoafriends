import { pool1 } from "../utils/mysqlPool.js";

export const user = async () => {
  const [rows] = await pool1.query("select * from user_master");
  return rows;
};

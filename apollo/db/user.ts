import { pool1 } from "../utils/mysqlPool.js";

export const users = async () => {
  const [rows] = await pool1.query("select * from user_master");
  return rows;
};

export const userById = async (id: string) => {
  const [rows] = await pool1.query(
    `select * from user_master where kakao_id=${id}`
  );
  return rows;
};

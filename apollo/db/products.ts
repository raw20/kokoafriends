import { pool1 } from "../utils/mysqlPool.js";

export const products = async () => {
  const [rows] = await pool1.query("select * from kakao_products");
  return rows;
};
export const productById = async (id: number) => {
  const [rows] = await pool1.query(
    `select * from kakao_products where products_id=${id}`
  );
  return rows;
};
export const countView = async (id: number) => {
  const [rows] = await pool1.query(
    `update kakao_products set products_view = products_view + 1 where products_id = ${id}`
  );
  return rows;
};

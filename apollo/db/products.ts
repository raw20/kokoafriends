import { pool1 } from "../utils/mysqlPool.js";

export const products = async () => {
  const [rows] = await pool1.query("select * from products");
  return rows;
};
export const productById = async (id: number) => {
  const [rows] = await pool1.query(
    `select * from products where products_id=${id}`
  );
  return rows;
};
export const countView = async (id: number) => {
  const [rows] = await pool1.query(
    `update products set products_view = products_view + 1 where products_id = ${id}`
  );
  return rows;
};

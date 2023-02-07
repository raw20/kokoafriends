import { pool1 } from "../utils/mysqlPool.js";

export const products = async () => {
  const [rows] = await pool1.query("select * from products");
  return rows;
};
export const productById = async (id: number) => {
  const [rows] = await pool1.query(`select * from products where sId=${id}`);
  return rows;
};
export const countView = async (id: number) => {
  const [rows] = await pool1.query(
    `update products set sView = sView + 1 where sId = ${id}`
  );
  return rows;
};

import { pool1 } from "../utils/mysqlPool.js";

export const reviews = async () => {
  const [rows] = await pool1.query("select * from review");
  return rows;
};
export const reviewById = async (id: number) => {
  const [rows] = await pool1.query(
    `select * from review,user_master where review.kakao_id = user_master.kakao_id and review.products_id=${id}`
  );
  return rows;
};
export const postReview = async (
  review_id: number,
  products_id: number,
  kakao_id: number,
  review_text: string,
  review_rating: number,
  review_date: Date
) => {
  const [rows] = await pool1.query(
    `insert into review(review_id,products_id,kakao_id,review_text,review_rating,review_date) values('${review_id}','${products_id}','${kakao_id}','${review_text}','${review_rating}','${review_date}') `
  );
  return rows;
};
export const deleteReview = async (id: number) => {
  const [rows] = await pool1.query(`DELETE FROM review where review_id=${id}`);
  return rows;
};

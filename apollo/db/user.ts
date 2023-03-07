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

export const addUser = async (
  user_code: number,
  kakao_id: string,
  kakao_profile_img: string,
  kakao_nickname: string,
  kakao_email: string,
  user_role: string,
  create_time: Date
) => {
  const [rows] = await pool1.query(
    `insert into user_master(
      user_code,
      kakao_id,
      kakao_profile_img,
      kakao_nickname,
      kakao_email,
      user_role,
      create_time) values("${user_code}","${kakao_id}","${kakao_profile_img}","${kakao_nickname}","${kakao_email}","${user_role}","${create_time}")`
  );
  return rows;
};

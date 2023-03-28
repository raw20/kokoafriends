import { pool1 } from "../utils/mysqlPool.js";
export const users = async () => {
    const [rows] = await pool1.query("select * from user_master");
    return rows;
};
export const userById = async (id) => {
    const [rows] = await pool1.query(`select * from user_master where kakao_id=${id}`);
    return rows;
};
export const addUser = async (user_code, kakao_id, kakao_profile_img, kakao_nickname, kakao_email, user_role, create_time) => {
    const [rows] = await pool1.query(`insert into user_master(
      user_code,
      kakao_id,
      kakao_profile_img,
      kakao_nickname,
      kakao_email,
      user_role,
      create_time) values("${user_code}","${kakao_id}","${kakao_profile_img}","${kakao_nickname}","${kakao_email}","${user_role}","${create_time}")`);
    return rows;
};

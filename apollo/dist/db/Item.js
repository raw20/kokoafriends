/*import mysql from "mysql2/promise";
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

export const item = async () => {
  const [rows] = await pool1.query("select * from shop");
  return rows;
}; export function getItemId(id: number) {
  const selectedItem = item.filter((ele) => ele.sId === id);
  return selectedItem[0];
} */
export const item = [
    {
        id: 1,
        name: "디지털 무빙시계_라이언&춘식이",
        title: "시간 변화에 따라\n라이언 춘식이가 짠",
        contents: "귀여운 아트웍이 매력적인\n디지털 무빙 시계를 소개합니다",
        price: 39000,
        like: 40,
        view: 52,
        half_title: "시간 변화에 따라\n라이언 춘식이가 짠!",
        category: "디지털&문구",
        slideImg: [
            "digital_clock_lion-choonsik_01.jpg",
            "digital_clock_lion-choonsik_02.jpg",
            "digital_clock_lion-choonsik_03.jpg",
        ],
        mainTopImg: [
            "digital_clock_lion-choonsik_04.jpg",
            "digital_clock_lion-choonsik_05.jpg",
        ],
        mainMidImg: [
            "digital_clock_lion-choonsik_06.jpg",
            "digital_clock_lion-choonsik_07.jpg",
        ],
        mainBottomImg: [
            "digital_clock_lion-choonsik_08.jpg",
            "digital_clock_lion-choonsik_09.jpg",
        ],
    },
];
export function getItemId(id) {
    const selectedItem = item.filter((ele) => ele.sId === id);
    return selectedItem[0];
}
// const tableName = "shop"
/*
export const item =
    {
    selectAll: async (sId, sName, sPrice, sLike, sView, sCategory, sImage) => {
      const query = `SELECT * FROM ${tableName}`;
      const result = await pool.query(query, [sId, sName, sPrice, sLike, sView, sCategory, sImage]);

      return result ? statusUtil.success(result) : statusUtil.false();
    },
    insert: async (sId, sName, sPrice, sLike, sView, sCategory, sImage) => {
      const query = `INSERT INTO ${tableName} (sId, sName, sPrice, sLike, sView, sCategory, sImage) VALUES (?, ?, ?, ?, ?, ?, ?)`;
      const result = await pool.query(query, [sId, sName, sPrice, sLike, sView, sCategory, sImage]);

      return result ? statusUtil.success(result) : statusUtil.false();
    },
  };
*/

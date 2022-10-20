import mysql from "mysql2/promise";
import { dbConfig } from "./db.config.js";
/*
const pool = {
  query: async (query, value) => {
    let result;
    const pool = await poolPromise;
    try {
      var connection = await pool.getConnection();
      result = value
          ? await connection.query(query, value)
          : (await connection.query(query)) || null;
    } catch (err) {
      console.log(err);
      connection.rollback();
    } finally {
      // @ts-ignore
      connection.release();
      return result;
    }
  },
};
*/
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
const pool1 = mysql.createPool({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
export const getDbShop = async () => {
    const [rows] = await pool1.query("select * from shop");
    return rows;
};
// https://blog.naver.com/PostView.naver?blogId=kangminser88&logNo=221484949494&parentCategoryNo=&categoryNo=22&viewDate=&isShowPopularPosts=false&from=postView

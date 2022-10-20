import poolPromise, {dbConfig} from "./db.config.js";
import mysql from "mysql2/promise";
import statusUtil from "./statusUtil.js";

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

const pool1 = mysql.createPool({
  host : dbConfig.host,
  user : dbConfig.user,
  password : dbConfig.password,
  database : dbConfig.database,
  waitForConnections : true,
  connectionLimit : 10,
  queueLimit : 0
}) ;

const tableName = "contents"

export const content =
    {
      selectAll: async (cId, cWriter, cProfileImg, cImage, cTitle, cContent, cDate, cLike) => {
        const query = `SELECT * FROM ${tableName}`;
        const result = await pool.query(query, [cId, cWriter, cProfileImg, cImage, cTitle, cContent, cDate, cLike]);

        return result ? statusUtil.success(result) : statusUtil.false();
      },
      insert: async (cId, cWriter, cProfileImg,cImage, cTitle, cContent, cDate, cLike) => {
        const query = `INSERT INTO ${tableName} (cId, cWriter, cProfileImg, cImage, cTitle, cContent, cDate, cLike) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        const result = await pool.query(query, [cId, cWriter, cProfileImg, cImage, cTitle, cContent, cDate, cLike]);

        return result ? statusUtil.success(result) : statusUtil.false();
      },
    };

export const getContent = async () => {
  const [rows] = await pool1.query("select * from contents");
  return rows;
}
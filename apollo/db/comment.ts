import mysql from "mysql2/promise";
import poolPromise, {dbConfig} from "./db.config.js";
import statusUtil from "./statusUtil";

const pool1 = mysql.createPool({
  host : dbConfig.host,
  user : dbConfig.user,
  password : dbConfig.password,
  database : dbConfig.database,
  waitForConnections : true,
  connectionLimit : 10,
  queueLimit : 0
}) ;


export const comments = async () => {
  const [rows] = await pool1.query("select * from comment");
  return rows;
}

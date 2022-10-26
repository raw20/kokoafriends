export let comments = [
    {
        id: 1,
        contents_id: 1,
        kakaoId: "1234567895",
        comment: "귀여워요~~",
        date: "2022.10.01",
    },
    {
        id: 2,
        contents_id: 1,
        kakaoId: "1234567893",
        comment: "내가 더 귀여워요",
        date: "2022.10.01",
    },
    {
        id: 3,
        contents_id: 2,
        kakaoId: "1234567894",
        comment: "당장 사야겠다!!",
        date: "2022.09.21",
    },
    {
        id: 4,
        contents_id: 2,
        kakaoId: "1234567893",
        comment: "이건 귀엽네",
        date: "2022.09.21",
    },
    {
        id: 5,
        contents_id: 2,
        kakaoId: "1234567896",
        comment: "갖고싶은 아이템이네요~~",
        date: "2022.09.22",
    },
    {
        id: 6,
        contents_id: 3,
        kakaoId: "1234567892",
        comment: "사야겠다",
        date: "2022.09.14",
    },
    {
        id: 7,
        contents_id: 3,
        kakaoId: "1234567890",
        comment: "정말 귀여운 옷이네요",
        date: "2022.09.14",
    },
    {
        id: 8,
        contents_id: 3,
        kakaoId: "1234567891",
        comment: "갖고싶은 아이템이네요~~",
        date: "2022.09.18",
    },
    {
        id: 9,
        contents_id: 3,
        kakaoId: "1234567893",
        comment: "내가 더 찰떡인데",
        date: "2022.09.21",
    },
];
export function deleteId(id) {
    const deletedComment = comments.filter((comment) => comment.id !== id);
    if (comments.length !== deletedComment.length) {
        comments = deletedComment;
    }
}
/* import poolPromise, {dbConfig} from "./db.config.js";
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
} */

import mysql from "promise-mysql";
export const dbConfig = {
    host: "database-1.cd6uosjs1jca.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "12345678",
    database: "chauk",
    charset: "utf8mb4",
};
export default mysql.createPool(dbConfig);

import mysql from "promise-mysql";
export const dbConfig = {
    host: "shop.ctwrry2uqbnz.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "12345678",
    database: "chauk",
    charset: 'utf8mb4'
};
export default mysql.createPool(dbConfig);

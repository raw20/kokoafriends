import mysql from "promise-mysql";
export const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: process.env.utf8mb4,
};
export default mysql.createPool(dbConfig);

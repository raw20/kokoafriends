import { pool1 } from "../utils/mysqlPool";
export const allUserBuyItemList = async () => {
    const [rows] = await pool1.query("select * from buyItem");
    return rows;
};
export const selectUserBuyItemList = async (user_code) => {
    const [rows] = await pool1.query(`select * from buyItem,shop where buyItem.sId = shop.sId and buyItem.user_code=${user_code}`);
    return rows;
};
export const buyItem = async (bId, sId, user_code, bCount) => {
    const [rows] = await pool1.query(`insert into buyItem(bId,sId,user_code,bCount) values('${bId}','${sId}','${user_code}','${bCount}') on duplicate key
    update bCount = ${bCount + bCount}`);
    return rows;
};

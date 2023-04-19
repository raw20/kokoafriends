import axios from "axios";
import { payRedirectURLVar } from "../store/order";
import { PAY_TID } from "../constant/storageKey";

export async function getKakaoPayReady(
  name: string,
  quantity: number,
  total: number
) {
  await axios
    .post(
      `https://kapi.kakao.com/v1/payment/ready`,
      {},
      {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_ADMIN_KEY}`,
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        params: {
          cid: "TC0ONETIME",
          partner_order_id: "partner_order_id",
          partner_user_id: "partner_user_id",
          item_name: name,
          quantity: quantity,
          total_amount: total,
          tax_free_amount: 0,
          approval_url: `${process.env.REACT_APP_CLINET_BASE_URL}`,
          cancel_url: `${process.env.REACT_APP_CLINET_BASE_URL}`,
          fail_url: `${process.env.REACT_APP_CLINET_BASE_URL}`,
        },
      }
    )
    .then((res) => {
      payRedirectURLVar(res.data.next_redirect_pc_url);
      localStorage.setItem(PAY_TID, res.data.tid);
    })
    .catch(function (error: any) {
      console.log(error);
    });
}

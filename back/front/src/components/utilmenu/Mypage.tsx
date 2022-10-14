import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../auth/OAuth";

/* interface UserData {
  userCode: number;
  kakaoId: number;
  kakaoProfileImg: string;
  kakaoNickname: string;
  kakaoEmail: string;
  userRole: string;
  createTime: number;
}
 */
function Mypage() {
  const token: string = window.localStorage.getItem("token") as string;
  const [name, setName] = useState<string>("");
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${BASE_URL}/me`, {
          headers: {
            Authorization: token,
          },
        });
        console.log(res.data);
        setName(res.data.kakaoNickname);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return <div>{name}</div>;
}

export default Mypage;

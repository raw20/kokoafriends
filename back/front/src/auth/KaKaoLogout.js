
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ADMIN_KEY } from "./OAuth";

function KaKaoLogout() {
  const navigate = useNavigate();

  const formUrlEncoded = (x) =>
      Object.keys(x).reduce(
          (p, c) => p + `&${c}=${encodeURIComponent(x[c])}`,
          ""
      );

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(
            "https://kapi.kakao.com/v1/user/logout",
            formUrlEncoded({
              target_id: "2444520737",
              target_id_type: "user_id",
            }),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `KakaoAK ${ADMIN_KEY}`,
              },
            }
        );
        console.log("res : ", res.data);
        window.localStorage.removeItem("token");
        alert("로그아웃되었습니다.");
        navigate("/");
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return <div></div>;
}

export default KaKaoLogout;
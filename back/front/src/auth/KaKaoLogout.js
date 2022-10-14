import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function KaKaoLogout() {
  const formUrlEncoded = (x) =>
    Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`);
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();
  console.log("로그아웃 페이지");
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(
          `https://kapi.kakao.com/v1/user/logout`,
          formUrlEncoded({
            target_id: "1657351101",
            target_id_type: "user_id",
          }),
          {
            headers: {
              "content-Type": "application/x-www-form-urlencoded",
              Authorization: token,
            },
          }
        );
        console.log("res : ", res);
        alert("로그아웃이 완료되었습니다.");
        navigate("/");
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return <div></div>;
}

export default KaKaoLogout;

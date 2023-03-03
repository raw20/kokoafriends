import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const { Kakao } = window;

function KaKaoLogoutRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(`https://kapi.kakao.com/v1/user/logout`, {
        headers: {
          Authorization: `Bearer ${Kakao.Auth.getAccessToken()}`,
        },
      })
      .then((res) => {
        console.log("res", res);

        if (!Kakao.isInitialized()) {
          Kakao.init(process.env.REACT_APP_JS_SDK_KEY); // 초기화
        }
        Kakao.isInitialized();

        if (!Kakao.Auth.getAccessToken()) {
          // 토큰이 있는지 확인 (토큰 가져와보기)
          console.log("Not logged in.");
          return;
        }

        Kakao.Auth.logout(function () {
          // 카카오 로그아웃
          navigate("/");
        });
      });
  });
  return <></>;
}

export default KaKaoLogoutRedirect;

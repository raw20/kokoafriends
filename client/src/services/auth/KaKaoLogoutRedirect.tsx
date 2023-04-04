import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { KAKAO_ID } from "../../constant/storageKey";
const { Kakao } = window;

function KaKaoLogoutRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init(process.env.REACT_APP_JS_SDK_KEY); // 초기화
    }
    Kakao.isInitialized();

    Kakao.Auth.logout()
      .then(function () {
        navigate("/");
        localStorage.removeItem(KAKAO_ID);
        console.log(Kakao.Auth.getAccessToken()); // null
      })
      .catch(function () {
        console.log("Not logged in.");
      });
  });
  return <></>;
}

export default KaKaoLogoutRedirect;

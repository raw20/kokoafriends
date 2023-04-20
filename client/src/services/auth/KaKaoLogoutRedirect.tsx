import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { USER_CODE } from "../../constant/storageKey";
const { Kakao } = window;

function KaKaoLogoutRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    function KakaoLogoutAccess() {
      if (!Kakao.isInitialized()) {
        Kakao.init(process.env.REACT_APP_JS_SDK_KEY); // 초기화
      }
      Kakao.isInitialized();

      Kakao.Auth.logout()
        .then(function () {
          navigate("/");
          localStorage.removeItem(USER_CODE);
          console.log(Kakao.Auth.getAccessToken()); // null
        })
        .catch(function () {
          console.log("Not logged in.");
        });
    }
    KakaoLogoutAccess();
  });
  return <></>;
}

export default KaKaoLogoutRedirect;

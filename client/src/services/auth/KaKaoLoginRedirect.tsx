import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserResponseData } from "../../types/User.interface";
import useLogin from "./hooks/useLogin";
import { USER_CODE } from "../../constant/storageKey";
const { Kakao } = window;

function KaKaoLoginRedirect() {
  const navigate = useNavigate();
  const { addUser } = useLogin();

  useEffect(() => {
    async function kakaoLoginAccess() {
      let code = new URL(document.location.toString()).searchParams.get("code");
      let grant_type = "authorization_code";
      await axios
        .post(
          `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${process.env.REACT_APP_JS_SDK_KEY}&redirect_uri=${process.env.REACT_APP_CLINET_BASE_URL}/oauth/callback/kakao&code=${code}`,
          {
            headers: {
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        )
        .then((res) => {
          Kakao.Auth.setAccessToken(res.data.access_token);
          Kakao.API.request({
            url: "/v2/user/me",
          })
            .then(function (response: UserResponseData) {
              navigate("/");
              localStorage.setItem(USER_CODE, String(response.id));
              addUser({
                variables: {
                  kakaoId: String(response.id),
                  kakaoProfileImg: response.properties.profile_image,
                  kakaoNickname: response.properties.nickname,
                  kakaoEmail: response.kakao_account.email,
                  userRole: "USER_ROLE",
                  createTime: response.connected_at,
                },
              });
            })
            .catch(function (error: any) {
              console.log(error);
            });
        });
    }
    if (Kakao.Auth.getAccessToken()) {
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
    kakaoLoginAccess();
  }, [addUser, navigate]);
  return <></>;
}

export default KaKaoLoginRedirect;

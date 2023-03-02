import axios from "axios";
import { useEffect } from "react";
import api from "../../axios";
const { Kakao } = window;

function KaKaoLoginRedirect(initialState = {}) {
  useEffect(() => {
    let code = new URL(document.location.toString()).searchParams.get("code");
    let grant_type = "authorization_code";
    let client_id = process.env.REACT_APP_JS_SDK_KEY;
    axios.post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${process.env.REACT_APP_FRONTEND_BASE_URL}/oauth/callback/kakao&code=${code}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
    ).then((res) => {
      console.log("res",res);
      // Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'Auth')
      // JavaScript SDK 초기화 함수를 호출하지않아서 발생한 문제
      Kakao.Auth.setAccessToken(res.data.access_token);
      Kakao.API.request({
        url: "/v2/user/me",
      })
          .then(function (response: any){
          console.log(response);
      })
          .catch(function (error: any){
            console.log(error);
          });
      api.post("/api/user/account/login/kakao",{
        accessToken: res.data.access_token,
      })
          .then((res) => {
          console.log(res);
        })
    })
  })
  return <></>;
}

export default KaKaoLoginRedirect;

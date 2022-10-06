import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../auth/OAuth";
import { useNavigate } from "react-router-dom";

const KaKaoRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const pathname = window.location.search;
      const code = pathname.split("=")[1];
      console.log("code : ",code)
      try {
        const res = await axios.get(
          // `${BASE_URL}/oauth/callback/kakao/token?code=${code}`
          `http://localhost:8080/api/oauth/callback/kakao/token?code=${code}`,
            {
              "Content-type" : "application/x-www-form-urlencoded;charset=utf-8",
            }
        );
        console.log("res : ",res)
        //인가코드를 백엔드로 보내고 헤더에서 엑세스 토큰 받아옴
        const token = res.headers.authorization;
        console.log(res.headers.authorization);
        console.log("token : ",token)
        window.localStorage.setItem("token", token);
        //로컬스토리지에 저장
        navigate("/");
      } catch (e) {
        console.error(e);
        // navigate('/');
      }
    })();
  }, []);

  //코드를 백엔드로 보내서 토큰 받아와야 됨~~!!
  return <></>;
};

export default KaKaoRedirect;

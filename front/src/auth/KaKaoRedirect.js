import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../auth/OAuth";
import { useNavigate } from "react-router-dom";

const KaKaoRedirect = () => {
  const navigate = useNavigate();
  const pathname = window.location.search;
  const code = pathname.split("=")[1];

  useEffect(() => {
    (async () => {
      try {
        const res = await axios
          .get(`${BASE_URL}/oauth/callback/kakao/token?code=${code}`)
          .then((response) => {
            console.log("확인", response);
            const token = response.headers.authorization;
            window.localStorage.setItem("token", token);
            console.log("토큰", token);
          });
        navigate("/");
        console.log(res);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return <></>;
};

export default KaKaoRedirect;

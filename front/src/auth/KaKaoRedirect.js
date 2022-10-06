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
        const res = await axios.post(
          `${BASE_URL}/oauth/callback/kakao/token?code=${code}`
        );

        console.log("res : ", res);
        const token = window.Kakao?.Auth?.setAccessToken(res.data.access_token);
        window.localStorage.setItem("token", token);
        alert(`토큰 ${token}`);
        navigate("/");
      } catch (e) {
        console.error(e);
      }
    })();
  }, [navigate]);

  return <></>;
};

export default KaKaoRedirect;

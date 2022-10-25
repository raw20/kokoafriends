import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../auth/OAuth";
import { useNavigate } from "react-router-dom";

const KaKaoRedirect = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/oauth/callback/kakao/token?code=${code}`
        );
        const token = res.headers.authorization;
        window.localStorage.setItem("token", token);
        console.log("res1 : ", res);
        navigate("/");
      } catch (e) {
        console.error(e.response);
      }
    })();
  }, []);

  return <div></div>;
};

export default KaKaoRedirect;

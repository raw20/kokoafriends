import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/oAuth";

function KaKaoLoginRedirect(initialState = {}) {
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
      } catch (error: any) {
        console.error(error);
      }
    })();
  }, []);
  return <></>;
}

export default KaKaoLoginRedirect;

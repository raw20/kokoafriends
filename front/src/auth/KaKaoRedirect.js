import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CLIENT_ID, REDIRECT_URI } from "./OAuth";

function KaKaoRedirect() {
  const navigate = useNavigate();
  const location = useLocation();
  const code = new URL(window.location.href).searchParams.get("code");

  const saveToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: `grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("token", data.access_token);
        } else {
          navigate("/");
        }
      });
  };

  useEffect(() => {
    if (!location.search) return;
    saveToken();
  });

  return <></>;
}
export default KaKaoRedirect;

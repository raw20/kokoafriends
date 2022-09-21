import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home";

function KaKaoRedirect() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`api/code=${code}`);
        const token = res.headers.authorization;
        window.localStorage.setItem("token", token);
        navigate("/");
      } catch (e) {
        console.log("login error : ", e);
        navigate("/");
      }
    })();
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default KaKaoRedirect;

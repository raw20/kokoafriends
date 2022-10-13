import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../auth/OAuth";
import { useNavigate } from "react-router-dom";

function KaKaoLogout() {
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(`${BASE_URL}/v1/user/logout`);
        console.log("res : ", res);
        navigate("/");
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return <div></div>;
}

export default KaKaoLogout;

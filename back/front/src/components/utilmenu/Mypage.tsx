import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../auth/OAuth";
import { useNavigate } from "react-router-dom";

function Mypage() {
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(`${BASE_URL}/me`, {
          headers: {
            Authorization: token,
          },
        });
        console.log("get Token : ", res);
        navigate("/mypage");
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return <div>마이페이지</div>;
}

export default Mypage;

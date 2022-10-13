import {useEffect, useState} from "react";
import axios from "axios";
import { BASE_URL } from "../../auth/OAuth";
import { useNavigate } from "react-router-dom";

function Mypage() {
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  console.log("token", token)
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${BASE_URL}/me`,{
          headers: {
            "Authorization" : token,
          },
        });
        console.log("res : ", res.data);
        navigate("/mypage");
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return <div>마이페이지</div>;
}


export default Mypage;

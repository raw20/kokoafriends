import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CLIENT_ID, REDIRECT_URI } from "./OAuth";
import axios from "axios";

/*function KaKaoRedirect() {
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

/!*    useEffect(() => {
    fetch(`http://localhost:3000/oauth/callback/kakao?code=${code}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => localStorage.setItem("token", data.token));
    navigate("/");
  }, []); *!/
  return <></>;
}
export default KaKaoRedirect;*/


function KaKaoRedirect() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code')
  console.log("code",code)
  useEffect(()=>{
    (async ()=>{
      try{
        const res = await axios.get(`http://172.16.7.205:3000/oauth/callback/kakao?code=${code}`)
        console.log("res",res)
        const token = res.headers.authorization
        console.log("token",token)
        window.localStorage.setItem("token",token)
        navigate("/")
      }catch (e){
        console.log(e)
    }
  })()},[])

  useEffect(() => {
    fetch(`api/code=${code}`,{
      method:'GET',
    }).then(res => res.json()).then(
       data=> localStorage.setItem("token",data.token)
    )

  },[]);

  return <></>;
}



export default KaKaoRedirect;


import axios from "axios";

function user(code: string) {
  return function (dispatch: string, getState: string) {
    axios({
      method: "GET",
      url: `http://3.36.133.109:3000/oauth/callback/kakao?code=${code}`,
    })
        .then((res) => {
          const ACCESS_TOKEN = res.data.accessToken;
          localStorage.setItem("token", ACCESS_TOKEN);
        })
        .catch((err) => {
          console.log("error", err);
          alert("로그인에 실패하였습니다.");
        });
  };
}
const actionCreators = { user };
export { actionCreators };
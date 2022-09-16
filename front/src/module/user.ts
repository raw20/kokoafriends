import axios from "axios";

function user(code: string) {
  return function (dispatch: string, getState: string) {
    axios({
      method: "GET",
      url: ``,
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

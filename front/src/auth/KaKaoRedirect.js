import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { actionCreators as userActions } from "../module/user";
import Home from "../pages/Home";

function KaKaoRedirect() {
  const dispatch = useDispatch();
  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    async function fetchData() {
      const response = await dispatch(userActions.user(code));
    }
    fetchData();
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default KaKaoRedirect;

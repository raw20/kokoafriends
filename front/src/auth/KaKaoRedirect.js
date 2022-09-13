import Home from "../pages/Home";

function KaKaoRedirect() {
  let code = new URL(window.location.href).searchParams.get("code");
  console.log("cc", code);
  return (
    <>
      <Home />
    </>
  );
}

export default KaKaoRedirect;

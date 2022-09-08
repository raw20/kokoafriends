function KaKaoRedirect() {
  let code = new URL(window.location.href).searchParams.get("code");
  console.log("cc", code);
  return (
    <>
      <h1>성공</h1>
    </>
  );
}

export default KaKaoRedirect;

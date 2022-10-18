import Login from "../../pages/Login";

function Cart() {
  const token: string = window.localStorage.getItem("token") as string;

  return <>{!token ? <Login /> : <p>장바구니</p>}</>;
}

export default Cart;

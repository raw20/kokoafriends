import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Main/Home/Home";
import Contents from "../pages/Main/Contents/Contents";
import BestProducts from "../pages/Main/Best/BestProducts";
import Search from "../pages/Sub/Search/Search";
import Product from "../pages/Main/Best/Product";
import Mypage from "../pages/Sub/Mypage/Mypage";
import Cart from "../pages/Sub/Cart/Cart";
import ContentsDetail from "../pages/Main/Contents/Content";
import KaKaoLoginRedirect from "../services/auth/KaKaoLoginRedirect";
import KaKaoLogoutRedirect from "../services/auth/KaKaoLogoutRedirect";
import BuyCheckout from "../pages/Sub/BuyCheckout/BuyCheckout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* main menu */}
          <Route path="/best" element={<BestProducts />} />
          <Route path="/contents" element={<Contents />} />
          <Route path="/contentsDetail/:id" element={<ContentsDetail />} />
          <Route path="/product/:id" element={<Product />} />
          {/* util menu */}
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
          {/* login logout*/}
          <Route
            path="/oauth/callback/kakao"
            element={<KaKaoLoginRedirect />}
          />
          <Route
            path="/oauth/callback/kakao/logout"
            element={<KaKaoLogoutRedirect />}
          />
          {/* Order Page */}
          <Route path="/checkout" element={<BuyCheckout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

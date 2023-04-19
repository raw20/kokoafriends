import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const Home = lazy(() => import("../pages/Main/Home/Home"));
const Contents = lazy(() => import("../pages/Main/Contents/Contents"));
const BestProducts = lazy(() => import("../pages/Main/Best/BestProducts"));
const Search = lazy(() => import("../pages/Sub/Search/Search"));
const Product = lazy(() => import("../pages/Main/Best/Product"));
const Mypage = lazy(() => import("../pages/Sub/Mypage/Mypage"));
const Cart = lazy(() => import("../pages/Sub/Cart/Cart"));
const BuyCheckout = lazy(() => import("../pages/Sub/BuyCheckout/BuyCheckout"));

const KaKaoLoginRedirect = lazy(
  () => import("../services/auth/KaKaoLoginRedirect")
);
const KaKaoLogoutRedirect = lazy(
  () => import("../services/auth/KaKaoLogoutRedirect")
);

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* main menu */}
            <Route path="/best" element={<BestProducts />} />
            <Route path="/contents" element={<Contents />} />
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
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;

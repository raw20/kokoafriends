import { BrowserRouter, Route, Routes } from "react-router-dom";
import KaKaoRedirect from "../auth/KaKaoRedirect";
import Home from "../pages/mainMenu/home/Home";
import Contents from "../pages/mainMenu/contents/Contents";
import BestProductItem from "../pages/mainMenu/best/BestProductItem";
import Search from "../pages/subMenu/search/Search";
import ItemDetail from "../components/itemDetail/ItemDetail";
import Mypage from "../pages/subMenu/myPage/Mypage";
import Cart from "../pages/subMenu/cart/Cart";
import KaKaoLogout from "../auth/KaKaoLogout";
import ContentsDetail from "../components/contentsDetail/ContentsDetail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* main menu */}
          <Route path="/best" element={<BestProductItem />} />
          <Route path="/contents" element={<Contents />} />
          <Route path="/contentsDetail/:id" element={<ContentsDetail />} />
          <Route path="/bestProduct/:id" element={<ItemDetail />} />
          {/* util menu */}
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
        </Route>
        {/* login */}
        <Route path="/oauth/callback/kakao" element={<KaKaoRedirect />} />
        <Route path="/oauth/callback/kakao/logout" element={<KaKaoLogout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

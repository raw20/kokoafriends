import { BrowserRouter, Route, Routes } from "react-router-dom";
import KaKaoRedirect from "../auth/KaKaoRedirect";
import Home from "../pages/Home";
import Contents from "../components/gnb/Contents";
import BestProductItem from "../components/gnb/BestProductItem";
import Search from "../components/utilmenu/Search";
import ItemDetail from "../pages/ItemDetail";
import Mypage from "../components/utilmenu/Mypage";
import Cart from "../components/utilmenu/Cart";
import KaKaoLogout from "../auth/KaKaoLogout";
import ContentsDetail from "../pages/ContentsDetail";

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

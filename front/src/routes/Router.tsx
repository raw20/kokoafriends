import { BrowserRouter, Route, Routes } from "react-router-dom";
import KaKaoRedirect from "../auth/KaKaoRedirect";
import Home from "../pages/Home";
import NewProductItem from "../components/gnb/Contents";
import BestProductItem from "../components/gnb/BestProductItem";
import Search from "../components/utilmenu/Search";
import ItemDetail from "../pages/ItemDetail";
import Mypage from "../components/utilmenu/Mypage";
import Cart from "../components/utilmenu/Cart";
import Favorite from "../components/utilmenu/Favorite";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* main menu */}
          <Route path="/best" element={<BestProductItem />} />
          <Route path="/contents" element={<NewProductItem />} />
          <Route path="/bestProduct/:id" element={<ItemDetail />} />
          {/* util menu */}
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/search" element={<Search />} />
        </Route>
        {/* login */}
        <Route path="/oauth/callback/kakao" element={<KaKaoRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

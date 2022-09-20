import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import KaKaoRedirect from "../auth/KaKaoRedirect";
import Home from "../pages/Home";
import NewProductItem from "../components/gnb/Contents";
import BestProductItem from "../components/gnb/BestProductItem";
import Search from "../components/utilmenu/Search";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/best" element={<BestProductItem />} />
          <Route path="/contents" element={<NewProductItem />} />
          <Route path="/search" element={<Search />} />
        </Route>
        <Route path="/oauth/callback/kakao" element={<KaKaoRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

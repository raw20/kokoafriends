import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import KaKaoRedirect from "../auth/KaKaoRedirect";
import Home from "../pages/Home";
import NewProductItem from "../components/gnb/NewProductItem";
import BestProductItem from "../components/gnb/BestProductItem";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/new" element={<NewProductItem />} />
          <Route path="/best" element={<BestProductItem />} />
        </Route>
        <Route path="/oauth/callback/kakao" element={<KaKaoRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

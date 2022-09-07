import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import KaKaoRedirect from "../auth/KaKaoRedirect";
import Home from "../pages/Home";
import Login from "../pages/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/callback/kakao" element={<KaKaoRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

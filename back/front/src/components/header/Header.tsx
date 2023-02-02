import { useState } from "react";
import {
  MdLogin,
  MdLogout,
  MdManageAccounts,
  MdOutlineSearch,
  MdShoppingCart,
} from "react-icons/md";
import { KAKAO_AUTH_URL, KAKAO_LOGOUT_URL } from "../../auth/OAuth";
import { Link, useMatch } from "react-router-dom";
import {
  GlobalNavBar,
  GlobalNavBarWrapper,
  HeaderContainer,
  HeaderInner,
  HeaderStart,
  Logo,
  HeaderCenter,
  HeaderEnd,
  SideNavBar,
  TabMenu,
  TabWrapper,
  SearchBarWrapper,
} from "./Header.style";
import SearchBar from "./SearchBar";

function Header() {
  const homeMatch = useMatch("/");
  const contentsMatch = useMatch("/contents");
  const bestMatch = useMatch("/best");
  const token: string = window.localStorage.getItem("token") as string;
  const [open, setOpen] = useState<boolean>(false);
  function openHandler() {
    setOpen(!open);
  }
  return (
    <HeaderContainer open={open}>
      <HeaderInner>
        <HeaderStart>
          <Link to="/">
            <Logo src="https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20230118/164901/logo_kakaofriends.png" />
          </Link>
        </HeaderStart>
        <HeaderCenter>
          <SearchBarWrapper>
            <SearchBar />
          </SearchBarWrapper>
          <GlobalNavBarWrapper>
            <Link to="/">
              <GlobalNavBar isActive={homeMatch !== null}>홈</GlobalNavBar>
            </Link>
            <Link to="/best">
              <GlobalNavBar isActive={bestMatch !== null}>베스트 </GlobalNavBar>
            </Link>
            <Link to="/contents">
              <GlobalNavBar isActive={contentsMatch !== null}>
                콘텐츠
              </GlobalNavBar>
            </Link>
          </GlobalNavBarWrapper>
        </HeaderCenter>
        <HeaderEnd open={open}>
          <SideNavBar>
            {!token ? (
              <a href={KAKAO_AUTH_URL}>
                <MdLogin className="util-icon" title="로그인" />
              </a>
            ) : (
              <a href={KAKAO_LOGOUT_URL}>
                <MdLogout className="util-icon" title="로그아웃" />
              </a>
            )}
            <Link to="/mypage">
              <MdManageAccounts className="util-icon" title="마이페이지" />
            </Link>
            <Link to="/cart">
              <MdShoppingCart className="util-icon" title="장바구니" />
            </Link>
            <Link to="/search">
              <MdOutlineSearch className="util-icon" title="검색" />
            </Link>
          </SideNavBar>
        </HeaderEnd>
        <TabWrapper>
          <TabMenu onClick={() => openHandler()} />
        </TabWrapper>
      </HeaderInner>
    </HeaderContainer>
  );
}

export default Header;

import Avatar from "@mui/material/Avatar";
import { Link, useMatch } from "react-router-dom";
import { LOGIN_REDIRECT_URI } from "../../utils/oAuth";
import HeaderAvatar from "../Avatar/HeaderAvatar";
import {
  GlobalNavBar,
  GlobalNavBarWrapper,
  HeaderContainer,
  HeaderInner,
  HeaderStart,
  LogoWrapper,
  LogoImage,
  HeaderCenter,
  HeaderEnd,
  SideNavBar,
  SearchBarWrapper,
  NavInner,
} from "./Header.style";
import SearchBar from "./SearchBar";
const { Kakao } = window;

function Header() {
  const homeMatch = useMatch("/");
  const contentsMatch = useMatch("/contents");
  const bestMatch = useMatch("/best");
  const token: string = window.localStorage.getItem("token") as string;

  const kakaoLoginHandler = () => {
    Kakao.Auth.authorize({
      redirectUri: `${LOGIN_REDIRECT_URI}`,
    });
  };
  return (
    <HeaderContainer>
      <HeaderInner>
        <HeaderStart>
          <Link to="/">
            <LogoWrapper>
              <LogoImage src="https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20230118/164901/logo_kakaofriends.png" />
            </LogoWrapper>
          </Link>
        </HeaderStart>
        <HeaderCenter>
          <SearchBarWrapper>
            <SearchBar />
          </SearchBarWrapper>
        </HeaderCenter>
        <HeaderEnd>
          <SideNavBar>
            {token ? (
              <HeaderAvatar />
            ) : (
              <Avatar alt="로그인" onClick={kakaoLoginHandler} />
            )}
          </SideNavBar>
        </HeaderEnd>
      </HeaderInner>
      <NavInner>
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
      </NavInner>
    </HeaderContainer>
  );
}

export default Header;

import styled from "styled-components";
import { useState } from "react";
import {
  MdMenu,
  MdLogin,
  MdLogout,
  MdManageAccounts,
  MdOutlineSearch,
  MdShoppingCart,
} from "react-icons/md";
import { KAKAO_AUTH_URL, KAKAO_LOGOUT_URL } from "../../auth/OAuth";
import { Link, useMatch } from "react-router-dom";

const Wrap = styled.div<{ open: boolean }>`
  width: 100%;
  height: 80px;
  border-bottom: 2px solid ${(props) => props.theme.accentColor};
  @media ${(props) => props.theme.mobile} {
    position: relative;
    transition: all 0.5s;
    height: ${(props) => (props.open ? "100px" : "80px")};
  }
`;
const Inner = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Left = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Middle = styled(Left)``;
const Right = styled(Left)<{ open: boolean }>`
  @media ${(props) => props.theme.mobile} {
    width: 40%;
    height: 30px;
    display: ${(props) => (props.open ? "flex" : "none")};
    position: absolute;
    top: 60%;
    right: 8%;
    margin: 0 auto;
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 10px;
  }
`;
const Logo = styled.div`
  width: 180px;
  height: 31px;
  line-height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.accentColor};
  color: #fff;
  border-radius: 10px;
  text-align: center;
  @media ${(props) => props.theme.mobile} {
    width: 90px;
    height: 25px;
    font-size: 0.5rem;
  }
`;
const GnbUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const GnbLi = styled.li<{ isActive: boolean }>`
  width: 100px;
  height: 80px;
  display: flex;
  margin-right: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  font-size: ${(props) => (props.isActive ? "1.5rem" : "1.4rem")};
  font-weight: ${(props) => (props.isActive ? "bold" : "500")};
  border-bottom: ${(props) =>
    props.isActive ? "4px solid" + props.theme.accentColor : "none"};

  @media ${(props) => props.theme.mobile} {
    width: 55px;
    font-size: 1rem;
    margin-right: 1rem;
    border-bottom: none;
  }
`;
const UtilUl = styled.div`
  width: 100%;
  font-size: 2.2rem;
  display: flex;
  justify-content: center;
  @media ${(props) => props.theme.tablet} {
    font-size: 1.5rem;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 1.5rem;
  }
  .util-icon {
    margin-right: 1rem;
    &:hover {
      transform: scale(120%);
    }
    @media ${(props) => props.theme.mobile} {
      margin: 0 0.3rem;
    }
  }
`;
const Tab = styled.div`
  width: 100%;
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const TabMenu = styled(MdMenu)`
  font-size: 2.2rem;
  cursor: pointer;
`;
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
    <Wrap open={open}>
      <Inner>
        <Left>
          <Link to="/">
            <Logo>KOKOA FRIENDS</Logo>
          </Link>
        </Left>
        <Middle>
          <GnbUl>
            <Link to="/">
              <GnbLi isActive={homeMatch !== null}>홈</GnbLi>
            </Link>
            <Link to="/best">
              <GnbLi isActive={bestMatch !== null}>베스트 </GnbLi>
            </Link>
            <Link to="/contents">
              <GnbLi isActive={contentsMatch !== null}>콘텐츠 </GnbLi>
            </Link>
          </GnbUl>
        </Middle>
        <Right open={open}>
          <UtilUl>
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
          </UtilUl>
        </Right>
        <Tab>
          <TabMenu onClick={() => openHandler()} />
        </Tab>
      </Inner>
    </Wrap>
  );
}

export default Header;

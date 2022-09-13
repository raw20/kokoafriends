import styled from "styled-components";
import { MdLogin } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { Link, Outlet, useLocation, useMatch } from "react-router-dom";
import { KAKAO_AUTH_URL } from "../auth/OAuth";

const Header = styled.div`
  width: 100%;
  height: 50px;
  padding: 0.8rem 0.5rem;
  border-bottom: 2px solid ${(props) => props.theme.accentColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Logo = styled.div`
  width: 180px;
  height: 31px;
  line-height: 31px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.accentColor};
  color: #fff;
  border-radius: 10px;
  text-align: center;
`;
const GnbUl = styled.ul`
  width: 20%;
  display: flex;
`;
const GnbLi = styled.li<{ isActive: boolean }>`
  width: 100%;
  height: 72.6px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  font-size: ${(props) => (props.isActive ? "1.2rem" : "1.1rem")};
  font-weight: ${(props) => (props.isActive ? "bold" : "600")};
  border-bottom: ${(props) =>
    props.isActive ? "4px solid" + props.theme.accentColor : "none"};
`;
const UtilUl = styled.ul`
  width: 17%;
  display: flex;
  font-size: 2.2rem;
  justify-content: space-between;
`;

function Home() {
  const state = useLocation();
  const homeMatch = useMatch("/");
  const newMatch = useMatch("/new");
  const bestMatch = useMatch("/best");
  return (
    <>
      <Header>
        <Link to="/">
          <Logo>KOKOA FRIENDS</Logo>
        </Link>
        <GnbUl>
          <GnbLi isActive={homeMatch !== null}>
            <Link to="/">홈</Link>
          </GnbLi>
          <GnbLi isActive={newMatch !== null}>
            <Link to="/new">신상품</Link>
          </GnbLi>
          <GnbLi isActive={bestMatch !== null}>
            <Link to="/best">베스트</Link>
          </GnbLi>
        </GnbUl>
        <UtilUl>
          <a href={KAKAO_AUTH_URL}>
            <MdLogin title="로그인" />
          </a>
          <MdManageAccounts title="마이페이지" />
          <MdShoppingCart title="장바구니" />
          <MdOutlineFavoriteBorder title="찜한상품" />
          <MdOutlineSearch title="검색" />
        </UtilUl>
      </Header>
      {state.pathname === "/" ? <h2>홈</h2> : <Outlet />}
    </>
  );
}

export default Home;

import styled from "styled-components";
import { MdLogin } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

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
const GnbLi = styled(NavLink)`
  width: 100%;
  height: 72.6px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.1rem;
  &.selected {
    border-bottom: 4px solid #ccc;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
const UtilUl = styled.ul`
  width: 17%;
  display: flex;
  font-size: 2.2rem;
  justify-content: space-between;
`;

function Home() {
  const state = useLocation();
  return (
    <>
      <Header>
        <Link to="/">
          <Logo>KOKOA FRIENDS</Logo>
        </Link>
        <GnbUl>
          <GnbLi
            to="/"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            홈
          </GnbLi>
          <GnbLi
            to="/new"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            신상품
          </GnbLi>
          <GnbLi
            to="/best"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            베스트
          </GnbLi>
        </GnbUl>
        <UtilUl>
          <Link to="/login">
            <MdLogin title="로그인" />
          </Link>
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

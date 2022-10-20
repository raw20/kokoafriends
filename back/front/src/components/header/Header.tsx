import styled from "styled-components";
import {
  MdLogin,
  MdLogout,
  MdManageAccounts,
  MdOutlineSearch,
  MdShoppingCart,
} from "react-icons/md";
import { KAKAO_AUTH_URL, KAKAO_LOGOUT_URL } from "../../auth/OAuth";
import { Link, useMatch } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 2px solid ${(props) => props.theme.accentColor};
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
const Right = styled(Left)``;
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
`;
const UtilUl = styled.div`
  width: 100%;
  display: flex;
  font-size: 2.2rem;
  justify-content: center;
  .util-icon {
    margin-right: 1rem;
    &:hover {
      transform: scale(120%);
    }
  }
`;

function Header() {
  const homeMatch = useMatch("/");
  const contentsMatch = useMatch("/contents");
  const bestMatch = useMatch("/best");
  const token = window.localStorage.getItem("token");
  return (
    <Wrap>
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
        <Right>
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
      </Inner>
    </Wrap>
  );
}

export default Header;

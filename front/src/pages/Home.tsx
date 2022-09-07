import React from "react";
import styled from "styled-components";
import { MdLogin } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = styled.div`
  width: 100%;
  height: 5vh;
  padding: 0.8rem 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.accentColor};
  display: flex;
  justify-content: space-between;
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
`;
const GnbUl = styled.ul`
  width: 20%;
  display: flex;
`;
const GnbLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: aliceblue;
`;
const UtilUl = styled.ul`
  width: 15%;
  display: flex;
  font-size: 2.2rem;
  justify-content: space-between;
`;

function Home() {
  return (
    <>
      <Header>
        <Logo>KOKOA FRIENDS</Logo>
        <GnbUl>
          <GnbLi>홈</GnbLi>
          <GnbLi>최고심춘식이</GnbLi>
          <GnbLi>베스트</GnbLi>
        </GnbUl>
        <UtilUl>
          <Link to="/login">
            <MdLogin />
          </Link>
          <MdManageAccounts />
          <MdShoppingCart />
          <MdOutlineFavoriteBorder />
          <MdOutlineSearch />
        </UtilUl>
      </Header>
    </>
  );
}

export default Home;

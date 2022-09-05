import React from "react";
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 5vh;
  padding: 0.8rem 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.accentColor};
  display: flex;
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
  width: 100%;
  display: flex;
`;
const GnbLi = styled.li``;
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
      </Header>
    </>
  );
}

export default Home;

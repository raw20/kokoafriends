import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 250px;
  background-color: ${(props) => props.theme.boxColor};
  color: ${(props) => props.theme.secondColor};
  font-family: "Noto Sans KR", sans-serif;
  box-sizing: border-box;
`;
const Inner = styled.div`
  width: 30%;
  height: auto;
  margin: 0 auto;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;
const FooterDiv = styled.div`
  width: 100%;
  padding-top: 2rem;
  display: flex;
  @media ${(props) => props.theme.mobile} {
    width: 80%;
    margin: 0 auto;
  }
`;
const Text = styled.p`
  width: 200px;
  font-size: 1rem;
  font-weight: 300;
  margin-right: 0.5rem;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.5rem;
  }
`;
function Footer() {
  return (
    <Wrap>
      <Inner>
        <FooterDiv>
          <Text>Kokoa</Text>
        </FooterDiv>
        <FooterDiv>
          <Text>포로젝트 명</Text>
          <Text>코코아 프렌즈샵</Text>
        </FooterDiv>
        <FooterDiv>
          <Text>조원</Text>
          <Text>정찬욱 박민규</Text>
        </FooterDiv>
        <FooterDiv>
          <Text>깃 주소</Text>
          <Text>https://github.com/raw20/kokoafriends</Text>
        </FooterDiv>
      </Inner>
    </Wrap>
  );
}

export default Footer;

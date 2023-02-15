import styled from "styled-components";
import { Link } from "react-router-dom";

export const BannerContainer = styled.div`
  width: 70%;
  height: auto;
  margin: 0 auto;
  @media ${(props) => props.theme.tablet} {
    width: 70%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 95%;
    margin: 0 auto;
  }
`;
export const BannerImageBox = styled(Link)`
  width: 100%;
  height: 20%;
  position: relative;
`;
export const BannerImage = styled.img`
  width: 100%;
  height: 75vh;
  margin-bottom: 1rem;
  position: relative;
`;
export const BannerTextBox = styled.div`
  width: 100%;
  height: auto;
  padding: 5.1rem 1.3rem;
  letter-spacing: 0.1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  font-family: "Noto Sans KR", sans-serif;
  @media ${(props) => props.theme.mobile} {
    padding: 0;
    margin: 0 0 5rem 0;
  }
`;
export const BannerTitle = styled.h1`
  width: 100%;
  height: auto;
  line-height: auto;
  font-size: 2.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.bgColor};
  @media ${(props) => props.theme.mobile} {
    font-size: 1.2rem;
  }
`;
export const BannerContents = styled.p`
  width: 100%;
  height: auto;
  line-height: auto;
  font-size: 1.3rem;
  color: ${(props) => props.theme.bgColor};
  font-weight: 600;
  margin-top: 15px;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.8rem;
    font-weight: 300;
  }
`;

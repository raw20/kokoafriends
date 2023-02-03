import styled from "styled-components";

export const CategoryContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  @media ${(props) => props.theme.tablet} {
    width: 70%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;
export const CategoryBox = styled.div`
  width: 100%;
  height: auto;
`;

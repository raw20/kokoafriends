import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: auto;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

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
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const CategoryAvatarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media ${(props) => props.theme.tablet} {
    display: grid;
    grid-template-columns: 100px 100px 100px 100px 100px;
    grid-template-rows: 100px 100px 100px 100px;
  }

  @media ${(props) => props.theme.mobile} {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
  }
`;

export const CategoryAvatarBox = styled.div`
  width: 100%;
  height: auto;
`;

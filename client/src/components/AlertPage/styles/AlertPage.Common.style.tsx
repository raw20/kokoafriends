import styled from "styled-components";

export const AlertPageCaontainer = styled.div`
  width: 100%;
`;
export const AlertPageInner = styled.div`
  width: 50%;
  height: auto;
  margin: 5rem auto;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;
export const AlertPageBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const AlertPageImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 auto;
`;
export const AlertPageText = styled.span`
  width: 100%;
  font-size: 1.1rem;
  line-height: 1.8rem;
  font-weight: 500;
  text-align: center;
  margin-top: 1.3rem;
  color: ${(props) => props.theme.secondTextColor};
`;
export const AlertPageButton = styled.button`
  width: 250px;
  height: 40px;
  margin: 1rem auto;
  border: none;
  color: ${(props) => props.theme.bgColor};
  background-color: ${(props) => props.theme.secondColor};
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

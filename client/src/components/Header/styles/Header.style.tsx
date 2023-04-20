import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 160px;
  border-bottom: 2px solid ${(props) => props.theme.ryanColor};
  @media ${(props) => props.theme.mobile} {
    position: relative;
    transition: all 0.5s;
  }
  @media ${(props) => props.theme.mobile} {
    height: 100%;
    flex-direction: column;
  }
`;
export const HeaderInner = styled.div`
  width: 100%;
  height: 99px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    height: 100%;
    flex-direction: column;
  }
`;
export const NavInner = styled(HeaderInner)`
  height: 60px;
`;
export const HeaderStart = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    margin-top: 1.5rem;
  }
`;
export const HeaderCenter = styled(HeaderStart)``;
export const HeaderEnd = styled(HeaderStart)`
  @media ${(props) => props.theme.mobile} {
  }
`;
export const LogoWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;
export const LogoImage = styled.img`
  width: 40%;
  height: 40%;

  @media ${(props) => props.theme.tablet} {
    width: 70%;
    height: 70%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 60%;
    height: 60%;
  }
`;
export const SearchBarWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`;
export const GlobalNavBarWrapper = styled.ul`
  width: 100%;
  height: 59px;
  display: flex;
  justify-content: center;
`;
export const GlobalNavBar = styled.li<{ isActive: boolean }>`
  width: 80px;
  height: 100%;
  display: flex;
  margin-right: 1.6rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) =>
    props.isActive ? props.theme.ryanColor : props.theme.textColor};
  font-size: ${(props) => (props.isActive ? "1.3rem" : "1.1rem")};
  font-weight: ${(props) => (props.isActive ? "bold" : "500")};
  border-bottom: ${(props) =>
    props.isActive ? "5px solid" + props.theme.ryanColor : "none"};

  @media ${(props) => props.theme.mobile} {
    width: 80px;
    font-size: 1rem;
    margin-right: 1rem;
  }
`;
export const SideNavBar = styled.div`
  width: 100%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  @media ${(props) => props.theme.tablet} {
    font-size: 1.5rem;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 1.5rem;
  }
`;

export const HeaderAvatarContainer = styled.div`
  flex-grow: 0;
  @media ${(props) => props.theme.mobile} {
    position: absolute;
    top: 5%;
    right: 5%;
  }
`;

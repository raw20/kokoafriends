import styled from "styled-components";
import { MdMenu } from "react-icons/md";

export const HeaderContainer = styled.div<{ open: boolean }>`
  width: 100%;
  height: 180px;
  border-bottom: 2px solid ${(props) => props.theme.ryanColor};
  @media ${(props) => props.theme.mobile} {
    position: relative;
    transition: all 0.5s;
    height: ${(props) => (props.open ? "100px" : "80px")};
  }
`;
export const HeaderInner = styled.div`
  width: 100%;
  height: 178px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const HeaderStart = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
export const HeaderCenter = styled(HeaderStart)`
  flex-direction: column;
  height: 178px;
`;
export const HeaderEnd = styled(HeaderStart)<{ open: boolean }>`
  @media ${(props) => props.theme.mobile} {
    width: 40%;
    height: 30px;
    display: ${(props) => (props.open ? "flex" : "none")};
    position: absolute;
    top: 60%;
    right: 8%;
    margin: 0 auto;
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 10px;
  }
`;
export const Logo = styled.img`
  width: 50%;
  height: 50%;
`;
export const SearchBarWrapper = styled.div`
  width: 100%;
  height: 89px;
  display: flex;
  align-items: center;
`;
export const GlobalNavBarWrapper = styled.ul`
  width: 100%;
  height: 89px;
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
    width: 55px;
    font-size: 1rem;
    margin-right: 1rem;
    border-bottom: none;
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
  .util-icon {
    margin-right: 1rem;
    &:hover {
      transform: scale(120%);
    }
    @media ${(props) => props.theme.mobile} {
      margin: 0 0.3rem;
    }
  }
`;
export const TabWrapper = styled.div`
  width: 100%;
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const TabMenu = styled(MdMenu)`
  font-size: 2.2rem;
  cursor: pointer;
`;

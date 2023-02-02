import { MdOutlineSearch } from "react-icons/md";
import styled from "styled-components";

export const SearchBarContainer = styled.span`
  width: 500px;
  height: 40px;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid ${(props) => props.theme.ryanColor};
  border-radius: 20px;
  margin: 0 auto;
  @media ${(props) => props.theme.mobile} {
    width: 80%;
    margin: 0 auto;
  }
`;
export const SearchIcon = styled(MdOutlineSearch)`
  font-size: 1.7rem;
  color: ${(props) => props.theme.ryanColor};
`;

export const SearchInput = styled.input`
  width: 80%;
  height: 40px;
  display: flex;
  background-color: ${(props) => props.theme.bgColor};
  align-items: center;
  border: none;
  :focus {
    outline: none;
  }
  box-sizing: border-box;
`;

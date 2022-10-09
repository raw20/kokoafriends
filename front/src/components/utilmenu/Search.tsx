import styled from "styled-components";
import { MdOutlineSearch } from "react-icons/md";

const Wrap = styled.div`
  width: 100%;
  height: auto;
  padding: 1.2rem 7.5rem;
  box-sizing: border-box;
  justify-content: center;
  box-sizing: border-box;
`;
const Top = styled.div`
  width: 50%;
  height: auto;
  margin: 0 auto;
  padding: 1.2rem 2.5rem;
  border-bottom: 1px solid ${(props) => props.theme.accentColor};
`;
const SearchBar = styled.span`
  width: 100%;
  height: auto;
  background-color: #dfd8d7;
  display: flex;
  justify-content: flex-start;
  border-radius: 15px;
  box-sizing: border-box;
  .util-icon {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1.5rem;
  }
`;
const Input = styled.input`
  width: 70%;
  height: 30px;
  display: flex;
  background-color: #dfd8d7;
  align-items: center;
  border: none;
  :focus {
    outline: none;
  }
`;
function Search() {
  return (
    <Wrap>
      <Top>
        <SearchBar>
          <MdOutlineSearch className="util-icon" title="검색" />
          <Input />
        </SearchBar>
      </Top>
    </Wrap>
  );
}

export default Search;

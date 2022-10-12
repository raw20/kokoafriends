import styled from "styled-components";
import { MdOutlineSearch } from "react-icons/md";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import SearchItemList from "./SearchItemList";
import { SearchItem } from "../../interface/dataType";

const Search_ITEM = gql`
  query {
    item {
      id
      name
      price
      slideImg
      view
      category
    }
  }
`;

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
const Middle = styled(Top)``;

const List = styled.div`
  width: 350px;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem auto 0;
  justify-content: space-around;
`;
const SearchLion = styled.span`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: url("/img/search/lion.jpg") no-repeat center/cover;
  text-indent: -9999px;
  font-size: 0px;
  &:hover {
    background: url("/img/search/lion_on.png") no-repeat center/cover;
  }
`;
const SearchChoonsik = styled(SearchLion)`
  background: url("/img/search/choonsik.jpg") no-repeat center/cover;
  &:hover {
    background: url("/img/search/choonsik_on.png") no-repeat center/cover;
  }
`;
const Text = styled.span`
  margin-top: 1rem;
  width: 150px;
  height: 16px;
  font-size: 1rem;
  text-align: center;
  font-weight: 700;
`;
function Search() {
  const [searchData, setSearchData] = useState<SearchItem[]>([]);
  const [input, setInput] = useState("");
  const { data } = useQuery(Search_ITEM);

  function getSearchData(e: any) {
    e.preventDefault();
    const target = e.target.value;
    const item = data?.item.filter((ele: any) => ele?.name.includes(target));
    setSearchData(item);
    setInput(target);
  }
  console.log("타자 친 결과 : ", searchData);
  return (
    <Wrap>
      <Top>
        <SearchBar>
          <MdOutlineSearch className="util-icon" title="검색" />
          <Input type="text" onChange={(e) => getSearchData(e)} />
        </SearchBar>
      </Top>
      {input !== "" ? (
        <SearchItemList searchData={searchData} />
      ) : (
        <Middle>
          <List>
            <SearchLion>라이언</SearchLion>
            <SearchChoonsik>춘식이</SearchChoonsik>
            <Text>라이언</Text>
            <Text>춘식이</Text>
          </List>
        </Middle>
      )}
    </Wrap>
  );
}

export default Search;

import styled from "styled-components";
import { MdOutlineSearch, MdCached } from "react-icons/md";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import SearchItemList from "./SearchItemList";
import { SearchItem } from "../../interface/dataType";

const SEARCH_ITEM = gql`
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
  height: 30px;
  background-color: #dfd8d7;
  display: flex;
  justify-content: flex-start;
  border-radius: 15px;
  margin: 0 auto;
  .util-icon {
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1.5rem;
  }
`;
const Input = styled.input`
  width: 80%;
  height: 30px;
  display: flex;
  background-color: #dfd8d7;
  align-items: center;
  border: none;
  :focus {
    outline: none;
  }
  box-sizing: border-box;
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
const Bottom = styled(Top)`
  border-bottom: none;
`;
const Title = styled.h1`
  font-size: 1.2rem;
`;
const TextBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 1rem 1.5rem;
`;
const CategoryButton = styled.span`
  width: 120px;
  height: 40px;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 500;
  border: 1px solid ${(props) => props.theme.accentColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.bgColor};
  }
`;
function Search() {
  const [searchData, setSearchData] = useState<SearchItem[]>([]);
  const [input, setInput] = useState("");
  const { data } = useQuery(SEARCH_ITEM);
  const category = ["전체", "생활", "디지털", "문구"];

  function getSearchInput(e: any) {
    e.preventDefault();
    const target = e.target.value;
    const item = data?.item.filter((ele: any) => ele?.name.includes(target));
    setSearchData(item);
    setInput(target);
  }
  function getSeletedImg(e: any) {
    e.preventDefault();
    const target = e.target.innerText;
    const item = data?.item.filter((ele: any) => ele?.name.includes(target));
    setSearchData(item);
    setInput(target);
  }
  function getSeletedCategory(e: any) {
    e.preventDefault();
    const target = e.target.innerText;
    if (target === "전체") {
      const item = data?.item.map((ele: any) => ele);
      setSearchData(item);
    } else {
      const item = data?.item.filter((ele: any) =>
        ele?.category.includes(target)
      );
      setSearchData(item);
    }
    setInput(target);
  }
  function refresh(e: any) {
    e.preventDefault();
    setInput("");
  }
  return (
    <Wrap>
      <Top>
        <SearchBar>
          <MdOutlineSearch className="util-icon" />
          <Input type="text" onChange={(e) => getSearchInput(e)} />
          <MdCached className="util-icon" onClick={(e) => refresh(e)} />
        </SearchBar>
      </Top>
      {input !== "" ? (
        <SearchItemList searchData={searchData} />
      ) : (
        <>
          <Middle>
            <List>
              <SearchLion onClick={(e) => getSeletedImg(e)}>라이언</SearchLion>
              <SearchChoonsik onClick={(e) => getSeletedImg(e)}>
                춘식이
              </SearchChoonsik>
              <Text>라이언</Text>
              <Text>춘식이</Text>
            </List>
          </Middle>
          <Bottom>
            <Title>카테고리</Title>
            <TextBox>
              {category.map((item, index) => (
                <CategoryButton
                  key={index}
                  onClick={(e) => getSeletedCategory(e)}
                >
                  {item}
                </CategoryButton>
              ))}
            </TextBox>
          </Bottom>
        </>
      )}
    </Wrap>
  );
}

export default Search;

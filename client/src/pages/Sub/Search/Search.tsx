import styled from "styled-components";
import { MdOutlineSearch, MdCached } from "react-icons/md";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import SearchItemList from "./SearchItemList";
import Loading from "../../../components/Loading/Loading";

const SEARCH_ITEM = gql`
  query {
    item {
      sId
      sName
      sPrice
      slideImg
      sView
      sCategory
    }
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: auto;
`;
const Inner = styled.div`
  width: 70%;
  height: auto;
  margin: 0 auto;
  box-sizing: border-box;
  justify-content: center;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    margin: 0;
  }
`;
const Top = styled.div`
  width: 50%;
  height: auto;
  margin: 0 auto;
  padding: 1.2rem 2.5rem;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    margin: 1rem 0;
    padding: 0;
  }
`;

const Middle = styled(Top)``;

const List = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  margin: 1rem auto 0;
`;
const CharacterInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SearchLion = styled.span`
  width: 150px;
  height: 350px;
  border-radius: 20px;
  background: url("/img/search/lion.jpg") no-repeat center/cover;
  text-indent: -9999px;
  font-size: 0px;
  &:hover {
    background: url("/img/search/lion_on.png") no-repeat center/cover;
  }
  @media ${(props) => props.theme.mobile} {
    width: 50%;
    height: 50%;
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
  margin: 1rem auto;
  padding: 0;
`;
const Title = styled.h1`
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
`;
const TextBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: start;
  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
  }
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
`;
const CategoryButton = styled.span`
  width: 100px;
  height: 35px;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 500;
  border: 1px solid ${(props) => props.theme.jaygColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.jaygColor};
    color: ${(props) => props.theme.bgColor};
  }
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 80%;
    margin: 1rem auto;
  }
`;
const SearchIcon = styled(MdOutlineSearch)`
  font-size: 1.5rem;
`;
const Refresh = styled(MdCached)`
  font-size: 1.5rem;
  cursor: pointer;
`;

function Search() {
  /* const [searchData, setSearchData] = useState<Item[]>([]);
  const [input, setInput] = useState("");
  const { data, loading } = useQuery<SearchItem>(SEARCH_ITEM);
  const category = ["전체", "생활", "디지털", "문구"];
  function getSearchInput(e: any) {
    e.preventDefault();
    const target = e.target.value;
    const items = data?.item.filter((ele) => ele?.sName.includes(target));
    if (!items) throw new Error("undefined");
    setSearchData(items);
    setInput(target);
  }
  function getSeletedImg(e: any) {
    e.preventDefault();
    const target = e.target.innerText;
    const items = data?.item.filter((ele: any) => ele?.sName.includes(target));
    if (!items) throw new Error("undefined");
    setSearchData(items);
    setInput(target);
  }
  function getSeletedCategory(e: any) {
    e.preventDefault();
    const target = e.target.innerText;
    if (target === "전체") {
      const items = data?.item.map((ele) => ele);
      if (!items) throw new Error("undefined");
      setSearchData(items);
    } else {
      const items = data?.item.filter((ele) => ele?.sCategory.includes(target));
      if (!items) throw new Error("undefined");
      setSearchData(items);
    }
    setInput(target);
  }
  function refresh(e: any) {
    e.preventDefault();
    setInput("");
  } */
  return (
    <Wrap>
      {/*    {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Inner>
            <Top>
              <SearchBar>
                <SearchIcon />
                <Input type="text" onChange={(e) => getSearchInput(e)} />
                <Refresh onClick={(e) => refresh(e)} />
              </SearchBar>
            </Top>
            {input !== "" ? (
              <SearchItemList searchData={searchData} />
            ) : (
              <>
                <Middle>
                  <List>
                    <CharacterInner>
                      <SearchLion onClick={(e) => getSeletedImg(e)}>
                        라이언
                      </SearchLion>
                      <Text>라이언</Text>
                    </CharacterInner>
                    <CharacterInner>
                      <SearchChoonsik onClick={(e) => getSeletedImg(e)}>
                        춘식이
                      </SearchChoonsik>
                      <Text>춘식이</Text>
                    </CharacterInner>
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
          </Inner>
        </>
      )} */}
    </Wrap>
  );
}

export default Search;

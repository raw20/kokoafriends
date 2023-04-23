import { useNavigate } from "react-router-dom";
import {
  SearchBarContainer,
  SearchInput,
  SearchIcon,
} from "./styles/SearchBar.style";
import { searchValueVar } from "../../store/search";
import { useState } from "react";
import { SEARCH_VALUE } from "../../constant/storageKey";

function SearchBar() {
  const [input, setInput] = useState("");
  const navigator = useNavigate();

  function searchClickHandler() {
    localStorage.setItem(SEARCH_VALUE, input);
    searchValueVar(input);
    navigator(
      `/search?search=${localStorage.getItem(SEARCH_VALUE)}&filter=null`
    );
  }

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <SearchIcon onClick={searchClickHandler} />
    </SearchBarContainer>
  );
}

export default SearchBar;

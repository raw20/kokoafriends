import { SearchBarContainer, SearchIcon, SearchInput } from "./SearchBar.style";

function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchInput type="text" />
      <SearchIcon />
    </SearchBarContainer>
  );
}

export default SearchBar;

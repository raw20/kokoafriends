import { ToggleButton } from "@mui/material";
import React from "react";
import { SearchCatogoryFilterGroup } from "./styles/Search.style";
import { ISearchFilterButtonComponent } from "../../../types/IProps.interface";
import { useReactiveVar } from "@apollo/client";
import { searchValueVar } from "../../../store/search";

function SearchFilterButton({
  filterValue,
  setSearchParams,
}: ISearchFilterButtonComponent) {
  const searchValue = useReactiveVar(searchValueVar);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setSearchParams({
      search: searchValue,
      filter: newAlignment,
    });
  };

  return (
    <SearchCatogoryFilterGroup
      value={filterValue}
      exclusive
      onChange={handleChange}
      aria-label="Filter-Category"
    >
      <ToggleButton value="price">낮은가격순</ToggleButton>
      <ToggleButton value="popularity">인기순</ToggleButton>
    </SearchCatogoryFilterGroup>
  );
}

export default SearchFilterButton;

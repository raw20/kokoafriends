import { ToggleButtonGroup } from "@mui/material";
import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
`;

export const SearchBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 350px 350px;
  grid-template-rows: 450px 450px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  @media ${(props) => props.theme.mobile} {
    grid-template-columns: 200px 200px;
    grid-template-rows: 250px 250px;
  }
`;

export const SearchTitleBox = styled.div`
  width: 80%;
  height: auto;
  margin: 1rem auto;
  text-align: center;
`;

export const SearchImageBox = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const SearchContentsBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

export const SearchCatogoryFilterGroup = styled(ToggleButtonGroup)`
  .MuiToggleButton-root.Mui-selected {
    color: ${(props) => props.theme.secondTextColor};
    background-color: ${(props) => props.theme.ryanColor};
  }
`;

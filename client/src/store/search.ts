import { makeVar } from "@apollo/client";
import { SEARCH_VALUE } from "../constant/storageKey";

const localSearchValue = localStorage.getItem(SEARCH_VALUE) || "검색어 입력";
export const searchValueVar = makeVar(localSearchValue);

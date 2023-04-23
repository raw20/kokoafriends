import { makeVar } from "@apollo/client";
import { SEARCH_VALUE } from "../constant/storageKey";

const localSearchValue = localStorage.getItem(SEARCH_VALUE) || "";
export const searchValueVar = makeVar(localSearchValue);

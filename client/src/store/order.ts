import { makeVar } from "@apollo/client";
import {
  ORDER_DIR_MESSAGE,
  USER_ADDRESS1,
  USER_ADDRESS2,
} from "../constant/storageKey";

const localUserMainAddress = localStorage.getItem(USER_ADDRESS1);
const localUserSecondAddress = localStorage.getItem(USER_ADDRESS2);
const localDirectTextFieldVar = localStorage.getItem(ORDER_DIR_MESSAGE);

export const userPhoneNumerVar = makeVar("");
export const userNameVar = makeVar("");
export const userEmailVar = makeVar("");
export const userMainAddressVar = makeVar(localUserMainAddress);
export const userSecondAddressVar = makeVar(localUserSecondAddress);
export const userMessageVar = makeVar("");
export const directTextFieldVar = makeVar(localDirectTextFieldVar);
export const isCheckBuyItemVar = makeVar(false);

import { useReactiveVar } from "@apollo/client";
import {
  userNameVar,
  userPhoneNumerVar,
  userMainAddressVar,
  userSecondAddressVar,
  directTextFieldVar,
  payRedirectURLVar,
  isCheckBuyItemVar,
} from "../../../../store/order";
import { useEffect } from "react";

function useOrderData() {
  const userName = useReactiveVar(userNameVar);
  const userPhoneNumer = useReactiveVar(userPhoneNumerVar);
  const userMainAddress = useReactiveVar(userMainAddressVar);
  const userSecondAddress = useReactiveVar(userSecondAddressVar);
  const directTextField = useReactiveVar(directTextFieldVar);
  const payRedirectURL = useReactiveVar(payRedirectURLVar);
  const isCheckBuyItem = useReactiveVar(isCheckBuyItemVar);

  useEffect(() => {
    if (userName && userPhoneNumer && userMainAddress && userSecondAddress)
      isCheckBuyItemVar(true);
    else isCheckBuyItemVar(false);
  }, [userMainAddress, userName, userPhoneNumer, userSecondAddress]);

  return {
    userName,
    userPhoneNumer,
    userMainAddress,
    userSecondAddress,
    directTextField,
    payRedirectURL,
    isCheckBuyItem,
  };
}

export default useOrderData;

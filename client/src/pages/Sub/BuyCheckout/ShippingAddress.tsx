import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { SHIP_MESSAHE } from "../../../constant/category";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { CURRENT_URL } from "../../../constant/map";
import {
  directTextFieldVar,
  userMainAddressVar,
  userMessageVar,
  userNameVar,
  userPhoneNumerVar,
  userSecondAddressVar,
} from "../../../store/order";
import { USER_ADDRESS1, USER_ADDRESS2 } from "../../../constant/storageKey";
import { number_group, reg } from "../../../constant/reg";
import useOrderData from "../../../services/products/hooks/custom/useOrderData";

function ShippingAddress() {
  const open = useDaumPostcodePopup(CURRENT_URL);
  const {
    userName,
    userPhoneNumer,
    userMainAddress,
    userSecondAddress,
    directTextField,
  } = useOrderData();

  const handleComplete = (data: {
    address: string;
    addressType: string;
    bname: string;
    buildingName: string;
  }) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    userMainAddressVar(fullAddress);
    localStorage.setItem(USER_ADDRESS1, fullAddress);
  };

  function handleClick() {
    open({ onComplete: handleComplete });
  }

  return (
    <Accordion expanded>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="order-customer-accordion"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Typography>
          <LocalShippingIcon />
        </Typography>
        <Typography sx={{ fontFamily: "700", fontSize: "1.3rem" }}>
          배송지
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { mb: 2, width: "100%" },
          }}
        >
          <TextField
            error={userName ? false : true}
            required
            id="order-customer-name"
            label="이름"
            value={userName || ""}
            onChange={(e) => userNameVar(e.target.value)}
          />
          <TextField
            error={userPhoneNumer ? false : true}
            required
            type="number"
            id="order-customer-number"
            label="전화번호 (-제거 해서 입력하세요)"
            onChange={(e) => {
              userPhoneNumerVar(e.target.value.replace(reg, number_group));
            }}
          />
          <TextField
            error={userMainAddress ? false : true}
            disabled
            required
            id="order-customer-main-address"
            label="주소 찾기"
            value={userMainAddress || ""}
            onClick={handleClick}
          />
          <TextField
            error={userSecondAddress ? false : true}
            required
            id="order-customer-second-address"
            label="나머지 주소"
            value={userSecondAddress || ""}
            onChange={(e) => {
              userSecondAddressVar(e.target.value);
              localStorage.setItem(USER_ADDRESS2, e.target.value);
            }}
          />

          <Autocomplete
            id="shipping-message"
            options={SHIP_MESSAHE}
            sx={{ width: "100%" }}
            onChange={(e) => {
              directTextFieldVar(e.currentTarget.innerHTML);
              userMessageVar(e.currentTarget.innerHTML);
            }}
            renderInput={(params) => (
              <TextField {...params} label="배송메세지 선택" disabled />
            )}
          />
          {directTextField === "직접입력" ? (
            <TextField
              required
              type="text"
              id="order-customer-number"
              label="베송메세지 입력"
              onChange={(e) => userMessageVar(e.target.value)}
            />
          ) : null}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default ShippingAddress;

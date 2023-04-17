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

function ShippingAddress() {
  const open = useDaumPostcodePopup(CURRENT_URL);
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

    console.log(fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };
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
          noValidate
          autoComplete="off"
        >
          <TextField required id="order-customer-name" label="이름" />
          <TextField
            required
            type="number"
            id="order-customer-number"
            label="전화번호"
          />
          <TextField
            disabled
            required
            type="number"
            id="order-customer-main-address"
            label="주소찾기"
            onClick={handleClick}
          />
          <TextField
            required
            id="order-customer-second-address"
            label="나머지 주소"
          />

          <Autocomplete
            disablePortal
            id="shipping-message"
            options={SHIP_MESSAHE}
            sx={{ width: "100%" }}
            renderInput={(params) => (
              <TextField {...params} label="배송메세지" />
            )}
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default ShippingAddress;

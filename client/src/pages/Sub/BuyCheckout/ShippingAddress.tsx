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

function ShippingAddress() {
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

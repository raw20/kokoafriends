import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";

function Payment() {
  return (
    <Accordion expanded>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="order-customer-accordion"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Typography>
          <PaymentIcon />
        </Typography>
        <Typography sx={{ fontFamily: "700", fontSize: "1.3rem" }}>
          결제수단
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="kakao-pay"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="kakao-pay"
            control={<Radio />}
            label="카카오페이"
          />
          <FormControlLabel
            value="credit-cart"
            control={<Radio />}
            label="신용카드"
          />
        </RadioGroup>
      </AccordionDetails>
    </Accordion>
  );
}

export default Payment;

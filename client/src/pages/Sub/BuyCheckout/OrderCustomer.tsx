import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import { IOrderCustomerComponent } from "../../../types/IProps.interface";

function OrderCustomer({ user }: IOrderCustomerComponent) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="order-customer-accordion"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Typography>
          <PersonIcon />
        </Typography>
        <Typography sx={{ fontFamily: "700", fontSize: "1.3rem" }}>
          주문고객
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
          <TextField
            required
            id="order-customer-name"
            label="이름"
            defaultValue={user?.me[0].kakao_nickname}
          />
          <TextField
            required
            type="number"
            id="order-customer-number"
            label="전화번호"
          />
          <TextField
            required
            id="order-customer-email"
            label="이메일"
            defaultValue={user?.me[0].kakao_email}
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default OrderCustomer;

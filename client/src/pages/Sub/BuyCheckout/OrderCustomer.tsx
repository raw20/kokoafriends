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
import { userEmailVar, userNameVar } from "../../../store/order";
import { useEffect } from "react";

function OrderCustomer({ user }: IOrderCustomerComponent) {
  useEffect(() => {
    userNameVar(user?.me[0].kakao_nickname);
    userEmailVar(user?.me[0].kakao_email);
  }, [user?.me]);

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
            onChange={(e) => userNameVar(e.target.value)}
          />

          <TextField
            required
            id="order-customer-email"
            label="이메일"
            defaultValue={user?.me[0].kakao_email}
            onChange={(e) => userEmailVar(e.target.value)}
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default OrderCustomer;

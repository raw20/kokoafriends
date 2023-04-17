import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShopIcon from "@mui/icons-material/Shop";
function OrderProducts() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="order-customer-accordion"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Typography>
          <ShopIcon />
        </Typography>
        <Typography sx={{ fontFamily: "700", fontSize: "1.3rem" }}>
          주문 상품
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box component="form"></Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default OrderProducts;

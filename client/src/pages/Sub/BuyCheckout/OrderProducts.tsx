import React from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShopIcon from "@mui/icons-material/Shop";
import { IOrderProductsComponent } from "../../../types/IProps.interface";
import {
  PrimaryContent,
  ProductImage,
  SecondContent,
} from "../../../styles/Common.style";
import getFormatDate from "../../../utils/getFormatDate";

function OrderProducts({ cartData }: IOrderProductsComponent) {
  const today = getFormatDate(new Date());

  return (
    <Accordion defaultExpanded={true}>
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
        <Alert severity="info" icon={<LocalShippingIcon />}>
          <AlertTitle>{today.substring(0, 10)} 도착예정</AlertTitle>
        </Alert>
        <List sx={{ width: "100%", bgcolor: "background.paper", m: 1 }}>
          {cartData.map((element) => (
            <ListItem key={element.cart_id}>
              <ListItemAvatar>
                <ProductImage
                  src={element.products_slideImg}
                  alt={element.products_name}
                />
              </ListItemAvatar>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "1.3rem",
                  fontWeight: "700",
                }}
                primary={element.products_name}
                secondary={
                  <React.Fragment>
                    <SecondContent>{element.products_amount}개</SecondContent>
                    <PrimaryContent>
                      {element.products_price * element.products_amount}원
                    </PrimaryContent>
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}

export default OrderProducts;

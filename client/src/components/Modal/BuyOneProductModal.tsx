import { Box, Grid, Modal, Typography } from "@mui/material";
import { style } from "../../styles/modal";
import { useReactiveVar } from "@apollo/client";
import { isOpenModalVar } from "../../store/modal";
import {
  NumControlFlexEndBox,
  NumberControlButton,
  NumberControlInput,
  ProductPrimaryBuyButton,
} from "../../styles/Common.style";
import { IProductComponent } from "../../types/IProps.interface";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProductItem } from "../../store/oneProductBuy";

function BuyOneProductModal({ data }: { data?: IProductComponent }) {
  const isOpenModal = useReactiveVar(isOpenModalVar);
  const [amount, setAmount] = useState(1);
  const navigator = useNavigate();

  function buyHandler() {
    navigator("/checkout");
    addProductItem(
      Number(data?.product[0].products_id),
      String(data?.product[0].products_name),
      amount,
      String(data?.product[0].products_price),
      String(data?.product[0].products_slideImg)
    );
    isOpenModalVar(false);
  }

  return (
    <Modal
      open={isOpenModal}
      onClose={() => isOpenModalVar(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Typography>수량 선택</Typography>
          </Grid>
          <Grid item xs={5}>
            <NumControlFlexEndBox>
              <NumberControlButton
                onClick={() => {
                  if (amount > 1) {
                    setAmount((value) => (value -= 1));
                  }
                }}
              >
                -
              </NumberControlButton>
              <NumberControlInput type="number" value={amount} disabled />
              <NumberControlButton
                onClick={() => {
                  if (amount > 0) {
                    setAmount((value) => (value += 1));
                  }
                }}
              >
                +
              </NumberControlButton>
            </NumControlFlexEndBox>
          </Grid>
          <Grid item xs={9}>
            <Typography>총 제품 금액</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>
              {Number(data?.product[0].products_price.split(",").join("")) *
                amount}
              원
            </Typography>
          </Grid>
        </Grid>

        <ProductPrimaryBuyButton onClick={buyHandler}>
          바로 구매하기
        </ProductPrimaryBuyButton>
      </Box>
    </Modal>
  );
}

export default BuyOneProductModal;

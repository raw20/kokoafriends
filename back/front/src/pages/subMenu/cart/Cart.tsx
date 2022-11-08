import Login from "../login/Login";
import styled from "styled-components";
import { gql, useMutation, useQuery } from "@apollo/client";
import { CartComponent } from "../../../interface/IDBdataType";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import EmptyCart from "./components/EmptyCart";

const GET_CART = gql`
  query CartList {
    cartList {
      sName
      sId
      sPrice
      bCount
      slideImg
      cartId
    }
    allUserBuyItemList {
      bId
      sId
      user_code
      bCount
    }
    nowUser {
      user_code
    }
    checkCartList {
      sName
      sId
      sPrice
      bCount
      slideImg
      cartId
    }
  }
`;
const UPDATE_COUNT = gql`
  mutation UpdateBCount($cartId: Int, $bCount: Int) {
    updateBCount(cartId: $cartId, bCount: $bCount) {
      cartId
      bCount
    }
  }
`;
const BUY_ITEM = gql`
  mutation BuyItems($bId: Int!, $sId: Int!, $userCode: Int!, $bCount: Int!) {
    buyItems(bId: $bId, sId: $sId, user_code: $userCode, bCount: $bCount) {
      bId
    }
  }
`;
const CHECK_ITEM = gql`
  mutation CheckedAddCart(
    $cartId: Int!
    $sId: Int!
    $sName: String!
    $sPrice: Int!
    $bCount: Int!
    $slideImg: [String]!
  ) {
    checkedAddCart(
      cartId: $cartId
      sId: $sId
      sName: $sName
      sPrice: $sPrice
      bCount: $bCount
      slideImg: $slideImg
    ) {
      cartId
    }
  }
`;
const UNCHECK_ITEM = gql`
  mutation CheckDeleteCart($cartId: Int!) {
    checkDeleteCart(cartId: $cartId) {
      cartId
    }
  }
`;
const DELETE_CART = gql`
  mutation DeleteCartItem($cartId: Int) {
    deleteCartItem(cartId: $cartId) {
      cartId
    }
  }
`;
const Wrap = styled.div`
  width: 100%;
  height: auto;
  font-family: "Noto Sans KR", sans-serif;
`;
const Inner = styled.div`
  width: 800px;
  height: auto;
  margin: 0 auto;
  flex-direction: column;
`;
const Title = styled.h1`
  margin: 1.5rem 0;
  font-size: 2rem;
  text-align: center;
  font-weight: bolder;
`;
const DeliveryFeeBox = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;
const DeliveryFeeTextBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 1rem;
`;

const DeliveryFeeBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: ${(props) => props.theme.secondBorderColor};
  border-radius: 5px;
`;
const DeliveryFeeBarFull = styled.div<{ priceSize: number }>`
  width: ${(props) =>
    props.priceSize >= 30000 ? 100 : props.priceSize / 300}%;
  background-color: ${(props) => props.theme.cartColor};
  color: ${(props) => props.theme.cartColor};
  border-radius: 5px;
  display: flex;
  justify-content: start;
  animation: blink 0.6s ease-in-out infinite alternate;

  @keyframes blink {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
const CheckTable = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
`;
const CheckLeft = styled.div`
  width: 50%;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;
const CheckRight = styled.div`
  width: 50%;
`;
const CheckBox = styled.input`
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.theme.secondBorderColor};
  border-radius: 50%;
  margin-right: 1rem;
`;
const CartListTable = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.secondBorderColor};
  border-top: 5px solid ${(props) => props.theme.secondBorderColor};
  border-bottom: 1px solid ${(props) => props.theme.secondBorderColor};
`;
const CartItemBox = styled.div`
  width: 100%;
  display: flex;
  margin: 0.3rem 0;
  background-color: #fff;
`;
const BoxLeft = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 1rem 3rem 1rem 0;
  border: 1px solid ${(props) => props.theme.borderColor};
`;
const BoxCenter = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
`;
const LargeText = styled.p`
  width: 100%;
  font-size: 1.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 1rem;
`;
const MediumText = styled.p`
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
`;
const SecondMediumText = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
`;
const DeliveryFeeText = styled(SecondMediumText)`
  color: ${(props) => props.theme.cartColor};
`;
const SmallText = styled.p`
  width: 100%;
  font-size: 0.8rem;
  margin-top: 1rem;
  text-align: right;
  color: ${(props) => props.theme.secondColor};
  cursor: pointer;
`;
const BoxRight = styled.div`
  width: 100px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BuyTable = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem 0;
`;
const BuyButton = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 1.5rem;
  background-color: ${(props) => props.theme.cartColor};
  color: ${(props) => props.theme.bgColor};
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const NumControl = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Control = styled.span`
  width: 25px;
  height: 25px;
  line-height: 25px;
  margin: 1rem;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
`;
const Input = styled.input`
  width: 50px;
  height: 25px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.borderColor};
`;
const Delete = styled(MdDeleteForever)`
  font-size: 2rem;
  cursor: pointer;
  color: ${(props) => props.theme.accentColor};
`;

const ReceiptBox = styled.div`
  width: 100%;
  display: flex;
  padding: 1.5rem 1rem 0;
`;
const ReceiptText = styled(LargeText)`
  font-weight: 600;
`;
const ReceiptLeft = styled.div`
  width: 50%;
  text-align: left;
`;
const ReceiptRight = styled.div`
  width: 50%;
  text-align: right;
`;
function Cart() {
  const token: string = window.localStorage.getItem("token") as string;
  const navigate = useNavigate();
  const { data } = useQuery<CartComponent>(GET_CART);
  const [updateBCount] = useMutation(UPDATE_COUNT, {
    refetchQueries: [{ query: GET_CART }, "CartList"],
  });
  const [buyItems] = useMutation(BUY_ITEM, {
    refetchQueries: [{ query: GET_CART }, "CartList"],
  });
  const [checkedAddCart] = useMutation(CHECK_ITEM, {
    refetchQueries: [{ query: GET_CART }, "CartList"],
  });
  const [checkDeleteCart] = useMutation(UNCHECK_ITEM, {
    refetchQueries: [{ query: GET_CART }, "CartList"],
  });
  const [deleteCartItem] = useMutation(DELETE_CART, {
    refetchQueries: [{ query: GET_CART }, "CartList"],
  });
  const userCode = Number(data?.nowUser.map((user: any) => user.user_code));
  const ItemPrice = data
    ? data?.checkCartList.map((cart) => cart.sPrice * cart.bCount)
    : undefined;
  const sumPrice = ItemPrice?.reduce((a: number, b: number) => a + b, 0);
  function plusNumber(id: number, count: number) {
    updateBCount({
      variables: {
        cartId: Number(id),
        bCount: count + 1,
      },
    });
  }
  function minusNumber(id: number, count: number) {
    if (count > 1) {
      updateBCount({
        variables: {
          cartId: Number(id),
          bCount: count - 1,
        },
      });
    }
  }
  function inputOnchange(id: number, event: any) {
    if (event.target.value < 1) {
      event.target.value = 1;
    }
    updateBCount({
      variables: {
        cartId: Number(id),
        bCount: Number(event.target.value),
      },
    });
  }
  function deleteItem(id: number) {
    deleteCartItem({
      variables: {
        cartId: id,
      },
    });
  }
  function checkHandler(
    e: any,
    cartId: number,
    sId: number,
    name: string,
    price: number,
    count: number,
    slideImg: string
  ) {
    if (e.target.checked === true) {
      checkedAddCart({
        variables: {
          cartId: cartId,
          sId: sId,
          sName: name,
          sPrice: price,
          bCount: count,
          slideImg: slideImg,
        },
      });
    } else if (e.target.checked === false) {
      checkDeleteCart({
        variables: {
          cartId: cartId,
        },
      });
    }
  }
  function buyItem() {
    for (let i = 0; i < Number(data?.cartList.length); i++) {
      const sId = data ? data?.cartList.map((cart) => cart.sId) : undefined;
      const bCount = data
        ? data?.cartList.map((cart) => cart.bCount)
        : undefined;
      if (sId && bCount) {
        buyItems({
          variables: {
            bId: Number(`${userCode}${sId[i]}`),
            sId: Number(sId[i]),
            userCode: userCode,
            bCount: Number(bCount[i]),
          },
        });
      }
    }
    alert("구매를 완료하였습니다.");
    navigate("/mypage");
  }
  return (
    <>
      {!token ? (
        <Login />
      ) : (
        <Wrap>
          <Inner>
            <Title>장바구니</Title>
            {Number(data?.cartList.length) === 0 ? (
              <EmptyCart />
            ) : (
              <>
                <DeliveryFeeBox>
                  <DeliveryFeeTextBox>
                    {sumPrice ? (
                      <>
                        <DeliveryFeeText>
                          {sumPrice >= 30000 ? "무료배송" : 30000 - sumPrice}
                        </DeliveryFeeText>
                        <SecondMediumText>
                          {sumPrice >= 30000 ? null : "추가시 무료배송"}
                        </SecondMediumText>
                      </>
                    ) : null}
                  </DeliveryFeeTextBox>
                  <DeliveryFeeBar>
                    {sumPrice ? (
                      <>
                        <DeliveryFeeBarFull priceSize={Number(sumPrice)}>
                          1
                        </DeliveryFeeBarFull>
                      </>
                    ) : null}
                  </DeliveryFeeBar>
                </DeliveryFeeBox>
                <CheckTable>
                  <CheckLeft>
                    <CheckBox type="checkbox" />
                    <MediumText>총 {data?.checkCartList.length}개</MediumText>
                  </CheckLeft>
                  <CheckRight>
                    <SmallText>선택삭제</SmallText>
                  </CheckRight>
                </CheckTable>
                <CartListTable>
                  {data?.cartList.map((ele, index) => (
                    <CartItemBox key={index}>
                      <BoxLeft>
                        <CheckBox
                          type="checkbox"
                          onChange={(e) =>
                            checkHandler(
                              e,
                              ele.cartId,
                              ele.sId,
                              String(ele.sName),
                              ele.sPrice,
                              ele.bCount,
                              ele.slideImg[0]
                            )
                          }
                          defaultChecked
                        />
                        <Image src={`/img/product/${ele?.slideImg}`} />
                      </BoxLeft>
                      <BoxCenter>
                        <LargeText>{ele.sName}</LargeText>
                        <MediumText>{ele.sPrice * ele.bCount}원</MediumText>
                        <NumControl>
                          <Control
                            onClick={() => minusNumber(ele.cartId, ele.bCount)}
                          >
                            -
                          </Control>
                          <Input
                            type="number"
                            value={ele.bCount}
                            onChange={(event) =>
                              inputOnchange(ele.cartId, event)
                            }
                            checked
                          />
                          <Control
                            onClick={() => plusNumber(ele.cartId, ele.bCount)}
                          >
                            +
                          </Control>
                        </NumControl>
                      </BoxCenter>
                      <BoxRight>
                        <Delete onClick={() => deleteItem(ele.cartId)} />
                      </BoxRight>
                    </CartItemBox>
                  ))}
                </CartListTable>
                <ReceiptBox>
                  <ReceiptLeft>
                    <LargeText>상품금액</LargeText>
                    <LargeText>배송비</LargeText>
                    <ReceiptText>총 결제금액</ReceiptText>
                  </ReceiptLeft>
                  <ReceiptRight>
                    <LargeText> {sumPrice ? sumPrice : null}원</LargeText>
                    {sumPrice ? (
                      <>
                        <LargeText>
                          {sumPrice >= 30000 ? "무료" : "3000원"}
                        </LargeText>
                        <ReceiptText>
                          {sumPrice >= 30000 ? sumPrice : sumPrice + 3000}원
                        </ReceiptText>
                      </>
                    ) : null}
                  </ReceiptRight>
                </ReceiptBox>
                <BuyTable>
                  {sumPrice ? (
                    <>
                      <BuyButton onClick={() => buyItem()}>
                        {sumPrice >= 30000 ? sumPrice : sumPrice + 3000}원
                        주문하기
                      </BuyButton>
                    </>
                  ) : null}
                </BuyTable>
              </>
            )}
          </Inner>
        </Wrap>
      )}
    </>
  );
}

export default Cart;

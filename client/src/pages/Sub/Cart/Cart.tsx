import Login from "../Login/Login";
import styled from "styled-components";
import { gql, useMutation, useQuery } from "@apollo/client";
import { CartComponent } from "../../../types/IProps.interface";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import EmptyCart from "./EmptyCart";
import Loading from "../../../components/Loading/Loading";

const GET_CART = gql`
  query CartList {
    cartList {
      sName
      sId
      sPrice
      bCount
      slideImg
      cartId
      check
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
  }
`;
const UPDATE_COUNT = gql`
  mutation UpdateBCount($index: Int!, $bCount: Int) {
    updateBCount(index: $index, bCount: $bCount) {
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
  mutation CheckedAddCart($index: Int!) {
    checkedAddCart(index: $index) {
      cartId
    }
  }
`;
const UNCHECK_ITEM = gql`
  mutation CheckDeleteCart($index: Int!) {
    checkDeleteCart(index: $index) {
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
  @media ${(props) => props.theme.mobile} {
    width: 350px;
    margin: 0 auto;
  }
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
  background-color: ${(props) => props.theme.muziColor};
  border-radius: 5px;
`;
const DeliveryFeeBarFull = styled.div<{ priceSize: number }>`
  width: ${(props) =>
    props.priceSize >= 30000 ? 100 : props.priceSize / 300}%;
  background-color: ${(props) => props.theme.apeachColor};
  color: ${(props) => props.theme.apeachColor};
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
  background-color: ${(props) => props.theme.muziColor};
  border-radius: 50%;
  margin-right: 1rem;
`;
const CartListTable = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.muziColor};
  border-top: 5px solid ${(props) => props.theme.muziColor};
  border-bottom: 1px solid ${(props) => props.theme.muziColor};
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
  @media ${(props) => props.theme.mobile} {
    width: 100px;
  }
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 1rem 3rem 1rem 0;
  border: 1px solid ${(props) => props.theme.borderColor};
  @media ${(props) => props.theme.mobile} {
    width: 50px;
    height: 50px;
  }
`;
const BoxCenter = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  @media ${(props) => props.theme.mobile} {
    width: 200px;
  }
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
  color: ${(props) => props.theme.apeachColor};
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
  background-color: ${(props) => props.theme.apeachColor};
  color: ${(props) => props.theme.bgColor};
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const DefaultBuyButton = styled(BuyButton)`
  background-color: ${(props) => props.theme.borderColor};
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
  color: ${(props) => props.theme.jaygColor};
`;

const ReceiptBox = styled.div`
  width: 100%;
  display: flex;
  padding: 1.5rem 1rem 0;
  @media ${(props) => props.theme.mobile} {
    margin: 1rem 0;
    padding: 0;
  }
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
  const { data, loading } = useQuery<CartComponent>(GET_CART);
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
  const trueCart = data?.cartList.filter((cart) => cart.check === true);
  const ItemPrice = trueCart
    ? trueCart.map((cart) => cart.sPrice * cart.bCount)
    : undefined;
  const sumPrice = ItemPrice?.reduce((a: number, b: number) => a + b, 0);
  function plusNumber(index: number, count: number) {
    updateBCount({
      variables: {
        index: index,
        bCount: count + 1,
      },
    });
  }
  function minusNumber(index: number, count: number) {
    if (count > 1) {
      updateBCount({
        variables: {
          index: index,
          bCount: count - 1,
        },
      });
    }
  }
  function inputOnchange(index: number, event: any) {
    if (event.target.value < 1) {
      event.target.value = 1;
    }
    updateBCount({
      variables: {
        index: index,
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
  function allCheckHandler(e: any) {
    const index = Number(data?.cartList.length);
    for (let i = 0; i < index; i++) {
      if (e.target.checked === true) {
        checkedAddCart({
          variables: {
            index: i,
          },
        });
      } else if (e.target.checked === false) {
        checkDeleteCart({
          variables: {
            index: i,
          },
        });
      }
    }
  }
  function checkHandler(e: any, index: number) {
    if (e.target.checked === true) {
      checkedAddCart({
        variables: {
          index: index,
        },
      });
    } else if (e.target.checked === false) {
      checkDeleteCart({
        variables: {
          index: index,
        },
      });
    }
  }
  function selectDeleteItem() {
    const cartIndex = trueCart ? trueCart?.map((ele) => ele.cartId) : undefined;
    for (let i = 0; i < Number(cartIndex?.length); i++) {
      deleteCartItem({
        variables: {
          cartId: cartIndex ? Number(cartIndex[i]) : 0,
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
          {loading ? (
            <>
              <Loading />
            </>
          ) : (
            <>
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
                              {sumPrice >= 30000
                                ? "무료배송"
                                : 30000 - sumPrice}
                            </DeliveryFeeText>
                            <SecondMediumText>
                              {sumPrice >= 30000 ? null : "원 추가시 무료배송"}
                            </SecondMediumText>
                          </>
                        ) : (
                          <>
                            <SecondMediumText>
                              30000원 추가시 무료배송
                            </SecondMediumText>
                          </>
                        )}
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
                        <CheckBox
                          type="checkbox"
                          onChange={(e) => allCheckHandler(e)}
                        />
                        <MediumText>
                          총 {trueCart ? trueCart.length : 0}개
                        </MediumText>
                      </CheckLeft>
                      <CheckRight>
                        <SmallText onClick={() => selectDeleteItem()}>
                          선택삭제
                        </SmallText>
                      </CheckRight>
                    </CheckTable>
                    <CartListTable>
                      {data?.cartList.map((ele, index) => (
                        <CartItemBox key={ele.cartId}>
                          <BoxLeft>
                            <CheckBox
                              type="checkbox"
                              onChange={(e) => checkHandler(e, index)}
                              checked={ele.check ? true : false}
                            />
                            <Image src={`/img/product/${ele?.slideImg}`} />
                          </BoxLeft>
                          <BoxCenter>
                            <LargeText>{ele.sName}</LargeText>
                            <MediumText>{ele.sPrice * ele.bCount}원</MediumText>
                            <NumControl>
                              <Control
                                onClick={() => minusNumber(index, ele.bCount)}
                              >
                                -
                              </Control>
                              <Input
                                type="number"
                                value={ele.bCount}
                                onChange={(event) =>
                                  inputOnchange(index, event)
                                }
                              />
                              <Control
                                onClick={() => plusNumber(index, ele.bCount)}
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
                        <LargeText> {sumPrice ? sumPrice : 0}원</LargeText>
                        {sumPrice ? (
                          <>
                            <LargeText>
                              {sumPrice >= 30000 ? "무료" : "3000원"}
                            </LargeText>
                            <ReceiptText>
                              {sumPrice >= 30000 ? sumPrice : sumPrice + 3000}원
                            </ReceiptText>
                          </>
                        ) : (
                          <>
                            <LargeText>3000원</LargeText>
                            <ReceiptText>0원</ReceiptText>
                          </>
                        )}
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
                      ) : (
                        <>
                          <DefaultBuyButton onClick={() => buyItem()}>
                            주문하기
                          </DefaultBuyButton>
                        </>
                      )}
                    </BuyTable>
                  </>
                )}
              </Inner>
            </>
          )}
        </Wrap>
      )}
    </>
  );
}

export default Cart;

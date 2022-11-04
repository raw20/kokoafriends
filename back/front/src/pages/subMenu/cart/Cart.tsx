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
const CartListTable = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.borderColor};
  border-top: 5px solid ${(props) => props.theme.borderColor};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;
const CartItemBox = styled.div`
  width: 100%;
  display: flex;
  margin: 0.3rem 0;
  background-color: #fff;
`;
const BoxLeft = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 1rem 0;
  border: 1px solid ${(props) => props.theme.borderColor};
`;
const BoxCenter = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LargeText = styled.p`
  width: 100%;
  text-align: left;
  font-size: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const MediumText = styled.p`
  width: 100%;
  font-size: 1.1rem;
  margin-top: 1rem;
  text-align: left;
  font-weight: bold;
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
  background-color: ${(props) => props.theme.accentColor};
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
  const [deleteCartItem] = useMutation(DELETE_CART, {
    refetchQueries: [{ query: GET_CART }, "CartList"],
  });
  const userCode = Number(data?.nowUser.map((user: any) => user.user_code));
  const ItemPrice = data
    ? data?.cartList.map((cart) => cart.sPrice * cart.bCount)
    : undefined;
  const SumPrice = ItemPrice?.reduce((a: number, b: number) => a + b, 0);
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
                <CartListTable>
                  {data?.cartList.map((ele, index) => (
                    <CartItemBox key={index}>
                      <BoxLeft>
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
                <BuyTable>
                  <BuyButton onClick={() => buyItem()}>
                    {SumPrice ? SumPrice : null}원 주문하기
                  </BuyButton>
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

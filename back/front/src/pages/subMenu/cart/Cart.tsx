import Login from "../login/Login";
import styled from "styled-components";
import { gql, useMutation, useQuery } from "@apollo/client";
import { CartComponent } from "../../../interface/IDBdataType";

const GET_CART = gql`
  query CartList {
    cartList {
      sName
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
  border: 1px solid ${(props) => props.theme.secondColor};
`;
const BoxCenter = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LargeText = styled.p`
  width: 100%;
  text-align: left;
  font-size: 1.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const MediumText = styled.p`
  width: 100%;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  text-align: left;
  font-weight: bold;
`;
const BoxRight = styled.div`
  width: 200px;
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
  justify-content: center;
  align-items: center;
`;
const Control = styled.span`
  width: 25px;
  height: 25px;
  margin: 1rem;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.accentColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Input = styled.input`
  width: 50px;
  height: 25px;
  text-align: center;
`;
function Cart() {
  const token: string = window.localStorage.getItem("token") as string;
  const { data } = useQuery<CartComponent>(GET_CART);
  const [updateBCount] = useMutation(UPDATE_COUNT, {
    refetchQueries: [{ query: GET_CART }, "CartList"],
  });
  const ItemPrice = data?.cartList.map((cart) => cart.sPrice);
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
  return (
    <>
      {!token ? (
        <Login />
      ) : (
        <Wrap>
          <Inner>
            <Title>장바구니</Title>
            <CartListTable>
              {data?.cartList.map((ele, index) => (
                <CartItemBox key={index}>
                  <BoxLeft>
                    <Image src={`/img/product/${ele?.slideImg}`} />
                  </BoxLeft>
                  <BoxCenter>
                    <LargeText>{ele.sName}</LargeText>
                    <MediumText>{ele.sPrice * ele.bCount}원</MediumText>
                  </BoxCenter>
                  <BoxRight>
                    <NumControl>
                      <Control
                        onClick={() => minusNumber(ele.cartId, ele.bCount)}
                      >
                        -
                      </Control>
                      <Input
                        type="number"
                        value={ele.bCount}
                        onChange={(event) => inputOnchange(ele.cartId, event)}
                      />
                      <Control
                        onClick={() => plusNumber(ele.cartId, ele.bCount)}
                      >
                        +
                      </Control>
                    </NumControl>
                  </BoxRight>
                </CartItemBox>
              ))}
            </CartListTable>
            <BuyTable>
              <BuyButton>0원 주문하기</BuyButton>
            </BuyTable>
          </Inner>
        </Wrap>
      )}
    </>
  );
}

export default Cart;

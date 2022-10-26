import styled from "styled-components";
import Modal from "react-modal";
import ItemNumControl from "./ItemNumControl";
import { BuyButton, Itemtext, Itemtitle } from "../../pages/ItemDetail";
import { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Login from "../../pages/Login";

interface IBuyModalProps {
  productId: number;
  kakaoId: string;
}

const GET_ITEM = gql`
  query SelectItem($selectItemId: Int!) {
    selectItem(id: $selectItemId) {
      price
    }
    buyItem {
      id
      product_id
      user_code
      count
    }
  }
`;
const PUT_ITEM = gql`
  mutation PutItem($productId: Int!, $userCode: String!, $count: Int!) {
    putItem(product_id: $productId, user_code: $userCode, count: $count) {
      id
      product_id
      user_code
      count
    }
  }
`;

const ModalDiv = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
`;

Modal.setAppElement("#root");

function BuyModal({ kakaoId, productId }: IBuyModalProps) {
  const [number, setNumber] = useState(1);
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();
  const { data } = useQuery(GET_ITEM, {
    variables: {
      selectItemId: productId,
    },
  });
  const [putItem] = useMutation(PUT_ITEM, {
    refetchQueries: [{ query: GET_ITEM }, "SelectItem"],
  });

  function buyItem() {
    putItem({
      variables: {
        productId: productId,
        userCode: kakaoId,
        count: number,
      },
    });
    alert("구매하였습니다.");
    navigate("/best");
  }
  return (
    <>
      {!token ? (
        <Login />
      ) : (
        <>
          <ModalDiv>
            <Itemtext>수량 선택</Itemtext>
            <ItemNumControl number={number} setNumber={setNumber} />
          </ModalDiv>
          <ModalDiv>
            <Itemtitle>총 제품금액</Itemtitle>
            <Itemtext>{data?.selectItem.price * number}원</Itemtext>
          </ModalDiv>
          <BuyButton onClick={() => buyItem()}>구매하기</BuyButton>
        </>
      )}
    </>
  );
}

export default BuyModal;

import styled from "styled-components";
import Modal from "react-modal";
import ItemNumControl from "../Input/ItemNumControl";
import {
  ProductSecondBuyButton,
  PrimaryTitle,
  PrimaryContent,
} from "../../styles/Common.style";
import { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import Login from "../../pages/Sub/Login/Login";
import { BuyModalComponent } from "../../types/IProps.interface";

interface IBuyModalProps {
  userCode: number | undefined;
}

const GET_ITEM = gql`
  query SelectUserBuyItemList($selectItemId: Int!, $userCode: Int!) {
    selectItem(id: $selectItemId) {
      sPrice
    }
    selectUserBuyItemList(user_code: $userCode) {
      user_code
      sId
      bId
      sName
      sPrice
      bDate
      slideImg
    }
    allUserBuyItemList {
      bId
    }
  }
`;
const BUY_ITEM = gql`
  mutation BuyItems($bId: Int!, $sId: Int!, $userCode: Int!, $bCount: Int!) {
    buyItems(bId: $bId, sId: $sId, user_code: $userCode, bCount: $bCount) {
      bId
      sId
      user_code
      bCount
    }
  }
`;

const ModalDiv = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
`;
const ControlDiv = styled.div`
  width: 25%;
`;
Modal.setAppElement("#root");

function BuyModal({ userCode }: IBuyModalProps) {
  const { id } = useParams();
  const [number, setNumber] = useState(1);
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();
  const { data } = useQuery<BuyModalComponent>(GET_ITEM, {
    variables: {
      selectItemId: Number(id),
      userCode: userCode,
    },
  });
  const [buyItems] = useMutation(BUY_ITEM, {
    refetchQueries: [{ query: GET_ITEM }, "SelectUserBuyItemList"],
  });
  const bId = Number(`${userCode}${id}`);
  function buyItem() {
    buyItems({
      variables: {
        bId: bId,
        sId: Number(id),
        userCode: userCode,
        bCount: number,
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
            <PrimaryContent>수량 선택</PrimaryContent>
            <ControlDiv>
              <ItemNumControl number={number} setNumber={setNumber} />
            </ControlDiv>
          </ModalDiv>
          <ModalDiv>
            <PrimaryTitle>총 제품금액</PrimaryTitle>
            <PrimaryContent>
              {Number(data?.selectItem[0].products_price) * number}원
            </PrimaryContent>
          </ModalDiv>
          <ProductSecondBuyButton onClick={() => buyItem()}>
            구매하기
          </ProductSecondBuyButton>
        </>
      )}
    </>
  );
}

export default BuyModal;

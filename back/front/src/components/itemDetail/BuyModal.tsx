import styled from "styled-components";
import Modal from "react-modal";
import ItemNumControl from "./ItemNumControl";
import { BuyButton, Itemtext, Itemtitle } from "../../pages/ItemDetail";
import { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import Login from "../../pages/Login";
import { BuyModalComponent } from "../../interface/IDBdataType";

interface IBuyModalProps {
  userCode: number | undefined;
}

const GET_ITEM = gql`
  query SelectItem($selectItemId: Int!, $userCode: Int!) {
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
    refetchQueries: [{ query: GET_ITEM }, "SelectItem"],
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
            <Itemtext>수량 선택</Itemtext>
            <ControlDiv>
              <ItemNumControl number={number} setNumber={setNumber} />
            </ControlDiv>
          </ModalDiv>
          <ModalDiv>
            <Itemtitle>총 제품금액</Itemtitle>
            <Itemtext>{Number(data?.selectItem[0].sPrice) * number}원</Itemtext>
          </ModalDiv>
          <BuyButton onClick={() => buyItem()}>구매하기</BuyButton>
        </>
      )}
    </>
  );
}

export default BuyModal;

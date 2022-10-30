import styled from "styled-components";
import Modal from "react-modal";
import ItemNumControl from "./ItemNumControl";
import { BuyButton, Itemtext, Itemtitle } from "../../pages/ItemDetail";
import { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import Login from "../../pages/Login";
import { BuyModalComponent } from "../../interface/IDBdataType";

const GET_ITEM = gql`
  query SelectItem($selectItemId: Int!) {
    selectItem(id: $selectItemId) {
      sPrice
    }
    nowUser {
      user_code
    }
    allUserBuyItemList {
      bId
    }
  }
`;
const BUY_ITEM = gql`
  mutation BuyItems($bId: Int, $sId: Int, $userCode: Int) {
    buyItems(bId: $bId, sId: $sId, user_code: $userCode) {
      bId
      sId
      user_code
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

function BuyModal() {
  const { id } = useParams();
  const [number, setNumber] = useState(1);
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();
  const { data } = useQuery<BuyModalComponent>(GET_ITEM, {
    variables: {
      selectItemId: Number(id),
    },
  });
  const [buyItems] = useMutation(BUY_ITEM, {
    refetchQueries: [{ query: GET_ITEM }, "SelectItem"],
  });
  const buyItemIndex = Number(data?.allUserBuyItemList.length) + 1;
  const userCode = Number(data?.nowUser.map((user: any) => user.user_code));
  function buyItem() {
    buyItems({
      variables: {
        bId: buyItemIndex,
        sId: Number(id),
        user_code: userCode,
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
            <Itemtext>{Number(data?.selectItem[0].sPrice) * number}원</Itemtext>
          </ModalDiv>
          <BuyButton onClick={() => buyItem()}>구매하기</BuyButton>
        </>
      )}
    </>
  );
}

export default BuyModal;

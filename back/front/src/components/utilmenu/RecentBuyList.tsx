import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RecentBIComponent } from "../../interface/IDBdataType";

interface IRecentBuyListProps {
  userCode: number | undefined;
}

const GET_DATA = gql`
  query SelectUserBuyItemList($userCode: Int!) {
    selectUserBuyItemList(user_code: $userCode) {
      user_code
      sId
      bId
      sName
      sPrice
      bDate
      slideImg
    }
    nowUser {
      user_code
    }
  }
`;
const ChildBox = styled.div`
  width: 90%;
  height: auto;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const CartBox = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #f3eaea;
  font-family: "Noto Sans KR", sans-serif;
`;
const LargeText = styled.p`
  width: 100%;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme.secondColor};
`;
const SubLargeText = styled.p`
  width: 200px;
  font-size: 1.1rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const SmallText = styled.p`
  width: 200px;
  font-size: 1rem;
  font-weight: 500;
`;
const SubSmallText = styled(SmallText)`
  margin-top: 1rem;
`;
const ListBox = styled(Link)`
  width: 100%;
  height: auto;
  padding: 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme.secondColor};
  display: flex;
`;
const ItemImage = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.secondColor};
`;
const ImformBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PriceBox = styled.div`
  width: 50%;
  display: flex;
  text-align: center;
  align-items: center;
`;
function RecentBuyList({ userCode }: IRecentBuyListProps) {
  const { data } = useQuery<RecentBIComponent>(GET_DATA, {
    variables: {
      userCode: userCode,
    },
  });
  console.log(userCode);
  console.log(data?.selectUserBuyItemList.map((ele) => ele.sId));
  return (
    <>
      <CartBox>
        <ChildBox>
          <LargeText>최근 구매목록</LargeText>
          {data?.selectUserBuyItemList.map((list: any) => (
            <ListBox to={`/bestProduct/${list.sId}`} key={list.bId}>
              <ItemImage>
                <Image src={`/img/product/${list?.slideImg[0]}`} />
              </ItemImage>
              <ImformBox>
                <SubLargeText>{list.sName}</SubLargeText>
                <SubSmallText>{list.sPrice}원</SubSmallText>
              </ImformBox>
              <PriceBox>
                <SmallText>{list.bDate}</SmallText>
              </PriceBox>
            </ListBox>
          ))}
        </ChildBox>
      </CartBox>
    </>
  );
}

export default RecentBuyList;

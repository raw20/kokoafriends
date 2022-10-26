import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IRecentBuyListProps {
  kakaoId: string | undefined;
}

const GET_DATA = gql`
  query MyItem($userCode: String!) {
    myItem(user_code: $userCode) {
      product_id
      user_code
      count
      date
      item {
        id
        name
        price
        slideImg
      }
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
function RecentBuyList({ kakaoId }: IRecentBuyListProps) {
  const { data } = useQuery(GET_DATA, {
    variables: { userCode: kakaoId },
  });
  return (
    <>
      <CartBox>
        <ChildBox>
          <LargeText>최근 구매목록</LargeText>
          {data?.myItem.map((ele: any) =>
            ele.item?.map((child: any) => (
              <ListBox to={`/bestProduct/${ele.product_id}`} key={ele.id}>
                <ItemImage>
                  <Image src={`/img/product/${child?.slideImg[0]}`} />
                </ItemImage>
                <ImformBox>
                  <SubLargeText>{child.name}</SubLargeText>
                  <SubSmallText>{child.price * ele.count}원</SubSmallText>
                </ImformBox>
                <PriceBox>
                  <SmallText>{ele.date}</SmallText>
                </PriceBox>
              </ListBox>
            ))
          )}
        </ChildBox>
      </CartBox>
    </>
  );
}

export default RecentBuyList;

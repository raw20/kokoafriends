import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
      bCount
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
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    margin: 0;
  }
`;

const CartBox = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #f3eaea;
  @media ${(props) => props.theme.mobile} {
    width: 90%;
    margin: 1rem auto;
    border: none;
  }
`;
const LargeText = styled.p`
  width: 100%;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: flex-start;
  padding: 1rem 0;
  border-radius: 10px;
  color: ${(props) => props.theme.seconetTextColor};
  @media ${(props) => props.theme.mobile} {
    padding: 0;
  }
`;
const SubLargeText = styled.p`
  width: 200px;
  font-size: 1.1rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${(props) => props.theme.seconetTextColor};
  @media ${(props) => props.theme.mobile} {
    width: 100px;
  }
`;

const SmallText = styled.p`
  width: 200px;
  font-size: 1rem;
  font-weight: 500;
  @media ${(props) => props.theme.mobile} {
    width: 100px;
  }
`;
const SubSmallText = styled(SmallText)`
  margin-top: 1rem;
  font-weight: bold;
`;
const ListBox = styled(Link)`
  width: 100%;
  height: auto;
  padding: 1rem 0;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  margin-top: 1rem;
  display: flex;
  @media ${(props) => props.theme.mobile} {
    padding: 0;
  }
`;
const ItemImage = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    width: 50%;
    margin: 1rem;
  }
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.borderColor};
  @media ${(props) => props.theme.mobile} {
    width: 90px;
    height: 90px;
  }
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
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;
function RecentBuyList({ userCode }: IRecentBuyListProps) {
  /*  const { data } = useQuery<RecentBIComponent>(GET_DATA, {
    variables: {
      userCode: userCode,
    },
  }); */
  return (
    <>
      {/*   <CartBox>
        <ChildBox>
          <LargeText>최근 구매목록</LargeText>
          {data?.selectUserBuyItemList.map((list: any) => (
            <ListBox to={`/bestProduct/${list.sId}`} key={list.bId}>
              <ItemImage>
                <Image src={`/img/product/${list?.slideImg[0]}`} />
              </ItemImage>
              <ImformBox>
                <SubLargeText>{list.sName}</SubLargeText>
                <SubSmallText>{list.sPrice * list.bCount}원</SubSmallText>
              </ImformBox>
              <PriceBox>
                <SmallText>{list.bDate.substring(10, -1)}</SmallText>
              </PriceBox>
            </ListBox>
          ))}
        </ChildBox>
      </CartBox> */}
    </>
  );
}

export default RecentBuyList;

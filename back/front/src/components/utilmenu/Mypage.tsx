import styled from "styled-components";
import Login from "../../pages/Login";
import { gql, useQuery } from "@apollo/client";
import RecentBuyList from "./RecentBuyList";

/* interface UserData {
  userCode: number;
  kakaoId: number;
  kakaoProfileImg: string;
  kakaoNickname: string;
  kakaoEmail: string;
  userRole: string;
  createTime: number;
}
 */

const GET_DATA = gql`
  query Query {
    aboutMe {
      id
      kakaoId
      name
    }
  }
`;
const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1.2rem 7.5rem;
  box-sizing: border-box;
  justify-content: center;
`;
const Container = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  margin: 0 auto;
`;
const UserBox = styled.div`
  width: 40%;
  height: auto;
  border: 1px solid #f3eaea;
`;
const Inner = styled.div`
  width: 100%;
  margin: 7rem auto;
`;
const ChildBox = styled.div`
  width: 60%;
  height: auto;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
`;
const UserImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
const UserSmallText = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;
const UserLargeText = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`;

function Mypage() {
  const token: string = window.localStorage.getItem("token") as string;
  const { data } = useQuery(GET_DATA);
  const myKakaoId = data?.aboutMe.map((user: any) => user.kakaoId).join();
  return (
    <>
      {!token ? (
        <Login />
      ) : (
        <Wrap>
          <Container>
            {data?.aboutMe.map((user: any) => (
              <UserBox key={user.id}>
                <Inner>
                  <ChildBox>{/*  <UserImg src={image} /> */}</ChildBox>
                  <ChildBox>
                    <UserLargeText>{user.name}</UserLargeText>
                  </ChildBox>
                  <ChildBox>
                    {/* <UserSmallText>{email}</UserSmallText> */}
                  </ChildBox>
                </Inner>
              </UserBox>
            ))}
            <RecentBuyList kakaoId={myKakaoId} />
          </Container>
        </Wrap>
      )}
    </>
  );
}

export default Mypage;

import styled from "styled-components";
import Login from "../../pages/Login";
import { gql, useQuery } from "@apollo/client";
import RecentBuyList from "./RecentBuyList";
import { MyProfile } from "../../interface/IDBdataType";

const NOW_USER = gql`
  query NowUser {
    nowUser {
      user_code
      kakao_id
      kakao_profile_img
      kakao_nickname
      kakao_email
      user_role
      create_time
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
  const { data } = useQuery<MyProfile>(NOW_USER);
  const userCode = Number(data?.nowUser.map((user) => user.user_code));

  return (
    <>
      {!token ? (
        <Login />
      ) : (
        <Wrap>
          <Container>
            {data?.nowUser.map((user) => (
              <UserBox key={user.user_code}>
                <Inner>
                  <ChildBox>
                    <UserImg src={user.kakao_profile_img} />{" "}
                  </ChildBox>
                  <ChildBox>
                    <UserLargeText>{user.kakao_nickname}</UserLargeText>
                  </ChildBox>
                  <ChildBox>
                    <UserSmallText>{user.kakao_email}</UserSmallText>
                  </ChildBox>
                </Inner>
              </UserBox>
            ))}
            <RecentBuyList userCode={userCode} />
          </Container>
        </Wrap>
      )}
    </>
  );
}

export default Mypage;

import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../auth/OAuth";
import styled from "styled-components";
import Login from "../../pages/Login";

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
const Wrap = styled.div`
  width: 100%;
`;
const Container = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  margin: 0 auto;
`;
const UserBox = styled.div`
  width: 50%;
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
const UserLargeText = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`;
const UserSmallText = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;
const CartBox = styled(UserBox)``;
function Mypage() {
  const token: string = window.localStorage.getItem("token") as string;
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${BASE_URL}/me`, {
          headers: {
            Authorization: token,
          },
        });
        console.log(res.data);
        window.localStorage.setItem("user_data", res.data);
        setName(res.data.kakaoNickname);
        setImage(res.data.kakaoProfileImg);
        setEmail(res.data.kakaoEmail);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return (
    <>
      {!token ? (
        <Login />
      ) : (
        <Wrap>
          <Container>
            <UserBox>
              <Inner>
                <ChildBox>
                  <UserImg src={image} />
                </ChildBox>
                <ChildBox>
                  <UserLargeText>{name}</UserLargeText>
                </ChildBox>
                <ChildBox>
                  <UserSmallText>{email}</UserSmallText>
                </ChildBox>
              </Inner>
            </UserBox>
            <CartBox>
              <ChildBox>
                <UserLargeText>최근 구매목록</UserLargeText>
              </ChildBox>
            </CartBox>
          </Container>
        </Wrap>
      )}
    </>
  );
}

export default Mypage;

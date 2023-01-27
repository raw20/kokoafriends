import styled from "styled-components";
import Login from "../Login/Login";
import { gql, useQuery } from "@apollo/client";

import Loading from "../../../components/Loading/Loading";

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
  height: auto;
  padding: 1.2rem 7.5rem;
  box-sizing: border-box;
  justify-content: center;
  font-family: "Noto Sans KR", sans-serif;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    padding: 0;
  }
  @media ${(props) => props.theme.mobile} {
    padding: 0;
  }
`;
const Container = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  margin: 0 auto;
  @media ${(props) => props.theme.tablet} {
    width: 90%;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    margin: 0;
    flex-direction: column;
  }
`;
const UserBox = styled.div`
  width: 40%;
  height: auto;
  border: 1px solid #f3eaea;
  @media ${(props) => props.theme.mobile} {
    width: 90%;
    margin: 0 auto;
    border: none;
  }
`;
const Inner = styled.div`
  width: 100%;
  margin: 7rem auto;
  @media ${(props) => props.theme.mobile} {
    margin: 0;
  }
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
const LargeText = styled.p`
  width: 100%;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  @media ${(props) => props.theme.mobile} {
    width: 90%;
    margin-bottom: 1rem;
  }
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
  return <></>;
}

export default Mypage;

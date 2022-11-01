import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import { AllContents } from "../../interface/IDBdataType";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const GET_CONTENTS = gql`
  query {
    contents {
      cId
      cWriter
      cProfileImg
      cImage
      cTitle
      cContent
      cDate
      cLike
    }
    comments {
      cId
      kakao_nickname
      comment
      user_code
    }
  }
`;
export const Wrap = styled.div`
  width: 100%;
  height: auto;
  margin: 1rem auto;
`;
export const Inner = styled.div`
  width: 60%;
  height: auto;
  margin: 0 auto;
  border-left: 1px solid #f3eaea;
  border-right: 1px solid #f3eaea; ;
`;
export const ContentsBox = styled.div`
  width: 60%;
  height: auto;
  margin: 0 auto;
`;
export const HeaderBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin: 1.2rem auto;
  justify-content: center;
  align-items: center;
`;
export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
`;
export const TextBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const LargeText = styled.p`
  font-size: 1.2rem;
  font-family: 800;
`;
export const SmallText = styled.p`
  font-size: 1rem;
  font-family: 100;
  font-family: "Noto Sans KR", sans-serif;
`;
export const EmpText = styled.p`
  font-size: 1rem;
  font-family: 800;
  margin-bottom: 1rem;
`;
export const TitleText = styled(EmpText)`
  font-size: 1.4rem;
`;
export const MainBox = styled(HeaderBox)`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const ImgBox = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
export const IconBox = styled(TextBox)`
  flex-direction: row;
`;
export const HeartEmpty = styled(BsHeart)`
  font-size: 2rem;
  margin: 1rem 1rem 1rem 0;
  cursor: pointer;
`;
export const HeartFull = styled(BsHeartFill)`
  font-size: 2rem;
  margin: 1rem 1rem 1rem 0;
  color: red;
  cursor: pointer;
`;
export const RegComment = styled(FaRegComment)`
  font-size: 2rem;
  margin: 1rem 1rem 1rem 0;
`;
export const BottomBox = styled(HeaderBox)`
  align-items: flex-start;
  flex-direction: column;
`;
export const Comment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
`;
export const UserName = styled.h1`
  font-size: 1.2rem;
  margin-right: 0.5rem;
`;
export const CommentBox = styled(Link)`
  width: 100%;
  height: 30px;
  margin: 1rem auto;
  display: flex;
  background-color: #dfd8d7;
  border-radius: 30px;
  align-items: center;
  border: none;
  font-size: 0.9rem;
  color: ${(props) => props.theme.bgColor};
  font-family: "Noto Sans KR", sans-serif;
  padding-left: 1rem;
`;
function Contents() {
  const { data } = useQuery<AllContents>(GET_CONTENTS);
  const [liked, setLiked] = useState(false);
  function likeHandler(index: number) {
    if (Number(data?.contents[index].cId) - 1 === index)
      setLiked((liked) => !liked);
  }
  return (
    <Wrap>
      <Inner>
        {data?.contents.map((item, index) => (
          <ContentsBox key={item.cId}>
            <HeaderBox>
              <ProfileImage src={`/img/search/${item.cProfileImg}.jpg`} />
              <TextBox>
                <LargeText>{item.cWriter}</LargeText>
                <SmallText>{item.cDate}</SmallText>
              </TextBox>
            </HeaderBox>
            <MainBox>
              <ImgBox>
                <Image src={`/img/contents/${item.cImage}`} />
              </ImgBox>
              <IconBox>
                {!liked ? (
                  <HeartEmpty onClick={() => likeHandler(index)} />
                ) : (
                  <HeartFull onClick={() => likeHandler(index)} />
                )}
                <RegComment />
              </IconBox>
              <TextBox>
                <EmpText>좋아요 {item.cLike}명</EmpText>
                {item.cTitle.split("\n").map((text, index) => (
                  <TitleText key={index}>{text}</TitleText>
                ))}
                {item.cContent.split("\n").map((text, index) => (
                  <SmallText key={index}>{text}</SmallText>
                ))}
              </TextBox>
            </MainBox>
            <BottomBox>
              <SmallText>댓글{index}개</SmallText>
              <Comment>
                <UserName>{data?.comments[index].kakao_nickname}</UserName>
                <SmallText>{data?.comments[index].comment}</SmallText>
              </Comment>
              <CommentBox to={`/contentsDetail/${item.cId}`}>
                댓글을 남겨주세요.
              </CommentBox>
            </BottomBox>
          </ContentsBox>
        ))}
      </Inner>
    </Wrap>
  );
}

export default Contents;

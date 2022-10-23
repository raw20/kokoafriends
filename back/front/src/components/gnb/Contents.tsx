import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import { ContentsObj } from "../../interface/dataType";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";

const GET_CONTENTS = gql`
  query {
    contents {
      id
      writer
      profileImg
      image
      title
      content
      date
      like
      comments {
        comment
        writer {
          name
        }
      }
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
  .icon {
    font-size: 2rem;
    margin: 1rem 1rem 1rem 0;
  }
  .heart {
    color: red;
  }
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
  const { data } = useQuery<ContentsObj>(GET_CONTENTS);
  return (
    <Wrap>
      <Inner>
        {data?.contents.map((item) => (
          <ContentsBox key={item.id}>
            <HeaderBox>
              <ProfileImage src={`/img/search/${item.profileImg}.jpg`} />
              <TextBox>
                <LargeText>{item.writer}</LargeText>
                <SmallText>{item.date}</SmallText>
              </TextBox>
            </HeaderBox>
            <MainBox>
              <ImgBox>
                <Image src={`/img/contents/${item.image}`} />
              </ImgBox>
              <IconBox>
                <BsHeartFill className="icon heart" />
                <FaRegComment className="icon" />
              </IconBox>
              <TextBox>
                <EmpText>좋아요 {item.like}명</EmpText>
                {item.title.split("\n").map((text, index) => (
                  <TitleText key={index}>{text}</TitleText>
                ))}
                {item.content.split("\n").map((text, index) => (
                  <SmallText key={index}>{text}</SmallText>
                ))}
              </TextBox>
            </MainBox>
            <BottomBox>
              <SmallText>댓글{item.comments.length}개</SmallText>
              <Comment>
                {item.comments.map((comment, index) =>
                  index < 1 ? (
                    <UserName key={index}>{comment.writer.name}</UserName>
                  ) : null
                )}
                {item.comments.map((ele, index) =>
                  index < 1 ? (
                    <SmallText key={index}>{ele.comment}</SmallText>
                  ) : null
                )}
              </Comment>
              <CommentBox to={`/contentsDetail/${item.id}`}>
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

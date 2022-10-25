import { gql, useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import styled from "styled-components";
import {
  Wrap,
  Inner,
  ContentsBox,
  HeaderBox,
  ProfileImage,
  TextBox,
  LargeText,
  SmallText,
  EmpText,
  TitleText,
  MainBox,
  ImgBox,
  Image,
  IconBox,
  BottomBox,
  UserName,
} from "../components/gnb/Contents";
import { KAKAO_AUTH_URL } from "../auth/OAuth";
import { useState } from "react";

const SELECT_CONTENTS = gql`
  query SelectContents($selectContentsId: Int!) {
    selectContents(id: $selectContentsId) {
      id
      writer
      profileImg
      image
      title
      content
      date
      like
      comments {
        id
        contents_id
        kakaoId
        writer {
          id
          kakaoId
          name
        }
        comment
        date
      }
    }
    aboutMe {
      kakaoId
      name
    }
  }
`;
const POST_COMMENT = gql`
  mutation PostComment(
    $kakaoId: String!
    $contentsId: Int!
    $comment: String!
  ) {
    postComment(
      kakaoId: $kakaoId
      contents_id: $contentsId
      comment: $comment
    ) {
      id
      contents_id
      kakaoId
      writer {
        id
        kakaoId
        name
      }
      comment
      date
    }
  }
`;
const DELETE_COMMENT = gql`
  mutation DeleteComment($deleteCommentId: Int!) {
    deleteComment(id: $deleteCommentId) {
      id
    }
  }
`;
export const CommentBox = styled.a`
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
export const CommentInput = styled.input`
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
const ChatBox = styled.div`
  width: 100%;
  height: auto;
  border-top: 1px solid ${(props) => props.theme.accentColor};
`;
const Chat = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  font-family: "Noto Sans KR", sans-serif;
`;
const Message = styled.span`
  margin: 0.5rem 0;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  background-color: #dfd8d7;
`;
const ChatTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const DeleteButton = styled.span`
  width: 35px;
  height: 20px;
  border: 1px solid ${(props) => props.theme.secondColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
`;

function ContentsDetail() {
  const { id } = useParams();
  const { data } = useQuery(SELECT_CONTENTS, {
    variables: {
      selectContentsId: Number(id),
    },
  });
  const [postComment] = useMutation(POST_COMMENT, {
    refetchQueries: [{ query: SELECT_CONTENTS }, "SelectContents"],
  });
  const [deleteComment] = useMutation(DELETE_COMMENT, {
    refetchQueries: [{ query: SELECT_CONTENTS }, "SelectContents"],
  });
  const [comment, setComment] = useState<string>("");
  const myKakaoId = data?.aboutMe.map((me: any) => me.kakaoId).join();

  function enterSubmit(e: any) {
    if (e.key === "Enter") {
      postComment({
        variables: {
          kakaoId: myKakaoId,
          contentsId: data?.selectContents.id,
          comment: comment,
        },
      });
      setComment("");
    }
  }
  function deleteHandler(id: number) {
    deleteComment({
      variables: {
        deleteCommentId: id,
      },
    });
    alert("댓글이 삭제되었습니다.");
  }
  const token = window.localStorage.getItem("token");
  return (
    <Wrap>
      <Inner>
        <ContentsBox key={data?.selectContents.id}>
          <HeaderBox>
            <ProfileImage
              src={`/img/search/${data?.selectContents.profileImg}.jpg`}
            />
            <TextBox>
              <LargeText>{data?.selectContents.writer}</LargeText>
              <SmallText>{data?.selectContents.date}</SmallText>
            </TextBox>
          </HeaderBox>
          <MainBox>
            <ImgBox>
              <Image src={`/img/contents/${data?.selectContents.image}`} />
            </ImgBox>
            <IconBox>
              <BsHeart className="icon" />
              <FaRegComment className="icon" />
            </IconBox>
            <TextBox>
              <EmpText>좋아요 {data?.selectContents.like}명</EmpText>
              {data?.selectContents.title
                .split("\n")
                .map((text: string, index: any) => (
                  <TitleText key={index}>{text}</TitleText>
                ))}
              {data?.selectContents.content
                .split("\n")
                .map((text: string, index: any) => (
                  <SmallText key={index}>{text}</SmallText>
                ))}
            </TextBox>
          </MainBox>
          <BottomBox>
            {!token ? (
              <CommentBox href={KAKAO_AUTH_URL}>
                로그인 후 이용해주세요..
              </CommentBox>
            ) : (
              <CommentInput
                onChange={({ target: { value } }) => setComment(value)}
                onKeyUp={(e) => enterSubmit(e)}
                placeholder="댓글을 입력해보세요."
                value={comment}
              />
            )}
          </BottomBox>
          <ChatBox>
            <SmallText>댓글{data?.selectContents.comments.length}개</SmallText>
            {data?.selectContents.comments.map((comment: any) => (
              <Chat key={comment.id}>
                <ChatTop>
                  <UserName>{comment.writer.name}</UserName>
                  {comment.kakaoId === myKakaoId && token ? (
                    <DeleteButton
                      onClick={() => {
                        deleteHandler(comment.id);
                      }}
                    >
                      삭제
                    </DeleteButton>
                  ) : null}
                </ChatTop>
                <Message>{comment.comment}</Message>
                <SmallText>{comment.date}</SmallText>
              </Chat>
            ))}
          </ChatBox>
        </ContentsBox>
      </Inner>
    </Wrap>
  );
}

export default ContentsDetail;

import { gql, useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
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
  HeartEmpty,
  HeartFull,
  RegComment,
} from "./Contents";
import { KAKAO_AUTH_URL } from "../../../auth/OAuth";
import { useState } from "react";
import Loading from "../../../components/Loading/Loading";

const SELECT_CONTENTS = gql`
  query SelectContents($selectContentsId: Int!, $selectCommentId: Int!) {
    selectContents(id: $selectContentsId) {
      cId
      cWriter
      cProfileImg
      cImage
      cTitle
      cContent
      cDate
      cLike
    }
    selectComment(id: $selectCommentId) {
      tId
      cId
      user_code
      comment
      kakao_nickname
      co_date
    }
    comments {
      tId
    }
    nowUser {
      user_code
    }
    likeContents {
      like_check
      lId
      user_code
      cId
    }
    nowUser {
      user_code
    }
  }
`;
const POST_COMMENT = gql`
  mutation PostComments(
    $tId: Int
    $cId: Int
    $userCode: Int
    $comment: String
  ) {
    postComments(
      tId: $tId
      cId: $cId
      user_code: $userCode
      comment: $comment
    ) {
      tId
      cId
      user_code
      comment
      kakao_nickname
      co_date
    }
  }
`;
const DELETE_COMMENT = gql`
  mutation DeleteComments($deleteCommentsId: Int!) {
    deleteComments(id: $deleteCommentsId) {
      tId
    }
  }
`;
const CLICK_LIKE = gql`
  mutation ClickLiked(
    $lId: Int!
    $userCode: Int!
    $cId: Int!
    $likeCheck: Int
  ) {
    clickLiked(
      lId: $lId
      user_code: $userCode
      cId: $cId
      like_check: $likeCheck
    ) {
      cId
      like_check
    }
  }
`;
const COUNT_LIKE = gql`
  mutation CountLike($cId: Int!, $cLike: Int!) {
    countLike(cId: $cId, cLike: $cLike) {
      cLike
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
  font-size: 0.7rem;
  border: 1px solid ${(props) => props.theme.secondColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  cursor: pointer;
`;

function Content() {
  const { id } = useParams();
  /*  const { data, loading } = useQuery<ContentsDetailComponent>(SELECT_CONTENTS, {
    variables: {
      selectContentsId: Number(id),
      selectCommentId: Number(id),
    },
  });
  const userCode = Number(data?.nowUser.map((ele) => ele.user_code));
  const [postComments] = useMutation(POST_COMMENT, {
    refetchQueries: [{ query: SELECT_CONTENTS }, "SelectContents"],
  });
  const [deleteComments] = useMutation(DELETE_COMMENT, {
    refetchQueries: [{ query: SELECT_CONTENTS }, "SelectContents"],
  });
  const [clickLiked] = useMutation(CLICK_LIKE, {
    refetchQueries: [{ query: SELECT_CONTENTS }, "SelectContents"],
  });
  const [countLike] = useMutation(COUNT_LIKE, {
    refetchQueries: [{ query: SELECT_CONTENTS }, "SelectContents"],
  });
  const [comment, setComment] = useState<string>("");
  const getIndex = String(new Date().getTime());
  const commentIndex = Number(
    `${id}${userCode}${getIndex.substring(getIndex.length - 3)}`
  );
  const userCodeMatchLikeContents = data
    ? data.likeContents.filter(
        (ele) => ele.user_code === userCode && ele.cId === Number(id)
      )
    : undefined;
  const likedCheck = userCodeMatchLikeContents
    ? userCodeMatchLikeContents.map((ele) => ele.like_check)
    : undefined;
  function likeHandler(id: number) {
    const lid = Number(`${userCode}${id}`);
    const contentsLike = Number(data?.selectContents[0].cLike);
    if (!token) {
      alert("로그인이 필요합니다.");
    } else {
      if (userCodeMatchLikeContents) {
        if (Number(userCodeMatchLikeContents[0]?.like_check) !== 1) {
          clickLiked({
            variables: {
              lId: lid,
              userCode: userCode,
              cId: id,
              likeCheck: 1,
            },
          });
          countLike({
            variables: {
              cId: id,
              cLike: contentsLike + 1,
            },
          });
        } else if (Number(userCodeMatchLikeContents[0]?.like_check) !== 0) {
          clickLiked({
            variables: {
              lId: lid,
              userCode: userCode,
              cId: id,
              likeCheck: 0,
            },
          });
          countLike({
            variables: {
              cId: id,
              cLike: contentsLike - 1,
            },
          });
        }
      }
    }
  }
  function enterSubmit(e: any) {
    if (e.key === "Enter") {
      postComments({
        variables: {
          tId: commentIndex + 1,
          cId: Number(id),
          userCode: userCode,
          comment: comment,
        },
      });
      setComment("");
    }
  }
  function deleteHandler(id: number) {
    deleteComments({
      variables: {
        deleteCommentsId: id,
      },
    });
    alert("댓글이 삭제되었습니다.");
  }
  const token = window.localStorage.getItem("token"); */
  return (
    <Wrap>
      {/*   {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Inner>
            <ContentsBox key={data?.selectContents[0].cId}>
              <HeaderBox>
                <ProfileImage
                  src={`/img/search/${data?.selectContents[0].cProfileImg}.jpg`}
                />
                <TextBox>
                  <LargeText>{data?.selectContents[0].cWriter}</LargeText>
                  <SmallText>{data?.selectContents[0].cDate}</SmallText>
                </TextBox>
              </HeaderBox>
              <MainBox>
                <ImgBox>
                  <Image
                    src={`/img/contents/${data?.selectContents[0].cImage}`}
                  />
                </ImgBox>
                <IconBox>
                  {Number(likedCheck) !== 1 ? (
                    <HeartEmpty
                      onClick={() =>
                        likeHandler(Number(data?.selectContents[0].cId))
                      }
                    />
                  ) : (
                    <HeartFull
                      onClick={() =>
                        likeHandler(Number(data?.selectContents[0].cId))
                      }
                    />
                  )}
                  <RegComment />
                </IconBox>
                <TextBox>
                  <EmpText>좋아요 {data?.selectContents[0].cLike}명</EmpText>
                  {data?.selectContents[0].cTitle
                    .split("\n")
                    .map((text: string, index: any) => (
                      <TitleText key={index}>{text}</TitleText>
                    ))}
                  {data?.selectContents[0].cContent
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
                {data?.selectComment.map((ele) => (
                  <Chat key={ele.tId}>
                    <ChatTop>
                      <UserName>{ele.kakao_nickname}</UserName>
                      {ele.user_code === userCode && token ? (
                        <DeleteButton
                          onClick={() => {
                            deleteHandler(ele.tId);
                          }}
                        >
                          삭제
                        </DeleteButton>
                      ) : null}
                    </ChatTop>
                    <Message>{ele.comment}</Message>
                    <SmallText>{ele.co_date.substring(10, -1)}</SmallText>
                  </Chat>
                ))}
              </ChatBox>
            </ContentsBox>
          </Inner>
        </>
      )} */}
    </Wrap>
  );
}

export default Content;

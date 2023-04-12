import { Button, TextField } from "@mui/material";
import styled from "styled-components";

export const ReviewsContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 2.5rem auto 4rem;
  border-top: 1px solid ${(props) => props.theme.secondColor};
`;

export const ReviewInforBox = styled.div`
  width: 100%;
  margin: 1rem 0;
`;

export const FalseReviewButton = styled.span`
  width: 100%;
  height: 40px;
  margin: 1rem auto;
  display: flex;
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 10px;
  align-items: center;
  border: none;
  font-size: 0.9rem;
  color: ${(props) => props.theme.bgColor};
  font-family: "Noto Sans KR", sans-serif;
`;
export const WriteReviewInput = styled(TextField)`
  border-color: ${(props) => props.theme.boxColor};
  &:focus {
    border-color: ${(props) => props.theme.secondColor};
  }
`;

export const WriteEditReviewInput = styled(WriteReviewInput)``;

export const WriteReviewButton = styled(Button)`
  background-color: ${(props) => props.theme.boxColor};

  &:hover {
    background-color: ${(props) => props.theme.secondColor};
  }
`;

export const ReviewListContainer = styled.div`
  width: 100%;
  height: auto;
  border-top: 1px solid ${(props) => props.theme.jaygColor};
`;

export const ReviewBox = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 2px solid ${(props) => props.theme.borderColor};
  font-family: "Noto Sans KR", sans-serif;
`;

export const ReviewWriter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const ReviewRate = styled(ReviewWriter)``;
export const UserName = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.1rem;
  }
`;

export const ReViewContent = styled.div`
  width: 100%;
  height: auto;
  margin: 1rem 0;
`;

export const NormalText = styled.p`
  font-size: 2.1rem;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.3rem;
  }
`;

export const SubNormalText = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.2rem;
  @media ${(props) => props.theme.mobile} {
    font-size: 1rem;
  }
`;

export const ReviewText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  @media ${(props) => props.theme.mobile} {
    font-size: 1rem;
  }
`;

export const ReviewDate = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.secondColor};
  @media ${(props) => props.theme.mobile} {
    font-size: 0.8rem;
  }
`;

export const ReviewUtilButton = styled.span`
  width: 35px;
  height: 20px;
  font-size: 0.7rem;
  border: 1px solid ${(props) => props.theme.secondColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1px;
  cursor: pointer;
`;

import { Link } from "react-router-dom";
import styled from "styled-components";
const Wrap = styled.div`
  width: 100%;
`;
const Inner = styled.div`
  width: 50%;
  height: auto;
  margin: 5rem auto;
`;
const Alert = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 auto;
`;
const Text = styled.span`
  width: 100%;
  font-size: 1.1rem;
  line-height: 1.8rem;
  font-weight: 500;
  text-align: center;
  margin-top: 1.3rem;
  color: ${(props) => props.theme.secondTextColor};
`;
const Button = styled(Link)`
  width: 250px;
  height: 40px;
  color: ${(props) => props.theme.bgColor};
  background-color: ${(props) => props.theme.secondTextColor};
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem auto;
  cursor: pointer;
`;
function EmptyCart() {
  return (
    <Wrap>
      <Inner>
        <Alert>
          <Image src={"/img/etc/lion_heart_etc.jpg"} alt="사진" />
          <Text>
            아직 관심상품이 없네요!
            <br />
            귀여운 프렌즈 상품을 추천드릴게요
          </Text>
          <Button to="/best">인기상품 보기</Button>
        </Alert>
      </Inner>
    </Wrap>
  );
}

export default EmptyCart;

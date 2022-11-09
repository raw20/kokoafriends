import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
`;
const Inner = styled.div`
  width: 50%;
  margin: 20rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 5%;
  height: 5%;
`;
function Loading() {
  return (
    <Wrap>
      <Inner>
        <Image src="/img/loading/spinner.gif" alt="loading" />
      </Inner>
    </Wrap>
  );
}

export default Loading;

import styled from "styled-components";
import { useEffect, useState } from "react";

const ButtonArea = styled.div`
  position: fixed;
  right: 10%;
  bottom: 10%;
  z-index: 1;
`;
const Button = styled.button`
  width: 55px;
  height: 55px;
  line-height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.secondColor};
  border: none;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 20%;
  box-shadow: 2px 3px 3px 0px;
  &:hover {
    opacity: 0.7;
  }
`;

function ScrollTopButton() {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    function showButtonHandle() {
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    window.addEventListener("scroll", showButtonHandle);

    return () => {
      window.removeEventListener("scroll", showButtonHandle);
    };
  }, []);
  function scrollTopHandler() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      {show && (
        <>
          <ButtonArea>
            <Button onClick={() => scrollTopHandler()}>Top</Button>
          </ButtonArea>
        </>
      )}
    </>
  );
}

export default ScrollTopButton;

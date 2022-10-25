import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";

const Wrap = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Control = styled.span`
  width: 25px;
  height: 25px;
  margin: 1rem;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.accentColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Input = styled.input`
  width: 50px;
  height: 25px;
  text-align: center;
`;

function ItemNumControl(
  number: number,
  setNumber: Dispatch<SetStateAction<number>>
) {
  function plusNumber() {
    setNumber(number + 1);
  }
  function minusNumber() {
    if (number > 1) setNumber(number - 1);
  }
  return (
    <Wrap>
      <Control onClick={() => minusNumber()}>-</Control>
      <Input
        type="number"
        value={number}
        onChange={({ target: { value } }) => setNumber(Number(value))}
      />
      <Control onClick={() => plusNumber()}>+</Control>
    </Wrap>
  );
}

export default ItemNumControl;

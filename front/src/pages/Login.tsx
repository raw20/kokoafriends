import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { KAKAO_AUTH_URL } from "../auth/OAuth";

const Btn = styled.button`
  width: 100px;
  height: 50px;
`;

function Login() {
  return (
    <div>
      <Btn>
        <a href={KAKAO_AUTH_URL}>카카오로그인</a>
      </Btn>
    </div>
  );
}

export default Login;

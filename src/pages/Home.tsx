import React from "react";
import styled from "styled-components";
import { Content } from "../components/Content";
import theme from "../styles/theme";

export const Home = () => {
  if (!localStorage.getItem("token")) {
    return (
    <Content>
      <Title>로그인</Title>
      <Input placeholder="아이디"/>
      <Input type="password" placeholder="비밀번호"/>
      <Button>로그인</Button>
    </Content>);
  }
  return <div>Home</div>;
};

const Title = styled.h1`
  font-size: 30px;
`

const Input = styled.input`
  font-size: 20px;
  width: 80%;
  background-color: white;
  margin-top: 10%;

  padding-left: 10px;
  &::placeholder {
    color: lightgray;
  }
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 50px;
  margin-top: 10%;
  background-color: ${theme.green4};

  &:hover {
    background-color: ${theme.green3};
    cursor: pointer;
  }
`
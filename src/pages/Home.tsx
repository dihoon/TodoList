import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import handleLogin from "../api/handleLogin";
import { Content } from "../components/Content";
import theme from "../styles/theme";
import { TodoList } from "./TodoList";

export const Home = () => {
  const navigate = useNavigate();

  if (!localStorage.getItem("token")) {
    return (
      <Content>
        <Form
          onSubmit={async (e) => {
            await handleLogin(e);
            navigate("/");
          }}
        >
          <Title>로그인</Title>
          <Input name="userId" placeholder="아이디" />
          <Input name="password" type="password" placeholder="비밀번호" />
          <Button type="submit">로그인</Button>
        </Form>
      </Content>
    );
  }
  return <TodoList />;
};

const Title = styled.h1`
  font-size: 30px;
`;

const Input = styled.input`
  font-size: 20px;
  width: 80%;
  background-color: white;
  margin-top: 10%;

  padding-left: 10px;
  &::placeholder {
    color: lightgray;
  }
`;

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
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

import { useState } from 'react'
import theme from '../styles/theme'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Content } from '../components/Content'
import { handleRegister } from '../api/handleRegister'

export const Register = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  return (
    <Content>
      <Form onSubmit={(event)=>{
        handleRegister(event);
        navigate("/");
      }}>
        <Title>회원가입</Title>
        <Input name="userId" placeholder="아이디" />
        <Input onChange={(e)=>setPassword(e.target.value)} name="password" type="password" placeholder="비밀번호" />
        <Input onChange={(e)=>setPasswordCheck(e.target.value)} name="password" type="password" placeholder="비밀번호 재확인" />
        {
          !(password === passwordCheck) && <Span>비밀번호가 일치하지 않습니다.</Span> 
        }
        <Button>회원가입</Button>
      </Form>
    </Content>
  )
}

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
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

const Span = styled.span`
  color: red;
  width: 80%;
  text-align: left;
`
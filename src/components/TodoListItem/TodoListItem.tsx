import React from "react";
import { StyledDiv, TextInput, Button, Checkbox } from "./TodoListItem.styles";

export const TodoListItem = () => {
  return <StyledDiv>
    <Checkbox type="checkbox" />
    <TextInput />
    <Button>수정</Button>
    <Button>삭제</Button>
  </StyledDiv>;
};

export const TodoListAddInput = () => {

  return <StyledDiv>
    <TextInput placeholder="할 일을 입력하세요."/>
    <Button>+</Button>
  </StyledDiv>;
}
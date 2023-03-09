import React from "react";
import { Content } from "../../common/Content/Content";
import { Button } from "../../common/Button/Button";
import {
  TodoContainer,
  TodoListContainer,
} from "./TodoList.styles";
import {
  TodoListAddInput,
  TodoListItem,
} from "../../components/TodoListItem/TodoListItem";

const TodoList = () => {
  return (
    <Content title="Todo List">
      <TodoContainer>
        <TodoListAddInput />
        <TodoListContainer>
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
        </TodoListContainer>
      </TodoContainer>
      <Button type="button">전체 삭제</Button>
    </Content>
  );
};

export default TodoList;

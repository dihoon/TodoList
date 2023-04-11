import { useQueryClient, useQuery, useMutation } from "react-query";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Content } from "../components/Content";
import { todoDb } from "../mocks/db";
import theme from "../styles/theme";
import handleAddTodo from "../api/handleAddTodo";
import axiosInstance from "../api/axiosInstance";
import handleDeleteTodo from "../api/handleDeleteTodo";
import handleDeleteAllTodos from "../api/handleDeleteAllTodos";
import { Todo } from "../components/Todo";

export interface Todo {
  id: number;
  check: boolean;
  value: string;
}

const getTodos = async () => {
  const res = await axiosInstance.get("/todolist", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  return res.data;
}


export const TodoList = () => {
  const queryClient = useQueryClient();

  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useQuery(['todos'], () => getTodos(),{
    onSuccess: (data) => setTodos(data)
  });

  const addTodolist = useMutation(handleAddTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["todos"]});
    }
  })

  const DeleteAllTodolist = useMutation(handleDeleteAllTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["todos"]});
    }
  });

  return (
    <Content>
      <Title>Todo List</Title>
      <TodoInputContainer>
        <Input placeholder="할 일을 입력하세요" onChange={(e)=>{setInput(e.target.value)}} value={input}/>
        <MiniButton onClick={async ()=> {
          addTodolist.mutate(input);
          setInput("");
        }}>+</MiniButton>
      </TodoInputContainer>
      <Scroller>
        {todos.map((todo) => {
          return (
            // <TodoInputContainer key={todo.id.toString()}>
            //   <Checkbox defaultChecked={todo.check} />
            //   <Input defaultValue={todo.value} disabled={todo.check} />
            //   <MiniButton onClick={async () => {

            //   }}>수정</MiniButton>
            //   <MiniButton data-id={todo.id.toString()} onClick={async (e) => {
            //     const target = e.target as HTMLButtonElement
            //     const id = parseInt(target.getAttribute("data-id") || "");
            //     DeleteTodolist.mutate(id);
            //   }}>삭제</MiniButton>
            // </TodoInputContainer>
            <Todo key={todo.id.toString()} todoId={todo.id} check={todo.check} value={todo.value}/>
          );
        })}
      </Scroller>
      <Button
        onClick={() => {
          DeleteAllTodolist.mutate();
        }}
      >
        전체 삭제
      </Button>
    </Content>
  );
};

const Title = styled.h1`
  font-size: 30px;
`;

const TodoInputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin-top: 3%;
`;

const Scroller = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: auto;
  margin-bottom: 3%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Input = styled.input`
  font-size: 20px;
  width: 100%;
  background-color: white;

  padding-left: 10px;
  &::placeholder {
    color: lightgray;
  }

  color: ${(props) => (props.disabled ? "lightgray" : "black")};
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

const MiniButton = styled.button`
  display: flex;
  justify-content: center;
  width: 10%;
  flex-shrink: 0;
  background-color: ${theme.green4};

  &:hover {
    background-color: ${theme.green3};
    cursor: pointer;
  }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  background-color: ${theme.green4};
  margin: 0;
  width: 10%;
  display: grid;
  place-content: center;
  flex-shrink: 0;

  &::before {
    content: "";
    width: 15px;
    height: 15px;
    background-color: red;
    transform: scale(0);
    transition: 100ms transform ease-in-out;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  &:checked::before {
    transform: scale(1);
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }
`;

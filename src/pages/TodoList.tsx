import { useQueryClient, useQuery, useMutation } from "react-query";
import { useState } from "react";
import styled from "styled-components";
import { Content } from "../components/Content";
import theme from "../styles/theme";
import handleAddTodo from "../api/handleAddTodo";
import axiosInstance from "../api/axiosInstance";
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
    onSuccess: (data) => setTodos(data),
    refetchOnWindowFocus: false,
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
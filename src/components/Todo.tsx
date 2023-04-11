import React, { useState, useEffect } from "react";
import { useQueryClient, useMutation } from "react-query";
import styled from "styled-components";
import theme from "../styles/theme";
import { updateTodo } from "../api/updateTodo";
import handleDeleteTodo from "../api/handleDeleteTodo";

interface TodoProps {
  todoId: number;
  value: string;
  check: boolean;
}

export const Todo = (props: TodoProps) => {
  const [input, setInput] = useState(props.value);
  const [IsChecked, setIsChecked] = useState<boolean>(props.check);
  const [IsUpdated, setIsUpdate] = useState<boolean>(false);
  const queryClient = useQueryClient();

  useEffect(()=>{
    updateTodo(props.todoId, { check: IsChecked });
  },[IsChecked]);

  const handleUpdateTodo = async (e: React.ChangeEvent | React.MouseEvent) => {
    // 체크박스 처리
    console.log(e.type);
    if (e.type === "change") {
      setIsChecked(state=>!state);
    }

    // input 업데이트 처리
    if (e.type === "click") {
      if (IsChecked) return;
      setIsUpdate((state) => !state);
      if (!IsUpdated) return;
      updateTodo(props.todoId, { value: input });
    }
  };

  const queryDeleteTodo = useMutation(handleDeleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <Container>
      <Checkbox onChange={handleUpdateTodo} defaultChecked={IsChecked} />
      <Input
        data-checked={IsChecked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInput(e.target.value);
        }}
        defaultValue={input}
        disabled={!IsUpdated}
      />
      <MiniButton
        data-checked={IsChecked}
        data-isupated={IsUpdated}
        onClick={handleUpdateTodo}
      >
        {IsUpdated ? "수정완료" : "수정"}
      </MiniButton>
      <MiniButton onClick={() => queryDeleteTodo.mutate(props.todoId)}>
        삭제
      </MiniButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin-top: 3%;
`;

const Input = styled.input`
  font-size: 20px;
  width: 100%;
  background-color: white;

  padding-left: 10px;

  &[data-checked="true"] {
    color: red;
    text-decoration: line-through;
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

  &[data-checked="true"] {
    color: gray;

    &:hover {
      background-color: ${theme.green4};
      cursor: auto;
    }
  }
`;

import React from "react";
import axiosInstance from "./axiosInstance";

const handleAddTodo = async (input: string) => {
  const todo = { value: input };
  const token = localStorage.getItem("token");
  const data = await axiosInstance
    .post("todolist", todo, {
      headers: {
        Authorization: `${token}`,
      }
    })
    .then((res) => res.data);
  return data;
};

export default handleAddTodo;

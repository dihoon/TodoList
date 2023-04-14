import axiosInstance from "./axiosInstance";

interface Update {
  check?: boolean;
  value?: string;
}

export const updateTodo = async (id: number, update: Update) => {
  const todoId = id;
  const token = localStorage.getItem("token");
  axiosInstance.patch(`todolist/${todoId}`, update, {
    headers: {
      Authorization: `${token}`,
    }
  });
}
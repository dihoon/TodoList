import axiosInstance from "./axiosInstance";

const handleDeleteTodo = async (id: number) => {
  axiosInstance.delete(`todolist/${id}`);
};

export default handleDeleteTodo;

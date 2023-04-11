import axiosInstance from "./axiosInstance";

const handleDeleteAllTodos = async () => {
  axiosInstance.delete("todolist");
};

export default handleDeleteAllTodos;
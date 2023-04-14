import axiosInstance from "./axiosInstance";

const handleDeleteAllTodos = async () => {
  const token = localStorage.getItem("token");
  axiosInstance.delete("todolist", {
    headers: {
      Authorization: `${token}`,
    }
  });
};

export default handleDeleteAllTodos;
import axiosInstance from "./axiosInstance";

const handleDeleteTodo = async (id: number) => {
  const token = localStorage.getItem("token");
  axiosInstance.delete(`todolist/${id}`, {
    headers: {
      Authorization: `${token}`,
    }
  });
};

export default handleDeleteTodo;

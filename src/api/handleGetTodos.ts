import axiosInstance from "./axiosInstance";

const handleGetTodos = async () => {
  const token = localStorage.getItem("token");

  const res = await axiosInstance.get("todolist", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  return res.data;
}
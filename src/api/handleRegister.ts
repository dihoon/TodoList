import React from "react";
import axiosInstance from "./axiosInstance";

export const handleRegister = (event : React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const userId = formData.get("userId");
  const password = formData.get("password");

  axiosInstance.post("register", {userId, password});
}
import { FormEvent } from "react";
import axiosInstance from "./axiosInstance";

const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const userId = formData.get("userId");
  const password = formData.get("password");

  const loginData = {
    userId,
    password,
  };

  const loginRes = await axiosInstance.post("user", loginData);

  const response = loginRes.data;

  if (response.result === "success") {
    console.log("로그인 성공");
    const token = response.token;
    localStorage.setItem("token", token);
  }

  if (response.result === "fail") {
    console.log("회원 정보 없음");
  }

  if (response.result === "not matched password") {
    console.log("비밀번호 불일치");
  }
};

export default handleLogin;

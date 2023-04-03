import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./layout/Layout";
import { TodoList } from "./pages/TodoList";
import { Register } from "./pages/Register";

export interface RouterElement {
  id: number; // 페이지 아이디
  path: string; // 페이지 경로
  label: string; // 헤더에 표시할 메뉴 이름
  element: React.ReactNode; // 페이지 엘리먼트
  withAuth?: boolean; // 인증 필수 여부
}

export const routerData: RouterElement[] = [
  {
    id: 0,
    path: "/",
    label: "로그인",
    element: <Home />,
    withAuth: false,
  },
  {
    id: 1,
    path: "/",
    label: "로그아웃",
    element: <Home />,
    withAuth: true,
  },
  {
    id: 2,
    path: "/register",
    label: "회원가입",
    element: <Register />,
    withAuth: false,
  },
];

export const router = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: <Layout>{router.element}</Layout>,
    };
  })
);

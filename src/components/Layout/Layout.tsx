import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { LayoutContainer } from "./Layout.styles";
import { Main } from "../Main/Main";

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </LayoutContainer>
  );
};

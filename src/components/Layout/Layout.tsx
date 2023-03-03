import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import {LayoutContainer} from "./Layout.styles";

export const Layout = () => {
  return (
  <LayoutContainer>
    <Header />
    <Outlet />
  </LayoutContainer>
  );
};

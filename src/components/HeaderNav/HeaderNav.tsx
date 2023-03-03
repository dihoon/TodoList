import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderNavContainer,
  StyledLink,
} from "./HeaderNav.styles";

const HeaderNav = () => {
  return (
    <HeaderNavContainer>
      <StyledLink to="/">로그인</StyledLink>
      <StyledLink to="/register">회원가입</StyledLink>
    </HeaderNavContainer>
  );
};

export default HeaderNav;

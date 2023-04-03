import React, { useState, useEffect, useMemo, createContext } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Section } from "../components/Section";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  return (
    <Container>
      <Header />
      <Section>{props.children}</Section>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

interface ContentProps {
  children: React.ReactNode;
}

export const Content = (props: ContentProps) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: center;
  background-color: ${theme.green2};
  overflow: hidden;
  padding: 50px 0;
  position: relative;

  @media (max-width: 500px) {
    width: 100%;
  }

  @media (max-height: 600px) {
    height: 100%;
  }

`;

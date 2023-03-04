import React from "react";
import { Container, Title } from "./Content.styles";

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const Content = (props: Props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      {props.children}
    </Container>
  );
};

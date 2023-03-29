import React from "react";
import styled from "styled-components";

interface SectionProps {
  children: React.ReactNode;
}

export const Section = (props: SectionProps) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`
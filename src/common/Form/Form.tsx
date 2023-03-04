import React from "react";
import { StyledForm } from "./Form.styles";

interface Props {
  action?: string;
  method?: string;
  children: React.ReactNode;
}

export const Form = (props: Props) => {
  return (
    <StyledForm
      action={props.action}
      method={props.method}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {props.children}
    </StyledForm>
  );
};

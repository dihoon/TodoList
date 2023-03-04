import React from "react";
import { Input } from "../Input/Input.styles";

interface Props {
  state?: string;
  placeholder: string;
}

export const PasswordInput = (props : Props) => {
  return (
    <Input type="password" placeholder={props.placeholder}/>
  );
};

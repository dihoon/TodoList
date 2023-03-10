import React from "react";
import { Input } from "../../common/Input/Input.styles";

interface Props {
  state?: string;
  placeholder: string;
}

export const TextInput = (props: Props) => {
  return <Input type="text" placeholder={props.placeholder} />;
};

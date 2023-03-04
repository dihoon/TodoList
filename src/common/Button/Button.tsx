import React from 'react'
import { StyledButton } from './Button.styles';

interface Props {
  type?: "button" | "submit";
  children?: React.ReactNode;
}

export const Button = ({type, children} : Props) => {
  return (
    <StyledButton type={type}>{children}</StyledButton>
  )
}

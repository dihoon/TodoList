import React from "react";
import { ListContainer, StyledList } from "./List.styles";

interface Props {
  children: React.ReactNode;
}

export const List = (props : Props) => {
  return (
    <ListContainer>
      {props.children}
    </ListContainer>
  );
};

export const ListItem = (props : Props) => {
  return (
    <StyledList>{props.children}</StyledList>
  )
}
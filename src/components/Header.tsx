import React from "react";
import styled from "styled-components";
import { useRouter } from "../hooks/useRouter";
import { routerData } from "../router";
import theme from "../styles/theme";

export const Header = () => {
  const { currentPath, routeTo } = useRouter();

  const menuClickHandler = (path : string) => {
    routeTo(path);
  }

  return <Container><Menu>{
    routerData.map(element => {
      if (element.withAuth){
        return;
      }
      return <div onClick={()=> menuClickHandler(element.path)}>{element.label}</div>
    })
    }</Menu></Container>;
};

const Container = styled.div`
  display: flex;
  height: 50px;
  justify-content: end;
  align-items: center;
  background-color: ${theme.green1};
`;

const Menu = styled.div`
  display: flex;
  
  & > div {
    margin-right: 10px;
    
    &:hover {
      cursor: pointer;
    }
  }
  width: fit-content;
`
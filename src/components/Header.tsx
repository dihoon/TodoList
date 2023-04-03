import React from "react";
import styled from "styled-components";
import { useRouter } from "../hooks/useRouter";
import { routerData, RouterElement } from "../router";
import theme from "../styles/theme";

export const Header = () => {
  const { currentPath, routeTo } = useRouter();

  const menuClickHandler = (path: string) => {
    if (path === "/" && !!localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
    routeTo(path);
  };

  const headerNav : RouterElement[] = routerData.reduce((result, router) => {
    const isLogin = !!localStorage.getItem("token");
    if (!router.withAuth === isLogin) return result;
    return [...result, router];
  }, [] as RouterElement[]);

  return (
    <Container>
      <Menu>
        {headerNav.map((element) => {
          return (
            <div
              key={element.id}
              onClick={() => menuClickHandler(element.path)}
            >
              {element.label}
            </div>
          );
        })}
      </Menu>
    </Container>
  );
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
`;

import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const HeaderNavContainer = styled.div`
width: 200px;
// background-color: red;
display: flex;
justify-content: space-evenly;
text-decoration: none;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
`
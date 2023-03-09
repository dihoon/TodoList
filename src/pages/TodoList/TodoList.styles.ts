import styled from "@emotion/styled";
import { StyledButton } from "../../common/Button/Button.styles";

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 10%;
`

export const TodoInput = styled.input`
  padding: 0;
  font-size: 20px;
  width: 100%;
  height: auto;
`

export const TodoButton = styled(StyledButton)`
  padding: 0;
  width: 10%;
  height: auto;
`;

export const TodoListContainer = styled.div`
  height: 50%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  
`
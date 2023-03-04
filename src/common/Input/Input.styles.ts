import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface Props {
  state?: string;
}

export const Input = styled.input<Props>`
  font-size: 20px;
  height: 40px;
  border: none;
  padding: 5px;
  width: 100%;

  ${(props) =>
    props.state === "done" &&
    css`
      &::placeholder {
        color: red;
      }
    `};
`;

import styled from "@emotion/styled";

export const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
`;

export const TextInput = styled.input`
  padding: 0;
  font-size: 20px;
  width: 100%;
  height: auto;
`;

export const Button = styled.button`
  box-sizing: border-box;
  padding: 0;
  font-size: 10px;
  border: none;
  width: 40px;
  background-color: #8ec3b0;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    background-color: #9ed5c5;
  }
`;

export const Checkbox = styled.input`
  &[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
    appearance: none;
    background-color: #8ec3b0;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 40px;
    height: auto;

    display: grid;
    place-content: center;
    flex-shrink: 0;
  }

  &[type="checkbox"]::before {
    padding: 0;
    content: "";
    width: 15px;
    height: 15px;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1px 1px #8ec3b0;
    background-color: CanvasText;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  &[type="checkbox"]:checked::before {
    transform: scale(1);
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }
`;

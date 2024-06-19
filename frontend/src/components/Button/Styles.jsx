import styled from "styled-components";
import { colors } from "../../styles/Variables";

export const Btn = styled.button`
  padding: 0.4rem 1rem;
  background-color: ${colors.green};
  border-radius: 0.25rem;
  outline: none;
  border: none;
  cursor: pointer;
  color: ${colors.veryLightGray};

  &:hover {
    color: variables.$white;
    background-color: ${colors.darkGreen};
    scale: 1.05;
  }
`;

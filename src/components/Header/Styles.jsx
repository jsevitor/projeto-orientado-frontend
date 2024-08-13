import styled from "styled-components";
import { colors } from "../../styles/Variables";

export const Container = styled.header`
  height: 8rem;
  max-height: 80px;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: ${colors.gradient};
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-size: 24px;

  span {
    font-weight: 300;
    color: ${colors.white};
    font-size: 24px;
  }

  @media (min-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const MenuButton = styled.i`
  font-size: 24px;
  color: ${colors.white};
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }
`;

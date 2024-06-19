import styled from "styled-components";
import { colors } from "../../styles/Variables";

export const Container = styled.div`
  border-radius: 0.5rem;
  width: 100%;
  height: fit-content;
  box-shadow: 10px 10px 15px -8px rgba(47, 47, 47, 0.5);

  @media (min-width: 768px) {
    max-width: 90%;
  }

  @media (min-width: 1024px) {
    max-width: 40rem;
  }
`;

export const CardHeader = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: ${colors.gradient};
  border-radius: 0.5rem 0.5rem 0 0;

  i {
    color: ${colors.veryLightGray};
    font-size: 35px;
    opacity: 0.3;
  }

  @media (min-width: 1024px) {
    padding: 0.5rem 2rem;
  }
`;

export const Icon = styled.i`
  font-size: 35px;
`;

export const Title = styled.h2`
  color: ${colors.veryLightGray};

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const CardBody = styled.div`
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${colors.lightGray};
  border-radius: 0 0 0.5rem 0.5rem;

  @media (min-width: 1024px) {
    /* width: 40rem; */
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    background-color: ${colors.lightGray};
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;

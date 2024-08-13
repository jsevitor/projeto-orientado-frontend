import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    max-width: 1000px;
  }
`;

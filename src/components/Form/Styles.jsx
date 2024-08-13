import styled from "styled-components";
import { colors } from "../../styles/Variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${(props) => (props.error ? `${colors.warn}` : `${colors.dark}`)};
  font-size: 0.8rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid
    ${(props) => (props.error ? `${colors.warn}` : `${colors.green}`)};
  border-radius: 0.2rem;

  @media (min-width: 1024px) {
    padding: 0.3rem 0.5rem;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${colors.green};
  border-radius: 0.2rem;

  @media (min-width: 1024px) {
    padding: 0.3rem 0.5rem;
  }
`;

export const Warn = styled.span`
  color: ${colors.warn};
  font-size: 0.6rem;
`;

export const Option = styled.option``;

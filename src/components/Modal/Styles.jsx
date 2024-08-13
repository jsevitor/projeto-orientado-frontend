import styled from "styled-components";
import { colors } from "../../styles/Variables";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 30rem;
  height: 10rem;
  padding: 1rem;
  background: ${colors.white};
  border-radius: 1rem;
`;

export const ModalDivider = styled.hr`
  opacity: 0.4;
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    width: 50%;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    opacity: 1;
    transition: 0.3s;
  }

  button:hover {
    opacity: 0.6;
  }

  button:first-child {
    background-color: red;
    color: white;
  }

  button:last-child {
    background-color: gray;
    color: white;
  }
`;

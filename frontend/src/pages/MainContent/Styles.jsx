//Styles.jsx
import styled from "styled-components";
import { measures } from "../../styles/Variables";

export const Container = styled.main`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  transition: left 0.6s ease;

  @media (min-width: 1024px) {
    z-index: 1;
    position: fixed;
    top: 80px;
    left: 0;
    padding: 2rem;
    height: ${measures.heightSize};
    max-width: calc(100% - 80px);
    width: ${(props) =>
      props.collapsed ? "calc(100% - 80px)" : "calc(100% - 300px)"};
    left: ${(props) => (props.collapsed ? "80px" : "300px")};
    overflow-y: scroll;
  }
`;

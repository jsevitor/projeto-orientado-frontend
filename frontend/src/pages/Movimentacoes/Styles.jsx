import styled from "styled-components";
import { colors } from "../../styles/Variables";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  .filters {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    input {
      padding: 0.2rem 0.8rem;
      background-color: ${colors.veryLightGray};
      border: 1px solid ${colors.green};
      border-radius: 50px;
      outline: none;
    }
  }

  @media (min-width: 1024px) {
    justify-content: space-between;

    .filters {
      display: flex;
      gap: 1rem;

      input {
        width: 350px;
        padding: 0.2rem 0.8rem;
        background-color: ${colors.veryLightGray};
        border: 1px solid ${colors.green};
        border-radius: 50px;
        outline: none;
      }
    }
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  padding: 1rem 0;
`;

export const Table = styled.table`
  background-color: ${colors.lightGray};
  width: 100%;
  height: fit-content;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: ${colors.green};

  th {
    padding: 0.5rem;
    color: ${colors.white};
    text-align: left;
    border: 1px solid ${colors.veryLightGray};
    font-size: 14px;
    text-align: center;
  }
`;

export const Tbody = styled.tbody`
  td {
    padding: 0.1rem 0.5rem;
    width: auto;
    height: fit-content;
    // text-align: center;
    border: 1px solid ${colors.veryLightGray};
    font-size: 13px;
  }
  img {
    width: 20px;
    height: 20px;
    border-radius: 100%;
  }
  i {
    padding: 0.5rem;
    font-size: 14px;
    opacity: 1;
  }

  :hover i {
    cursor: pointer;
  }

  .middle {
    text-align: center;
  }

  .values {
    text-align: right;
  }
`;

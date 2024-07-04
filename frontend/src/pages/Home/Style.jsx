import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  width: 100%;
`;

export const Left_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

export const Welcome = styled.p`
  font-size: 1.1rem;
`;

export const Title = styled.div`
  font-size: 4rem;
  font-weight: 500;

  span {
    font-size: 4rem;
    font-weight: 200;
  }
`;

export const Slogan = styled.p`
  font-size: 1.5rem;
  font-weight: 300;

  span {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const Right_Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageSmall = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border: 1px solid #000;
`;

export const ImageBig = styled.img`
  width: 100%;
  height: 800px;
  object-fit: cover;
  object-position: center;
  border: 1px solid #000;
`;


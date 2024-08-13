import React from "react";
import {
  Container,
  Grid,
  ImageBig,
  ImageSmall,
  Left_Container,
  Right_Container,
  Slogan,
  Title,
  Welcome,
} from "./Style";

const Home = () => {
  return (
    <Container>
      <Left_Container>
        <Welcome>Bem-vindo à,</Welcome>
        <Title>
          FRIOS<span>MORETTI</span>
        </Title>
        <Slogan>
          Controle <span>Perfeito</span>, Estoque <span>Sempre</span> Fresco
        </Slogan>
      </Left_Container>
      <Right_Container>
        <Grid>
          <ImageSmall src="https://img.freepik.com/free-photo/salami-platter-with-pepperoni-salami_140725-5908.jpg?t=st=1720049902~exp=1720053502~hmac=30d5a16466505e51fb46473538b5c7b048b148bca423757e99a027b1ba18259f&w=740" />
          <ImageSmall src="https://img.freepik.com/free-photo/antipasto-catering-platter-with-bacon-jerky-salami-cheese-grapes-wooden-table_2829-19732.jpg?t=st=1720050165~exp=1720053765~hmac=4ab21acbf468eab041729291fb934c133bcbd48c8e3113b4b8162c0a173ee1f7&w=826" />
          <ImageSmall src="https://img.freepik.com/free-photo/wine-snacks-platter-with-sausages-salami-smoked-meat-slices-cheese-olive_140725-8479.jpg?t=st=1720050195~exp=1720053795~hmac=eba67a8a7cc9bb5f507cbb8ddcfd7383c42e9900c9b1d707789abe5a82466e88&w=740" />
          <ImageSmall src="https://img.freepik.com/free-photo/isometric-cheese-composition_23-2148161904.jpg?t=st=1720050344~exp=1720053944~hmac=a982c9be1f260ab72accd663e694fc3d35e67448b1ab2421ba41c94ccdc9dbb9&w=1380" />
        </Grid>
        <ImageBig src="https://img.freepik.com/free-photo/front-view-type-sausage-plate-with-herbs-spices-table_140725-11380.jpg?t=st=1723502376~exp=1723505976~hmac=336b7bc4acf36eb5d6600ced3575a566be34bde780daf99c7a2d709fb69f6ddd&w=996" />
      </Right_Container>
    </Container>
  );
};

export default Home;

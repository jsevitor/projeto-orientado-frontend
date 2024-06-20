import React from "react";
import { Container } from "./Styles";
import ListaUsuarios from "./Usuarios/ListaUsuarios";
import ListaFornecedores from "./Fornecedores/ListaFornecedores";

const PainelControle = () => {
  return (
    <Container>
      <ListaUsuarios />
      <ListaFornecedores />
    </Container>
  );
};

export default PainelControle;

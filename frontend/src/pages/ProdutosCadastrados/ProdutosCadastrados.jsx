import React from "react";
import {
  Container,
  HeaderContainer,
  Table,
  Tbody,
  Thead,
  Title,
} from "./Styles";

// IMPORTAÇÃO DE DADOS
import data from "../../data/data.json";

const ProdutosCadastrados = () => {
  return (
    <Container>
      <HeaderContainer>
        <Title>Produtos Cadastrados</Title>
        <div className="filters">
          <input type="text" placeholder="Pesquisar" />
          <div>
            <span>Filtros</span>
            <i className="bi bi-filter"></i>
          </div>
        </div>
      </HeaderContainer>
      <Table>
        <Thead>
          <tr>
            <th className="middle">ID</th>
            <th className="middle">Foto</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Fornecedor</th>
            <th>Marca</th>
            <th></th>
          </tr>
        </Thead>
        <Tbody>
          {data.produtos.map((product, index) => (
            <tr key={index}>
              <td className="middle">{product.id}</td>
              <td className="middle">
                <img src={product.foto} />
              </td>
              <td>{product.nome}</td>
              <td>{product.categoria}</td>
              <td>{product.fornecedor}</td>
              <td>{product.marca}</td>
              <td className="middle">
                <i className="bi bi-trash3"></i>
                <i className="bi bi-pencil-square"></i>
              </td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default ProdutosCadastrados;

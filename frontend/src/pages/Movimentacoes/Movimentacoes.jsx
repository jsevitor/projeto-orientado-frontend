import React from "react";
import { Container } from "./Styles";

// IMPORTAÇÃO DE DADOS
import data from "../../data/data.json";
import { HeaderContainer } from "./Styles";
import { Title } from "./Styles";
import { Table } from "./Styles";
import { Thead } from "./Styles";
import { Tbody } from "./Styles";

const Movimentacoes = () => {
  return (
    <Container>
      <HeaderContainer>
        <Title>Movimentações</Title>
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
            <th>Produto</th>
            <th>Data de Saída</th>
            <th>Qtde.</th>
            <th>Forma de Pagamento</th>
            <th>Valor Compra Un.</th>
            <th>Valor Compra Un.</th>
            <th>Valor Saída Total</th>
            <th>Valor Compra Total</th>
            <th>Margem de Lucro</th>
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
              <td>{product.marca}</td>
              <td>{product.marca}</td>
              <td>{product.marca}</td>
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

export default Movimentacoes;

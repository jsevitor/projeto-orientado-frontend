import React, { useEffect, useState } from "react";
import {
  Container,
  HeaderContainer,
  Table,
  Tbody,
  Thead,
  Title,
} from "./Styles";

const ListaFornecedores = () => {
  const [fornecedores, setFornecedores] = useState([]);

  useEffect(() => {
    fetchFornecedores();
  }, []);

  const fetchFornecedores = async () => {
    try {
      const response = await fetch("http://localhost:3000/fornecedores");
      if (!response.ok) {
        throw new Error("Erro ao buscar fornecedores.");
      }
      const data = await response.json();
      setFornecedores(data);
    } catch (error) {
      console.error("Erro ao buscar fornecedores:", error);
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <Title>Fornecedores Cadastrados</Title>
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
            <th>ID</th>
            <th>Nome</th>
            <th>CNPJ</th>
            <th>Telefone</th>
            <th>Celular</th>
            <th>E-mail</th>
            <th>Site</th>
            <th>CEP</th>
            <th>Endereço</th>
            <th>Número</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Estado</th>
            {/* <th>Banco</th>
            <th>Tipo Conta</th>
            <th>Conta</th>
            <th>Agência Bancária</th> */}
            <th>PIX</th>
          </tr>
        </Thead>
        <Tbody>
          {fornecedores.map((fornecedor) => (
            <tr key={fornecedor.id}>
              <td>{fornecedor.id}</td>
              <td>{fornecedor.nome}</td>
              <td>{fornecedor.cnpj}</td>
              <td>{fornecedor.telefone}</td>
              <td>{fornecedor.celular}</td>
              <td>{fornecedor.email}</td>
              <td>{fornecedor.site}</td>
              <td>{fornecedor.cep}</td>
              <td>{fornecedor.endereco}</td>
              <td>{fornecedor.numero_endereco}</td>
              <td>{fornecedor.bairro}</td>
              <td>{fornecedor.cidade}</td>
              <td>{fornecedor.estado}</td>
              {/* <td>{fornecedor.banco}</td>
              <td>{fornecedor.tipo_conta}</td>
              <td>{fornecedor.conta}</td>
              <td>{fornecedor.agencia_bancaria}</td> */}
              <td>{fornecedor.pix}</td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default ListaFornecedores;

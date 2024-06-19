import React, { useEffect, useState } from "react";
import {
  Container,
  HeaderContainer,
  Table,
  Tbody,
  Thead,
  Title,
} from "./Styles";

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const response = await fetch("http://localhost:3000/usuarios");
      if (!response.ok) {
        throw new Error("Erro ao buscar usuários.");
      }
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <Title>Usuários Cadastrados</Title>
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
            <th>CPF</th>
            <th>Telefone</th>
            <th>Celular</th>
            <th>E-mail</th>
            <th>Data de Nascimento</th>
            <th>Usuário</th>
          </tr>
        </Thead>
        <Tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nome}</td>
              <td>{usuario.cpf}</td>
              <td>{usuario.telefone}</td>
              <td>{usuario.celular}</td>
              <td>{usuario.email}</td>
              <td>{usuario.data_nascimento}</td>
              <td>{usuario.usuario}</td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default ListaUsuarios;

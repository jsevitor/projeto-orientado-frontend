import { useEffect, useState } from "react";
import { Container, Filters } from "./Styles";
import { HeaderContainer, Title, Table, Thead, Tbody } from "./Styles";
import { Modal } from "../../components/Modal/Modal";
import { ToastContainer, toast } from "react-toastify";

import data from "../../data/data.json";
import {
  formatCurrency,
  formatCustomDate,
  formatDate,
} from "../../utils/functions";
import api from "../../services/api";

const Movimentacoes = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [movimentacoes, setMovimentacoes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/movimentacoes");
        setMovimentacoes(response.data);
      } catch (error) {
        console.error("Erro ao buscar:", error);
      }
    };

    fetchData();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDeleteProduct = () => {
    toast.success("Item deletado com sucesso!");
    handleCloseModal();
    // Adicione a lógica para remover os produtos selecionados da lista
  };

  const handleTableUpdate = async () => {
    try {
      const response = await api.get("/movimentacoes");
      setMovimentacoes(response.data);
      toast.info("Lista atualizada com sucesso!");
    } catch (error) {
      toast.error("Erro ao atualizar a lista.");
    }
  };

  return (
    <Container>
      <ToastContainer />
      <HeaderContainer>
        <Title>Movimentações</Title>
        <Filters>
          <div className="filter_actions">
            <i
              className="bi bi-arrow-clockwise"
              onClick={handleTableUpdate}
            ></i>
          </div>
        </Filters>
      </HeaderContainer>
      <Table>
        <Thead>
          <tr>
            <th>Produto</th>
            <th>Data de Entrada</th>
            <th>Data de Retirada</th>
            <th>Qtde. Total de Entrada</th>
            <th>Qtde. Total de Saída</th>
            <th>Qtde. Total em Estoque</th>
          </tr>
        </Thead>
        <Tbody>
          {movimentacoes.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>
                {(item.data_entrada && formatCustomDate(item.data_entrada)) ||
                  ""}
              </td>
              <td>
                {(item.data_retirada && formatCustomDate(item.data_retirada)) ||
                  ""}
              </td>
              <td>{item.quantidade_total_entrada}</td>
              <td>{item.quantidade_total_saida}</td>
              <td>{item.quantidade_em_estoque}</td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default Movimentacoes;

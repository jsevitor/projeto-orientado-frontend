import { useState } from "react";
import { Container, Filters } from "./Styles";
import { HeaderContainer, Title, Table, Thead, Tbody } from "./Styles";
import { Modal } from "../../components/Modal/Modal";
import { ToastContainer, toast } from "react-toastify";

import data from "../../data/data.json";
import { formatCurrency, formatDate } from "../../utils/functions";

const Movimentacoes = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

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

  const handleCheckboxChange = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };

  return (
    <Container>
      <ToastContainer />
      <HeaderContainer>
        <Title>Movimentações</Title>
        <Filters>
          <div className="filter_actions">
            <input
              type="checkbox"
              checked={selectedProducts.length === data.produtos.length}
              onChange={(e) =>
                setSelectedProducts(
                  e.target.checked ? data.produtos.map((p) => p.id) : []
                )
              }
            />
            <i className="bi bi-trash3" onClick={handleOpenModal}></i>
            <i className="bi bi-pencil-square"></i>
            <i className="bi bi-filter"></i>
          </div>
          <div className="filter_search">
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Pesquisar" />
          </div>
        </Filters>
      </HeaderContainer>
      <Table>
        <Thead>
          <tr>
            <th className="checkbox"></th>
            <th>Produto</th>
            <th>Data de Saída</th>
            <th>Qtde.</th>
            <th>Forma de Pagamento</th>
            <th>Valor Compra Un.</th>
            <th>Valor Saída Un.</th>
            <th>Valor Saída Total</th>
            <th>Valor Compra Total</th>
            <th>Margem de Lucro</th>
          </tr>
        </Thead>
        <Tbody>
          {data.movimentacoes.map((product, index) => (
            <tr
              key={index}
              className={
                selectedProducts.includes(product.id) ? "selected" : ""
              }
            >
              <td className="middle checkbox">
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => handleCheckboxChange(product.id)}
                />
              </td>
              <td>{product.produto}</td>
              <td>{formatDate(product.data_saida)}</td>
              <td className="middle">{product.quantidade}</td>
              <td>{product.forma_pagamento}</td>
              <td>{formatCurrency(product.valor_unidade_compra)}</td>
              <td>{formatCurrency(product.valor_unidade_saida)}</td>
              <td>{formatCurrency(product.valor_total_saida)}</td>
              <td>{formatCurrency(product.valor_total_compra)}</td>
              <td>{product.lucro * 10}%</td>
            </tr>
          ))}
        </Tbody>
      </Table>

      {openModal && (
        <Modal onConfirm={handleDeleteProduct} onCancel={handleCloseModal} />
      )}
    </Container>
  );
};

export default Movimentacoes;

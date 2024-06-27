import { useContext } from "react";
import { ButtonContainer, FormContainer } from "./Styles";
import { ToastContainer } from "react-toastify";
import { FormContext } from "../../contexts/FormContext";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { InputField } from "../../components/Form/Form";

import "react-toastify/dist/ReactToastify.min.css";

/**
 * Componente para o formulário de cadastro de produto.
 * @component CadastroProduto
 * @example
 * return (
 *   <CadastroProduto />
 * )
 */
const CadastroProduto = () => {
  const { produtoData, handleChange, handleSubmit, handleCancel } =
    useContext(FormContext);

  /**
   * Função para lidar com o envio do formulário de cadastro de produto.
   */
  // const handleSubmit = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/produtos", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(produtoData),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Erro ao cadastrar produto.");
  //     }

  //     handleClearForm();
  //     toast.success("Produto cadastrado com sucesso!");
  //   } catch (error) {
  //     console.error("Erro ao cadastrar produto:", error);
  //     toast.error("Erro ao cadastrar produto.");
  //   }
  // };

  return (
    <Card title={"Cadastro de Produto"} icon={"bi bi-box-seam"}>
      <ToastContainer />
      <FormContainer>
        {/* Componentes de entrada para cada campo do formulário */}
        <InputField
          label={"Nome"}
          name={"nome"}
          value={produtoData.nome}
          onChange={(e) => handleChange(e, "produto")}
        />
        <InputField
          label={"Marca"}
          name={"marca"}
          value={produtoData.marca}
          onChange={(e) => handleChange(e, "produto")}
        />
        <InputField
          label={"Categoria"}
          name={"categoria"}
          value={produtoData.categoria}
          onChange={(e) => handleChange(e, "produto")}
        />
        <InputField
          label={"Fornecedor"}
          name={"fornecedor"}
          value={produtoData.fornecedor}
          onChange={(e) => handleChange(e, "produto")}
        />
        <InputField
          label={"Foto"}
          type={"file"}
          name={"picture"}
          value={produtoData.picture}
          onChange={(e) => handleChange(e, "produto")}
        />
      </FormContainer>
      {/* Botões para adicionar e cancelar */}
      <ButtonContainer>
        <Button label={"Adicionar"} onClick={handleSubmit} />
        <Button label={"Cancelar"} onClick={handleCancel} />
      </ButtonContainer>
    </Card>
  );
};

export default CadastroProduto;

import { useContext } from "react";
import { ButtonContainer, FormContainer } from "./Styles";
import { ToastContainer, toast } from "react-toastify";
import { FormContext } from "../../contexts/FormContext";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { InputField, SelectField } from "../../components/Form/Form";

import "react-toastify/dist/ReactToastify.min.css";

/**
 * Componente para o formulário de cadastro de fornecedor.
 * @component CadastroFornecedor
 * @example
 * return (
 *   <CadastroFornecedor />
 * )
 */
const CadastroFornecedor = () => {
  const { fornecedorData, handleChange, handleCancel, handleClearForm } =
    useContext(FormContext);

  /**
   * Função para lidar com o envio do formulário de cadastro de fornecedor.
   */
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/fornecedores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fornecedorData),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar fornecedor.");
      }

      handleClearForm();
      toast.success("Fornecedor cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar fornecedor:", error);
      toast.error("Erro ao cadastrar fornecedor.");
    }
  };

  return (
    <Card title={"Cadastro de Fornecedor"} icon={"bi bi-truck"}>
      <ToastContainer />
      <FormContainer>
        {/* Componentes de entrada para cada campo do formulário */}
        <InputField
          label={"Nome"}
          name={"nome"}
          value={fornecedorData.nome}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <InputField
          label={"CNPJ"}
          name={"cnpj"}
          value={fornecedorData.cnpj}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <InputField
          label={"Telefone"}
          name={"telefone"}
          value={fornecedorData.telefone}
          onChange={(e) => handleChange(e, "fornecedor")}
          placeholder={"(xx)xxxx-xxxx"}
        />
        <InputField
          label={"Celular"}
          name={"celular"}
          value={fornecedorData.celular}
          onChange={(e) => handleChange(e, "fornecedor")}
          placeholder={"(xx)xxxxx-xxxx"}
        />
        <InputField
          label={"E-mail"}
          name={"email"}
          type={"email"}
          value={fornecedorData.email}
          onChange={(e) => handleChange(e, "fornecedor")}
          placeholder={"email@email.com"}
        />
        <InputField
          label={"Site"}
          name={"site"}
          value={fornecedorData.site}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <InputField
          label={"CEP"}
          name={"cep"}
          value={fornecedorData.cep}
          onChange={(e) => handleChange(e, "fornecedor")}
          placeholder={"xx.xxx-xx"}
        />
        <InputField
          label={"Endereço"}
          name={"endereco"}
          value={fornecedorData.endereco}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <InputField
          label={"Número"}
          name={"numero_endereco"}
          value={fornecedorData.numero_endereco}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <InputField
          label={"Bairro"}
          name={"bairro"}
          value={fornecedorData.bairro}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <InputField
          label={"Cidade"}
          name={"cidade"}
          value={fornecedorData.cidade}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <InputField
          label={"UF"}
          name={"estado"}
          value={fornecedorData.estado}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <InputField
          label={"Banco"}
          name={"banco"}
          value={fornecedorData.banco}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <SelectField
          label="Tipo de Conta"
          name={"tipo_conta"}
          value={fornecedorData.tipo_conta}
          onChange={(e) => handleChange(e, "fornecedor")}
        >
          <option value="">Selecione</option>
          <option value="opcao1">Conta Poupança PF</option>
          <option value="opcao2">Conta Poupança PJ</option>
          <option value="opcao3">Conta Corrente PF</option>
          <option value="opcao4">Conta Corrente PJ</option>
          <option value="opcao5">PIX</option>
        </SelectField>
        <InputField
          label={"Conta"}
          name={"conta"}
          value={fornecedorData.conta}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <InputField
          label={"Agência"}
          name={"agencia"}
          value={fornecedorData.agencia}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <InputField
          label={"Chave PIX"}
          name={"pix"}
          value={fornecedorData.pix}
          onChange={(e) => handleChange(e, "fornecedor")}
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

export default CadastroFornecedor;

import { useContext, useEffect, useState } from "react";
import { ButtonContainer, FormContainer } from "./Styles";
import { ToastContainer, toast } from "react-toastify";
import { FormContext } from "../../contexts/FormContext";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { InputField, SelectField } from "../../components/Form/Form";
import api from "../../services/api";

import "react-toastify/dist/ReactToastify.min.css";

const CadastroFornecedor = () => {
  const { fornecedorData, handleChange, handleCancel } =
    useContext(FormContext);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    handleCancel();
  }, []);

  const validateFields = () => {
    let validationErrors = {};

    if (!fornecedorData.nome) {
      validationErrors.nome = "O campo Nome é obrigatório.";
    }

    if (!fornecedorData.cnpj) {
      validationErrors.cnpj = "O campo CNPJ é obrigatório.";
    }

    if (!fornecedorData.celular) {
      validationErrors.celular = "O campo Celular é obrigatório.";
    }

    if (!fornecedorData.email) {
      validationErrors.email = "O campo E-mail é obrigatório.";
    }

    if (!fornecedorData.cep) {
      validationErrors.cep = "O campo CEP é obrigatório.";
    }

    if (!fornecedorData.endereco) {
      validationErrors.endereco = "O campo Endereço é obrigatório.";
    }

    if (!fornecedorData.bairro) {
      validationErrors.bairro = "O campo Bairro é obrigatório.";
    }

    if (!fornecedorData.cidade) {
      validationErrors.cidade = "O campo Cidade é obrigatório.";
    }

    if (!fornecedorData.estado) {
      validationErrors.estado = "O campo Estado é obrigatório.";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    handleChange(e, "fornecedor");
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value ? "" : prevErrors[name],
    }));
  };

  const handleReset = () => {
    handleCancel();
    setErrors({});
  };

  const handleSubmit = async () => {
    if (!validateFields()) {
      toast.warning("Preencha todos os campos obrigatórios.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Enviar uma requisição POST para criar um novo item
      const response = await api.post("/fornecedores", fornecedorData);
      console.log("Fornecedor adicionado:", response.data);
      toast.success("Fornecedor cadastrado com sucesso!");

      handleCancel();
    } catch (error) {
      console.error("Erro ao adicionar fornecedor:", error);
      toast.error("Erro ao adicionar fornecedor.");
    } finally {
      setIsSubmitting(false);
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
          value={fornecedorData.nome || ""}
          onChange={handleFieldChange}
          warn={errors.nome}
        />
        <InputField
          label={"CNPJ"}
          name={"cnpj"}
          value={fornecedorData.cnpj || ""}
          onChange={handleFieldChange}
          placeholder={"xx.xxx.xxx/0001-xx"}
          warn={errors.cnpj}
        />
        <InputField
          label={"Telefone"}
          name={"telefone"}
          value={fornecedorData.telefone || ""}
          onChange={handleFieldChange}
          placeholder={"(xx)xxxx-xxxx"}
        />
        <InputField
          label={"Celular"}
          name={"celular"}
          value={fornecedorData.celular || ""}
          onChange={handleFieldChange}
          warn={errors.celular}
          placeholder={"(xx)xxxxx-xxxx"}
        />
        <InputField
          label={"E-mail"}
          name={"email"}
          type={"email"}
          value={fornecedorData.email || ""}
          onChange={handleFieldChange}
          warn={errors.email}
          placeholder={"email@email.com"}
        />
        <InputField
          label={"Site"}
          name={"site"}
          value={fornecedorData.site || ""}
          onChange={handleFieldChange}
        />
        <InputField
          label={"CEP"}
          name={"cep"}
          value={fornecedorData.cep || ""}
          onChange={handleFieldChange}
          warn={errors.cep}
          placeholder={"xx.xxx-xx"}
        />
        <InputField
          label={"Endereço"}
          name={"endereco"}
          value={fornecedorData.endereco || ""}
          onChange={handleFieldChange}
          warn={errors.endereco}
        />
        <InputField
          label={"Número"}
          name={"numero_endereco"}
          value={fornecedorData.numero_endereco || ""}
          onChange={handleFieldChange}
        />
        <InputField
          label={"Bairro"}
          name={"bairro"}
          value={fornecedorData.bairro || ""}
          onChange={handleFieldChange}
          warn={errors.bairro}
        />
        <InputField
          label={"Cidade"}
          name={"cidade"}
          value={fornecedorData.cidade || ""}
          onChange={handleFieldChange}
          warn={errors.cidade}
        />
        <InputField
          label={"UF"}
          name={"estado"}
          value={fornecedorData.estado || ""}
          placeholder={"ex: MG"}
          onChange={handleFieldChange}
          warn={errors.estado}
        />
        <InputField
          label={"Banco"}
          name={"banco"}
          value={fornecedorData.banco || ""}
          onChange={handleFieldChange}
        />
        <SelectField
          label="Tipo de Conta"
          name={"tipo_conta"}
          value={fornecedorData.tipo_conta || ""}
          onChange={handleFieldChange}
        >
          <option value="">Selecione</option>
          <option value="Conta Poupança PF">Conta Poupança PF</option>
          <option value="Conta Poupança PJ">Conta Poupança PJ</option>
          <option value="Conta Corrente PF">Conta Corrente PF</option>
          <option value="Conta Corrente PJ">Conta Corrente PJ</option>
        </SelectField>
        <InputField
          label={"Conta"}
          name={"conta"}
          value={fornecedorData.conta || ""}
          onChange={handleFieldChange}
        />
        <InputField
          label={"Agência"}
          name={"agencia"}
          value={fornecedorData.agencia || ""}
          onChange={handleFieldChange}
        />
      </FormContainer>
      <ButtonContainer>
        <Button
          label={"Adicionar"}
          onClick={handleSubmit}
          disabled={isSubmitting}
        />
        <Button
          label={"Cancelar"}
          onClick={handleReset}
          disabled={isSubmitting}
        />
      </ButtonContainer>
    </Card>
  );
};

export default CadastroFornecedor;

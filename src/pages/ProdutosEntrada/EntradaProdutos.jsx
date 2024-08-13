import { useContext, useEffect, useState } from "react";
import { ButtonContainer, FormContainer } from "./Styles";
import { FormContext } from "../../contexts/FormContext";
import { ToastContainer, toast } from "react-toastify";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { InputField, SelectField } from "../../components/Form/Form";
import api from "../../services/api"; 

const EntradaProdutos = () => {
  const { entradaData, handleChange, handleCancel } = useContext(FormContext);

  const [suppliers, setSuppliers] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    handleCancel();
    const fetchData = async () => {
      try {
        const response = await api.get("/fornecedores");
        setSuppliers(response.data);
      } catch (error) {
        console.error("Erro ao buscar fornecedor:", error);
        toast.error("Erro ao buscar fornecedores.");
      }
    };

    fetchData();
  }, []);

  const validateFields = () => {
    let validationErrors = {};

    if (!entradaData.produto) {
      validationErrors.produto = "O campo Produto é obrigatório.";
    }

    if (!entradaData.quantidade) {
      validationErrors.quantidade = "O campo Quantidade é obrigatório.";
    }

    if (!entradaData.fornecedor) {
      validationErrors.fornecedor = "O campo Fornecedor é obrigatório.";
    }

    if (!entradaData.data_entrada) {
      validationErrors.data_entrada = "O campo Data de Entrada é obrigatório.";
    }

    if (!entradaData.numero_lote) {
      validationErrors.numero_lote = "O campo Número de Lote é obrigatório.";
    }

    if (!entradaData.preco_compra) {
      validationErrors.preco_compra = "O campo Preço de Compra é obrigatório.";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    handleChange(e, "entrada"); // Passar o tipo de formulário corretamente
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
        const response = await api.post("/entradas", entradaData);
        console.log("Entrada adicionada:", response.data);
        toast.success("Entrada cadastrada com sucesso!");
      
      handleCancel();
    } catch (error) {
      console.error("Erro ao adicionar/atualizar entrada:", error);
      toast.error("Erro ao adicionar/atualizar entrada.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card title={"Entrada de Produto"} icon={"bi bi-download"}>
      <ToastContainer />
      <FormContainer>
        <InputField
          label={"Produto"}
          name={"produto"}
          value={entradaData.produto || ""}
          onChange={handleFieldChange}
          warn={errors.produto}
        />
        <InputField
          label={"Quantidade"}
          name={"quantidade"}
          value={entradaData.quantidade || ""}
          onChange={handleFieldChange}
          warn={errors.quantidade}
        />
        <SelectField
          label={"Fornecedor"}
          name={"fornecedor"}
          value={entradaData.fornecedor || ""}
          onChange={handleFieldChange}
          warn={errors.fornecedor}
        >
          <option value="" disabled>
            Selecione
          </option>
          {suppliers.map((supplier, index) => (
            <option key={index} value={supplier.nome}>
              {supplier.nome}
            </option>
          ))}
        </SelectField>
        <InputField
          label={"Data de Entrada"}
          name={"data_entrada"}
          type={"date"}
          value={entradaData.data_entrada || ""}
          onChange={handleFieldChange}
          warn={errors.data_entrada}
        />
        <InputField
          label={"Número de Lote"}
          name={"numero_lote"}
          value={entradaData.numero_lote || ""}
          onChange={handleFieldChange}
          warn={errors.numero_lote}
        />
        <InputField
          label={"Preço de Compra"}
          name={"preco_compra"}
          type={"number"}
          value={entradaData.preco_compra || ""}
          onChange={handleFieldChange}
          warn={errors.preco_compra}
        />
      </FormContainer>
      <ButtonContainer>
        <Button
          label={ "Adicionar"}
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

export default EntradaProdutos;

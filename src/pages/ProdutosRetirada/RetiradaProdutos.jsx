import { useContext, useEffect, useState } from "react";
import { ButtonContainer, FormContainer } from "./Styles";
import { InputField } from "../../components/Form/Form";
import { FormContext } from "../../contexts/FormContext";
import { ToastContainer, toast } from "react-toastify";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import api from "../../services/api";

const RetiradaProdutos = () => {
  const { retiradaData, handleChange, handleCancel } = useContext(FormContext);
  const [suppliers, setSuppliers] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);  // Variável isEditing

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

    if (!retiradaData.produto) {
      validationErrors.produto = "O campo Produto é obrigatório.";
    }

    if (!retiradaData.quantidade) {
      validationErrors.quantidade = "O campo Quantidade é obrigatório.";
    }

    if (!retiradaData.tipo_retirada) {
      validationErrors.tipo_retirada = "O campo Tipo de Saída é obrigatório.";
    }

    if (!retiradaData.data_retirada) {
      validationErrors.data_retirada = "O campo Data de Retirada é obrigatório.";
    }

    if (!retiradaData.numero_lote) {
      validationErrors.numero_lote = "O campo Número de Lote é obrigatório.";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    handleChange(e, "retirada");
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
      if (isEditing) {
        // Enviar uma requisição PUT para atualizar o item
        const response = await api.put(
          `/retiradas/${retiradaData.id}`,
          retiradaData
        );
        console.log("Retirada atualizada:", response.data);
        toast.success("Retirada atualizada com sucesso!");
      } else {
        // Enviar uma requisição POST para criar um novo item
        const response = await api.post("/retiradas", retiradaData);
        console.log("Retirada adicionada:", response.data);
        toast.success("Retirada cadastrada com sucesso!");
      }
      handleCancel();
    } catch (error) {
      console.error("Erro ao adicionar/atualizar retirada:", error);
      toast.error("Erro ao adicionar/atualizar retirada.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card title={"Retirada de Produto"} icon={"bi bi-upload"}>
      <ToastContainer />
      <FormContainer>
        <InputField
          label={"Produto"}
          name={"produto"}
          value={retiradaData.produto || ""}
          onChange={handleFieldChange}
          warn={errors.produto}
        />
        <InputField
          label={"Quantidade"}
          name={"quantidade"}
          value={retiradaData.quantidade || ""}
          onChange={handleFieldChange}
          warn={errors.quantidade}
        />
        <InputField
          label={"Tipo de Saída"}
          name={"tipo_retirada"}
          value={retiradaData.tipo_retirada || ""}
          onChange={handleFieldChange}
          warn={errors.tipo_retirada}
        />
        <InputField
          label={"Data de Retirada"}
          name={"data_retirada"}
          type={"date"}
          value={retiradaData.data_retirada || ""}
          onChange={handleFieldChange}
          warn={errors.data_retirada}
        />
        <InputField
          label={"Número de Lote"}
          name={"numero_lote"}
          value={retiradaData.numero_lote || ""}
          onChange={handleFieldChange}
          warn={errors.numero_lote}
        />
      </FormContainer>
      <ButtonContainer>
        <Button
          label={isEditing ? "Atualizar" : "Adicionar"}  // Texto dinâmico no botão
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

export default RetiradaProdutos;

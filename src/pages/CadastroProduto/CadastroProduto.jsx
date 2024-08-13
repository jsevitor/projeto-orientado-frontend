import { useContext, useEffect, useState } from "react";
import { ButtonContainer, FormContainer } from "./Styles";
import { ToastContainer, toast } from "react-toastify";
import { FormContext } from "../../contexts/FormContext";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { InputField, SelectField } from "../../components/Form/Form";

import "react-toastify/dist/ReactToastify.min.css";
import api from "../../services/api";

const CadastroProduto = ({ isEditing = false }) => {
  const { produtoData, handleChange, handleCancel } = useContext(FormContext);

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
        console.error("Erro ao buscar fornecedores:", error);
        toast.error("Erro ao buscar fornecedores.");
      }
    };

    fetchData();
  }, []);

  const validateFields = () => {
    let validationErrors = {};

    if (!produtoData.nome) {
      validationErrors.nome = "O campo Nome é obrigatório.";
    }

    if (!produtoData.categoria) {
      validationErrors.categoria = "O campo Categoria é obrigatório.";
    }

    if (!produtoData.fornecedor_id) {
      validationErrors.fornecedor_id = "O campo Fornecedor é obrigatório.";
    }

    if (!produtoData.marca) {
      validationErrors.marca = "O campo Marca é obrigatório.";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    handleChange(e, "produto"); // Passar o tipo de formulário corretamente
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
    if (!produtoData.picture) {
      produtoData.picture = produtoData.defaultPicture;
    }

    if (!validateFields()) {
      toast.warning("Preencha todos os campos obrigatórios.");
      return;
    }

    setIsSubmitting(true);
    try {
      if (isEditing) {
        // Enviar uma requisição PUT para atualizar o item
        const response = await api.put(
          `/produtos/${produtoData.id}`,
          produtoData
        );
        console.log("Produto atualizado:", response.data);
        toast.success("Item atualizado com sucesso!");
      } else {
        // Enviar uma requisição POST para criar um novo item
        const response = await api.post("/produtos", produtoData);
        console.log("Produto adicionado:", response.data);
        toast.success("Produto cadastrado com sucesso!");
      }
      handleCancel();
    } catch (error) {
      console.error("Erro ao adicionar/atualizar produto:", error);
      toast.error("Erro ao adicionar/atualizar produto.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card title={"Cadastro de Produto"} icon={"bi bi-box-seam"}>
      <ToastContainer />
      <FormContainer>
        <InputField
          label={"Nome"}
          name={"nome"}
          value={produtoData.nome || ""}
          onChange={handleFieldChange}
          warn={errors.nome}
        />
        <InputField
          label={"Marca"}
          name={"marca"}
          value={produtoData.marca || ""}
          onChange={handleFieldChange}
          warn={errors.marca}
        />
        <InputField
          label={"Categoria"}
          name={"categoria"}
          value={produtoData.categoria || ""}
          onChange={handleFieldChange}
          warn={errors.categoria}
        />
        <SelectField
          label={"Fornecedor"}
          name={"fornecedor_id"} // Usar fornecedor_id como nome
          value={produtoData.fornecedor_id || ""}
          onChange={handleFieldChange}
          warn={errors.fornecedor_id} // Ajustar para usar fornecedor_id aqui também
        >
          <option value="">Selecione</option>
          {suppliers.map((supplier) => (
            <option key={supplier.id} value={supplier.id}>
              {supplier.nome}
            </option>
          ))}
        </SelectField>

        <InputField
          label={"Foto"}
          name={"picture"}
          value={produtoData.picture || ""}
          placeholder={"URL da Imagem"}
          onChange={handleFieldChange}
        />
      </FormContainer>
      {/* Botões para adicionar e cancelar */}
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

export default CadastroProduto;

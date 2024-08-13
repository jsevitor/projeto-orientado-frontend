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
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    handleCancel();
    const fetchProducts = async () => {
      try {
        const response = await api.get("/produtos");
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    const fetchSuppliers = async () => {
      try {
        const response = await api.get("/fornecedores");
        setSuppliers(response.data);
      } catch (error) {
        console.error("Erro ao buscar fornecedores:", error);
      }
    };

    fetchProducts();
    fetchSuppliers();
  }, []);

  const validateFields = () => {
    let validationErrors = {};

    if (!entradaData.produto_id) {
      validationErrors.produto_id = "O campo Produto é obrigatório.";
    }

    if (!entradaData.quantidade) {
      validationErrors.quantidade = "O campo Quantidade é obrigatório.";
    }

    if (!entradaData.fornecedor_id) {
      validationErrors.fornecedor_id = "O campo Fornecedor é obrigatório.";
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
      // Verifique se entradaData está corretamente preenchido
      console.log("Dados a serem enviados:", entradaData);

      const response = await api.post("/entradas", entradaData);
      console.log("Entrada adicionada:", response.data);
      toast.success("Entrada cadastrada com sucesso!");

      handleCancel();
    } catch (error) {
      console.error("Erro ao adicionar entrada:", error);
      toast.error("Erro ao adicionar entrada.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card title={"Entrada de Produto"} icon={"bi bi-download"}>
      <ToastContainer />
      <FormContainer>
        <SelectField
          label={"Produto"}
          name={"produto_id"}
          value={entradaData.produto_id || ""}
          onChange={handleFieldChange}
          warn={errors.produto_id}
        >
          <option value="">Selecione</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.nome}
            </option>
          ))}
        </SelectField>
        <InputField
          label={"Quantidade"}
          name={"quantidade"}
          value={entradaData.quantidade || ""}
          onChange={handleFieldChange}
          warn={errors.quantidade}
        />
        <SelectField
          label={"Fornecedor"}
          name={"fornecedor_id"}
          value={entradaData.fornecedor_id || ""}
          onChange={handleFieldChange}
          warn={errors.fornecedor_id}
        >
          <option value="" disabled>
            Selecione
          </option>
          {suppliers.map((supplier, index) => (
            <option key={index} value={supplier.id}>
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

export default EntradaProdutos;

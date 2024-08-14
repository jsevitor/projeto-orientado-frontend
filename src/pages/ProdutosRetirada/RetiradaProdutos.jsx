import { useContext, useEffect, useState } from "react";
import { ButtonContainer, FormContainer } from "./Styles";
import { InputField, SelectField } from "../../components/Form/Form";
import { FormContext } from "../../contexts/FormContext";
import { ToastContainer, toast } from "react-toastify";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import api from "../../services/api";

const RetiradaProdutos = () => {
  const { retiradaData, handleChange, handleCancel } = useContext(FormContext);
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [inputs, setInputs] = useState([]);
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

    const fetchInputs = async () => {
      try {
        const response = await api.get("/entradas");
        setInputs(response.data);
      } catch (error) {
        console.error("Erro ao buscar entradas:", error);
      }
    };

    fetchProducts();
    fetchSuppliers();
    fetchInputs();
  }, []);

  const validateFields = () => {
    let validationErrors = {};

    if (!retiradaData.produto_id) {
      validationErrors.produto_id = "O campo Produto é obrigatório.";
    }

    if (!retiradaData.quantidade) {
      validationErrors.quantidade = "O campo Quantidade é obrigatório.";
    }

    if (!retiradaData.tipo_retirada) {
      validationErrors.tipo_retirada = "O campo Tipo de Saída é obrigatório.";
    }

    if (!retiradaData.data_retirada) {
      validationErrors.data_retirada =
        "O campo Data de Retirada é obrigatório.";
    }

    if (!retiradaData.numero_lote) {
      validationErrors.numero_lote = "O campo Número de Lote é obrigatório.";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  // const handleFieldChange = (e) => {
  //   const { name, value } = e.target;
  //   handleChange(e, "retirada");
  //   setErrors((prevErrors) => ({
  //     ...prevErrors,
  //     [name]: value ? "" : prevErrors[name],
  //   }));
  // };

  const handleFieldChange = async (e) => {
    const { name, value } = e.target;
    handleChange(e, "retirada"); // Passar o tipo de formulário corretamente
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value ? "" : prevErrors[name],
    }));

    if (name === "produto_id" && value) {
      console.log(name, ": ", value);
      try {
        // Fazer a requisição para obter os detalhes do produto
        const response = await api.get(`/entradas/${value}`);
        const selectedProduct = response.data;

        console.log(selectedProduct);

        // Buscar o número de lote associado ao produto
        if (selectedProduct.numero_lote) {
          console.log(selectedProduct.numero_lote);
          handleChange(
            {
              target: {
                name: "numero_lote",
                value: selectedProduct.numero_lote,
              },
            },
            "retirada"
          );
        } else {
          console.log("Não deu");
          handleChange(
            { target: { name: "numero_lote", value: "" } },
            "retirada"
          );
        }
      } catch (error) {
        console.error("Erro ao buscar número de lote do produto:", error);
        toast.error("Erro ao carregar número de lote do produto.");
      }
    }
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
      const response = await api.post("/retiradas", retiradaData);
      console.log("Retirada adicionada:", response.data);
      toast.success("Retirada cadastrada com sucesso!");

      handleCancel();
    } catch (error) {
      console.error("Erro ao adicionar Retirada:", error);
      toast.error("Erro ao adicionar Retirada.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card title={"Retirada de Produto"} icon={"bi bi-upload"}>
      <ToastContainer />
      <FormContainer>
        <SelectField
          label={"Produto"}
          name={"produto_id"}
          value={retiradaData.produto_id || ""}
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
          label={"Número de Lote"}
          name={"numero_lote"}
          value={retiradaData.numero_lote || ""}
          onChange={handleFieldChange}
          warn={errors.numero_lote}
        />
        <InputField
          label={"Quantidade"}
          name={"quantidade"}
          value={retiradaData.quantidade || ""}
          onChange={handleFieldChange}
          warn={errors.quantidade}
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
          label={"Tipo de Saída"}
          name={"tipo_retirada"}
          value={retiradaData.tipo_retirada || ""}
          onChange={handleFieldChange}
          warn={errors.tipo_retirada}
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

export default RetiradaProdutos;

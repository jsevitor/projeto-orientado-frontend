// FormContext.js
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const initialFornecedorData = {
    nome: "",
    cnpj: "",
    telefone: "",
    celular: "",
    email: "",
    site: "",
    cep: "",
    endereco: "",
    numero_endereco: "",
    bairro: "",
    cidade: "",
    estado: "",
    banco: "",
    tipo_conta: "",
    conta: "",
    agencia_bancaria: "",
    pix: "",
  };

  const initialProdutoData = {
    nome: "",
    marca: "",
    categoria: "",
    fornecedor: "",
    picture: "",
  };

  const initialUsuarioData = {
    nome: "",
    cpf: "",
    telefone: "",
    celular: "",
    email: "",
    data_nascimento: "",
    usuario: "",
    senha: "",
    picture: "",
  };

  const initialEntradaData = {
    product: "",
    amount: "",
    supplier: "",
    entryDate: "",
    lotNumber: "",
    purchasePrice: "",
  };

  const initialRetiradaData = {
    product: "",
    amount: "",
    withdrawalType: "",
    withdrawalDate: "",
    lotNumber: "",
  };

  const [fornecedorData, setFornecedorData] = useState(initialFornecedorData);
  const [produtoData, setProdutoData] = useState(initialProdutoData);
  const [usuarioData, setUsuarioData] = useState(initialUsuarioData);
  const [entradaData, setEntradaData] = useState(initialEntradaData);
  const [retiradaData, setRetiradaData] = useState(initialRetiradaData);

  const handleChange = (e, formType) => {
    const { name, value } = e.target;
    switch (formType) {
      case "fornecedor":
        setFornecedorData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        break;
      case "produto":
        setProdutoData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        break;
      case "usuario":
        setUsuarioData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        break;
      case "entrada":
        setEntradaData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        break;
      case "retirada":
        setRetiradaData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    toast.warning("Preencha os campos!");
  };

  const handleCancel = () => {
    setFornecedorData(initialFornecedorData);
    setProdutoData(initialProdutoData);
    setUsuarioData(initialUsuarioData);
    setEntradaData(initialEntradaData);
    setRetiradaData(initialRetiradaData);
  };

  const handleClearForm = () => {
    setFornecedorData(initialFornecedorData);
    setProdutoData(initialProdutoData);
    setUsuarioData(initialUsuarioData);
    setEntradaData(initialEntradaData);
    setRetiradaData(initialRetiradaData);
  };

  return (
    <FormContext.Provider
      value={{
        fornecedorData,
        produtoData,
        usuarioData,
        entradaData,
        retiradaData,
        handleChange,
        handleSubmit,
        handleCancel,
        handleClearForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

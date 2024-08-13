import { createContext, useState } from "react";
import { toast } from "react-toastify";

/**
 * Contexto para gerenciar dados e funcionalidades de vários formulários.
 * @typedef {Object} FormContextType
 * @property {Object} fornecedorData - Dados do formulário de fornecedor.
 * @property {Object} produtoData - Dados do formulário de produto.
 * @property {Object} usuarioData - Dados do formulário de usuário.
 * @property {Object} entradaData - Dados do formulário de entrada.
 * @property {Object} retiradaData - Dados do formulário de retirada.
 * @property {Function} handleChange - Função para atualizar os dados do formulário com base no evento de mudança.
 * @property {Function} handleSubmit - Função para lidar com o envio do formulário (exibe um aviso de preenchimento necessário).
 * @property {Function} handleCancel - Função para cancelar e redefinir todos os formulários para seus estados iniciais.
 * @property {Function} handleClearForm - Função para limpar todos os campos dos formulários.
 */

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
    produto: "",
    quantidade: "",
    fornecedor: "",
    data_entrada: "",
    numero_lote: "",
    preco_compra: "",
  };

  const initialRetiradaData = {
    produto: "",
    quantidade: "",
    tipo_retirada: "",
    data_retirada: "",
    numero_lote: "",
  };

  const [fornecedorData, setFornecedorData] = useState(initialFornecedorData);
  const [produtoData, setProdutoData] = useState(initialProdutoData);
  const [usuarioData, setUsuarioData] = useState(initialUsuarioData);
  const [entradaData, setEntradaData] = useState(initialEntradaData);
  const [retiradaData, setRetiradaData] = useState(initialRetiradaData);

  /**
   * Função para atualizar os dados do formulário com base no evento de mudança.
   * @param {Event} e - Evento de mudança de input.
   * @param {string} formType - Tipo de formulário para atualizar.
   */
  const handleChange = (e, formType) => {
    if (!e || !e.target) {
      console.error("Evento ou alvo não definido");
      return;
    }

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

  /**
   * Função para lidar com o envio do formulário.
   * Exibe um aviso de preenchimento necessário.
   */
  const handleSubmit = () => {
    toast.warning("Preencha todos os campos necessários.");
  };

  /**
   * Função para cancelar e redefinir todos os formulários para seus estados iniciais.
   */
  const handleCancel = () => {
    setFornecedorData(initialFornecedorData);
    setProdutoData(initialProdutoData);
    setUsuarioData(initialUsuarioData);
    setEntradaData(initialEntradaData);
    setRetiradaData(initialRetiradaData);
  };

  /**
   * Função para limpar todos os campos dos formulários.
   */
  const handleClearForm = () => {
    setFornecedorData(initialFornecedorData);
    setProdutoData(initialProdutoData);
    setUsuarioData(initialUsuarioData);
    setEntradaData(initialEntradaData);
    setRetiradaData(initialRetiradaData);
  };

  const setFormData = (data, formType) => {
    switch (formType) {
      case "fornecedor":
        setFornecedorData(data);
        break;
      case "produto":
        setProdutoData(data);
        break;
      case "usuario":
        setUsuarioData(data);
        break;
      case "entrada":
        setEntradaData(data);
        break;
      case "retirada":
        setRetiradaData(data);
        break;
      default:
        break;
    }
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
        setFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

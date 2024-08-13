import { useContext } from "react";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { InputField } from "../../components/Form/Form";
import { ButtonContainer, FormContainer } from "./Styles";
import { FormContext } from "../../contexts/FormContext";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

/**
 * Componente para o formulário de cadastro de usuário.
 * @component CadastroUsuario
 * @example
 * return (
 *   <CadastroUsuario />
 * )
 */
const CadastroUsuario = () => {
  const { usuarioData, handleChange, handleSubmit, handleCancel } =
    useContext(FormContext);

  /**
   * Função para lidar com o envio do formulário de cadastro de usuário.
   */
  // const handleSubmit = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/usuarios", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(usuarioData),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Erro ao cadastrar usuário.");
  //     }

  //     handleClearForm();
  //     toast.success("Usuário cadastrado com sucesso!");
  //   } catch (error) {
  //     console.error("Erro ao cadastrar usuário:", error);
  //     toast.error("Erro ao cadastrar usuário.");
  //   }
  // };

  return (
    <Card title={"Cadastro de Usuário"} icon={"bi bi-person-add"}>
      <ToastContainer />
      <FormContainer>
        {/* Componentes de entrada para cada campo do formulário */}
        <InputField
          label={"Nome"}
          name={"nome"}
          value={usuarioData.nome}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"CPF"}
          name={"cpf"}
          placeholder={"xxx.xxx.xxx-xx"}
          value={usuarioData.cpf}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"Telefone"}
          name={"telefone"}
          placeholder={"(xx)xxxx-xxxx"}
          value={usuarioData.telefone}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"Celular"}
          name={"celular"}
          placeholder={"(xx)xxxxx-xxxx"}
          value={usuarioData.celular}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"E-mail"}
          name={"email"}
          type={"email"}
          placeholder={"email@email.com"}
          value={usuarioData.email}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"Data de Nascimento"}
          name={"data_nascimento"}
          type={"date"}
          value={usuarioData.data_nascimento}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"Usuário de Login"}
          name={"usuario"}
          value={usuarioData.usuario}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"Senha"}
          name={"senha"}
          type={"password"}
          value={usuarioData.senha}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"Foto"}
          name={"picture"}
          type={"file"}
          value={usuarioData.picture}
          onChange={(e) => handleChange(e, "usuario")}
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

export default CadastroUsuario;

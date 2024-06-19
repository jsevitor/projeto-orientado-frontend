import { useContext } from "react";
import { ButtonContainer, FormContainer } from "./Styles";
import { ToastContainer } from "react-toastify";
import { FormContext } from "../../contexts/FormContext";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { InputField, SelectField } from "../../components/Form/Form";

import "react-toastify/dist/ReactToastify.min.css";

const CadastroProduto = () => {
  const { produtoData, handleChange, handleSubmit, handleCancel } =
    useContext(FormContext);

  return (
    <Card title={"Cadastro de Produto"} icon={"bi bi-box-seam"}>
      <ToastContainer />
      <FormContainer>
        <InputField
          label={"Nome"}
          name={"name"}
          value={produtoData.name}
          onChange={(e) => handleChange(e, "produto")}
        />
        <InputField
          label={"Marca"}
          name={"brand"}
          value={produtoData.brand}
          onChange={(e) => handleChange(e, "produto")}
        />
        <SelectField
          label="Categoria"
          name={"category"}
          value={produtoData.category}
          onChange={(e) => handleChange(e, "produto")}
        >
          <option value="" disabled>
            Selecione
          </option>
          <option value="opcao1">Opção 1</option>
          <option value="opcao2">Opção 2</option>
        </SelectField>
        <SelectField
          label="Fornecedor"
          name={"supplier"}
          value={produtoData.supplier}
          onChange={(e) => handleChange(e, "produto")}
        >
          <option value="" disabled>
            Selecione
          </option>
          <option value="opcao1">Opção 1</option>
          <option value="opcao2">Opção 2</option>
        </SelectField>
        <InputField
          label={"Foto"}
          type={"file"}
          name={"picture"}
          value={produtoData.picture}
          onChange={(e) => handleChange(e, "produto")}
        />
      </FormContainer>
      <ButtonContainer>
        <Button label={"Adicionar"} onClick={handleSubmit} />
        <Button label={"Cancelar"} onClick={handleCancel} />
      </ButtonContainer>
    </Card>
  );
};

export default CadastroProduto;

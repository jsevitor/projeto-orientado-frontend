import { useContext } from "react";
import { ButtonContainer, FormContainer } from "./Styles";
import { FormContext } from "../../contexts/FormContext";
import { ToastContainer } from "react-toastify";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { InputField, SelectField } from "../../components/Form/Form";

const EntradaProdutos = () => {
  const { entradaData, handleChange, handleSubmit, handleCancel } =
    useContext(FormContext);

  return (
    <Card title={"Entrada de Produto"} icon={"bi bi-download"}>
      <ToastContainer />
      <FormContainer>
        <InputField
          label={"Produto"}
          name={"product"}
          value={entradaData.product}
          onChange={(e) => handleChange(e, "entrada")}
        />
        <InputField
          label={"Quantidade"}
          name={"amount"}
          value={entradaData.amount}
          onChange={(e) => handleChange(e, "entrada")}
        />
        <SelectField
          label={"Fornecedor"}
          name={"supplier"}
          value={entradaData.supplier}
          onChange={(e) => handleChange(e, "entrada")}
        >
          <option value="" disabled>
            Selecione
          </option>
          <option value="opcao1">Opção 1</option>
          <option value="opcao2">Opção 2</option>
        </SelectField>
        <InputField
          label={"Data de Entrada"}
          name={"entryDate"}
          type={"date"}
          value={entradaData.entryDate}
          onChange={(e) => handleChange(e, "entrada")}
        />
        <InputField
          label={"Número de Lote"}
          name={"lotNumber"}
          type={"number"}
          value={entradaData.lotNumber}
          onChange={(e) => handleChange(e, "entrada")}
        />
        <InputField
          label={"Preço de Compra"}
          name={"purchasePrice"}
          value={entradaData.purchasePrice}
          onChange={(e) => handleChange(e, "entrada")}
        />
      </FormContainer>
      <ButtonContainer>
        <Button label={"Adicionar"} onClick={handleSubmit} />
        <Button label={"Cancelar"} onClick={handleCancel} />
      </ButtonContainer>
    </Card>
  );
};

export default EntradaProdutos;

import { useContext } from "react";
import { InputField } from "../../components/Form/Form";
import { ButtonContainer, FormContainer } from "./Styles";
import { ToastContainer } from "react-toastify";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { FormContext } from "../../contexts/FormContext";

const RetiradaProdutos = () => {
  const { retiradaData, handleChange, handleSubmit, handleCancel } =
    useContext(FormContext);

  return (
    <Card title={"Retirada de Produto"} icon={"bi bi-upload"}>
      <ToastContainer />
      <FormContainer>
        <InputField
          label={"Produto"}
          name={"product"}
          value={retiradaData.product}
          onChange={(e) => handleChange(e, "retirada")}
        />
        <InputField
          label={"Quantidade"}
          name={"amount"}
          value={retiradaData.amount}
          onChange={(e) => handleChange(e, "retirada")}
        />
        <InputField
          label={"Tipo de Saída"}
          name={"withdrawalType"}
          value={retiradaData.withdrawalType}
          onChange={(e) => handleChange(e, "retirada")}
        />
        <InputField
          label={"Data de Retirada"}
          name={"withdrawalDate"}
          type={"date"}
          value={retiradaData.withdrawalDate}
          onChange={(e) => handleChange(e, "retirada")}
        />
        <InputField
          label={"Número de Lote"}
          name={"lotNumber"}
          type={"number"}
          value={retiradaData.lotNumber}
          onChange={(e) => handleChange(e, "retirada")}
        />
      </FormContainer>
      <ButtonContainer>
        <Button label={"Adicionar"} onClick={handleSubmit} />
        <Button label={"Cancelar"} onClick={handleCancel} />
      </ButtonContainer>
    </Card>
  );
};

export default RetiradaProdutos;

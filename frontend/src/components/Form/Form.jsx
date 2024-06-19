import { Container, Input, Label, Select } from "./Styles";

const InputField = ({ label, name, type, placeholder, value, onChange }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        type={type ? type : "text"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder ? placeholder : ""}
      />
    </Container>
  );
};

const SelectField = ({ label, name, value, onChange, children }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Select name={name} value={value} onChange={onChange}>
        {children}
      </Select>
    </Container>
  );
};

export { InputField, SelectField };

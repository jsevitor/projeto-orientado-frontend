import { Container, Input, Label, Select } from "./Styles";

/**
 * Componente de campo de entrada reutilizável.
 *
 * @component
 * @param {Object} props - As props que o componente aceita.
 * @param {string} props.label - O texto do rótulo para o campo de entrada.
 * @param {string} props.name - O nome do campo de entrada.
 * @param {string} [props.type="text"] - O tipo do campo de entrada (padrão é "text").
 * @param {string} [props.placeholder] - O texto placeholder do campo de entrada.
 * @param {string} props.value - O valor do campo de entrada.
 * @param {Function} props.onChange - A função chamada quando o valor do campo de entrada muda.
 * @returns {JSX.Element} O elemento InputField.
 *
 * @example
 * // Campo de entrada de texto
 * <InputField
 *   label="Nome"
 *   name="name"
 *   value={value}
 *   onChange={handleChange}
 *   placeholder="Digite seu nome"
 * />
 */
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

/**
 * Componente de campo de seleção reutilizável.
 *
 * @component
 * @param {Object} props - As props que o componente aceita.
 * @param {string} props.label - O texto do rótulo para o campo de seleção.
 * @param {string} props.name - O nome do campo de seleção.
 * @param {string} props.value - O valor selecionado no campo de seleção.
 * @param {Function} props.onChange - A função chamada quando o valor do campo de seleção muda.
 * @param {React.ReactNode} props.children - As opções a serem exibidas no campo de seleção.
 * @returns {JSX.Element} O elemento SelectField.
 *
 * @example
 * // Campo de seleção
 * <SelectField
 *   label="Escolha uma opção"
 *   name="option"
 *   value={selectedOption}
 *   onChange={handleSelectChange}
 * >
 *   <option value="1">Opção 1</option>
 *   <option value="2">Opção 2</option>
 * </SelectField>
 */
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

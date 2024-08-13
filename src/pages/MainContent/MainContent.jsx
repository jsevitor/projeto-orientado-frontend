import Routes from "../../Routes";
import { FormProvider } from "../../contexts/FormContext";
import { Container } from "./Styles";

/**
 * Componente principal que envolve as rotas da aplicação dentro do FormProvider.
 * @component MainContent
 * @param {boolean} menuCollapsed - Indica se o menu está colapsado ou não.
 * @example
 * return (
 *   <MainContent menuCollapsed={false} />
 * )
 */
const MainContent = ({ menuCollapsed }) => {
  return (
    <Container collapsed={menuCollapsed}>
      {/* Provê o contexto de formulário para todas as rotas */}
      <FormProvider>
        <Routes />
      </FormProvider>
    </Container>
  );
};

export default MainContent;

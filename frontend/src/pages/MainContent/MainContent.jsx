import Routes from "../../Routes";
import { FormProvider } from "../../contexts/FormContext";
import { Container } from "./Styles";

const MainContent = ({ menuCollapsed }) => {
  return (
    <Container collapsed={menuCollapsed}>
      <FormProvider>
        <Routes />
      </FormProvider>
    </Container>
  );
};

export default MainContent;

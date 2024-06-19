import { CardBody, CardHeader, Container, Icon, Title } from "./Styles";

const Card = ({ title, icon, children }) => {
  return (
    <Container>
      <CardHeader>
        <Title>{title}</Title>
        <Icon className={icon} />
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Container>
  );
};

export default Card;

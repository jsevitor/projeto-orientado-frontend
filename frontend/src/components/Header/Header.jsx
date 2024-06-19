import { Container, MenuButton, Title } from "./Styles";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);
  const closeSidebar = () => setSidebar(false);

  return (
    <Container>
      <Title>Controle de Estoque</Title>
      {!sidebar ? (
        <MenuButton className={"bi bi-list"} onClick={toggleSidebar} />
      ) : (
        <MenuButton className={"bi bi-x-lg"} onClick={closeSidebar} />
      )}
      {sidebar && <SideBar active={setSidebar} closeSidebar={closeSidebar} />}{" "}
      {/* Passa a função closeSidebar */}
    </Container>
  );
};

export default Header;

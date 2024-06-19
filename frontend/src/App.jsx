// IMPORTAÇÃO DE COMPONENTS
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import { Global } from "./styles/Global";
import MainContent from "./pages/MainContent/MainContent";
import { useState } from "react";

function App() {
  const [menuCollapsed, setMenuCollapsed] = useState(() => {
    return localStorage.getItem("menuCollapsed") === "true";
  });

  return (
    <BrowserRouter>
      <Global />
      <Header />
      <SideBar
        menuCollapsed={menuCollapsed}
        setMenuCollapsed={setMenuCollapsed}
      />
      <MainContent menuCollapsed={menuCollapsed} />
    </BrowserRouter>
  );
}

export default App;

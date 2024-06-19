import { Routes, Route } from "react-router-dom";
import CadastroFornecedor from "./pages/CadastroFornecedor/CadastroFornecedor";
import CadastroProduto from "./pages/CadastroProduto/CadastroProduto";
import CadastroUsuario from "./pages/CadastroUsuario/CadastroUsuario";
import EntradaProduto from "./pages/ProdutosEntrada/EntradaProdutos";
import RetiradaProdutos from "./pages/ProdutosRetirada/RetiradaProdutos";
import ProdutosCadastrados from "./pages/ProdutosCadastrados/ProdutosCadastrados";
import ListaUsuarios from "./pages/PainelControle/Usuarios/ListaUsuarios";

// import Movimentacoes from './pages/Movimentacoes/Movimentacoes';
// import PainelControle from './pages/PainelControle/PainelControle';
// import ProdutosCadastrados from './pages/ProdutosCadastrados/ProdutosCadastrados';
// import EntradasCadastradas from './pages/EntradasCadastradas/EntradasCadastradas';
// import RetiradasCadastradas from './pages/RetiradasCadastradas/RetiradasCadastradas';
// import Login from './pages/Login/Login';

export default () => {
  return (
    <Routes>
      <Route index element={<CadastroFornecedor />} />
      <Route path="/cadastro-fornecedor" element={<CadastroFornecedor />} />
      <Route path="/cadastro-produto" element={<CadastroProduto />} />
      <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
      <Route path="/entrada-produtos" element={<EntradaProduto />} />
      <Route path="/retirada-produtos" element={<RetiradaProdutos />} />
      <Route path="/produtos-cadastrados" element={<ProdutosCadastrados />} />
      <Route path="/painel-controle" element={<ListaUsuarios />} />
      {/*    <Route path='/movimentacoes' element={<Movimentacoes />} />
          <Route path='/entradas-cadastradas' element={<EntradasCadastradas />}/>
          <Route path='/retiradas-cadastradas' element={<RetiradasCadastradas />}/>
          <Route path='/login' element={<Login />} /> */}
    </Routes>
  );
};

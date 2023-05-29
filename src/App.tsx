import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import Home from './paginas/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./paginas/login/Login"
import './App.css'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaPostagens from './components/postagens/listapostagens/ListaPostagem';
import ListaTemas from './components/temas/listatemas/ListaTemas';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/Store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
            <Route path='/postagens' element={<ListaPostagens />} />
            <Route path='/temas' element={<ListaTemas />} />
            <Route path='/cadastrarTema' element={<CadastroTema />} />
            <Route path='/deletarTema/:id' element={<DeletarTema />} />
            {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  )

}

export default App
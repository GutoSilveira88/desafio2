import logo from './logo.svg';
import './App.css';

import {Route, Routes} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import CadastroClientes from './pages/CadastroCliente';
import ListaClientes from './pages/ListaClientes';
import DetalhesClientes from './pages/DetalhesClientes';
import AlteracaoCliente from './pages/AlteracaoCliente';

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cadastro" element={<CadastroClientes />} />
          <Route path="/lista" element={<ListaClientes />} />
          <Route path="/detalhes/:id" element={<DetalhesClientes />} />
          <Route path="/alteracao/:id" element={<AlteracaoCliente />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

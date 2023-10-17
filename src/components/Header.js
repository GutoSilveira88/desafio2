import React from 'react';
import{Link} from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <h1>Estacionamento Condominio</h1>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/cadastro"> Cadastro </Link></li>
          <li><Link to="/lista"> Lista de Clientes </Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
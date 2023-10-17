import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ListaClientes.css';

function ListaClientes() {
  const navigate = useNavigate();

  const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
  const clientesReserva = JSON.parse(localStorage.getItem('clientesReserva')) || []; // Adicione esta linha

  const handleDetalhes = (id) => {
    navigate(`/detalhes/${id}`);
  };

  const handleAlteracao = (id) => {
    navigate(`/alteracao/${id}`);
  };

  const handleExclusao = (id) => {
    const clientesAtualizados = clientes.filter((cliente, index) => index !== id);
    localStorage.setItem('clientes', JSON.stringify(clientesAtualizados));
    alert('Cliente excluído com sucesso!');
    window.location.reload();
  };

  return (
    <div class="container">
      <div class="info">
        <h1>Listagem de Clientes</h1>
        <ul>
          {clientes.map((cliente, index) => (
            <li key={index}>
              <strong>Nome: {cliente.nomeDoProprietario}</strong>
              <p>Placa: {cliente.placa}</p>
              <p>Número da Vaga: {cliente.numero}</p>
              <button onClick={() => handleDetalhes(index)}>Detalhes</button>
              <button onClick={() => handleAlteracao(index)}>Alterar</button>
              <button onClick={() => handleExclusao(index)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
      <div class="info">
        <h1>Lista de Reserva</h1>
        <ul>
          {clientesReserva.map((cliente, index) => (
            <li key={index}>
              <strong>Nome: {cliente.nomeDoProprietario}</strong>
              <p>Placa: {cliente.placa}</p>
              <button onClick={() => handleDetalhes(index)}>Detalhes</button>
              <button onClick={() => handleExclusao(index)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListaClientes;

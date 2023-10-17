import React, { useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import './DetalhesClientes.css';

function DetalhesCliente() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cliente, setCliente] = useState(null);

  useEffect(() => {

    const clientesCadastrados = JSON.parse(localStorage.getItem('clientes')) || [];
    const clienteEncontrado = clientesCadastrados.find((cliente, index) => index === Number(id));

    if (clienteEncontrado) {
      setCliente(clienteEncontrado);
    }else{
      alert('Cliente não Encontrado!');
      navigate('/lista');
    }
  }, [id, navigate]);

  return (
    <div>
      <h1>Detalhes do Cliente</h1>
      {cliente ? (
        <div>
          <h2>Nome: {cliente.nomeDoProprietario}</h2>
          <p>Número do Apartamento: {cliente.numeroDoApartamento}</p>
          <p>Bloco do Apartamento: {cliente.blocoDoApartamento}</p>
          <p>Placa: {cliente.placa}</p>
          <p>Modelo do Veiculo: {cliente.modeloDoVeiculo}</p>
          <p>Cor do Veiculo: {cliente.corDoVeiculo}</p>
          <p>Número da Vaga: {cliente.numero}</p>
        </div>
      ) : null}
    </div>
  );
}

export default DetalhesCliente;
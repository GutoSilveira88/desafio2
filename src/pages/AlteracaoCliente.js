import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AlteracaoCliente.css';

function AlteracaoCliente() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cliente, setCliente] = useState({
    nomeDoProprietario: '',
    numeroDoApartamento: '',
    blocoDoApartamento: '',
    placa: '',
    modeloDoVeiculo: '',
    corDoVeiculo: '',
    numeroDaVagaDeEstacionamento: ''
  });

  useEffect(() => {

    const clientesCadastrados = JSON.parse(localStorage.getItem('clientes')) || [];
    const clienteEncontrado = clientesCadastrados.find((cliente, index) => index === Number(id));
    if(clienteEncontrado) {
      setCliente(clienteEncontrado);
    }else{
      alert('Cliente não Encontrada!');
      navigate('/lista');
    }
  }, [id, navigate]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCliente({...cliente, [name]: value});
  };

    const handleSubmit = (event) => {
      event.preventDefault();

      if(!cliente.nomeDoProprietario ||!cliente.numeroDoApartamento ||!cliente.blocoDoApartamento ||!cliente.placa ||!cliente.modeloDoVeiculo ||!cliente.corDoVeiculo || cliente.numeroDaVagaDeEstacionamento) {
        alert('Preencha todos os campos!');
        return;
    }


    const clientesCadastrados = JSON.parse(localStorage.getItem('clientes')) || [];


    const clienteIndex = clientesCadastrados.findIndex((cliente, index) => index === Number(id));


    if (clienteIndex !== -1) {

      clientesCadastrados[clienteIndex] = cliente;


      localStorage.setItem('clientes', JSON.stringify(clientesCadastrados));

      alert('Cliente alterado com sucesso!');
      navigate('/listaClientes');
    }else{
      alert('Cliente não Encontrado!');
      navigate('/listaClientes');
    }
  };

  return (
    <div class="container">
      <div class="info">
        <h1>Alteração do Cliente</h1>
        <form onSubmit={handleSubmit}>
          <label>Nome do Proprietário:</label>
          <input type="text" name="nomeDoProprietario" value={cliente.nomeDoProprietario} onChange={handleInputChange} />
          
          <label>Número do Apartamento:</label>
          <input type="text" name="numeroDoApartamento" value={cliente.numeroDoApartamento} onChange={handleInputChange} />
          
          <label>Bloco do Apartamento:</label>
          <input type="text" name="blocoDoApartamento" value={cliente.blocoDoApartamento} onChange={handleInputChange} />

          <label>Placa:</label>
          <input type="text" name="placa" value={cliente.placa} onChange={handleInputChange} />

          <label>Modelo do Veículo:</label>
          <input type="text" name="modeloDoVeiculo" value={cliente.modeloDoVeiculo} onChange={handleInputChange} />

          <label>Cor do Veículo:</label>
          <input type="text" name="corDoVeiculo" value={cliente.corDoVeiculo} onChange={handleInputChange} />

          <label>Número da Vaga do Estacionamento:</label>
          <input type="text" name="numero" value={cliente.numero} onChange={handleInputChange} />

          <button type="submit">Salvar Alterações</button>

        </form>
      </div>
      <div class="info">
      
      </div>
    </div>
  );
}
export default AlteracaoCliente
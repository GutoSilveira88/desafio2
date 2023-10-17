import React, { useState, useEffect } from 'react';
import './CadastroCliente.css';

function CadastroCliente() {
  const [cliente, setCliente] = useState({
    placa: '',
    nomeDoProprietario: '',
    numeroDoApartamento: '',
    blocoDoApartamento: '',
    modeloDoVeiculo: '',
    corDoVeiculo: '',
    numero: ''
  });

  const [vagasEstacionamento, setVagasEstacionamento] = useState([]);
  const totalVagas = 30;

  useEffect(() => {
    // Inicialize as vagas de estacionamento e verifique a ocupação
    const vagas = Array.from({ length: totalVagas }, (_, index) => ({
      numero: index + 1,
      ocupada: false,
    }));

    const clientesCadastrados = JSON.parse(localStorage.getItem('clientes')) || [];

    // Verifique cada vaga em relação aos clientes
    clientesCadastrados.forEach((cliente) => {
      const numeroDaVaga = parseInt(cliente.numero, 10);
      if (numeroDaVaga > 0 && numeroDaVaga <= totalVagas) {
        vagas[numeroDaVaga - 1].ocupada = true;
      }
    });

    setVagasEstacionamento(vagas);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCliente({ ...cliente, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (!cliente.placa || !cliente.nomeDoProprietario || !cliente.numeroDoApartamento || !cliente.blocoDoApartamento || !cliente.modeloDoVeiculo || !cliente.corDoVeiculo || !cliente.numero) {
      alert('Preencha todos os campos!');
      return;
    }
  
    const numeroDaVaga = parseInt(cliente.numero, 10);
  
    if (numeroDaVaga <= 0 || numeroDaVaga > totalVagas) {
      // Número de vaga inválido, adicionar à lista de reserva
      const clientesReserva = JSON.parse(localStorage.getItem('clientesReserva')) || [];
      clientesReserva.push(cliente);
      localStorage.setItem('clientesReserva', JSON.stringify(clientesReserva));
  
      alert('Número da vaga inválido. Cliente adicionado à lista de reserva.');
    } else if (vagasEstacionamento[numeroDaVaga - 1].ocupada) {
      alert('Vaga já está ocupada. Escolha outra vaga.');
    } else {
      const clientesCadastrados = JSON.parse(localStorage.getItem('clientes')) || [];
      clientesCadastrados.push(cliente);
      localStorage.setItem('clientes', JSON.stringify(clientesCadastrados));
  
      // Marcar a vaga como ocupada
      const vagasAtualizadas = [...vagasEstacionamento];
      vagasAtualizadas[numeroDaVaga - 1].ocupada = true;
      setVagasEstacionamento(vagasAtualizadas);
  
      setCliente({
        placa: '',
        nomeDoProprietario: '',
        numeroDoApartamento: '',
        blocoDoApartamento: '',
        modeloDoVeiculo: '',
        corDoVeiculo: '',
        numero: '',
      });
  
      alert('Cliente cadastrado com sucesso!');
    }
  };
  
  

  return (
    <div className="container">
      <div className="info">
        <h5>Observação: </h5>
        <p>Digite uma vaga inexistente para colocar na lista de reserva!</p>
        <h1>Cadastro de Clientes</h1>
        <form onSubmit={handleSubmit}>
          {/* Campos do formulário aqui */}
          <label>Placa:</label>
          <input type="text" name="placa" value={cliente.placa} onChange={handleInputChange} />

          <label>Nome do Proprietário:</label>
          <input type="text" name="nomeDoProprietario" value={cliente.nomeDoProprietario} onChange={handleInputChange} />

          <label>Número do Apartamento</label>
          <input type="text" name="numeroDoApartamento" value={cliente.numeroDoApartamento} onChange={handleInputChange} />

          <label>Bloco do Apartamento</label>
          <input type="text" name="blocoDoApartamento" value={cliente.blocoDoApartamento} onChange={handleInputChange} />

          <label>Modelo do Veículo</label>
          <input type="text" name="modeloDoVeiculo" value={cliente.modeloDoVeiculo} onChange={handleInputChange} />

          <label>Cor do Veículo</label>
          <input type="text" name="corDoVeiculo" value={cliente.corDoVeiculo} onChange={handleInputChange} />

          <label>Número da Vaga:</label>
          <input type="int" name="numero" value={cliente.numero} onChange={handleInputChange} />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
      <div className="info">
        <h1>Vagas</h1>
        <ul>
          {vagasEstacionamento.map((vaga) => (
            <li key={vaga.numero}>
              Vaga {vaga.numero}: {vaga.ocupada ? 'Ocupado' : 'Disponível'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CadastroCliente;

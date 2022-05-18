import React from 'react'

import './DadosClientes.css'

import dadosClientes from '../dadosClientes/dadosClientes'

const DadosClientes = (props) => {

  // const listaClientes = () => {
  //   dadosClientes.map((cliente) => {
  //     return <li key={cliente.id}>Nome: {cliente.nome} | Email: {cliente.email}</li>
  //   })
  // }

  return(
    <div>
      <h3>Dados dos clientes</h3>
      <ul>
        {
          dadosClientes.map((cliente) => {
            return <li key={cliente.id}>Nome: {cliente.nome} | Email: {cliente.email}</li>
          })
        }
      </ul>
    </div>
  )
}

export default DadosClientes

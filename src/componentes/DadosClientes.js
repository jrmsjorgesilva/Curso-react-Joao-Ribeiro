import React from 'react'

import dadosClientes from '../dadosClientes/dadosClientes'

const DadosClientes = () => {

  return(
    <div>
      <h3>Dados dos clientes</h3>
      <ul>
        {
          dadosClientes.map(elem => <li key={elem.id}>Nome: {elem.nome} | Email: {elem.email}</li>
          )
        }
      </ul>
    </div>
  )
}

export default DadosClientes

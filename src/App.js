import React from 'react'
import Coment from './componentes/Coment'
import DadosClientes from './componentes/DadosClientes'
import Contador from './componentes/Contador'

const App = () => {
  return(
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Seção de comentários
      </h1>
      <Coment title='titulo 1' text='texto 1' autor='autor 1' />
      <Contador />
      <DadosClientes />
      {/*<Coment title='titulo 2' text='texto 2' autor='autor 2' />
      <Coment title='titulo 3' text='texto 3' autor='autor 3' /> */}
    </div>
  )
}

export default App

import React from 'react'
import Coments from './componentes/Coments'
import DadosClientes from './componentes/DadosClientes'
import Contador from './componentes/Contador'
import Invertexto from './componentes/Invertexto'

const App = () => {
  return(
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Seção de comentários
      </h1>
      <Invertexto />
      <Coments />
      <Contador />
      <DadosClientes />
      {/*<Coment title='titulo 2' text='texto 2' autor='autor 2' />
      <Coment title='titulo 3' text='texto 3' autor='autor 3' /> */}
    </div>
  )
}

export default App

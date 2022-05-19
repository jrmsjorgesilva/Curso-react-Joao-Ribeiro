import React from 'react'
import Coments from './componentes/Coments'
import DadosClientes from './componentes/DadosClientes'
import Contador from './componentes/Contador'
import Invertexto from './componentes/Invertexto'
import Cards from './componentes/Cards'
// IMPORTS REDUX
import { Provider } from 'react-redux'
import store from './componentes/Redux/Store/Store'

const App = () => {
  return(
    <div>
    <h1 style={{ textAlign: 'center', margin: '50px 0px' }}>
      Seção de comentários
    </h1>
      <Provider store={store} >
        <Cards />
        <Invertexto />
        <Coments />
        <Contador />
        <DadosClientes />
      </Provider>
      {/*<Coment title='titulo 2' text='texto 2' autor='autor 2' />
      <Coment title='titulo 3' text='texto 3' autor='autor 3' /> */}
    </div>
  )
}

export default App

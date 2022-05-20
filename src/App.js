import React from 'react'
import Coments from './componentes/Coments'
import DadosClientes from './componentes/DadosClientes'
import Contador from './componentes/Contador'
import Invertexto from './componentes/Invertexto'
import Cards from './componentes/Cards'
import FetchApp from './componentes/FetchApp'
// IMPORTS REDUX
import { Provider } from 'react-redux'
import store from './componentes/Redux/Store/Store'
// IMPORTS REACT ROUTER
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return(
    <div>
    <h1 style={{ textAlign: 'center', margin: '50px 0px' }}>
      Seção de comentários
    </h1>
    <Router>
      <Provider store={store} >

        <Routes>

          <Route
            path='/'
            element={<FetchApp />}
          >
          </Route>
          <Route
            path='/cards'
            element={<Cards />}
          >
          </Route>
          <Route
            path='/invertexto'
            element={<Invertexto />}
          >
          </Route>
          <Route
            path='/comments'
            element={<Coments />}
          >
          </Route>
          <Route
            path='/contador'
            element={<Contador />}
          >
          </Route>
          <Route
            path='/dadosclientes'
            element={<DadosClientes />}
          >
          </Route>
        </Routes>

      </Provider>

    </Router>
      {/*<Coment title='titulo 2' text='texto 2' autor='autor 2' />
      <Coment title='titulo 3' text='texto 3' autor='autor 3' /> */}
    </div>
  )
}

export default App

import React from 'react'
import Coments from './componentes/Coments'
import DadosClientes from './componentes/DadosClientes'
import Contador from './componentes/Contador'
import Invertexto from './componentes/Invertexto'
import Cards from './componentes/Cards'
import FetchApp from './componentes/FetchApp'
import Page404 from './componentes/Page404'
import TodoApp from './componentes/TodoApp/TodoApp'
import Slides from './componentes/Slides'
import NavBar from './componentes/NavBar'
import SocialWidget from './componentes/SocialWidget'
import Feira from './componentes/Feira'
import Fixit from './componentes/Fixit'
import Footer from './componentes/Footer'
// IMPORTS REDUX
import { Provider } from 'react-redux'
import store from './componentes/Redux/Store/Store'
// IMPORTS REACT ROUTER
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return(
    <>
      <Router>
        <NavBar />
        <Provider store={store} >

          <Routes>

            <Route
              path='/'
              element={<TodoApp />}
            >
            </Route>
            <Route
              path='/fetchapp'
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
            <Route
              path='/slides'
              element={<Slides />}
            >
            </Route>
            <Route
              path='/feira'
              element={<Feira />}
            >
            </Route>
            <Route
              path='/fixit'
              element={<Fixit />}
            >
            </Route>
            <Route
              path='*'
              element={<Page404 />}
            >
            </Route>
          </Routes>

        </Provider>

        <Footer />

      </Router>
    </>
  )
}

export default App

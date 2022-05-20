import React from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate = useNavigate();
  const params = useParams();

  return(
    <nav >
      <ul style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '50px 10px' }}>
        <li>
          <NavLink
            to='/'
            className='app__nav__item'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/cards'
            className='app__nav__item'
          >
            Cards
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/comments'
            className='app__nav__item'
          >
            Comments
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/invertexto'
            className='app__nav__item'
          >
            Invertexto
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contador'
            className='app__nav__item'
          >
            Contador
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/dadosclientes'
            className='app__nav__item'
          >
            Dados
          </NavLink>
        </li>
      </ul>
    </nav>

  )
}


// export default connect(state => ({ status: state }))(Card);
export default NavBar;

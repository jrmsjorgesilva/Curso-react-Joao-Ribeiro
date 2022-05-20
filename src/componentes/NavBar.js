import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return(
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '10px' }}>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/cards'>
            Cards
          </Link>
        </li>
        <li>
          <Link to='/comments'>
            Comments
          </Link>
        </li>
        <li>
          <Link to='/invertexto'>
            Invertexto
          </Link>
        </li>
        <li>
          <Link to='/contador'>
            Contador
          </Link>
        </li>
        <li>
          <Link to='/dadosclientes'>
            Dados
          </Link>
        </li>
      </ul>
    </nav>

  )
}


// export default connect(state => ({ status: state }))(Card);
export default NavBar;

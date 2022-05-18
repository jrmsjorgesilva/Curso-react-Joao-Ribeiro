import React, { useState } from 'react'
import { connect } from 'react-redux'
import { incrementAction, decrementAction, cleanAction } from './Redux/Actions/Action'

import './Contador.css'

const Contador = (props) => {

  // const [valor, setValor] = useState(() => 0);

  return(
    <div className='contador__container'>
    <button className='contador__btn' onClick={() => props.dispatch({ type: count + 1 })}>Incrementar: </button>
    <button className='contador__btn' onClick={() => props.dispatch({ type: count - 1 })}>Decrementar: </button>
    <button className='contador__btn' onClick={() => props.dispatch({ type: count * 1 })}>Limpar: </button>
    <h3>Contador: {count}</h3>
    </div>
  )
}

const mapStateToProps = (count) => {
  console.log("skjdlkasjdlksa", count);
  return {
    count: count
  }
}

export default connect(mapStateToProps)(Contador);

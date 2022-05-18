import React, { useState } from 'react'
import { connect } from 'react-redux'
import { incrementAction, decrementAction, cleanAction } from './Redux/Actions/Action'

import './Contador.css'

const Contador = (props) => {

  // const [valor, setValor] = useState(() => 0);

  console.log("$$$fdsfdsfd", props)

  return(
    <div className='contador__container'>
    <button className='contador__btn' onClick={() => props.dispatch(incrementAction)}>Incrementar: </button>
    <button className='contador__btn' onClick={() => props.dispatch(decrementAction)}>Decrementar: </button>
    <button className='contador__btn' onClick={() => props.dispatch(cleanAction)}>Limpar: </button>
    <h3>Contador: {props.state.count}</h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log("skjdlkasjdlksa", state.count);
  return {
    state: state.count
  }
}

export default connect(mapStateToProps)(Contador);

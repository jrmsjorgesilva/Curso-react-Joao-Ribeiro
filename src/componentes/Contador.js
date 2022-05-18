import React, { useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { incrementAction, decrementAction, cleanAction } from './Redux/Actions/CounterActions'

const Contador = (props) => {

  // const counter = useSelector(props.count);
  // console.log("$counter->", counter);
  //
  // const dispatch = useDispatch();
  // console.log("$dispatch->", dispatch);
  // console.log("$dispatch->dsadasd");

  // const [valor, setValor] = useState(() => 0);

  const incrementaValor = () => {
    props.dispatch(incrementAction());
  }

  const decrementaValor = () => {
    props.dispatch(decrementAction());
  }

  const limpaValor = () => {
    props.dispatch(cleanAction());
  }

  return(
    <div className='app__container'>
    <button className='app__btn' onClick={() => incrementaValor()}>Incrementar: </button>
    <button className='app__btn' onClick={() => decrementaValor()}>Decrementar: </button>
    <button className='app__btn' onClick={() => limpaValor()}>Limpar: </button>
    <h3>Contador: {props.count}</h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Contador);

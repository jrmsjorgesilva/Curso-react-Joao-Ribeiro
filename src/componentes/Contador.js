import React, { useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { incrementAction, decrementAction, cleanAction } from './Redux/Actions/CounterActions'

const Contador = () => {

  // const counter = useSelector(props.count);
  // console.log("$counter->", counter);
  //
  // const dispatch = useDispatch();
  // console.log("$dispatch->", dispatch);
  // console.log("$dispatch->dsadasd");

  // const [valor, setValor] = useState(() => 0);

  const count = useSelector(state => state.ContadorReducer.count);

  console.log("CONTADOR:", count)

  const dispatch = useDispatch();

  const incrementaValor = () => {
    dispatch(incrementAction());
  }

  const decrementaValor = () => {
    dispatch(decrementAction());
  }

  const limpaValor = () => {
    dispatch(cleanAction());
  }

  return(
    <div className='app__container'>
    <button className='app__btn' onClick={() => incrementaValor()}>Incrementar: </button>
    <button className='app__btn' onClick={() => decrementaValor()}>Decrementar: </button>
    <button className='app__btn' onClick={() => limpaValor()}>Limpar: </button>
    <h3>Contador: {count}</h3>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     count: state.count
//   }
// }

// export default connect(mapStateToProps)(Contador);
export default Contador;

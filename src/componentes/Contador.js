import React, { useState } from 'react'

import './Contador.css'

const Contador = () => {

  const [valor, setValor] = useState(0);

  const incrementaValor = () => {
    setValor(valor + 1);
  }

  const decrementaValor = () => {
    setValor(valor - 1);
  }

  return(
    <div className='contador__container'>
      <button className='contador__btn' onClick={incrementaValor}>Incrementar: </button>
      <button className='contador__btn' onClick={decrementaValor}>Decrementar: </button>
      <h3>Contador: {valor}</h3>
    </div>
  )
}

export default Contador

import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { actionInvertexto } from './Redux/Actions/InvertextoActions'

const Invertexto = ({ text, dispatch }) => {

  // const [text, setText] = useState(() => '');

  const escreveTexto = (e) => {
    // setText(e.target.value);
    console.log("fsdfsdf", text.text)
  }


  console.log("Arrocha", text)


  return(
    <div className='app__container'>
      <h3 className='app__title'>Invertexto <small>Inc</small></h3>
      <p>
        <input
          className='app__input'
          type="text"
          placeholder="Digite o texto a ser invertido"
          value={text.text}
          onChange={(e) => escreveTexto(e)}
        />
        <button className='app__btn' onClick={() => dispatch(actionInvertexto())}>Despachar</button>
        <span style={{ margin: '0px 25px' }}>
          {text.text}
        </span>
      </p>

    </div>
  )
}

export default connect(state => ({ text: state }))(Invertexto)

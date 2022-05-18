import React from 'react'
import Coment from './Coment'

const Coments = () => {

  const insereComentario = () => {
    return console.log("Saida da função insereComentario-> OK");
  }

  return(
    <div className='app__container'>
      <h5>Inserir Comentário</h5>
      <br />
      <input className='app__input' type="text" placeholder="autor" />
      <input className='app__input' type="text" placeholder="Diga o que está pensando" />
      <button className='app__btn' onClick={() => insereComentario()}>Enviar</button>
      <Coment title='titulo 1' text='texto 1' autor='autor 1'/>
    </div>
  )
}

export default Coments

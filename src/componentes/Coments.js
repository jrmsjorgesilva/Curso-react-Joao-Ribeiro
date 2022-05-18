import React from 'react'
import Coment from './Coment'
import { connect } from 'react-redux'
import { actionAddComent, aproveComent, deleteComent, cleanComents } from './Redux/Actions/ComentsActions'

const Coments = (props) => {

  console.log("props -> ", props)

  const insereComentario = () => {
    // return console.log("Saida da função insereComentario-> OK");
    props.dispatch(deleteComent());
  }

  console.log("props after -> ", props)


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

const mapStateToProps = (state) => {
  console.log(state)
  return {
    coments: state.coments
  }
}

export default connect(mapStateToProps)(Coments)

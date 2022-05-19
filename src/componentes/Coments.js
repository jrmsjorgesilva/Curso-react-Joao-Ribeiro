import React from 'react'
import Coment from './Coment'
import { connect, useSelector, useDispatch } from 'react-redux'
import { actionAddComent, aproveComent, deleteComent, cleanComent } from './Redux/Actions/ComentsActions'

const Coments = () => {

  const coment = useSelector(state => state.ComentsReducer.coment);

  console.log("coment -> ", coment)

  const dispatch = useDispatch();

  const insereComentario = () => {
    console.log("Comentario deletado -> ", dispatch(deleteComent()));
  }

  return(
    <div className='app__container'>
      <h5>Inserir Comentário</h5>
      <br />
      <input className='app__input' type="text" placeholder="autor" />
      <input className='app__input' type="text" placeholder="Diga o que está pensando" />
      <button className='app__btn' onClick={() => dispatch(deleteComent())}>Enviar</button>
      <Coment title='titulo 1' text='texto 1' autor='autor 1'/>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   console.log(state)
//   return {
//     coments: state.coments
//   }
// }

// export default connect(mapStateToProps)(Coments)
export default Coments

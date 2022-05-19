import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { actionConfirm, actionReject } from './Redux/Actions/CardsActions'

const Card = () => {

  const status = useSelector(state => state.status);

  const dispatch = useDispatch();

  return(
    <>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1JyxEJa6z39mKPfGVr6mew5dM1fU-PROrXIzk9GGEj4ThZLNkyD1TAEFBMMb9XWCOhE&usqp=CAU'
        alt='flyer do evento'
      />
      <h5>Este é um card</h5>
      <p>Lorem ipsum daili retreo magis trackerios parafernalium denarc cara te detre frete ipsum narum desu</p>
      <button className='app__btn' onClick={() => dispatch(actionConfirm())}>Confirmar</button>
      <button className='app__btn__danger' onClick={() => dispatch(actionReject())}>Descartar</button>
      <p>{status}</p>
    </>
  )
}


// export default connect(state => ({ status: state }))(Card);
export default Card;

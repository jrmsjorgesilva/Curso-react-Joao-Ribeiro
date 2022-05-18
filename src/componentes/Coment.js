import React from 'react'

const Coment = ({ title, text, autor }) => {
  return(
    <div className=''>
      <h3 className='app__title'>Titulo do comentario: {title}</h3>
      <h3 className='app__text'>Texto do comentario: {text}</h3>
      <h3 className='app__coment__autor'>Autor: {autor}</h3>
    </div>
  )
}

export default Coment

import React from 'react'

const Comment = ({ title, text, autor }) => {
  return(
    <>
      <h3 className='app__title'>Titulo do comentario: {title}</h3>
      <h3 className='app__text'>Texto do comentario: {text}</h3>
      <h3 className='app__coment__autor'>Autor: {autor}</h3>
    </>
  )
}

export default Comment

import React from 'react'

const Comment = ({ title, content, autor, key }) => {

  return(
    <li key={key}>
      <h3 className='app__title'>Titulo do comentario: {title}</h3>
      <h3 className='app__text'>Texto do comentario: {content}</h3>
      <h3 className='app__coment__autor'>Autor: {autor}</h3>
    </li>
  )
}

export default Comment

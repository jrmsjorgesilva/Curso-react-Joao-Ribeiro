import React from 'react'
import './Coment.css'

const Coment = ({ title, text, autor }) => {
  return(
    <div className='coment-container'>
      <h3 className='title'>Titulo do comentario: {title}</h3>
      <h3 className='text'>Texto do comentario: {text}</h3>
      <h3 className='autor'>Autor: {autor}</h3>
    </div>
  )
}

export default Coment

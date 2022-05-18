import React from 'react'
import './Coment.css'

const Coment = (props) => {
  return(
    <div className='coment-container'>
      <h3 className='title'>Titulo do comentario: {props.title}</h3>
      <h3 className='text'>Texto do comentario: {props.text}</h3>
      <h3 className='autor'>Autor: {props.autor}</h3>
    </div>
  )
}

export default Coment

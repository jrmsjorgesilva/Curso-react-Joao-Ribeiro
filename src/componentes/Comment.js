import React from 'react'

const Comment = ({ ReduxComment }) => {

  return(
    <ul>
      {ReduxComment.map(comment => 
        <li key={comment.id}>
          <h3 className='app__title'>Titulo do comentario: {comment.title}</h3>
          <h3 className='app__text'>Texto do comentario: {comment.content}</h3>
          <h3 className='app__coment__autor'>Autor: {comment.autor}</h3>
        </li>
      )}
    </ul>

  )
}

export default Comment

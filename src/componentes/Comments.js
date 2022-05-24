import React, { useState } from 'react'
import Comment from './Comment'
import { useSelector, useDispatch } from 'react-redux'
import { addCommentAction, aproveCommentAction, deleteCommentAction, cleanCommentAction } from './Redux/Actions/CommentsActions'
import { Button, Box, Stack, TextField } from '@mui/material'
import { FaHeart, FaTrash, FaEdit, FaLike, FalikeAlt } from 'react-icons/fa'

const Comments = () => {

  const ReduxComment = useSelector(state => state.CommentsReducer.comment);

  console.log(ReduxComment);

  const dispatch = useDispatch();

  const [inputAutor, setInputAutor] = useState(() => '');
  const [inputTitle, setInputTitle] = useState(() => '');
  const [inputContent, setInputContent] = useState(() => '');

  // const [comments, setComments] = useState(() => [
  //   {
  //     id: 1,
  //     title: 'titulo do comentario',
  //     content: 'conteudo do comentario',
  //     autor: 'autor do comentario'
  //   }
  // ])

  const insertComment = (e) => {
    e.preventDefault();

    // testar se os campos estão preenchidos
    if (inputAutor === '' || inputTitle === '' || inputContent === '') {
      handleError('campos estão vazios');
    }

    // cria o payload array objetos
    const newComment = {
      id: Math.floor(Math.random() * 1000),
      title: inputTitle,
      content: inputContent,
      autor: inputAutor
    }

    ReduxComment.push(newComment);

    console.log("ReduxComment-> ", ReduxComment);

    dispatch(addCommentAction(ReduxComment));

    

  }

  const handleError = (err) => {
    alert(err);
    return false;
  }

  return(
    <div className='app__container'>
      <h1 className='app__title center'>Insira um comentário</h1>
      <small className='center'>
        Seja Gentil  
        <FaHeart style={{ margin: '-2px 6px', color: 'red' }} />
      </small>
      <Box sx={{ width: '100%', margin: '20px 0px' }}>
        <Stack spacing={4}>
          <TextField 
            type="text" 
            label="Autor" 
            variant="outlined"
            onChange={(e) => setInputAutor(e.target.value)} 
          />
          <TextField  
            type="text" 
            label="Titulo" 
            variant="outlined"
            onChange={(e) => setInputTitle(e.target.value)} 
          />
          <TextField 
            type="text" 
            placeholder="Diga o que está pensando" 
            label="Comentario" 
            multiline
            rows={4}
            variant="outlined" 
            onChange={(e) => setInputContent(e.target.value)} 
          />
          <Button
            variant='contained' 
            className='app__btn' 
            size='large'
            onClick={(e) => insertComment(e)}
            
          >
            Enviar
          </Button>
          {ReduxComment.map(c => 
            <Comment 
              key={c.id}
              title={c.title} 
              content={c.content} 
              autor={c.autor}
            />
          )}
        </Stack>
      </Box>
    </div>
  )
}

export default Comments

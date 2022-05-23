import React, { useState } from 'react'
import Comment from './Comment'
import { useSelector, useDispatch } from 'react-redux'
import { actionAddComment, aproveComment, deleteComment, cleanComment } from './Redux/Actions/CommentsActions'
import { Button, Box, Stack, TextField } from '@mui/material'

const Comments = () => {

  const comment = useSelector(state => state.CommentsReducer.comment);

  const dispatch = useDispatch();

  const insereComentario = () => {
    console.log("Comentario deletado -> ", dispatch(deleteComment()));
  }

  const handleText = (e) => {
    console.log("dsfdsdfsd");
  }

  const handleText2 = (e) => {
    console.log("dsfdsdfsd");
  }

  return(
    <div className='app__container'>
      <h1 className='app__title center'>Insira um comentário</h1>
      <small className='center'>seja gentil</small>
      <Box sx={{ width: '100%', margin: '20px 0px' }}>
        <Stack spacing={4}>
          <TextField 
            id="outlined-basic" 
            type="text" 
            placeholder="autor" 
            label="Autor" 
            variant="outlined"
            onChange={(e) => handleText(e.target.value)} 
          />
          <TextField 
            id="outlined-basic" 
            type="text" 
            placeholder="Diga o que está pensando" 
            label="Comentario" 
            multiline
            rows={4}
            variant="outlined" 
            onChange={(e) => handleText2(e.target.value)} 
          />
          <Button
            variant='contained' 
            className='app__btn' 
            size='large'
            onClick={() => dispatch(deleteComment())}
            
          >
            Enviar
          </Button>
          <Comment 
            title='titulo 1' 
            text='texto 1' 
            autor='autor 1'
          />
        </Stack>
      </Box>
    </div>
  )
}

export default Comments

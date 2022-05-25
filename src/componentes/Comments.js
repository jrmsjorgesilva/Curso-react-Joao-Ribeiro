// dependencias
import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// utils
import Comment from './Comment'
// libs components
import { 
  Button, 
  Box, 
  Stack, 
  TextField, 
  Switch 
} from '@mui/material'
import { FaHeart } from 'react-icons/fa'
// actions creators
import { 
  addCommentAction, 
  aproveCommentAction, 
  deleteCommentAction, 
  cleanCommentAction 
} from './Redux/Actions/CommentsActions'

const Comments = () => {

  // useSelector
  const ReduxComment = useSelector(state => state.CommentsReducer.comment);

  // useDispatch
  const dispatch = useDispatch();

  // useRef
  const inputRef = useRef();

  // useState
  // inputs de texto
  const [inputAutor, setInputAutor] = useState(() => '');
  const [inputTitle, setInputTitle] = useState(() => '');
  const [inputContent, setInputContent] = useState(() => '');

  // switch
  const [checked, setChecked] = useState(() => false);

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
      return false;
    }

    // cria o payload array objetos
    const newComment = {
      id: Math.floor(Math.random() * 1000),
      title: inputTitle,
      content: inputContent,
      autor: inputAutor
    }

    ReduxComment.push(newComment);

    // console.log("ReduxComment-> ", ReduxComment);

    dispatch(addCommentAction(ReduxComment));

    // limpa os campos e renderiza o formulario
    setInputTitle('');
    setInputContent('');
    setInputAutor('');
    setChecked(!checked);

    // volta o foco para o input
    inputRef.current.focus();

  }

  const handleError = (err) => {
    alert(err);
    return false;
  }

  const autoFill = () => {
    // habilita / desabilita opção
    if (!checked) {
      setInputTitle(() => 'Porque Titulos são difíceis de criar?');
      setInputContent(() => 'Acontece nas melhores famílias: você está lá com a tarefa de escrever um artigo, mas não sabe que nome dar para ele... Esta coleção de títulos que o Fabinho nos disponibiliza de graça é certamente a solução para isto! Estou muito satisfeito');
      setInputAutor(() => 'MarioMendonça');
    }


    if (checked) {
      setInputTitle('');
      setInputContent('');
      setInputAutor('');
    }

    setChecked(!checked);

  }

  return(
    <div className='app__container'>
      <h1 className='app__title center'>
        Insira um comentário
      </h1>
      <Box sx={{ width: '100%', margin: '20px 0px' }}>
        <Stack spacing={4}>
          <small style={{ margin: '0px 0px 0px auto' }}>
              Preencher automaticamente
              <Switch checked={checked} onChange={() => autoFill()} />
          </small>
          <TextField 
            autoFocus
            ref={inputRef}
            type="text" 
            label="Autor" 
            value={inputAutor}
            variant="outlined"
            onChange={(e) => setInputAutor(() => e.target.value)} 
          />
          <TextField  
            type="text" 
            label="Titulo" 
            value={inputTitle}
            variant="outlined"
            onChange={(e) => setInputTitle(() => e.target.value)} 
          />
          <TextField 
            type="text" 
            placeholder="Diga o que está pensando" 
            label="Comentario"
            value={inputContent}
            multiline
            rows={4}
            variant="outlined" 
            onChange={(e) => setInputContent(() => e.target.value)} 
          />
          <small>
            Seja Gentil  
            <FaHeart style={{ margin: '-2px 6px', color: 'red' }} />
          </small>
          <Button
            variant='contained' 
            className='app__btn' 
            size='large'
            onClick={(e) => insertComment(e)}
          >
            Enviar
          </Button>
          <Comment 
            ReduxComment={ReduxComment}
          />
        </Stack>
      </Box>
    </div>
  )
}

export default Comments

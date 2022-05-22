import React from 'react'
import { Chip } from '@mui/material';
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Todo from './Todo'
import TodoForm from './TodoForm'
import { deleteAction } from "../Redux/Actions/TodoActions";

const TodoApp = () => {

  const [open, setOpen] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const todos = useSelector((state) => state.TodoReducer.todos);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUpdateData(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteAction(id));
  };

  const handleUpdate = (todo) => {
    setUpdateData(todo);
    handleOpen();
  };

  return(
    <div className='app__container'>
      <h1 className='app__title'>Lista de Afazeres</h1>
      <Chip
        onClick={handleOpen}
        label="Adicionar à Lista"
        variant="outlined"
        style={{ marginLeft: 10, width: 150 }}
        color="primary"
      />
      <TodoForm
        open={open}
        handleClose={handleClose}
        todo={updateData}
      />
      {
        todos.length > 0 ?
        todos.map((todo, index) =>
          <Todo key={index} handleUpdate={handleUpdate} handleDelete={handleDelete} todo={todo}/>
        )
        : 'Não há afazeres na sua lista...'
      }
    </div>

  )
}

export default TodoApp;

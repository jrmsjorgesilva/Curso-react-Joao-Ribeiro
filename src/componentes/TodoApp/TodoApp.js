import React from 'react'
import { ListItem, ListItemText, Chip } from '@mui/material';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import todoList from './Data/db.js'
import Todo from './Todo'
// import TodoForm from './TodoForm'

const TodoApp = () => {

  const [open, setOpen] = useState(false);
    const [updateData, setUpdateData] = useState(null);
    // const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
  const [todos, setTodos] = useState(() => todoList);

  const handleUpdate = (id) => {
    // const getTodoById = todos.filter((elem) => elem.id === id);
    // console.log("getTodoById->", getTodoById);
    // const getNewTodo = handleOpen();
    // todos.map(todo => {
    //   todo === todo.id ? todo = getNewTodo : null
    // })
  }

  const handleOpen = () => {
    console.log(todos);
  }

  const handleClose = () => {
    console.log(todos);
  }


  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    console.log(todos);
  }

  const handleChange = (id) => {
    console.log(id);
  }

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
      {/*<TodoForm
        open={open}
        handleClose={handleClose}
        todo={updateData}
      />*/}
      {
        todos.length > 0 ?
        todos.map(todo =>
          <Todo handleUpdate={handleUpdate} handleDelete={handleDelete} todo={todo}/>
        )
        : 'Não há afazeres na sua lista...'
      }
    </div>

  )
}


// export default connect(state => ({ status: state }))(Card);
export default TodoApp;

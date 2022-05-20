import React from 'react'
import { ListItem, ListItemText, Chip } from '@mui/material';
import { useState, useEffect } from 'react'
import todoList from './Data/db.js'
import Todo from './Todo'

const TodoApp = () => {

  const [todos, setTodos] = useState(() => todoList);

  const handleUpdate = (id) => {
    console.log(id);
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
      {/*<Chip
        onClick={handleOpen}
        label="ADD TODO"
        variant="outlined"
        style={{ marginLeft: 10, width: 150 }}
        color="primary"
      />
      <TodoForm open={open} handleClose={handleClose} todo={updateData} />*/}
      {
        todos.map(todo =>
          <Todo handleUpdate={handleUpdate} handleDelete={handleDelete} todo={todo}/>
        )
      }
    </div>

  )
}


// export default connect(state => ({ status: state }))(Card);
export default TodoApp;

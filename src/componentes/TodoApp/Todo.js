import React from 'react'
import { ListItem, ListItemText, Chip } from '@mui/material';
import { useState, useEffect } from 'react'
import todoList from './Data/db.js'

const Todo = ({ handleDelete, handleUpdate, todo }) => {

  return(
    <>
      <ListItem
        style={{
          color: 'lime',
          backgroundColor: 'rgba(50,205,50, .1)',
          borderRadius: '5px',
          margin: '3px'
        }}
      >
        <ListItemText
          primary={todo.title}
          secondary={
            <>
              {todo.date}
              <Chip
                label={todo.status}
                size='small'
                variant='outlined'
                style={{ marginLeft: '20px', width: '80'}}
                color={todo.status === 'pending' ? 'error' : 'success'}
              />
            </>
          }
        />
        <Chip
          title="Edit Todo"
          label="Update"
          color="primary"
          style={{ width: 100, cursor: 'pointer'}}
          onClick={() => handleUpdate(todo.id)}
        />
        <Chip
          title="Delete Todo"
          label="Delete"
          color="warning"
          style={{ width: 100, cursor: 'pointer'}}
          onClick={() => handleDelete(todo.id)}
        />
      </ListItem>
    </>

  )
}


// export default connect(state => ({ status: state }))(Card);
export default Todo;

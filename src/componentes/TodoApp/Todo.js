import React from 'react'
import { ListItem, ListItemText, Chip } from '@mui/material';

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
                color={todo.status === 'Pendente' ? 'error' : 'success'}
              />
            </>
          }
        />
        <Chip
          title="Edit Todo"
          label="Editar"
          color="primary"
          style={{ width: 100, cursor: 'pointer'}}
          onClick={() => handleUpdate(todo)}
        />
        <Chip
          title="Delete Todo"
          label="Deletar"
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

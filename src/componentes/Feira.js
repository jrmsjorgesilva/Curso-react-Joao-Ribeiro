import React, { useState } from 'react'
import { Box, TextField, Badge, Fab, Chip, Avatar } from '@mui/material';
import { FaPlus, FaTrash, FaCheck, FaEdit, FaCog } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux'
import { addFrutaAction, deleteFrutaAction } from './Redux/Actions/FeiraActions'

const Feira = () => {

  const frutas = useSelector(state => state.FeiraReducer.frutas);

  const dispatch = useDispatch();

  const [newFrutas, setNewFrutas] = useState(() => []);

  return(
    <div className='app__container'>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 2, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          type='text'
          label="Fruta"
          variant="outlined"
          sx={12}
          onChange={(e) => setNewFrutas([e.target.value])}
        />
        <Fab
          aria-label="add"
          onClick={() => dispatch(addFrutaAction(newFrutas))}
          style={{
            width: '55px',
            height: '55px',
            backgroundColor: 'lime',
            color: 'white',
          }}
        >
          <FaPlus />
        </Fab>
        <ul>
          {frutas.length > 0 ?
              frutas.map(f =>
                <>
                  <Chip
                    key={f.id}
                    label={f.name}
                    variant="outlined"
                    color="secondary"
                    size="large"
                    avatar={<Avatar>{f.id}</Avatar>}
                    onDelete={() => dispatch(deleteFrutaAction(f.id))}
                    deleteIcon={<FaTrash />}
                  />
                </>
              ) : (
                'Não há nenhuma fruta na cesta'
              )
          }

        </ul>

        <p>

        </p>
      </Box>
    </div>
  )
}

export default Feira;

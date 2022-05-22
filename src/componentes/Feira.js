import React, { useState } from 'react'
import { Box, TextField, Badge, Fab } from '@mui/material';
import { FaPlus, FaTrash, FaCheck, FaEdit, FaCog } from 'react-icons/fa';


const Feira = () => {

  const [frutas, setFrutas] = useState(() => []);
  const [newFruta, setNewFruta] = useState(() => []);

  const addFrutas = () => {
    const acc = [...newFruta]
    setNewFruta([acc, frutas]);
  }

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
          label="Fruta"
          variant="outlined" sx={12}
          onChange={(e) => setFrutas(e.target.value)}
        />
        <Fab
          aria-label="add"
          onClick={() => addFrutas()}
          style={{
            width: '55px',
            height: '55px',
            backgroundColor: 'lime',
            color: 'white'
          }}
        >
          <FaPlus />
        </Fab>
        <p>{newFruta}</p>
      </Box>
    </div>
  )
}

export default Feira;

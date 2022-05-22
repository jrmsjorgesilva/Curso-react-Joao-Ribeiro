import React, { useState } from 'react'
import { Box, TextField, Badge, Fab, Chip, Avatar } from '@mui/material';
import { FaPlus, FaTrash, FaCheck, FaEdit, FaCog } from 'react-icons/fa';


const Feira = () => {

  const [frutas, setFrutas] = useState(() => [
    {
      id: 1,
      name: 'goiaba',
    },
    {
      id: 2,
      name: 'banana',
    },
    {
      id: 3,
      name: 'abacaxi',
    }
  ]);

  console.log("FRUTAS", frutas);

  const [newFrutas, setNewFrutas] = useState(() => [{}]);

  const addFrutas = () => {
    console.log("FRUTAS", frutas);
    console.log("NEWFRUTAS", newFrutas);
    console.log("...FRUTAS", ...frutas);
    console.log("...NEWFRUTAS", ...newFrutas);
    const addNewfruta = {
      id: Math.floor(Math.Random() * 10000),
      name: newFrutas
    }
    setFrutas([...frutas, { id: 4, name: 'fdjfnjdfndjf' }]);
  }

  const newID = () => {
    return Math.floor(Math.Random() * 10000);
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
          variant="outlined"
          sx={12}
          onChange={(e) => setNewFrutas([e.target.value])}
        />
        <Fab
          aria-label="add"
          onClick={() => addFrutas()}
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
          {
              frutas.map(f =>
                <>
                  <Chip
                    key={f.id}
                    label={f.name}
                    variant="outlined"
                    color="secondary"
                    size="large"
                    avatar={<Avatar>F</Avatar>}
                  />
                </>
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

import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionInvertexto } from './Redux/Actions/InvertextoActions'
import { TextField, Typography, Button, Stack, Alert, IconButton } from '@mui/material'
import { FaArrowRight, FaTimes } from 'react-icons/fa'

const Invertexto = () => {

  const [text, setText] = useState(() => '');
  const invertext = useSelector(state => state.InvertextoReducer.text);

  console.log("INVERTEXTO REDUCER", text);

  const dispatch = useDispatch();

  return(
    <div className='app__container'>

      <Typography
        gutterBottom 
        variant="h3" 
        component="div" 
        className='center'
        margin='30px 5px'
      >
        Invertexto 
        <small>
          Inc
        </small>
      </Typography>

      <Stack direction='column' spacing={4}>

        <TextField
          autofocus
          variant='outlined'
          className='app__input'
          type="text"
          placeholder="Digite o texto a ser invertido"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        
        <Button
          variant='contained' 
          className='app__btn' 
          endIcon={<FaArrowRight />}
          onClick={() => dispatch(actionInvertexto(text))}
        >
          Inverter
        </Button>

        <Alert 
          severity="info"
        >
          <Typography
            variant="p" 
          >
            {invertext}
          </Typography>
        </Alert>

      </Stack>

    </div>
  )
}

// export default connect(state => ({ text: state }))(Invertexto)
export default Invertexto

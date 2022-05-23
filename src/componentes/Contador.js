import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementAction, decrementAction, cleanAction } from './Redux/Actions/CounterActions'
import { Button, Stack, Slider } from '@mui/material'
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa'

const Contador = () => {

  const [sliderCount, setSliderCount] = useState(() =>  5);

  const count = useSelector(state => state.ContadorReducer.count);

  const dispatch = useDispatch();

  const incrementaValor = () => {
    dispatch(incrementAction(sliderCount));
  }

  const decrementaValor = () => {
    dispatch(decrementAction(sliderCount));
  }

  const limpaValor = () => {
    dispatch(cleanAction());
  }

  // set slider value text
  const sliderValue = (e) => {
    setSliderCount(e.target.value);
  }

  const incrementAsync = () => {
    setTimeout(() => {
      console.log("entrou no setTimeOut");
      dispatch(incrementAction(sliderCount));
    }, Math.floor(Math.random() * 4800));
  }
  
  const decrementAsync = () => {
    setTimeout(() => {
      dispatch(decrementAction(sliderCount));
    }, Math.floor(Math.random() * 3300));
  }

  return(
    <div className='app__container center'>
      <h1 className='m-2'>Contador <span className='app__title'>Milenium</span></h1>
      <p className='m-3'>
        <small>Selecione o valor para executar a contagem</small>
      </p>
       <Stack direction="column" spacing={2}>
        <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
            onChange={(e) => sliderValue(e)}
          />
        <Button 
          variant="contained"  
          endIcon={<FaPlus />} 
          onClick={() => incrementaValor()}
        >
          Incrementar
        </Button>
        <Button 
          variant="contained" 
          endIcon={<FaMinus />} 
          onClick={() => decrementaValor()}
        >
          Decrementar
        </Button>
        <Button 
          variant="contained"  
          endIcon={<FaPlus />} 
          onClick={() => incrementAsync()}
        >
          Incrementar Async
        </Button>
        <Button 
          variant="contained" 
          endIcon={<FaMinus />} 
          onClick={() => decrementAsync()}
        >
          Decrementar Async
        </Button>
        <Button 
          variant="contained" 
          endIcon={<FaTrash />} 
          onClick={() => limpaValor()}
        >
          Limpar
        </Button>
       </Stack>

      <h1 className='center m-3'>Contador: {count}</h1>
    </div>
  )
}


export default Contador;

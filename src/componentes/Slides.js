import React, { useState } from 'react';
import { Button, Stack} from '@mui/material'
import { FaArrowLeft, FaUndo, FaArrowRight } from 'react-icons/fa'

const Slides = () => {

  const slides = [
      {
          title: "Today's workout plan",
          text: "We're gonna do 3 fundamental exercises."
      },
      {
          title: "First, 10 push-ups",
          text: "Do 10 reps. Remember about full range of motion. Don't rush."
      },
      {
          title: "Next, 20 squats",
          text: "Squats are important. Remember to keep your back straight."
      },
      {
          title: "Finally, 15 sit-ups",
          text: "Slightly bend your knees. Remember about full range of motion."
      },
      {
          title: "Great job!",
          text: "You made it, have a nice day and see you next time!"
      }
  ];

  const [slide, setSlide] = useState(() => 0);
  // const [disabled, setDisabled] = useState(() => 'disabled');
  const disabled = 'disabled';

  // console.log(slides[slide].text, slide)

  const nextSlide = () => {
      if (slide < 4) {
        setSlide(slide + 1);
      }

      return false;
  }

  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }

    return false;
  }

    return (
        <div className='app__container'>
            <Stack sx={{ margin: 'auto', justifyContent: 'center', alignItems: 'center' }} direction='row' spacing={4} className="center">
                <Button
                  variant='contained'
                  endIcon={<FaUndo />}
                  onClick={() => setSlide(0)}
                  disabled={slide === 0 ? disabled : !disabled}
                >
                  Restart
                </Button>
                <Button
                  variant='contained'
                  endIcon={<FaArrowLeft />}
                  onClick={() => prevSlide()}
                  disabled={slide < 1 ? disabled : !disabled}
                >
                  Prev
                </Button>
                <Button
                  variant='contained'
                  endIcon={<FaArrowRight />}
                  onClick={() => nextSlide()}
                  disabled={slide > 3 ? disabled : !disabled}
                >
                  Next
                </Button>
            </Stack>
            <div style={{ margin: '100px auto' }} id="slide" className="card center">
                <h1 data-testid="title">{slides[slide].title}</h1>
                <p data-testid="text">{slides[slide].text}</p>
            </div>
        </div>
    );

}

export default Slides;

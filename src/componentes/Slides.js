import React, { useState } from 'react';

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
        <div className='app_container'>
            <div id="navigation" className="text-center">
                <button
                  className="app__btn"
                  onClick={() => setSlide(0)}
                  disabled={slide === 0 ? disabled : !disabled}
                >
                  Restart
                </button>
                <button
                  className="app__btn"
                  onClick={() => prevSlide()}
                  disabled={slide < 1 ? disabled : !disabled}
                >
                  Prev
                </button>
                <button
                  className="app__btn"
                  onClick={() => nextSlide()}
                  disabled={slide > 3 ? disabled : !disabled}
                >
                  Next
                </button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[slide].title}</h1>
                <p data-testid="text">{slides[slide].text}</p>
            </div>
        </div>
    );

}

export default Slides;

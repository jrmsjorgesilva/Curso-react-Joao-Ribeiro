import React from 'react';
import { 
    ON_INCREASE_BREAK, 
    ON_DECREASE_BREAK, 
    ON_INCREASE_SESSION, 
    ON_DECREASE_SESSION,
    ON_RESET,
} from '../Actions/PomodoroActions';

const INITIAL_POMODORO = {
    session: 25,
    break: 5
}

const PomodoroReducer = (state = INITIAL_POMODORO, action) => {
    switch(action.type) {
        case ON_INCREASE_SESSION:
            return {session: state.session + 1};
            // return console.log(state.session);
        case ON_DECREASE_SESSION:
            return {session: state.session - 1};
        case ON_INCREASE_BREAK:
            return {break: state.break + 1};
        case ON_DECREASE_BREAK:
            return {break: state.break + 1};
        case ON_RESET:
            return {break: 5, session: 25};
        default:
            return state;
    }
}

export default PomodoroReducer;
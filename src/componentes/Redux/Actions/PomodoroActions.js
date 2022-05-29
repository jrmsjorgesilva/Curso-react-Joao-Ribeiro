const ON_INCREASE_SESSION = 'ON_INCREASE_SESSION';
const ON_DECREASE_SESSION = 'ON_DECREASE_SESSION';
const ON_INCREASE_BREAK = 'ON_INCREASE_BREAK';
const ON_DECREASE_BREAK = 'ON_DECREASE_BREAK';
const ON_RESET = 'ON_RESET';


const increaseSessionAction = () => {
    return {
        type: ON_INCREASE_SESSION
    }
}

const decreaseSessionAction = () => {
    return {
        type: ON_DECREASE_SESSION
    }
}

const increaseBreakAction = () => {
    return {
        type: ON_INCREASE_BREAK
    }
}

const decreaseBreakAction = () => {
    return {
        type: ON_DECREASE_BREAK
    }
}

const resetAction = () => {
    return {
        type: ON_RESET
    }
}

export {
    ON_INCREASE_SESSION,
    ON_DECREASE_SESSION,
    ON_INCREASE_BREAK,
    ON_DECREASE_BREAK,
    ON_RESET,
    increaseSessionAction,
    decreaseSessionAction,
    increaseBreakAction,
    decreaseBreakAction,
    resetAction,
}
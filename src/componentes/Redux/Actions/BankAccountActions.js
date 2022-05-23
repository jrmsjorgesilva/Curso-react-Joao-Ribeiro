// constantes
const DEPOSIT = 'DEPOSIT';
const WITHDRAW = 'WITHDRAW';

// Actions
const depositAction = (value) => {
    return {
        type: DEPOSIT,
        payload: value
    }
}

const withdrawAction = (value) => {
    return {
        type: WITHDRAW,
        payload: value
    }
}

export {
    DEPOSIT,
    WITHDRAW,
    depositAction,
    withdrawAction,
}
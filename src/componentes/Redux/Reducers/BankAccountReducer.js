import { DEPOSIT, WITHDRAW } from '../Actions/BankAccountActions'

const INITIAL_SALDO = {
    account: {
        id: 1,
        name: 'Matteus',
        lastName: 'Santhiago Albuquerque',
        saldo: 324.34,
        typeAccount: 'premium'
    }
}


const BankAccountReducer = (state = INITIAL_SALDO, action) => {
    switch(action.type) {
        case DEPOSIT:
            // return {
            //     state.account: state + action.payload
            // }
            console.log("action.payload", action.payload);
        case WITHDRAW:
            return {
                ...state,
                saldo: state.saldo - action.payload
            };
        default:
            return state;
    }
}

export default BankAccountReducer;
import { DEPOSIT, WITHDRAW } from '../Actions/BankAccountActions'

const INITIAL_SALDO = {
    saldo: 324.67,
    id: 1,
    name: 'Matteus',
    lastName: 'Santhiago Albuquerque',
    typeAccount: 'premium',
    credito: false,
    débito: true,
    serasa: false
}


const BankAccountReducer = (state = INITIAL_SALDO, action) => {
    switch(action.type) {
        case DEPOSIT:
            return { ...state, saldo: state.saldo + action.payload }
        case WITHDRAW:
            return { ...state, saldo: state.saldo - action.payload }
        default:
            return state;
    }
}

export default BankAccountReducer;
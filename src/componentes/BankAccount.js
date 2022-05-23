import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button, Stack } from '@mui/material'
import { FaCreditCard, FaMoneyCheck, FaTrophy, FaUser, FaPass } from 'react-icons/fa'
import { depositAction, withdrawAction } from './Redux/Actions/BankAccountActions';

const BankAccount = () => {

    // seta account com dados do reducers conta bancaria
    const account = useSelector(state => state.BankAccountReducer);

    // seta dispatch
    const dispatch = useDispatch();

    // seta value para manter o valor da conta pelo campo input
    const [value, setValue] = useState(() => 0);

    return(
        <section className='app__container center'>
            <h1 className='app__title'>BNK</h1>
            <p>
                <small className='m-3'>O banco digital que veio para mudar tudo</small>
            </p>
            <Stack direction='column' spacing={1} margin={2}>
                <h3>Bem vindo, <span className='app__highlight'>{account.name} {account.lastName}</span></h3>
                <p>
                    <small>Cliente {account.typeAccount}</small>
                    {
                        account.typeAccount === 'premium' 
                        ? (<FaTrophy style={{ color: 'lime', marginTop: '5px' }} />) 
                        : (<FaUser style={{ color: 'lime', marginTop: '15px' }} />)
                    }
                </p>
            </Stack>
            <Stack direction='row' width='100%' spacing={2} margin={2}>
                <TextField 
                    type='number'
                    variant='filled'
                    placeholder='Valor'
                    className='app__input'
                    onChange={(e) => setValue(parseInt(e.target.value))}
                />
                <Button 
                    variant='contained' 
                    startIcon={<FaCreditCard />}
                    onClick={() => dispatch(depositAction(value))}
                >
                    Depositar
                </Button>
                <Button 
                    variant='contained' 
                    startIcon={<FaMoneyCheck />}
                    onClick={() => dispatch(withdrawAction(value))}
                >
                    Sacar
                </Button>
                <TextField
                    id="filled-read-only-input"
                    label="Saldo em Conta"
                    value={account.saldo}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="filled"
                />
            </Stack>
        </section>
    )
}

export default BankAccount;
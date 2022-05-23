import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button, Stack } from '@mui/material'
import { FaCreditCard, FaMoneyCheck } from 'react-icons/fa'
import { depositAction, withdrawAction } from './Redux/Actions/BankAccountActions';

const BankAccount = () => {

    const account = useSelector(state => state.BankAccountReducer.account);

    console.log(account, account.saldo);

    const dispatch = useDispatch();

    const [value, setValue] = useState(() => 0);

    return(
        <section className='app__container center'>
            <h1 className='app__title'>BNK</h1>
            <p>
                <small className='m-3'>O banco digital que veio para mudar tudo</small>
            </p>
            <Stack direction='row' width='100%' spacing={2} margin={4}>
                <TextField 
                    type='number'
                    id='outlined-basic'
                    placeholder='Valor'
                    className='app__input'
                    onChange={(e) => setValue(e.target.value)}
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
import React, { useState, useEffect } from 'react'
import { List, ListItem, ListItemButton, ListItemText, Select, MenuItem, Stack } from '@mui/material'
import { FaTrash, FaSearch, FaStar, FaUser } from 'react-icons/fa'

const UserFetch = () => {

    const [fetchData, setFetchData] = useState(() => []);

    const [error, setError] = useState(() => null);

    const [select, setSelect] = useState(() => 'users');

    const API_URL = 'https://dummyjson.com/';

    useEffect(() => {

        if (select === 'quotes') {

            const fetchQuotes = async () => {
                try {
                    const res = await fetch(`${API_URL}quotes`);
                    const data = await res.json()
                    setFetchData(data.quotes.map(elem => elem.quote + ' -> ' + elem.author));
                    setError(null);
                } catch (err) {
                    setError(err);
                }
            }
            fetchQuotes();
        }

        if (select === 'users') {
            
            const fetchUsers = async () => {
                try {
                    const res = await fetch(`${API_URL}users`);
                    const data = await res.json();
                    setFetchData(data.users.map(elem => elem.firstName));
                    setError(null);
                } catch (err) {
                    setError(err);
                }
            }

            fetchUsers();
            
        }

    }, [select])

    const handleChange = (e) => {
        setSelect(e.target.value);
    }

    return(
        <div className='app__container'>
            <h1 className='app__title center'>Sommelier de API</h1>
            <p className='center'>
                <small>Escolha uma API para fazer a busca</small>
            </p>
            <Stack direction='column' spacing={4} margin={4}>
                <Select 
                    labelId="select-label-api"
                    id="select-api"
                    value={select}
                    onChange={(e) => handleChange(e)}
                >
                    <MenuItem 
                        value='users'
                    >
                        <FaUser style={{ margin: '0px 15px'}} />
                        Users
                    </MenuItem>
                    <MenuItem 
                        value='quotes'
                    >
                        <FaStar style={{ margin: '0px 15px'}} />
                        Quotes
                    </MenuItem>
                </Select>
            </Stack>
            {fetchData.map(data => 
                <>
                    <List key={data.id}>
                        <ListItem disablePadding>
                        <ListItemButton>
                            {select === 'users' &&
                                <FaUser 
                                    role='button' 
                                    style={{ 
                                        color: 'gray', 
                                        margin: '10px' 
                                    }} 
                                />
                            }
                            <ListItemText primary={Object.values(data)} />
                            <FaTrash 
                                role='button' 
                                style={{ 
                                    color: 'firebrick', 
                                    margin: '10px' 
                                }} 
                            />
                            <FaStar 
                                role='button' 
                                style={{ 
                                    color: '#dcdf00', 
                                    margin: '10px' 
                                }} 
                            />
                        </ListItemButton>
                        </ListItem>
                    </List>
                </>
            )}
        </div>
    )
}

export default UserFetch
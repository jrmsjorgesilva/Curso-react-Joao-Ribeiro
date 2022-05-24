import React, { useState, useEffect } from 'react'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { FaTrash, FaSearch, FaStar, FaUser } from 'react-icons/fa'

const UserFetch = () => {

    const [fetchData, setFetchData] = useState(() => []);

    const [select, setSelect] = useState(() => 'users');

    console.log(select)


    const API_URL = 'https://dummyjson.com/';
    // const subject = ['quotes', 'users']

    useEffect(() => {

        if (select === 'quotes') {
            fetch(`${API_URL}quotes`)
            .then(response => response.json())
            .then(json => {
                console.log(json.quotes);
                setFetchData(json.quotes);
            })
        }

        if (select === 'users') {
            fetch(`${API_URL}users`)
            .then(response => response.json())
            .then(json => {
                console.log(json.users);
                setFetchData(json.users.map(elem => elem.firstName));
            })
        }

    }, [select])

    const handleChange = (e) => {
        setSelect(e.target.value);
    }

    return(
        <div className='app__container'>
            <h1 className='app__title center'>Frases Ins Piradoras</h1>
            <select onChange={(e) => handleChange(e)}>
                <option value='quotes'>Quotes</option>
                <option value='users'>Users</option>
            </select>
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
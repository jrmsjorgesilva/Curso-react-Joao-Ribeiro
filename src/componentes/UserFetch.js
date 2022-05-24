import React, { useState, useEffect } from 'react'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'

const UserFetch = () => {

    const [fetchData, setFetchData] = useState(() => []);

    const [select, setSelect] = useState(() => 'quotes');

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
                setFetchData(json.users);
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
                <option value='users'>users</option>
            </select>
            {fetchData.map(data => 
                    <>
                        <List key={data.id}>
                            <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={Object.entries(data)} />
                            </ListItemButton>
                            </ListItem>
                        </List>
                    </>
                )}
        </div>
    )
}

export default UserFetch
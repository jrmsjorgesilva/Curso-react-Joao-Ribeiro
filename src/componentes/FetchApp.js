import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const FetchApp = () => {

  // state
  const [data, setData] = useState(() => 'Ainda não foram carregados os dados');
  const [error, setError] = useState(() => null)

  // API
  const API_URL = 'https://jsonplaceholder.typicode.com/'

  // estilos
  const btn_fetch = {
    color: 'black',
    width: '33%',
    margin: 0
  }

  // useEffect(() => {
  //
  //
  //
  // }, []);

  const fetchData = (value) => {

    const filterData = `${API_URL}${value}`
    axios.get(filterData)
    .then(response => {
      // setData(response.data);
      setData(JSON.stringify(response.data));
      setError(null);
    }, error => {
      setError(error);
    });

  }

  return(
    <div className='app__container'>
      <h1 className='app__title center'>Fetch <small>App</small></h1>
      <div>
        <button className='app__btn' style={btn_fetch} onClick={() => fetchData('users')}>Usuarios</button>
        <button className='app__btn' style={btn_fetch} onClick={() => fetchData('posts')}>Posts</button>
        <button className='app__btn' style={btn_fetch} onClick={() => fetchData('comments')}>Comentarios</button>
        <span className=''>
          {data}
        </span>
      </div>
    </div>
  )
}

export default FetchApp

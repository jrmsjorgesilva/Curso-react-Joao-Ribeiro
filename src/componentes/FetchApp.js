import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const FetchApp = () => {

  // state
  const [data, setData] = useState(() => 'Ainda não foram carregados os dados');
  const [error, setError] = useState(() => null)
  const [param, setParam] = useState(() => '')

  // API
  const API_URL = 'https://jsonplaceholder.typicode.com/'

  // estilos
  const btn_fetch = {
    color: 'black',
    width: '33%',
    margin: 0
  }

  useEffect(() => {
  
    const fetchFilteredData = async (param) => {

      const filterData = `${API_URL}${param}`;
  
      try {
        const res = await fetch(filterData);
        const data = await res.json();
        setData(JSON.stringify(data));
        console.log(data);
        setError(null);
      } catch (error) {
        setError(error);
        console.log(error)
      }
    }
    
    fetchFilteredData(param);
  
  }, [param]);



  return(
    <div className='app__container'>
      <h1 className='app__title center'>Fetch <small>App</small></h1>
      <div>
        <button className='app__btn' style={btn_fetch} onClick={() => setParam('users')}>Usuarios</button>
        <button className='app__btn' style={btn_fetch} onClick={() => setParam('posts')}>Posts</button>
        <button className='app__btn' style={btn_fetch} onClick={() => setParam('comments')}>Comentarios</button>
        <span className=''>
          {data}
        </span>
      </div>
    </div>
  )
}

export default FetchApp

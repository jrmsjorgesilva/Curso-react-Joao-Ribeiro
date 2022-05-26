import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper  } from '@mui/material'

const DadosClientes = () => {

  const [data, setData] = useState(() => []);

  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {

    fetch(API_URL)
      .then(response => response.json())
      .then(json => setData(json))

  }, [])

  return(
    <div className='app__container'>

      <h3 className='app__title'>Dados dos clientes</h3>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Lista de clientes cadastrados</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Nome Usuário</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Logradouro</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.address.street}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      {/* <List>
        {
          dadosClientes.map(elem => <ListItem key={elem.id}>Nome: {elem.nome} | Email: {elem.email}</ListItem>)
        }
      </List> */}
    </div>
  )
}

export default DadosClientes

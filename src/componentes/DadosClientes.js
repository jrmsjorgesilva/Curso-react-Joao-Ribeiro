import React from 'react'
import dadosClientes from '../dadosClientes/dadosClientes'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper  } from '@mui/material'

const DadosClientes = () => {

  return(
    <div className='app__container'>

      <h3 className='app__title'>Dados dos clientes</h3>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Lista de clientes cadastrados</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dadosClientes.map((row) => (
            <TableRow
              key={row.nome}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
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

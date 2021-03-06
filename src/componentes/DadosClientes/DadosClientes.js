import React, { useState, useEffect } from 'react'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Fab,
  Stack,
  TextField,
  InputAdornment,
} from '@mui/material';
import { FaFirstOrder, FaBackward, FaFingerprint, FaSearch } from 'react-icons/fa'

const DadosClientes = () => {

  const [data, setData] = useState(() => []);

  const [callFetchAgain, setCallFetchAgain] = useState(() => false);

  const [search, setSearch] = useState(() => '');

  const [error, setError] = useState(() => null);

  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {

    // fetch(API_URL)
    //   .then(response => response.json())
    //   .then(json => setData(json))

    const fetchDadosClientes = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setData(data);
        setError(null);
      } catch (err) {
        setError(err);
      }
    }

    fetchDadosClientes();

  }, [callFetchAgain])

  const reverseData = () => {
    const newData = data.reverse();
    setData([...newData]);
  }

  const sortDataByName = () => {
    const newData = data;
    newData.sort((x, y) => {
      let a = x.name.toUpperCase();
      let b = y.name.toUpperCase();
      return a == b ? 0 : a > b ? 1 : -1;
    })
    setData([...newData]);
  }

  const sortDataByID = () => {
    const newData = data;
    newData.sort((a, b) => a.id - b.id);
    setData([...newData]);
  }

  // TODO -> corrigir bug para chamar a API assim quye apagar os dados (delay na chamada)
  const searchData = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search);

    setData(data.filter(item => (item.name).toLowerCase().includes(search.toLowerCase())))

    if (search === '') {
      setCallFetchAgain(!callFetchAgain)
    }

  }

  return(
    <div className='app__container'>

      <h3 className='app__title'>Dados dos clientes</h3>

      <small>
        <p>Filtre sua busca:</p>
      </small>

      <Stack direction='row' spacing={4} margin={4} justifyContent='center'>

        <Fab 
          variant="extended"
          onClick={() => reverseData()}
        >
          <FaBackward sx={{ mr: 1 }} />
           Inverter Lista
        </Fab>

        <Fab 
          variant="extended"
          onClick={() => sortDataByName()}
        >
          <FaFirstOrder sx={{ mr: 1 }} />
           Ordem Alfab??tica
        </Fab>

        <Fab 
          variant="extended"
          onClick={() => sortDataByID()}
        >
          <FaFingerprint sx={{ mr: 1 }} />
           Ordem por ID
        </Fab>

      </Stack>

      <Stack>

        <TextField 
          autoFocus
          type='text'
          placeholder='Encontre um item espec??fico'
          defaultValue=''
          id="input-with-icon-textfield"
          label="Pesquisar"
          value={search}
          onChange={(e) => searchData(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaSearch />
              </InputAdornment>
            ),
          }}
          
        />

      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Lista de clientes cadastrados</TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Nome Usu??rio</TableCell>
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
    </div>
  )
}

export default DadosClientes

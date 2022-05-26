import React, { useState, useEffect } from 'react'
import { Box, Stack, Button } from '@mui/material'
import { FaBrain, FaQuoteLeft } from 'react-icons/fa'

const RandomQuotes = () => {


  const quotes = [
    {
        id: 1,
        text: 'Clique no botão para ter uma quote gerada aleatoriamente',
        author: 'JM Softwares'
    },
    {
        id: 2,
        text: 'Os planos de Deus são justos e certeiros! Tenha fé e confiança! ',
        author: 'Renata vasconcelos'
    },
    {
        id: 3,
        text: 'Nossas vidas são definidas por oportunidades, inclusive aquelas que perdemos.',
        author: 'Renan dias'
    },
    {
        id: 4,
        text: 'Não espere pelo momento perfeito. Faça de cada momento a oportunidade perfeita.',
        author: 'Mariana de albuquerque'
    },
    {
        id: 5,
        text: 'Vencedores não são pessoas que nunca falham, são pessoas que nunca desistem.🦸‍♂️',
        author: 'Genesio da Lapa'
    },
    {
        id: 6,
        text: 'Esteja presente em cada momento da sua vida, antes que estes momentos se tornem apenas lembranças.',
        author: 'Sandra Sousa e Souza de Suoussa'
    }
  ]

  const [quote, setQuote] = useState(() => 0)

  return (
    <Box className='app__container'>
        <h1 className='app__title center'>RandomQuotes</h1>
        <Stack 
            direction='column' 
            justifyContent='center' 
            alignItems='center'
        >
            <span 
                className='quote'
                style={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: '50px 20px',
                }}
            >
                <FaQuoteLeft
                    style={{
                        color: 'lime',
                        margin: '0px 30px',
                        fontSize: '50px'
                    }}
                />
                {quotes[quote].text}
                <p style={{ color: 'lime', margin: '20px 10px', fontSize: '14px' }}>
                    {quotes[quote].author}
                </p>
            </span>
            <Button 
                variant='contained'
                onClick={() => setQuote(Math.floor(Math.random() * (quotes.length - 1) + 1))}
            >
                Gerar Nova Frase
                <FaBrain style={{ margin: '0px 10px'}} />
            </Button>
        </Stack>
    </Box>
  )
}

export default RandomQuotes
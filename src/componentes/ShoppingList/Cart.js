import React from 'react'
import { Stack, Button } from '@mui/material'
import { FaShoppingCart } from 'react-icons/fa'

const Cart = () => {
  return (
    <div>
        <Stack margin={3} maxWidth={200} marginLeft='auto' >
            <Button 
                variant="outlined" 
                startIcon={<FaShoppingCart />}
                onClick={console.log('clicou')}
            >
                Carrinho
            </Button>
        </Stack>
    </div>
  )
}

export default Cart
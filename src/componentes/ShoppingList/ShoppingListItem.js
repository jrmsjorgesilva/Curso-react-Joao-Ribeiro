import React from 'react'
import { List, ListItem, ListItemButton, ListItemText, Button } from '@mui/material'

const ShoppingListItem = ({ produto, key }) => {
  return (
    <List key={key}>
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemText primary={produto} />
                <Button
                    onClick={console.log('clicou')}
                    variant='contained'
                >
                    Adicionar ao Carrinho
                </Button>
            </ListItemButton>
        </ListItem>
    </List>
  )
}

export default ShoppingListItem
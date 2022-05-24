import React, { useState, useEffect } from 'react'
import Cart from './Cart'
import ShoppingListItem from './ShoppingListItem'

const ShoppingList = () => {

  const [produtos, setProdutos] = useState(() => [
      {
          id: 1,
          produto: 'Pente de memoria'
      },
      {
          id: 2,
          produto: 'Placa de video'
      },
  ]);

  return (
    <div className='app__container'>
        <Cart />
        {
            produtos.map(produto => <ShoppingListItem key={produto.id} produto={produto.produto} />)
        }
    </div>
  )
}

export default ShoppingList
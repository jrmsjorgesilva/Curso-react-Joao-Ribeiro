import React, { useState } from 'react'
import { FaTrash, FaCheck } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { deleteFixitAction, addFixitAction } from './Redux/Actions/FixitActions'

const Fixit = () => {

  const produto = useSelector(state => state.FixitReducer.fixitItem);

  const dispatch = useDispatch()

  const [newProduto, setNewProduto] = useState(() => []);

  return(
    <div className='app__container'>
      <h1 className="app__title">Fixit - Conserto Rápido</h1>
      <input
        type='text'
        className='app__input'
        onChange={(e) => setNewProduto(e.target.value)}
      />
      <button
        className='app__btn'
        onClick={() => dispatch(addFixitAction(newProduto))}
      >
        Adicionar Item
      </button>
      <ul>
        {
            produto.map(prod =>
              <>
                <li key={prod.id}>
                  {prod.name}
                  <FaTrash
                    role='button'
                    color='firebrick'
                    cursor='pointer'
                    onClick={() => dispatch(deleteFixitAction(prod.id))}
                  />
                </li>
              </>
            ).reverse()
        }
      </ul>
    </div>
  )
}

export default Fixit;

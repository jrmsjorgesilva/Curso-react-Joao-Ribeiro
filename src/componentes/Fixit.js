import React, { useState } from 'react'
import { FaTrash, FaCheck } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'

const Fixit = () => {

  const reduxProduto = useSelector(state => state.FixitReducer.fixitItem);

  const dispatch = useDispatch()

  console.log("REDUX", reduxProduto);

  const [produto, setProduto] = useState(() => [
    {
      id: 1,
      name: 'Placa Mãe',
    },
    {
      id: 2,
      name: 'Processador',
    },
    {
      id: 3,
      name: 'Memória DDR4',
    }
  ]);

  const [newProduto, setNewProduto] = useState(() => []);

  const addProduto = () => {
    const addNewProd = {
      id: Math.floor(Math.random() * 10000),
      name: newProduto
    };
    setProduto([ ...produto, addNewProd]);
    console.log(produto);
  }

  const deleteProduto = (id) => {
    setProduto(produto.filter(prod => prod.id !== id));
  }

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
        onClick={() => addProduto()}
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
                    onClick={() => deleteProduto(prod.id)}
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

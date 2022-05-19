import React from 'react'
import Card from './Card'

const Cards = () => {

  return(
    <div className='app__container'>
      <h3 className='app__title center'>Parceiros</h3>
      <ul>
        <div className='row'>
          <div className='col-4'>
            <Card />
          </div>
          <div className='col-4'>
            <Card />
          </div>
          <div className='col-4'>
            <Card />
          </div>
        </div>
      </ul>
    </div>
  )
}

export default Cards

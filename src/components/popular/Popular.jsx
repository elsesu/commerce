import React from 'react'
import './style.css'
import data_product from '../../assets/data'
import Item from '../items/Item'




const Popular = () => {

  return (
    <div>
      <div className='popular'>
        <h1>Most Popular Collections</h1>
        <hr />
        <div className='popular-item'>
{data_product.map((item) =>(<Item  value={item}/>))}

        </div>
      </div>
    </div>
  )
}

export default Popular

import React from 'react'
import './style.css'
import data_product from '../../assets/data'
import Item from '../items/Item'
const RelatedProducts = () => {
  return (
    <div className='related-products'>
      <h1>Other Products you may like</h1>
      <hr />
      <div className='related-products-item'> 
{data_product.map((product) => 
    (<Item value={product}/>)

)}
      </div>
    </div>
  )
}

export default RelatedProducts

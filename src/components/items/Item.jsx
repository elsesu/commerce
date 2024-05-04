import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'



const Item = (props) => {
const {name, new_price, image, old_price, id} = props.value;


return (
    <div className='item'>
      <Link to={`/product/${id}`}>
      <img src={image} alt='img' onClick={window.scrollTo(0,0)} className='image_style'/>
      </Link>
 
      <p>{name}</p>
      <div className='item-prices'>
  <div className='item-new-price'>₦{new_price}</div>
  <div className='item-old-price'>₦{old_price}</div>
      </div>
    </div>
  )
}

export default Item

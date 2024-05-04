import React, { useContext } from 'react'
import star_icon from '../../assets/star_icon.png'
import star_dull from '../../assets/star_dull_icon.png'
import './style.css'
import { Context } from '../../context/ShopContext/ShopContext'



const ProductDisplay = (props) => {
  const {addCart} = useContext(Context)
const {product} = props;
  return (
    <div className='product-display'>
      <div className='display-left'>
      <div className='display-img-list'>
        <img src={product.image} alt="img" />
        <img src={product.image} alt="img" />
        <img src={product.image} alt="img" />
        <img src={product.image} alt="img" />
      </div>
      <div className='display-img'>
        <img src={product.image} alt="img" className='main-image'/>
      </div>
      </div>
      <div className='display-right'>
    <h1>{product.name}</h1>
    <div className='display-right-star'>
        <img src={star_icon} alt="img" />
        <img src={star_icon} alt="img" />
        <img src={star_icon} alt="img" />
        <img src={star_dull} alt="img" />
        <p>(100)</p>

    </div>
    <div className='right-prices'>
        <div className='old-right-price'>${product.old_price}</div>
        <div className='new-right-price'>${product.new_price}</div>
    </div>
    <div className='right-description'>
 the product is the best fit for any person that is looking to buy stuff online or offline and i love it really and very much its the best,
 also i will like to thank you all and In essence, this component would add functionality to the  component by extending it, and it would then return 
    </div>
    <div className='right-size'>
<h1>Select Size</h1>
<div className='right-sizes'>
    <div>S</div>
    <div>M</div>
    <div>L</div>
    <div>XL</div>
</div>
    </div>
    <button onClick={()=>addCart(product.id)}>Add to cart</button>
    <p className='right-category'><span>category:</span> women, T-shirt, crop top</p>
    
      </div>
    </div>
  )
}

export default ProductDisplay

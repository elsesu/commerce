import React, { useContext } from 'react'
import './style.css'
import { Context } from '../../context/ShopContext/ShopContext'
import remove_icon from '../../assets/cart_cross_icon.png'

const CartItems = () => {

    const {all_product, cartitems,removeCart, getTotalCart } = useContext(Context)
  return (
    <div className='cart-items'>
      <div className='cart-items-main'>
<p>products</p>
<p>titile</p>
<p>prize</p>
<p>quantity</p>
<p>remove</p>
      </div>
      <hr />

      {all_product.map((e)=>{
        if(cartitems[e.id] > 0) 
        { 
            return (
            <div key={e.id}>
        <div className='cart-items-format cart-items-main'>
<img src={e.image} alt="img" className='carticon-product'/>
<p>{e.name}</p>
<p>{e.new_price}</p>
<button className='cart-items-quantity'>{cartitems[e.id]}</button>
<p>${e.new_price * e.id}</p>
<img src={remove_icon} alt="" onClick={()=>removeCart(e.id)} className='remove-icon'/>
        </div>
      </div>
      )} 
      })}
      <div className='cart-items-down'>
        <div className='cart-items-total'>
        <h1>cart Totals</h1>
        <div>
            <div className='cart-items-item'>
           <p>Subtotal:</p>
           <p>${getTotalCart()}</p>
            </div>
            <hr />
            <div className='cart-items-item'>
                <p>shipping fee</p>
                <p>free</p>
            </div>
        </div>
        <button>Check out</button>
        </div>
        <div className='cart-items-promo'>
            <p>enter promo code</p>
            <div className='promo-box'>
                <input type="text"placeholder='promocode' />
                <button>submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems

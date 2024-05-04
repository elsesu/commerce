import React, { useContext } from 'react'
import { Context } from '../context/ShopContext/ShopContext'
import './shopcategory.css'
import Item from '../components/items/Item'
import dropdown_icon from '../assets/dropdown_icon.png'

const ShopCategory = (props) => {
  const {all_product} = useContext(Context)

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="banners"  className='shop-category-banner'/>
      <div className='shop-category-indexsort'>
        <p>
          <span> Showing 1-12 </span> out of 36 products
        </p>
        <div className='shop-category-sort'>
          sort by <img className='' src={dropdown_icon} alt="img" />
        </div>
      </div>
      <div className='shop-category-products'>
        {all_product.map((item)=> {
          if(props.category === item.category){
           return (<Item value={item} />)
          }
        })}
      </div>
      <div className='shop-category-loadmore'>View more</div>
    </div>
  )
}

export default ShopCategory

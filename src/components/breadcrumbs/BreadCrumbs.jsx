import React from 'react'
import arrow_icon from '../../assets/dropdown_icon.png'
import './style.css'

const BreadCrumbs = (props) => {
  
  const {product} = props;
  return (
    <div className='breadcrumbs'>

      Home <img src={arrow_icon} alt="img" /> Shop <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="img" /> {product.name}
    </div>
  )
}

export default BreadCrumbs

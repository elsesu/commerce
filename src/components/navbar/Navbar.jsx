import React, { useState, useEffect, useContext } from 'react'
import './style.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import logo1 from '../../assets/new/shoops.jpeg'
import { Link } from 'react-router-dom'
import { Context } from '../../context/ShopContext/ShopContext'



const Navbar = () => {
const {getCartNumber} = useContext(Context)
const [active, setActive]= useState('shop')



  return (
    <div className='navbar'>
      <div className='nav-logo'> 
      <img src={logo1} alt="" className='logo_shop'/>
 
  </div>
  <ul className='nav-menu'>
    <li onClick={()=>{setActive('shop')}}><Link to='/' style={{textDecoration:'none'}}>Shop</Link> {active === "shop" ? (<hr/>) : (<></>)}</li>
    <li onClick={()=>{setActive('men')}}><Link to='/men' style={{textDecoration:'none'}}>Male</Link>{active === "men" ? (<hr/>) : (<></>)}</li>
    <li onClick={()=>{setActive('women')}}><Link to='/women' style={{textDecoration:'none'}}>Ladies</Link>{active === "women" ? (<hr/>) : <></>}</li>
    <li onClick={()=>{setActive("kids")}}><Link to='/kids' style={{textDecoration:'none'}}>Children</Link>{active === "kids" ? (<hr/>) : (<></>)}</li>
    <li onClick={()=>{setActive('sign')}} ><Link to={'/login'} style={{textDecoration:'none'}}>Sign up</Link>{active === "sign" ? (<hr/>) : (<></>)}</li>
  </ul>
 <div className='nav-login-cart'>
  <Link to='/login'> <button>login</button></Link>
  <Link to='/cart'>  <img src={cart_icon} alt=""/></Link>
  <div className='nav-cart-count'>{getCartNumber()}</div>
 </div>
      </div>
  )
}

export default Navbar

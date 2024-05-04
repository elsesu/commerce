import React from 'react'
import woman5 from '../../assets/new/woman5-hero.png'
import './style.css'







const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Just In!!</h1>
        <h1>New Offers for you</h1>
      
        <button>Shop now!</button>
      </div>
      <div className='offers-right'>
        <img src={woman5} alt="img" />
      </div>
    </div>
  )
}

export default Offers

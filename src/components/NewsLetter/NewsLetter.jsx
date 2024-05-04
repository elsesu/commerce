import React from 'react'
import './style.css'


const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive offers sent you</h1>
      <p> Kindly subscribe to our offers</p>
      <div>
        <input type='email'  placeholder='enter your email'/>
        <button>subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter

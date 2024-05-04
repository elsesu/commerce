import React from 'react'
import './style.css'



const DescriptionBox = (props) => {
    const {product} = props;
  return (
    <div className='description-box'>
      <div className='desc-nav'>
<div className='desc-box'>Description</div>
<div className='desc-box fade'>Reviews(122)</div>
      </div>
      <div className='description'>
        <p>
        Yes, this lets you avoid lengthy manual searches for prospects' 
        contact data. While you could manually find a few emails in a few hours,
         a scraping tool can
         uncover hundreds in minutes, and sure it helps avoid errors 
         caused by the manual entry of email addresses into your prospect database.  
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox

import React from 'react'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import woman_hero from '../../assets/new/woman-hero.png'
import './style.css'





const Hero = () => {
  return (
    <div className='hero'>
    <div className='hero-left'>

        <div>
        <div className="hero-hand-icon">
        <p>Shop Easy</p>
       <img src={hand_icon} alt="img" />
   </div>
   <p>Find your style</p>
    </div>
    <div className='hero-latest-button'>
<div>Explore</div>
<img src={arrow_icon} alt="img" />

    </div>
    </div>
    <div className='hero-right'>
<img src={woman_hero} alt="img" />
    </div>
    </div>
  )
}

export default Hero

import React from 'react'
import "../styles/hero.css"
import stick from '../img/stick.svg'
import arrow from '../img/arrow4.svg'
import doira from '../img/doira.png'
function Hero() {
  return (
    <section className='hero'>
      <img className='stick' src={stick} alt="" />
      <img className='hero__arrow' src={arrow} alt="" />
      <img className='hero__doira' src={doira} alt="" />
      <div className="container">
        <div className="hero__wrapper">
          <h1>Scooter sharing made simple</h1>
          <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
          <a href="#!">Get Scootin</a>
        </div>
      </div>
    </section>
  )
}

export default Hero

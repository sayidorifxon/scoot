import React from 'react'
import "../styles/locationhero.css"
import doira from '../img/doira.png'
function LocationHero({title}) {
  return (
    <section className='locationhero'>
      <div className="container">
        <h1>{title}</h1>
        <img src={doira} alt="" />
      </div>
    </section>
  )
}

export default LocationHero

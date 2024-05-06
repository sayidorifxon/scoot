import React from 'react'
import "../styles/mapsection.css" 
import map from '../img/map.png'
function MapSection() {
  return (
    <section className='mapsection'>
      <div className="container">
        <div className="mapsection__wrapper">
            <img src={map} alt="" />
            <div className="mobile__menu">
                <ul>
                    <li>New York</li>
                    <li>London</li>
                    <li>Jakarta</li>
                    <li>Yokohama</li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

export default MapSection

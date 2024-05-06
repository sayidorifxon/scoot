import React from 'react'
import "../styles/steps.css"
import steps1 from '../img/steps1.svg'
import steps2 from '../img/steps2.svg'
import steps3 from '../img/steps3.svg'
import stick from '../img/stick2.png'
function Steps() {
  return (
    <section className='steps'>
        <img className='stick2' src={stick} alt="" />
      <div className="container">
        <div className="steps__wrapper">
            <div className="stepscard">
                <img src={steps1} alt="" />
                <div className="steps__content">
                    <h3>Locate with app</h3>
                    <p>Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. </p>
                </div>
            </div>
            <div className="stepscard">
                <img src={steps2} alt="" />
                <div className="steps__content">
                <h3>Pick your scooter</h3>
                <p>We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost. </p>
                </div>
            </div>
            <div className="stepscard">
                <img src={steps3} alt="" />
                <div className="steps__content">
                <h3>Enjoy the ride</h3>
                <p>Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Steps

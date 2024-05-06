import React from 'react'
import "../styles/joinus.css"
import JoinUSCard from './JoinUSCard'
import joinus1 from '../img/joinus1.png'
import joinus2 from '../img/joinus2.png'
import joinus3 from '../img/joinus3.png'
function JoinUs({title}) {
  return (
    <section className='joinus'>
      <div className="container">
        <h2>{title}</h2>
        <div className="joinus__wrapper">
            <JoinUSCard title="Our tech" text='We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!' image={joinus1} />
            <JoinUSCard title="Our integrity" text='We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.' image={joinus2} />
            <JoinUSCard title="Our community" text='We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.' image={joinus3} />
        </div>
      </div>
    </section>
  )
}

export default JoinUs

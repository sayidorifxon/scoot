import React from 'react'
import "../styles/joinuscard.css"
function JoinUSCard({title, text, image}) {
  return (
    <div className='joinuscard'>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default JoinUSCard

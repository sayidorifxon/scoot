import React from 'react'
import "../styles/jobscard.css"
function JobsCard({title, text}) {
  return (
    <div className='jobscard'>
      <div className="jobscard__content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <a href="#!">Apply</a>
    </div>
  )
}

export default JobsCard

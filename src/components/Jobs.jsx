import React from 'react'
import "../styles/jobs.css"
import JobsCard from './JobsCard'
function Jobs() {
  return (
    <section className='jobs'>
      <div className="container">
        <div className="jobs__wrapper">
            <JobsCard title="General Manager" text="Jakarta, Indonesia"/>
            <JobsCard title="UI/UX Designer" text="Yokohama, Japan"/>
            <JobsCard title="Blog Content Copywriter" text="New York, United States"/>
            <JobsCard title="Graphic Designer" text="New York, United States"/>
            <JobsCard title="Fleet Supervisor" text="Jakarta, Indonesia"/>
            <JobsCard title="UX Analyst" text="London, United Kingdom"/>
        </div>
      </div>
    </section>
  )
}

export default Jobs

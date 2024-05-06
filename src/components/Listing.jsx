import React from 'react'
import "../styles/listing.css"
function Listing() {
  return (
    <section className='listing'>
      <div className="container">
        <div className="listing__wrapper">
            <h2>Your city not listed?</h2>
            <p>If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
            <a href="#!">Message Us</a>
        </div>
      </div>
    </section>
  )
}

export default Listing

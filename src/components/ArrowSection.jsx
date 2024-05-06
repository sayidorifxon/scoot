import React from 'react'
import "../styles/arrowsection.css"

function ArrowSection({title, text, btn_text, image, arrow_img, none}) {
  return (
    <section className='arrowsection'>
      <div className="container">
        <div className="arrowsection__wrapper">
            <div className="arrowsection__content">
                <h2>{title}</h2>
                <p>{text}</p>
                <a className={none ? "display_none" : "noclass"} href="#!">{btn_text}</a>
            </div>
            <div className="arrowsection__img">
                <img className='person' src={image} alt="" />
                <img className='arrowpic' src={arrow_img} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default ArrowSection

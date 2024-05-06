import React from 'react'
import "../styles/arrowsection2.css"
function ArrowSection2({title, text, btn_text, image, arrow_img, none, reverse}) {
  return (
    <section className='arrowsection2'>
      <div className="container">
        <div className={reverse ? "section__reverse" : "arrowsection2__wrapper"}>
            <div className="arrowsection2__img">
                <img className='person2' src={image} alt="" />
                <img className='arrowpic2' src={arrow_img} alt="" />
            </div>
            <div className="arrowsection2__content">
                <h2>{title}</h2>
                <p>{text}</p>
                <a className={none ? "display_none" : "noclass"} href="#!">{btn_text}</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ArrowSection2

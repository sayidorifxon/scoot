import React from 'react'
import "../styles/arrowsection3.css"

function ArrowSection3({title, text, btn_text, image, arrow_img, none,}) {
  return (
    <section className='arrowsection3'>
      <div className="container">
        <div className="arrowsection3__wrapper">
            <div className="arrowsection3__content">
                <h2>{title}</h2>
                <p>{text}</p>
                <a className={none ? "display_none" : "noclass"} href="#!">{btn_text}</a>
            </div>
            <div className="arrowsection3__img">
                <img className='person3' src={image} alt="" />
                <img className='arrowpic3' src={arrow_img} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default ArrowSection3

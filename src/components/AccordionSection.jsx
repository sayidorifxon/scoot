import React, { useRef } from 'react'
import "../styles/accordionsection.css"
import image from '../img/accord_arrow.png'
function AccordionSection() {
  let rasm = useRef()
  let rasm1 = useRef()
  function openAccor(e){
    if(e.target.id === "open"){
      e.target.nextElementSibling.classList.toggle("show__acc")
      e.target.lastElementChild.classList.toggle("rotation")
    }
  }
  return (
    <section className='accordionsection'>
        <div className="container">
          <h2>FAQs</h2>
          <div className="accordionsection__wrapper">
            <div onClick={openAccor} className="faq_accordion">
            <div className="how_it_works">
              <h2>How it works</h2>
              <div className="how_it_works__content">
              <button id='open' className='accordion'>How do I download the app? <img  src={image} alt="" ref={rasm1} /></button>
              <div className='accordion__item'>
              <p>To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.</p>
              </div>
              <button id='open' className='accordion'>Can I find a nearby Scoots? <img  src={image} alt="" ref={rasm} /></button>
              <div className='accordion__item'>
              <p>To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.</p>
              </div>
              <button id='open' className='accordion'>Do I need a license to ride? <img  src={image} alt="" ref={rasm} /></button>
              <div className='accordion__item'>
              <p>To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.</p>
              </div>
              </div>
            </div>
            <div className="safe_driving">
              <h2>Safe driving</h2>
              <div className="safe_driving__content">
              <button id='open' className='accordion'>Should I wear a helmet <img  src={image} alt="" ref={rasm} /></button>
              <div className='accordion__item'>
                <p>To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.</p>
              </div>
              <button id='open' className='accordion'>How about the rules & regulations? <img  src={image} alt="" ref={rasm} /> </button>
              <div className='accordion__item'>
                <p>To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.</p>
              </div>
              <button id='open' className='accordion'>What if I damage my Scoot? <img  src={image} alt="" ref={rasm} /></button>
              <div className='accordion__item'>
                <p>To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.</p>
              </div>
              </div>
            </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default AccordionSection

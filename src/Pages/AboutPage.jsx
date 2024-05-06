import React from 'react'
import LocationHero from '../components/LocationHero'
import ArrowSection from '../components/ArrowSection'
import arrow2 from '../img/arrow2.svg'
import person2 from '../img/person2.png'
import ArrowSection2 from '../components/ArrowSection2'
import arrow3 from '../img/arrow3.png'
import person3 from '../img/person3.png'
import JoinUs from '../components/JoinUs'
import AccordionSection from '../components/AccordionSection'
function AboutPage() {
  return (
    <main>
      <LocationHero title="About"/>
      <ArrowSection title="Mobility for the digital era" text="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips." none={true} image={person2} arrow_img={arrow2}/>
      <ArrowSection2 title="Better urban living" text="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride." none={true} image={person3} arrow_img={arrow3}/>
      <JoinUs title="Our values"/>
      <AccordionSection/>
    </main>
    
  )
}

export default AboutPage

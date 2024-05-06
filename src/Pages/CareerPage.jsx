import React, { Component } from 'react'
import LocationHero from '../components/LocationHero'
import ArrowSection from '../components/ArrowSection'
import JoinUs from '../components/JoinUs'
import Jobs from '../components/Jobs'
import person from "../img/person.png"
import arrow from "../img/arrow.png"
export class CareerPage extends Component {
  render() {
    return (
      <div>
        <LocationHero title="Careers"/>
        <ArrowSection title="Care to join our mission?" text="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips." btn_text="Say Hello" image={person} arrow_img={arrow}/>
        <JoinUs title="Why join us?"/>
        <Jobs/>
      </div>
    )
  }
}

export default CareerPage

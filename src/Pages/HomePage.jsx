import React from 'react'
import Hero from '../components/Hero'
import Steps from '../components/Steps'
import ArrowSection from '../components/ArrowSection'
import person from '../img/person4.png'
import person2 from '../img/person5.png'
import arrow from '../img/arrow.png'
import arrow2 from '../img/arrow3.png'
import person3 from "../img/person6.png"
import arrow3 from "../img/arrow6.png"
import ArrowSection2 from '../components/ArrowSection2'
import ArrowSection3 from '../components/ArrowSection3'


function HomePage() {
  return (
    <main>
      <Hero/>
      <Steps/>
      <ArrowSection title="Easy to use riding telemetry" text="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app." btn_text="Learn More" image={person} arrow_img={arrow}/>
      <ArrowSection2 title="Coming to a city near you" text='Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.' btn_text="Learn More" image={person2} arrow_img={arrow2} />
      <ArrowSection3 title="Zero hassle payments" text="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month." btn_text="Learn More" image={person3} arrow_img={arrow3}/>
    </main>
  )
}

export default HomePage

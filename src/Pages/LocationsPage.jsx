import React from 'react'
import LocationHero from '../components/LocationHero'
import MapSection from '../components/MapSection'
import Listing from '../components/Listing'

function LocationsPage() {
  return (
    <main>
      <LocationHero title="Locations"/>
      <MapSection/>
      <Listing/>
    </main>
  )
}

export default LocationsPage

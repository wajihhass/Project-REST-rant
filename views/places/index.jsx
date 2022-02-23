//const express = require('express')
//const app = express()
const React = require('react')
const Def = require('../default')

let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/chia-fruit-drink.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/green.jpg'
  }]

/* Original
  function index (data) {
    console.log(data)
    let placesFormatted = data.places.map((place) => {
      return (
        <div>
          <h2>{place.name}</h2>
          <img src={place.pic} alt={place.name} class="center"/>
        </div>
    
    )
    })
    return (
      <Def>
         <main>
              <h1>PLACES INDEX PAGE</h1>
              {placesFormatted}
          </main> 
      </Def>
  )
  } original*/

function index (data) {
  console.log(data)
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6">
        <h2>{place.name}</h2>
        <p clasName="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} class="center" />
        <p clasName="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>Places to Rant or Rave About</h1>
            <div className="row">
              {placesFormatted}
            </div>
        </main>
    </Def>
  )
}
module.exports = index


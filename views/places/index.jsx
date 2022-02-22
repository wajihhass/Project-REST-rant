//const express = require('express')
//const app = express()
const React = require('react')
const Def = require('../default')

let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/chia-fruit-drink.png'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/green.jpg'
  }]

  function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div>
          <h2>{place.name}</h2>
          <img src={place.pic} alt={place.name}/>
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
  }
module.exports = index
/*
  function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className="col-sm-6">
          <h2>{place.name}</h2>
          <p clasName="text-center">
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name} />
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
*/


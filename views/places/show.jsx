const React = require('react')
const Def = require('../default')

function show () {
    return (
        <Def>
          <main>
            <h1>Show Page</h1>
          </main>
        </Def>
    )
}

module.exports = show

/*    const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
          </main>
        </Def>
    )
}

module.exports = show    */
/*
function index (data) {
    console.log(data)
    let placesFormatted = data.places.map((place, index) => {
      return (
        <div className="col-sm-6">
          
          <h2>
           <a href={'/places/${index}'} >
            {place.name}
            </a>
          </h2>
          <p clasName="text-center">
            {place.cuisines}
          </p>
          <div class="row">
            <div class="column">
          <img src={place.pic} alt={place.name}  class="center1" />
          </div>
          </div>
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
  }*/

const router = require('express').Router()
const places = require('../models/places.js')
/*
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
  }]*/
router.get('/', (req, res) => {
    res.render('Places/index', { places: places })
})

/* wajih*/
router.get('/new', (req, res) => {
    res.render('places/new')
  })
/*
  router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })*/

     router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
}) 
module.exports = router



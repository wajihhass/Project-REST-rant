
const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('Places/index', { places: places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
  })
  router.get('/:id', (req, res) => {// :id
    res.render('places/show', {place: places[req.params.id]})
  })
  

/*   8888888888888888888888888888888888888888888888888888888888888888888888888888      */

  router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  console.log(id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    console.log(places[id])
    res.render('places/edit', { place: places[id] })
    
  }
})
/*   8888888888888888888888888888888888888888888888888888888888888888    */
  router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show',{place:places[id], id})//show
  }
})  
    
  router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/1/edit', { place: places[id], id })// Wajih added
  }
})
router.delete('/places/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 0)
    res.redirect('/places')
   //res.send('STUB DELETE places/:id')
  }
})

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


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
  

/*   8888888888888888888888888888888888888888888888888888888888888888888888888888  ok    */

  router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
 // console.log(id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    //console.log(places[id])
    res.render('places/edit', { place: places[id] })// add , id by wajih
    
  }
})

/* 8888888888888888888888888888888888888888888888888888888888888888   ok */


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
/* 888888888888888888888888888888888 
  router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/${data.id}/edit', { place: places[id], id })// Wajih added res.render('places/${data.id}/edit', {place:places[id]} )
  }
})*/
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

router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
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

      // Save the new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${id}`)
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

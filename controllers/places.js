
const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
  res.send('GET /places stub')
})

router.post('/', (req, res) => {
  res.send('POST /places stub')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  res.send('GET /places/:id stub')
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
    router.get('/', (req, res) => {
      db.Place.find()
      .then((places) => {
        res.render('places/index', { places })
      })
      .catch(err => {
        console.log(err) 
        res.render('error404')
      })
  })
  router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')//wajih added
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })
})

module.exports = router





























/*

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
/*
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

/*
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
/*
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
/*
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
module.exports = router */

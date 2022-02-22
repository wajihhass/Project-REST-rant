const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('Places/index', { places: [] })
})


/* wajih*/
router.get('/new', (req, res) => {
    res.render('places/new')
  })
module.exports = router
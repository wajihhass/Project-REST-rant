const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('Places/index', { places: [] })
})

module.exports = router
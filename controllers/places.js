const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('<h1>GET /Places</h1>')
})

module.exports = router
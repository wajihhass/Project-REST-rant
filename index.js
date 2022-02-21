require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('Home')
})

app.get('*', (req, res) => {
    res.status(404).render('error404')
})
// GET /places wajih
app.get('/', (req, res) => {
    let places = []
    res.render('places/index', { places })
  })
  
 

app.listen(process.env.PORT)
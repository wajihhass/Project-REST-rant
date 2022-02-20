require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('Home')//when put render gives an error
})
/*res.send('<h1>Home Wajih</h1>')//when put render gives an error*/
app.get('*', (req, res) => {
    res.status(404).render('error404')
})

app.listen(process.env.PORT)
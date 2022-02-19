require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello world!</h1>')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)
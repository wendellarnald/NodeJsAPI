const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const indexRoute = require('./routes/index-route')
const productRoute = require('./routes/product-route')

const app = express()
const router = express.Router()

mongoose.connect('mongodb+srv://<user>:<password>@cluster0-ncn8o.azure.mongodb.net/test?retryWrites=true')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/', indexRoute)
app.use('/products', productRoute)

module.exports = app;
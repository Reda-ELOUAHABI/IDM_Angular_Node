//First Server
const http = require('http')
const url = require('url')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const filmsRoute = require('./Routes/films')
const port = 3000

const app = express();
app.use(bodyParser.json())
// app.use(cors)
app.use(filmsRoute)
// app.use(morgan('dev'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.listen(port, function () {
  console.log(`server runing at http://localhost:${port}`)
})


//First Server
//npm init -y
//TUTO : https://hidevs.net/course/react-nodejs-express-mongodb-the-mern-fullstack-guide
//const http = require('http')
//const url = require('url')

const express = require('express')
const bodyParser = require('body-parser')
// const morgan = require('morgan')
const cors = require('cors')

const filmsRoutes = require('./Routes/films-routes')

const port = 3000
const app = express();
// app.use(bodyParser.json())
// app.use(cors)
//Movies App

app.use("/api/", filmsRoutes)
// app.use(morgan('dev'))
//4 Logging
// morgan(':method :url :status :res[content-length] - :response-time ms');




app.all("*", (
  (req, res) => {
    res.status(401).
      send('<h1>resources not found bro</h1>')
  }
))


app.listen(port, function () {
  console.log(`server runing at http://localhost:${port}`)
})

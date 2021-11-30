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
const usersRoutes = require('./Routes/users-routes')
const port = 3000
const app = express();
// Express has it build in  body parser , the separate one is deprecated now and cause problem !
app.use(express.json())
// why thos f*** create me problem ??
// app.use(bodyParser.json())
// app.use(cors)
//Movies App
app.use("/api/", usersRoutes)

app.use("/api/", filmsRoutes)

// app.use(morgan('dev'))
//4 Logging
// morgan(':method :url :status :res[content-length] - :response-time ms');


// error handling middleware with four argument in the function:
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "AN unknown error occurred !" });
})

app.all("*", (
  (req, res) => {
    res.status(401).
      send('<h1>resources not found bro</h1>')
  }
))


app.listen(port, function () {
  console.log(`server runing at http://localhost:${port}`)
})

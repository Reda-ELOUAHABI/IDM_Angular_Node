//First Server
//npm init -y
//TUTO : https://hidevs.net/course/react-nodejs-express-mongodb-the-mern-fullstack-guide
//const http = require('http')
//const url = require('url')

const express = require('express')
// const bodyParser = require('body-parser')
// const morgan = require('morgan')
const cors = require('cors');
const path = require('path');


const filmsRoutes = require('./Routes/films-routes')
const usersRoutes = require('./Routes/users-routes')
const commentRoutes = require('./Routes/comment-routes')
const HttpError = require("./Models/http-error");

const PORT = process.env.PORT || 80;
var app = express()

app.use(cors())
app.use('/', express.static(path.join(__dirname, "Angular")));



// const app = express();
// Express has it build in  body parser , the separate one is deprecated now and cause problem !
app.use(express.json())
// why thos f*** create me problem , because bodyParser expression is deprecated and cors needed ()
// app.use(bodyParser.json())
// app.use(cors)
//Movies App
app.use("/api/users", usersRoutes)

app.use("/api", filmsRoutes)
app.use("/api", commentRoutes)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "Angular", "index.html"));
})

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

// accept whatever the bad route
app.use((req, res) => {
  const error = new HttpError("bad Route .", 404);
  throw error;
});

app.all("*", (
  (req, res) => {
    res.status(401).
      send('<h1>resources not found bro</h1>')
  }
))

app.listen(PORT, function () {
  console.log(`server runing at http://localhost:${port}`)
})
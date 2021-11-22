//First Server
//npm init -y
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
app.use(cors)
//Movies App
/*
app.use("/api/films",filmsRoute)
// app.use(morgan('dev'))
morgan(':method :url :status :res[content-length] - :response-time ms');

app.listen(port, function () {
  console.log(`server runing at http://localhost:${port}`)
})
*/
//Express Full tuto:
// app .get .post  .put  .delete .all  .use .listen
const server = express();

server.get("/",
    (req, res) => {
res.status(200).send("hello")
});
//add a file:
const path = require('path')
//set up static and middleware
//todo: this static Load other static files css/js to the app ,
server.use(express.static('./public'))

//when we use static middleware  .html file are also static !
//so , we can simply remove this line of code , but we need to call him by name html.html
//or we can name it index.html , the default one !
server.get('/html',
    (req,res)=>{
    res.sendFile(
        path.join(__dirname,'./public/html.html'))

})

server.all("*", (
    (req, res) =>{
      res.status(401).
      send('<h1>resources not found bro</h1>')
    }
))
server.listen(5001,() =>{
    console.log("server runing at http://localhost:5001\n")
})


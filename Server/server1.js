//First Server
const http = require('http')
const url = require('url')
const express = require('express')
const bodyParser = require('body-parser')
const  morgan = require('morgan')
const port = 3000

const app = express();
app.use(bodyParser.json())
morgan(':method :url :status :res[content-length] - :response-time ms')

films = [
  {id: "10",
  name: "call me something"},
  {id: "11",
  name: "call me sometshing"},
  {id: "12",
  name: "call me something"}
]
app.get('/', (req,res)=>{
  res.send("Hello World")
})
app.get('/films', (req,res)=>{
  res.send(films)
})
app.get('/films/:id',(req,res) => {
  let id = req.params.id
  console.log(films.indexOf(id));
  res.send("films.indexOf(id)")
})


app.post('/films',(req,res)=>{
  console.log(req);
  res.send("OK")

})

app.listen(port,function (){
  console.log(`server runing at http://localhost:${port}`)
})


//First Server
const http = require('http')
const url = require('url')

const port = 3000
//1--
http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/plain'})
  res.end("Hello World from NodeJS\n")

  // let parsedUrl = url.parse(req.url,true);
  // let path = parsedUrl.pathname;
  // let queryString = parsedUrl.query;
  // console.log('request from Url = '+parsedUrl + " path" + path + " query "+ queryString)

}).listen(port,function (){
  console.log(`server runing at http://localhost:${port}`)
})

// curl http://localhost:3000/ -v
//Node dev / Node demon for refreshing the server


//2--

// let callback = function (req,res) {
//   let parsedUrl = url.parse(req.url,true);
//   let path = parsedUrl.pathname;
//   let queryString = parsedUrl.query;
//   console.log('request from Url = '+parsedUrl + " path" + path + " query "+ queryString)
// }
// let server = http.createServer(callback);
// server.listen(port,function (){
//   console.log(`server runing at http://localhost:${port}`)
// })

// const re
// app.get('/films/:id',(req,res)) => {
//   let id = req.params.id
// }

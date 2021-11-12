//First Server
const http = require('http')
const port = 3000
http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/plain'})
  res.end("Hello World from NodeJS\n")

}).listen(port,function (){
  console.log(`server runing at http://localhost:${port}`)
})


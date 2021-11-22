009 Built-in Modules Intro00:02:44
010 OS - Module00:07:33
011 PATH - Module00:05:52
012 FS - Module sync00:08:23
013 FS - Module async00:09:04
014 Sync vs Async00:06:57


016 HTTP - Module setup 017 HTTP- Module more features


018 NPM Info00:04:22
019 NPM Command00:02:49
020 First Packages and package.json00:09:43
021 Share Code on Github00:06:12
022 Nodemon00:05:59
023 Uninstall Package00:02:48
024 Global Install00:05:29
025 package-lock.json00:02:34

##Promise()  Async Await .. 
027 Event Loop - Info00:03:09
028 Event Loopt - Slides00:06:59
029 Event Loop - Code Examples00:09:21
030 Async Patterns - Blocking Code00:07:42
031 Async Patterns - Setup Promises00:05:46
032 Async Patterns - Refactor to Async00:05:30
033 Async Patterns - Nodes Native Option00:06:36

034 Events :
035 Events Emitter - Code Example 
EventEmitter.on("eventName", (params)=> {do something})
EventEmitter.emit() //trigger the event 
037 Events Emitter - HTPP Module Example

041 Streams - HTTP Example: chunking big response


Body of request == payload

remove a git folder by cmd : rmdir -Force -Recurse .git  || rd /s /q .git



#Monolithic approach with Routing
// we can also send the file itself :
const { readFileSync}  = require('fs')
const fileHtml = readFileSync('./html.html')
//we will cal also additional files comes with html: [in this case we have css]
const fileCss = readFileSync('./style.css')


const server = http.createServer((req, res) => {
//req is a big Object
console.log(req.method)
console.log(req.url)

const url = req.url;
if(url === "/"){
//we are passing the content of the file , and not the file itself !!
res.writeHead(200,
// search types MIME communs for all types
{"content-type": 'text/html'})
res.write('<h1> hello from a H1 Home </h1>')
}
//Loading Html
else if(url === "/html"){
//we are passing the content of the file , and not the file itself !!
res.writeHead(200,{"content-type": 'text/html'})
res.write(fileHtml)
}
//Loading css
else if(url === "/style.css"){
//we are passing the content of the file , and not the file itself !!
res.writeHead(200,
// search types MIME communs for all types
{"content-type": 'text/css'})
res.write(fileCss)
}
else{
res.writeHead(404,{"content-type": 'text/html'})
res.write('<h1 style="color: red"> Not Found Resources a khay </h1>')
}
res.end()
})
const port2 = 5001
server.listen(port2, function () {
console.log(`server runing at http://localhost:${port2}`)
})


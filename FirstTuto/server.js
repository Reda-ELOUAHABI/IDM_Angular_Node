//First Server
//TUTO --  020 Query String
// https://hidevs.net/course/nodejs-tutorial-and-projects-course
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
//Express Full tuto:
// app .get .post  .put  .delete .all  .use .listen
const server = express();

//First Respond
/*
server.get("/",
    (req, res) => {
res.status(200).send("hello")
});

 */


//Monolithic approach
/*
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
*/



//API Approach

//res.json(body)
//using another data.js
const { persons } = require("./data")
server.get("/", (req, res) => {
    res.status(200).send("<h1> See ALL Person </h1> " +
        "<a href='/persons'>Click Here</a>")
})

server.get('/persons', (req, res) => {
    //Get Day Name JS
    let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()]
    persons.push({ id: 3, name: weekday, age: 550 })

    res.json(
        // [{id: 0, name: "reda"}, {name: "ahmed"}]
        persons
    )
})

//get Only person's names
server.get('/names', (req, res) => {
    const onlyNames = persons.map((person) => {
        //to take only names and ids from person array without ages , and make sure that you select the right property !
        const { id, name } = person;
        return { id, name }
    })
    res.json(onlyNames);
})

//get by ides
server.get("/names/:idParams", (req, res) => {
    //the URL could be more complex eg: '/names/:idParams/something/:AnotherParams
    const { idParams } = req.params
    console.log(idParams)
    const singleName = persons.find((person) =>
        person.id === Number(idParams)
    )
    //handling person undefined case [does not exist in the array]
    if (!singleName) {
        return res.status(404).send("person does not Exist");
    }
    return res.json(singleName)
})

//search by query
server.get("/persons/query", (req, res) => {
    const { search, limit } = req.query
    let sortedPersons = [...persons]
    //URL example : http://localhost:5001/persons/query?limit=1&search=ah
    if (search) {
        sortedPersons = sortedPersons.filter((person) => {
            return person.name.startsWith(search)
        })
    }
    if (limit) {
        sortedPersons = sortedPersons.slice(0, Number(limit))
    }
    if (sortedPersons.length < 1) {
        // res.status(200).send("No Person match your request")
        //we setup this return because server can return only one response ,
        // so we force it to break from function
        return res.status(200).json({ success: true, data: [] })
    }
    res.status(200).json(sortedPersons)
})

//handling bad requests
server.all("*", (
    (req, res) => {
        res.status(401).
            send('<h1>resources not found bro</h1>')
    }
))


server.listen(5001, () => {
    console.log("server runing at http://localhost:5001\n")
})


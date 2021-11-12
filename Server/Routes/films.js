const  express = require("express")
const  Router = express.Router();

films = [
  {id: "10",
    name: "call me something"},
  {id: "11",
    name: "call me sometshing"},
  {id: "12",
    name: "call me something"}
]
Router
  .route('/')
  .get((req,res)=>{
  res.send("Hello World")
})

Router.route('/films')
  .get((req,res)=>{
    res.send(films)
  });

Router.route('/films/:id').get((req,res) => {
  let id = req.params.id
  console.log(films.indexOf(id));
  res.send("films.indexOf(id)")
});

Router.route('/films').post((req,res)=>{
  console.log(req);
  res.send("OK")

});

module.exports = Router;


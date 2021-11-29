// I wont use this concept of Controller ..


// const Film = require("../Models/film")



module.exports = {
  CreateMovie(req, res) {
    /*
let new film = req.body or 

let new film = new Film{
title: req.body.title,
poster_path= rrq.body,poster_path

}
// we persiste
Film.save(newFilm)
.then((res=>{
res.satus*(201).send({
message: "film cree avec succes"
})
}))
.catch((err)=>{

res.status(400).send({
    err: error
})
})
    */
    console.log(req);
    res.send("OK")
  },

  getMovieById(req, res) {
    /*
film.find().then((result)=>{
  res.status(200).send
})
    */

    let id = req.params.id
    console.log(films.indexOf(id));
    films.indexOf("10")
    res.send("films.indexOf(id)")
  },
  getAllMovies(req, res) {
    res.send(films)
  },

  helloWorld(req, res) {
    res.send("Hello World")
  }

}

// module.exports = {
//     getFilm: this.getAllMovies
// }

/*
deletFIilm*res, res){

}
*/
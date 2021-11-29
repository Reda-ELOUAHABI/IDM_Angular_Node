const express = require("express")
const router = express.Router();

const HttpError = require("../Models/http-error");
// const Router = express.Router();
// const MoviesController = require("../Controller/movieController")

films = [
  {
    id: "10",
    name: "reda call me "
  },

  {
    id: "11",
    name: "hamza call me "
  },
  {
    id: "12",
    name: "zakaria call me "
  }
];

// return Link to all films
router.get('/', (req, res) => {
  res.send("<a href='api/films/'> get ALL Films </a>");
})

// return all films
router.get('/films/', (req, res) => {
  res.send(films);
})


// return a film by id
router.get("/films/:uid", (req, res) => {
  filmId = req.params.uid; //params = {uid: '11'}
  film = films.find((f => {
    return f.id === filmId;
  }))

  if (!film) {
    // const filmNotExist = new HttpError("film does not Exist", 404);
    // throw filmNotExist;
    throw new HttpError("film does not Exist", 404);;
    // OR for async [DB ...] :
    // return next( new HttpError("user not found",404));
  }
  res.json({ film }); // in JS : {film} == {film: film}
})

// return a films
router.get("/films/search/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query
  console.log(search, limit);
  let sortedFilms = [...films]
  //URL example : 
  // http://localhost:3000/api/films/search/query?search=red
  if (search) {
    sortedFilms = sortedFilms.filter((film) => {
      // return film.name.startsWith(search)
      return film.name.includes(search)
    })
  }
  if (limit) {
    sortedFilms = sortedFilms.slice(0, Number(limit))
  }
  if (sortedFilms.length < 1) {
    // res.status(200).send("No Film match your request")
    //we setup this return because server can return only one response ,
    // so we force it to break from function
    return res.status(200).json({ success: true, data: [] })
  }
  res.status(200).json(sortedFilms)

});



// Concept Of Controller [did't worked fine]
// Router
//   .route('/')
//   .get(MoviesController.helloWorld)

// Router.route('/films')
//   .get(MoviesController.getAllMovies);

// Router.route('/films/:id').get(MoviesController.getMovieById);

// Router.route('/films').post(MoviesController.CreateMovie);

module.exports = router;


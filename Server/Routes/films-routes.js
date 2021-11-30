const express = require("express")
const router = express.Router();

const FilmController = require("../Controller/film-controller")
// const Router = express.Router();
// const MoviesController = require("../Controller/movieController")



// return Link to all films
router.get('/', FilmController.getAllFilmsLink)

// return all films
router.get('/films/', FilmController.getAllFilms)


// return a film by id
router.get("/films/:uid", FilmController.getFilmsById)

// return a films
router.get("/films/search/query", FilmController.searchFilmByQuery);

// add a film
router.post("/film", FilmController.addFilm);

// update a film
router.patch("/films/:uid", FilmController.patchFilm);

// delete a film
router.delete("/films/:uid",FilmController.deleteFilm)





// OLD BUT GOLD
// Concept Of Controller [did't worked fine]
// Router
//   .route('/')
//   .get(MoviesController.helloWorld)

// Router.route('/films')
//   .get(MoviesController.getAllMovies);

// Router.route('/films/:id').get(MoviesController.getMovieById);

// Router.route('/films').post(MoviesController.CreateMovie);

module.exports = router;


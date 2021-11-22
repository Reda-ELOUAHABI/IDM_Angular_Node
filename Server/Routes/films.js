const express = require("express")
const Router = express.Router();
const MoviesController = require("../Controller/movieController")

films = [
  {
    id: "10",
    name: "call me something"
  },
  {
    id: "11",
    name: "call me sometshing"
  },
  {
    id: "12",
    name: "call me something"
  }
]
Router
  .route('/')
  .get(MoviesController.helloWorld)

Router.route('/films')
  .get(MoviesController.getAllMovies);

Router.route('/films/:id').get(MoviesController.getMovieById);

Router.route('/films').post(MoviesController.CreateMovie);

module.exports = Router;


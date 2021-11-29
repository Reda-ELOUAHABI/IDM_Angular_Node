const express = require("express")
const router = express.Router();
// const Router = express.Router();
// const MoviesController = require("../Controller/movieController")

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
];

router.get('/', (req, res) => {
  res.send("Hello Main");
})



// Concept Of Controller [did't worked fine]
// Router
//   .route('/')
//   .get(MoviesController.helloWorld)

// Router.route('/films')
//   .get(MoviesController.getAllMovies);

// Router.route('/films/:id').get(MoviesController.getMovieById);

// Router.route('/films').post(MoviesController.CreateMovie);

module.exports = router;


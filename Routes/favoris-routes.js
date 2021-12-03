const express = require('express');
const router = express.Router();

const favorisController = require('../Controller/favoris-controller');


router.get("/favoris",favorisController.getAllFavoris)
router.post("/favoris",favorisController.postFavoris)
router.delete("/favoris",favorisController.deleteFavoris)

module.exports = router;
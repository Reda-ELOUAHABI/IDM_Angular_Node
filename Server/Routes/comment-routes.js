
const express = require('express');
const router = express.Router();

const commentController = require('../Controller/comment-controller');


router.get("/comment/:uid",commentController.getCommentsByFilmId)
router.post("/comment",commentController.postComment)

module.exports = router;

const mongoose = require("mongoose");
const HttpError = require("../Models/http-error");
const Comment = require('../Models/comment');

// database name is movies : inside uri
var uri = "mongodb://movie1:movie@cluster0-shard-00-00.c4sms.mongodb.net:27017,cluster0-shard-00-01.c4sms.mongodb.net:27017,cluster0-shard-00-02.c4sms.mongodb.net:27017/movies?ssl=true&replicaSet=atlas-3al5ka-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(uri).then(() => {
    console.log('connected successfuly');
}).catch((err) => {
    console.log("connection failed");
});

const getCommentsByFilmId = async (req, res) => {
    filmId = req.params.uid; //params = {uid: '11'}
    let result = await Comment.find().exec();
    const comments = result.filter((c => {
        // I use == instead of === because they have != types , and I dont want to do a cast
        // console.log("comments : " + filmId + typeof filmId + typeof c.filmId);
        return c.filmId == filmId;
    }))

    if (!comments || comments.length === 0) {
        return res.json({ comment: "comments does not Exist" });
        // OR for async [DB ...] :
        // return next( new HttpError("user not found",404));
    }
    res.json({ comments });
}

const postComment = async (req, res) => {
    const { filmId, comment } = req.body;
    const createdComment = new Comment({ filmId, comment });
    //    using mongoose
    const result = await createdComment.save();
    // res.json({ message: "created successfuly" })
    res.status(201).json(result);
}

exports.postComment = postComment;
exports.getCommentsByFilmId = getCommentsByFilmId;

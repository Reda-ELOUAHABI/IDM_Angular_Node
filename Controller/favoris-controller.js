const mongoose = require("mongoose");
const HttpError = require("../Models/http-error");
const Favoris = require('../Models/favoris');

// database name is movies : inside uri
var uri = "mongodb://movie1:movie@cluster0-shard-00-00.c4sms.mongodb.net:27017,cluster0-shard-00-01.c4sms.mongodb.net:27017,cluster0-shard-00-02.c4sms.mongodb.net:27017/movies?ssl=true&replicaSet=atlas-3al5ka-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(uri).then(() => {
    console.log('connected successfuly');
}).catch((err) => {
    console.log("connection failed");
});

// implemented
const getAllFavoris = async (req, res) => {
    let result = await Favoris.find().exec();
    res.json({ result: result });
}

const postFavoris = async (req, res) => {
    // we store Films id. the favorites Ones
    const { id } = req.body;
    let result
    if (!id || id == null) {
        return res.json({ message: "please refer an id" });
    }
    const createdFavoris = new Favoris({ id });
    //    using mongoose

    let favorisIds = await Favoris.find().exec();
    const hasFavoris = favorisIds.find(favoris => favoris.id == id);
    if (hasFavoris) {
        return res.status(422).json({ message: "Film Already Exist as Favoris" }); //422 : invalid user input
    }
    else {
        result = await createdFavoris.save();
    }

    // res.json({ message: "created successfuly" })
    res.status(201).json(result);
}

const deleteFavoris = async (req, res) => {
    // we store Films id. the favorites Ones
    const { id } = req.body;

    //    using mongoose

    let favorisIds = await Favoris.find().exec();
    favorisIds = favorisIds.filter(filmId => filmId.id === id);
    const createdFavoris = new Favoris({ favorisIds });

    const result = await createdFavoris.save();
    // res.json({ message: "created successfuly" })
    res.status(201).json(result);
}

exports.postFavoris = postFavoris;
exports.getAllFavoris = getAllFavoris;
exports.deleteFavoris = deleteFavoris;

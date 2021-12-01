// package that generate unique ids , but it's not I think
const { v4: uuidv4 } = require('uuid')

var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://movie1:movie@cluster0-shard-00-00.c4sms.mongodb.net:27017,cluster0-shard-00-01.c4sms.mongodb.net:27017,cluster0-shard-00-02.c4sms.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-3al5ka-shard-0&authSource=admin&retryWrites=true&w=majority";

const HttpError = require("../Models/http-error");



let films = [
    {
        id: "10",
        name: "reda call me "
    },
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

const addFilm = async (req, res) => {
    console.log(req);
    const { name } = req.body;
    // const name = req.body.name [the up is preferable to bind multiple element from body , while in spring boot we needed to create a full class ]
    const createdFilm = {
        id: uuidv4(),
        name,
    }
    films.push(createdFilm);
    // didnot working properly !
    const client = new MongoClient(uri);
    try {
        await client.connect();
        // console.log("connected");
        const db = client.db();
        // console.log("DB passed");
        const result = db.collection('reda').insertOne(createdFilm); //to get them all .find().toArray()
        // console.log("DB passed");
    }
    catch (error) {
        // console.log(error);
        return // res.status(507).json({ message: "error mongo : " })
    }
    client.close();
    res.status(201).json({ message: "created successfuly" })
};

const getAllFilmsLink = (req, res) => {
    res.send("<a href='api/films/'> get ALL Films </a>");
};

const getAllFilms = (req, res) => {
    res.send(films);
};

const getFilmsById = (req, res) => {
    filmId = req.params.uid; //params = {uid: '11'}

    // find() will return only the first element
    const filmsWanted = films.filter((f => {
        return f.id === filmId;
    }))

    if (!filmsWanted || filmsWanted.length === 0) {
        // const filmNotExist = new HttpError("film does not Exist", 404);
        // throw filmNotExist;
        throw new HttpError("films do not Exist", 404);;
        // OR for async [DB ...] :
        // return next( new HttpError("user not found",404));
    }
    res.json({ filmsWanted }); // in JS : {film} == {film: film}
};

const searchFilmByQuery = (req, res) => {
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

};



const patchFilm = (req, res) => {
    // res.json({hi: "jajja"});
    // GOOD practice
    // capt name from body
    const { name } = req.body;

    const filmId = req.params.uid;
    // take object to be updated as a copy , in case something fails ,
    // we wont change somthng in the origin object
    const updatedFilm = {
        ...films.find(f =>
            f.id === filmId)
    };
    const filmIndex = films.findIndex(f => f.id === filmId);
    console.log(filmIndex);
    // update it now with our req 
    updatedFilm.name = name

    // replace it now
    films[filmIndex] = updatedFilm;
    res.status(200).json({ film: updatedFilm });


};

const deleteFilm = (req, res) => {
    const filmId = req.params.uid;
    // verify if it exists first
    if (!films.find(f => f.id === filmId)) {
        throw new HttpError("could not find the specific film", 404)
    }
    // keep only element with different id of what we want to delete
    films = films.filter(f => f.id != filmId)
    res.status(200).json({ message: "film id=  " + filmId + " deleted successfuly" })


};

exports.getAllFilmsLink = getAllFilmsLink;
exports.getAllFilms = getAllFilms;
exports.getFilmsById = getFilmsById;
exports.searchFilmByQuery = searchFilmByQuery;
exports.addFilm = addFilm;
exports.patchFilm = patchFilm;
exports.deleteFilm = deleteFilm;




// package that generate unique ids , but it's not I think
const uuid = require("uuid")

const HttpError = require("../Models/http-error");


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

const getAllFilmsLink = (req, res) => {
    res.send("<a href='api/films/'> get ALL Films </a>");
};

const getAllFilms = (req, res) => {
    res.send(films);
};

const getFilmById = (req, res) => {
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

const addFilm = (req, res) => {
    console.log(req);
    const { name } = req.body;
    // const name = req.body.name [the up is preferable to bind multiple element from body , while in spring boot we needed to create a full class ]
    const createdFilm = {
        id: uuid(),
        name,
    }
    films.push(createdFilm);
    res.status(201).json({ message: "created successfuly" })
};

exports.getAllFilmsLink = getAllFilmsLink;
exports.getAllFilms = getAllFilms;
exports.getFilmById = getFilmById;
exports.searchFilmByQuery = searchFilmByQuery;
exports.addFilm = addFilm;




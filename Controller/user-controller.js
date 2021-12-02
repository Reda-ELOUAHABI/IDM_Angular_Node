const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');


const HttpError = require('../Models/http-error');

const users = [
    { id: "1", username: "admin", email: "email1@email.com", password: "admin" },
    { id: "2", username: "user1", email: "email2@email.com", password: "admin" },
    { id: "3", username: "user2", email: "email3@email.com", password: "admin" }

]

const getAllUsers = (req, res) => {
    res.json({ users });
};

const getUserById = (req, res) => {
    const userId = req.params.uid;
    console.log(userId);
    const user = users.find((user => {
        return user.id === userId;
    }));
    // HANDLING ERRORs
    // handling user does not exist case
    // [asyn/DB : next(error)]
    // [synch] : throw error (current case)
    if (!user) {
        const error = new Error('bro , could not find this user');
        error.code = 404;
        throw error;
    }

    res.json({ user });
}
// Register Sign Up
const signUp = (req, res) => {
    // check if data is validate first
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new HttpError("invalid data " + JSON.stringify(errors), 422)
    }

    const { username, email, password } = req.body;
    const hasUser = users.find(user => user.email === email);
    if (hasUser) {
        throw new HttpError("User Already Exist", 422); //422 : invalid user input
    }
    const createdUser = {
        id: uuidv4(),
        username, //username: username,
        email: email,
        password: password
    };
    // if ()
    users.push(createdUser)
    res.status(201).json({ message: "user registred successfuly", createdUser });
}
//Login
const signIn = (req, res) => {
    const { email, password } = req.body;
    // Manualy
    /*
    users.forEach(user => {
        if (user.email === email && user.password === password) {
            return res.json({message: "Logged In"})
        }
    })
    res.json("wrong info");
    */
    // Using find()
    const identifiesUser = users.find(user => user.email.toLowerCase() === email.toLowerCase())
    if (!identifiesUser || identifiesUser.password !== password) {
        throw new HttpError("informations are wrong", 401); //401: authentification failed
    }
    res.json({ message: "Logged in" })


}




exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.signIn = signIn;
exports.signUp = signUp;
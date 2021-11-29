const express = require("express")
const router = express.Router();

const users = [
    { id: "1", username: "admin", password: "admin" },
    { id: "2", username: "user1", password: "admin" },
    { id: "2", username: "user1", password: "admin" }

]
router.get('/users', (req, res) => {
    res.json({ users });
})
router.get("/users/:uid", (req, res) => {
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
})

module.exports = router;
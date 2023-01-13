const express = require("express");
const router = express.Router();
const User = require("../model/users.model");

router.get("/", async (req, res) => { //Get all users
    const Users = await User.find();
    res.json({
        status: 200,
        message: "Successful",
        body: Users
    })
});
router.get("/:id", async (req, res) => { //Get a user by ID
    const User = await User.find();
    res.json({
        status: 200,
        message: "Successful",
        body: User
    })
});

module.exports = router;
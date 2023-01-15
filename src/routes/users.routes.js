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
router.get("/:id", async (req, res) => { //Get user by ID
    const UserById = await User.findById(req.params.id).catch(e => {});
    if(UserById){
        res.json({
            status: 200,
            message: "Successful",
            body: UserById
        })
    }else{
        res.json({
            status: 500,
            message: "Failure",
        })
    }
});

router.post("/", async (req, res) => {//Create User
    const {email, password} = req.body; 
    const newUser = new User({email, password});
    newUser.save().catch(e => {});
    res.json({
        status: 200,
        message: "Successful"
    });
});

router.put("/:id", async (req, res) => {//Edit user by ID
    const {email, password} = req.body; 
    await User.findByIdAndUpdate(req.params.id, {email, password}).catch(e => {});
    res.json({
        status: 200,
        message: "Successful"
    });
});

router.delete("/:id", async (req, res) => {//Delete user by ID
    await User.findByIdAndDelete(req.params.id).catch(e => {});
    res.json({
        status: 200,
        message: "Successful"
    });
});

module.exports = router;
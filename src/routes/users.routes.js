const express = require("express");
const router = express.Router();
const User = require("../model/users.model");

const parseBody = (req) => {
    const {email, password} = req.body;
    const body = {email, password};
    return body;
}

router.get("/", async (req, res) => { //Get all users
    const Users = await User.find().catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success",
        body: Users
    })
});

router.get("/:id", async (req, res) => { //Get user by ID
    const UserById = await User.findById(req.params.id).catch(e => console.log(e));
    if(UserById){
        res.json({
            status: 200,
            message: "Success",
            body: UserById
        })
    }else{
        res.json({
            status: 404,
            message: "Medic not found"
        });
    }
});

router.post("/", async (req, res) => {//Create User
    const newUser = new User(parseBody(req));
    newUser.save().catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success"
    });
});

router.put("/:id", async (req, res) => {//Edit user by ID
    await User.findByIdAndUpdate(req.params.id, parseBody(req)).catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success"
    });
});

router.delete("/:id", async (req, res) => {//Delete user by ID
    await User.findByIdAndDelete(req.params.id).catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success"
    });
});

module.exports = router;
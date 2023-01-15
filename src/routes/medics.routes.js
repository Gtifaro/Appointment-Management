const express = require("express");
const router = express.Router();
const Medic = require("../model/medics.model");

const parseBody = (req) => {
    const {name} = req.body;
    const body = {name};
    return body;
}

router.get("/", async (req,res) => {
    const Medics = await Medic.find();
    res.json({
        status: 200,
        message: "Api Working",
        body: Medics
    });
});

router.get("/:id", async (req,res) => {
    const Medic = await Medic.findById(req.params.id);
    res.json({
        status: 200,
        message: "Api Working",
        body: Medic
    });
});

router.post("/", async (req,res) => {
    const newMedic = new Medic(parseBody(req));
    await newMedic.save();
    res.json({
        status: 200,
        message: "Api Working"
    });
});

router.put("/:id", async (req,res) => {
    await Medic.findByIdAndUpdate(req.params.id, parseBody(req));
    res.json({
        status: 200,
        message: "Api Working"
    });
});

router.delete("/:id", async (req,res) => {
    await Medic.findByIdAndDelete(req.params.id);
    res.json({
        status: 200,
        message: "Api Working"
    });
});

module.exports = router;
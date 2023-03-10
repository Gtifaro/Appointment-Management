const express = require("express");
const router = express.Router();
const Medic = require("../model/medics.model");

const parseBody = (req) => {
    const {name, timeStart, timeFinish} = req.body;
    const body = {name, timeStart, timeFinish};
    return body;
}

router.get("/", async (req,res) => {
    const Medics = await Medic.find().catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success",
        body: Medics
    });
});

router.get("/:id", async (req,res) => {
    const MedicById = await Medic.findById(req.params.id).catch(e => console.log(e));
    if(MedicById){
        res.json({
            status: 200,
            message: "Success",
            body: MedicById
        });
    }else{
        res.json({
            status: 404,
            message: "Medic not found"
        });
    }
});

router.post("/", async (req,res) => {
    const newMedic = new Medic(parseBody(req));
    await newMedic.save().catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success"
    });
});

router.put("/:id", async (req,res) => {
    await Medic.findByIdAndUpdate(req.params.id, parseBody(req)).catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success"
    });
});

router.delete("/:id", async (req,res) => {
    await Medic.findByIdAndDelete(req.params.id).catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success"
    });
});

module.exports = router;
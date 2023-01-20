const express = require("express");
const router = express.Router();
const Treatment = require("../model/treatments.model");

const parseBody = (req) => {
    const {medic, patient, office, appointment, date, medicines} = req.body;
    const body = {medic, patient, office, appointment, date, medicines};
    return body;
}

router.get("/", async (req,res) => {
    const Treatments = await Treatment.find().catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success",
        body: Treatments
    });
});

router.get("/:id", async (req,res) => {
    const TreatmentById = await Treatment.findById(req.params.id).catch(e => console.log(e));
    if(TreatmentById){
        res.json({
            status: 200,
            message: "Success",
            body: TreatmentById
        });
    }else{
        res.json({
            status: 404,
            message: "Treatment not found"
        });
    }
});

router.post("/", async (req,res) => {
    const newTreatment = new Treatment(parseBody(req));
    await newTreatment.save().catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success"
    });
});

router.put("/:id", async (req,res) => {
    await Treatment.findByIdAndUpdate(req.params.id, parseBody(req)).catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success"
    });
});

router.delete("/:id", async (req,res) => {
    await Treatment.findByIdAndDelete(req.params.id).catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success"
    });
});

module.exports = router;
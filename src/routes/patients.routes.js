const express = require("express");
const router = express.Router();
const Patient = require("../model/patients.model");

const parseBody = (req) => {
    const {name, creationDate, birthDate, clinicalHistoryID, lastRevisionDate} = req.body;
    const body = {name, creationDate, birthDate, clinicalHistoryID, lastRevisionDate};
    return body;
}

router.get("/", async (req,res) => {
    const Patients = await Patient.find().catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success",
        body: Patients
    });
});

router.get("/:id", async (req,res) => {
    const PatientById = await Patient.findById(req.params.id).catch(e => console.log(e));
    if(PatientById){
        res.json({
            status: 200,
            message: "Success",
            body: PatientById
        });
    }else{
        res.json({
            status: 404,
            message: "Patient not found"
        });
    }
});

router.post("/", async (req,res) => {
    const newPatient = new Patient(parseBody(req));
    await newPatient.save().catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success"
    });
});

router.put("/:id", async (req,res) => {
    await Patient.findByIdAndUpdate(req.params.id, parseBody(req)).catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success"
    });
});

router.delete("/:id", async (req,res) => {
    await Patient.findByIdAndDelete(req.params.id).catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success"
    });
});

module.exports = router;
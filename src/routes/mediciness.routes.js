const express = require("express");
const router = express.Router();
const Medicine = require("../model/medicines.model");

const parseBody = (req) => {
    const {name, description, dose, recurrence, amount} = req.body;
    const body = {name, description, dose, recurrence, amount};
    return body;
}

router.get("/", async (req,res) => {
    const Medicines = await Medicine.find().catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success",
        body: Medicines
    });
});

router.get("/:id", async (req,res) => {
    const MedicineById = await Medicine.findById(req.params.id).catch(e => console.log(e));
    if(MedicineById){
        res.json({
            status: 200,
            message: "Success",
            body: MedicineById
        });
    }else{
        res.json({
            status: 404,
            message: "Medicine not found"
        });
    }
});

router.post("/", async (req,res) => {
    const newMedicine = new Medicine(parseBody(req));
    await newMedicine.save().catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success"
    });
});

router.put("/:id", async (req,res) => {
    await Medicine.findByIdAndUpdate(req.params.id, parseBody(req)).catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success"
    });
});

router.delete("/:id", async (req,res) => {
    await Medicine.findByIdAndDelete(req.params.id).catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success"
    });
});

module.exports = router;
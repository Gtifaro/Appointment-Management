const express = require("express");
const router = express.Router();
const Office = require("../model/offices.model");

const parseBody = (req) => {
    const {name, Office} = req.body;
    const body = {name, Office};
    return body;
}

router.get("/", async (req,res) => {
    const Offices = await Office.find().catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success",
        body: Offices
    });
});

router.get("/:id", async (req,res) => {
    const OfficeById = await Office.findById(req.params.id).catch(e => console.log(e));
    if(OfficeById){
        res.json({
            status: 200,
            message: "Success",
            body: OfficeById
        });
    }else{
        res.json({
            status: 404,
            message: "Office not found"
        });
    }
});

router.post("/", async (req,res) => {
    const newOffice = new Office(parseBody(req));
    await newOffice.save().catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success"
    });
});

router.put("/:id", async (req,res) => {
    await Office.findByIdAndUpdate(req.params.id, parseBody(req)).catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success"
    });
});

router.delete("/:id", async (req,res) => {
    await Office.findByIdAndDelete(req.params.id).catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success"
    });
});

module.exports = router;
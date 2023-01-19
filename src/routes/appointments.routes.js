const express = require("express");
const router = express.Router();
const Appointment = require("../model/appointments.model");

const parseBody = (req) => {
    const {medic, patient, office, date, closed} = req.body;
    const body = {medic, patient, office, date, closed};
    return body;
}

router.get("/", async (req,res) => {
    const Appointments = await Appointment.find().catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success",
        body: Appointments
    });
});

router.get("/:id", async (req,res) => {
    const AppointmentById = await Appointment.findById(req.params.id).catch(e => console.log(e));
    if(AppointmentById){
        res.json({
            status: 200,
            message: "Success",
            body: AppointmentById
        });
    }else{
        res.json({
            status: 404,
            message: "Appointment not found"
        });
    }
});

router.post("/", async (req,res) => {
    const newAppointment = new Appointment(parseBody(req));
    await newAppointment.save().catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success"
    });
});

router.put("/:id", async (req,res) => {
    await Appointment.findByIdAndUpdate(req.params.id, parseBody(req)).catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success"
    });
});

router.delete("/:id", async (req,res) => {
    await Appointment.findByIdAndDelete(req.params.id).catch(e => console.log(e));
    res.json({
        status: 200,
        message: "Success"
    });
});

module.exports = router;
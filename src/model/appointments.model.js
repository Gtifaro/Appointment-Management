const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    medic: {type: "String", require: true},
    patient: {type: "String", require: true},
    office: {type: "String", require: true},
    date: {type: "String", require: true},
    closed: {type: "Boolean", require: true}
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
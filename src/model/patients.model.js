const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    name: {type: "String", require: true},
    creationDate: {type: "String", require: true},
    birthDate: {type: "String", require: true},
    clinicalHistoryID: {type: "Number", require: true},
    lastRevisionDate: {type: "String", require: true},
});

module.exports = mongoose.model("Patient", PatientSchema);
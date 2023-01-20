const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const treatmentSchema = new Schema({
    medic: {type: "String", require: true},
    patient: {type: "String", require: true},
    office: {type: "String", require: true},
    appointment: {type: "String", require: true},
    date: {type: "String", require: true},
    medicines: {type: "Array", require: true}
});

module.exports = mongoose.model("Treatment", treatmentSchema);
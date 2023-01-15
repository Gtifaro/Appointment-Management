const mongoose = require("mongoose");
const { Schema } = mongoose;

const MedicSchema = new Schema({
    name: {type: "String", required: true},
    timeStart: {type: "String", required: true},
    timeFinish: {type: "String", required: true},
});

module.exports = mongoose.model("Medic", MedicSchema);
const mongoose = require("mongoose");
const { Schema } = mongoose;

const MedicSchema = new Schema({
    name: {type: "String", required: true}
});

module.exports = mongoose.model("Medic", MedicSchema);
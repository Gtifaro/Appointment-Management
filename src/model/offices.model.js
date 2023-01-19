const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OfficeSchema = new Schema({
    name: {type: "Number", require: true},
    medic: {type: "Number", require: true}
});

module.exports = mongoose.model("Office", OfficeSchema);
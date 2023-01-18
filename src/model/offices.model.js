const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OfficeSchema = new Schema({
    name: {type: "Int", require: true},
    medic: {type: "Int", require: true}
});

module.exports = mongoose.model("Office", OfficeSchema);
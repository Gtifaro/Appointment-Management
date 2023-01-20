const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
    name: {type: "String", require: true},
    description: {type: "String", require: true},
    dose: {type: "String", require: true},
    recurrence: {type: "String", require: true},
    amount: {type: "String", require: true}
});

module.exports = mongoose.model("Medicine", medicineSchema);
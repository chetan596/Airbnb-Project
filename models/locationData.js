
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationData = new Schema({
    city : {
        type : String,
    },
    state : {
        type : String,
    },
    country : {
        type : String,
    },
    population : {
        type : Number,
    },
    lat : {
        type : Number,
    },
    lng : {
        type : Number,
    },
})

module.exports = mongoose.model("LocationData", LocationData)


const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const hotelCreateData = new Schema({
    hotelType : {
        type : Array,   
    },
    roomType : {
        type : Array,
    },
    occupancy : {
        type : Array,
    },
    amenities : {
        type : Array,
    },
    describe: {
        type : Array,
    },
    instantBook: {
        type : Array,
    }
})

module.exports = mongoose.model("data", hotelCreateData)

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

main().then(() => {
    console.log("The databass was successfully connectd");
}).catch((err) => {
    console.log("----Error---", err);

})
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Airbnb")
}

const listingSchema = new Schema({
    hotelType: { type: String, required: true },
    roomType: { type: String, required: true },
    location: {
        country: { type: String,  },
        flatHouse: { type: String,  },
        neaebyLandmark: { type: String },  // nearby galti se neaeby likha tha
        streetAddress: { type: String, },
        StateUnionTerritory: { type: String,  },
        DistrictLocality: { type: String,  },
        CityTown: { type: String,  },
        pinCode: { type: Number,  },
    },
    floorPlan: {
        Guests: { type: String, required: true },
        Bedrooms: { type: String, required: true },
        Bed: { type: String, required: true },
        Does: { type: String },  // yes/no optional lag raha mujhe
    },
    bathrooms: {
        PrivateAndAttached: { type: String, required: true },
        Dedicated: { type: String, required: true },
        Shared: { type: String },
    },
    occupancy: [{ type: String }], // array of strings
    amenitiess: {
        amenities: [{ type: String }],
        standoutAmenities: [{ type: String }]
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    describe: [{ type: String }],
    instantBook: { type: String }, // Approver/Non-Approver etc
    welcomeReservation: { type: String }, // yes/no
    price: { type: Number, required: true },

    image: {
        type: String,
        default: "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg",
        set: (v) => v === "" ? "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg" : v,
    },
    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : "Review"
        }
    ]
})

module.exports = mongoose.model("listing", listingSchema);








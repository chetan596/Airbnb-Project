const mongoose = require("mongoose");
const Schema = mongoose.Schema;

main().then(() => {
    console.log("The databass was successfully connectd");
}).catch((err) => {
    console.log("----Error---", err);

})
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Airbnb'")
}

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        default : "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg",
    },
    price: {
        type: Number
    },
    location: {
        type: String
    },
    country: {
        type: String
    }
});

module.exports = mongoose.model("listing", listingSchema);

const hotelData = require("../models/hotelcreateData.js");
const Listing = require("../models/listing");
const joi = require("joi");
const listingDataStore = {}; // Stores data per user

function getUserData(userId) {
    if (!listingDataStore[userId]) {
        listingDataStore[userId] = {};
    }
    return listingDataStore[userId];
}

module.exports.structureData = async (req, res) => {
    const data = await hotelData.find({});
    res.json(data);
}

module.exports.hotelTypeData = (req, res) => {
    getUserData(req.user._id).hotelType = req.body.hotelType;
}

module.exports.roomType = (req, res) => {
    getUserData(req.user._id).roomType = req.body.roomType;
}

module.exports.location =  (req, res) => {
    const {
        country, flatHouse, neaebyLandmark, streetAddress,
        StateUnionTerritory, DistrictLocality, CityTown, pinCode
    } = req.body;

    getUserData(req.user._id).location = {
        country, flatHouse, neaebyLandmark, streetAddress,
        StateUnionTerritory, DistrictLocality, CityTown, pinCode
    };

    res.redirect(`/listing/${req.user._id}/floor-plan`);
}

module.exports.floorPlanrt = (req, res) => {
    const { Guests, Bedrooms, Bed, Does } = req.body;
    getUserData(req.user._id).floorPlan = { Guests, Bedrooms, Bed, Does };
    res.redirect(`/listing/${req.user._id}/bathrooms`);
}
module.exports.bathrooms = (req, res) => {
    const { PrivateAndAttached, Dedicated, Shared } = req.body;
    getUserData(req.user._id).bathrooms = { PrivateAndAttached, Dedicated, Shared };
    res.redirect(`/listing/${req.user._id}/occupancy`);
}
module.exports.occupancyData = async (req, res) => {
    const data = await hotelData.find({});
    res.json(data[0]?.occupancy || []);
}
module.exports.occupancy = (req, res) => {
    getUserData(req.user._id).occupancy = req.body.occupancy;
}
module.exports.amenitiesData = async (req, res) => {
    const data = await hotelData.find({});
    res.json(data[0]?.amenities || []);
}
module.exports.occupancy2 =  (req, res) => {
    const { amenities, standoutAmenities } = req.body;
    getUserData(req.user._id).amenitiess = { amenities, standoutAmenities };
}
module.exports.title =  (req, res) => {
    getUserData(req.user._id).title = req.body.title;
    res.redirect(`/listing/${req.user._id}/description`);
}
module.exports.description =  (req, res) => {
    getUserData(req.user._id).description = req.body.description;
    res.redirect(`/listing/${req.user._id}/photo`);
}
module.exports.photo =  (req, res) => {

        console.log(req.files)

    res.json({files: req.files });
}
module.exports.setphoto44 =  (req,res)=>{
   
  res.json(req.files)
}
module.exports.savePhotos =  (req,res)=>{
    getUserData(req.user._id).image = req.body
  console.log(req.body)
}








module.exports.describe =  (req, res) => {
    getUserData(req.user._id).describe = req.body.describe;
    res.redirect("/finish-setup");
}
module.exports.instantBook =  (req, res) => {
    getUserData(req.user._id).instantBook = req.body.instantBook;
}
module.exports.visibility = (req, res) => {
    getUserData(req.user._id).welcomeReservation = req.body.welcomeReservation;
    res.redirect(`/listing/${req.user._id}/price`);
}
module.exports.price =  (req, res) => {
    const cleanedPrice = Number(req.body.price.replace(/[^0-9]/g, ''));
    getUserData(req.user._id).price = cleanedPrice;
    res.redirect(`/listingData/${req.user._id}/listing-review`);
}
module.exports.listingReview =  (req, res) => {
    const userData = getUserData(req.params.id);
    res.render("create/step17.ejs", { listingDataArr: userData, id: req.params.id });
}
module.exports.listingReviewData = async (req, res) => {
    const result = await hotelData.find({});
    const ref = result[0];

    const hotelTitles = ref.hotelType.map(item => item.title);
    const roomTypes = ref.roomType;
    const occupancys = ref.occupancy.map(item => item.title);
    const amenities1 = ref.amenities[0].map(item => item.title);
    const amenities2 = ref.amenities[1].map(item => item.title);
    const describes = ref.describe.map(item => item.title);
    const instantBooks = ref.instantBook;

    const schema = joi.object({
        hotelType: joi.string().valid(...hotelTitles).required(),
        roomType: joi.string().valid(...roomTypes).required(),
        location: joi.object().required(),
        floorPlan: joi.object().required(),
        bathrooms: joi.object().required(),
        occupancy: joi.array().items(joi.string().valid(...occupancys)).required(),
        amenitiess: joi.object().required(),
        title: joi.string().required(),
        image : joi.array().required(),
        description: joi.string().required(),
        describe: joi.array().items(joi.string().valid(...describes)).required(),
        instantBook: joi.string().valid(...instantBooks).required(),
        welcomeReservation: joi.string().valid("yes", "no").required(),
        price: joi.number().min(0).required()
    });

    const userData = getUserData(req.user._id);

    console.log(userData)
    
    const { error } = schema.validate(userData, { abortEarly: false });

    const allFields = Object.keys(schema.describe().keys);
    const errorFields = error ? [...new Set(error.details.map(err => err.path[0]))] : [];
    const successFields = allFields.filter(f => !errorFields.includes(f));

    if (!error) {
        userData.owner =req.user._id;
        await new Listing(userData).save();
    } else {
        console.log("---Validation Error---", error);
    }

    res.json({ successFields, errorFields });
}
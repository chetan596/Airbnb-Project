const express = require("express");
const router = express.Router();
const warpAsync = require("../util/warpAsync.js");
const { isLoggedIn } = require("../loginMiddle.js");
const createDatacontroller = require("../controllers/createListingData.js")

const multer  = require('multer')
const {storage} = require("../cloudConfig.js")
const upload = multer({storage})


// ========== Structure Data ==========
router.get("/structureData", isLoggedIn, createDatacontroller.structureData);

// ========== Step-by-step Data Entry ==========
router.post("/hotel-type-data", isLoggedIn, createDatacontroller.hotelTypeData);

router.post("/room-type", isLoggedIn, createDatacontroller.roomType);

router.post("/location", isLoggedIn, createDatacontroller.location);

router.post("/floor-planrt", isLoggedIn, createDatacontroller.floorPlanrt);

router.post("/bathrooms", isLoggedIn, createDatacontroller.bathrooms);

// ========== Occupancy & Amenities ==========
router.get("/occupancyData", isLoggedIn, createDatacontroller.occupancyData);

router.post("/occupancy", isLoggedIn, createDatacontroller.occupancy);

router.get("/amenitiesData", isLoggedIn, createDatacontroller.amenitiesData);

router.post("/occupancy2", isLoggedIn, createDatacontroller.occupancy2);

router.post("/photo", upload.array('Image', 12), (req, res) => {
    console.log(req.body, req.files);
    res.json({ message: "Files uploaded successfully", files: req.files });
});


// ========== Final Details ==========
router.post("/title", isLoggedIn, createDatacontroller.title);

router.post("/description", isLoggedIn, createDatacontroller.description);

router.post("/describe", isLoggedIn, createDatacontroller.describe);

router.post("/instant-book", isLoggedIn, createDatacontroller.instantBook);

router.post("/visibility", isLoggedIn, createDatacontroller.visibility);

router.post("/price", isLoggedIn, createDatacontroller.price);

router.get("/:id/listing-review", isLoggedIn, createDatacontroller.listingReview);

// ========== Final Submission and Validation ==========
router.post("/listing-reviewData", isLoggedIn, warpAsync(createDatacontroller.listingReviewData));

module.exports = router;
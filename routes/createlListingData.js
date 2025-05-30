const express = require("express");
const router = express.Router();
const warpAsync = require("../util/warpAsync.js");
const { isLoggedIn } = require("../loginMiddle.js");
const createDatacontroller = require("../controllers/createListingData.js")
// const listingDataStore = {}; // Stores data per user

// function getUserData(userId) {
//     if (!listingDataStore[userId]) {
//         listingDataStore[userId] = {};
//     }
//     return listingDataStore[userId];
// }

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
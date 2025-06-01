const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const warpAsync = require("../util/warpAsync.js");
const { isLoggedIn } = require("../loginMiddle.js")
const createcontroller = require("../controllers/createListing.js")


router.get("/host/home", createcontroller.hostHome)


router.get("/:id/become-a-host", isLoggedIn, createcontroller.becomeAHost)

router.get("/:id/about-your-plays", isLoggedIn, createcontroller.aboutYourPlays)

router.get("/:id/structure", isLoggedIn, createcontroller.structure)

router.get("/:id/privacy-type", isLoggedIn, createcontroller.privacyType)

router.get("/:id/location", isLoggedIn, createcontroller.location)

router.get("/:id/floor-plan", isLoggedIn, createcontroller.floorPlan)

router.get("/:id/bathrooms", isLoggedIn, createcontroller.bathrooms)

router.get("/:id/occupancy", isLoggedIn, createcontroller.occupancy)

router.get("/:id/stand-out", isLoggedIn, createcontroller.standOut)

router.get("/:id/amenities", isLoggedIn, createcontroller.amenities)

router.get("/photo",(req,res)=>{
    res.render("create/imageUplode")
})

router.get("/:id/title", isLoggedIn, createcontroller.title)

router.get("/:id/description", isLoggedIn, createcontroller.description)

router.get("/:id/describe", isLoggedIn, createcontroller.describe)

router.get("/:id/finish-setup", isLoggedIn, createcontroller.finishSetup)

router.get("/:id/instant-book", isLoggedIn, createcontroller.instantBook)

router.get("/:id/visibility", isLoggedIn, createcontroller.visibility)

router.get("/:id/price", isLoggedIn, createcontroller.price)


module.exports = router;
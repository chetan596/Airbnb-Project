const express = require("express");
const router = express.Router();
const listingcontroller = require("../controllers/listing.js")
const warpAsync = require("../util/warpAsync.js");
const ListingData = require("../models/hotelcreateData.js")


router.get("/", warpAsync(listingcontroller.index));
router.get("/navBox", listingcontroller.isUser);
router.get("/api/listing/:id", listingcontroller.listingData);
router.get("/location-autocomplete", warpAsync(listingcontroller.locationAutocomplete))

router.post("/Search",(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

router.get('/listingFilterData', async(req,res)=>{
    let data = await ListingData.find({})
    res.json(data[0].hotelType)
})

// router.post("/loginIneree",(req,res)=>{
//     res.send("dee")
// })





module.exports = router;
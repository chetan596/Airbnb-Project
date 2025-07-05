const express = require("express");
const router = express.Router();
const listingcontroller = require("../controllers/listing.js")
const warpAsync = require("../util/warpAsync.js");


router.get("/", warpAsync(listingcontroller.index));
router.get("/navBox", listingcontroller.isUser);
router.get("/api/listing/:id", listingcontroller.listingData);
router.get("/location-autocomplete", warpAsync(listingcontroller.locationAutocomplete))

router.post("/Search",(req,res)=>{
    res.send(req.body)
})

// router.post("/loginIneree",(req,res)=>{
//     res.send("dee")
// })





module.exports = router;
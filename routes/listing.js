const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const warpAsync = require("../util/warpAsync.js");


router.get("/",warpAsync(async(req , res)=>{
    let listingData = await Listing.find({})
   res.render("./listing/listing.ejs",{listingData})
}))







module.exports = router;
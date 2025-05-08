const express = require("express");
const router = express.Router();
const hotelData= require("../models/hotelcreateData.js")
const Listing = require("../models/listing");
const warpAsync = require("../util/warpAsync.js");


router.get("/host/home",(req, res)=>{
    res.render("create/create.ejs")

})


router.get("/become-a-host",(req,res)=>{
    res.render("create/becomeAHost.ejs")
})

router.get("/about-your-plays",(req,res)=>{
    res.render("create/step1.ejs")
})

router.get("/structure",(req,res)=>{
   
    res.render("create/step2.ejs")
})

router.get("/privacy-type",async (req,res)=>{
    let uiuiu = await hotelData.find({});
    let rrr = uiuiu[0].roomType;
    res.render("create/step3.ejs", {rrr})
})

router.get("/location",(req,res)=>{
    res.render("create/step4.ejs")
})

router.get("/floor-plan",(req,res)=>{
    res.render("create/step5.ejs")
})

router.get("/bathrooms",(req,res)=>{
    res.render("create/step6.ejs")
})

router.get("/occupancy",(req ,res)=>{
    res.render("create/step7.ejs")
})

router.get("/stand-out",(req,res)=>{
    res.render("create/step8.ejs")
})

router.get("/amenities",(req,res)=>{
    res.render("create/step9.ejs")
})

router.get("/title",(req,res)=>{
    res.render("create/step10.ejs")
})

router.get("/description",(req,res)=>{
    res.render("create/step11.ejs")
})

router.get("/describe",async(req,res)=>{
    let uiuiu = await hotelData.find({})
    let oda =  uiuiu[0].describe;
    res.render("create/step12.ejs",{oda})
})

router.get("/finish-setup",(req,res)=>{
    res.render("create/step13.ejs")
})

router.get("/instant-book",(req,res)=>{
    
    res.render("create/step14.ejs")
})

router.get("/visibility",(req,res)=>{
    res.render("create/step15.ejs")
})

router.get("/price",(req,res)=>{
    
    res.render("create/step16.ejs")
})


module.exports = router;
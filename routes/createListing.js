const express = require("express");
const router = express.Router();
const hotelData= require("../models/hotelcreateData.js")
const Listing = require("../models/listing");
const warpAsync = require("../util/warpAsync.js");
const {isLoggedIn} = require("../loginMiddle.js")


router.get("/host/home",(req, res)=>{
    let userId ;
    if(req.user){
         
         res.render("create/create.ejs",{userId :  req.user._id})
    }else{
      res.render("create/create.ejs",{userId : "55481584151"})
    }
   

})


router.get("/:id/become-a-host",isLoggedIn,(req,res)=>{
   let {id} = req.params;
    
    res.render("create/becomeAHost.ejs",{id})
})

router.get("/:id/about-your-plays",isLoggedIn,(req,res)=>{
    let {id} = req.params;
    console.log(id)
    res.render("create/step1.ejs",{id} )
})

router.get("/:id/structure",isLoggedIn,(req,res)=>{
    let {id} = req.params;
    console.log(id)
    res.render("create/step2.ejs",{id})
})

router.get("/:id/privacy-type",isLoggedIn,async (req,res)=>{
    let uiuiu = await hotelData.find({});
    let rrr = uiuiu[0].roomType;
     let {id} = req.params;
    console.log(id)
    res.render("create/step3.ejs", {rrr,id})
})

router.get("/:id/location",isLoggedIn,(req,res)=>{
     let {id} = req.params;
    console.log(id)
    res.render("create/step4.ejs",{id})
})

router.get("/:id/floor-plan",isLoggedIn,(req,res)=>{
      let {id} = req.params;
    console.log(id)
    res.render("create/step5.ejs",{id})
})

router.get("/:id/bathrooms",isLoggedIn,(req,res)=>{
    let {id} = req.params;
    console.log(id)
    res.render("create/step6.ejs",{id})
})

router.get("/:id/occupancy",isLoggedIn,(req ,res)=>{
    let {id} = req.params;
    console.log(id)
    res.render("create/step7.ejs",{id})
})

router.get("/:id/stand-out",isLoggedIn,(req,res)=>{
    let {id} = req.params;
    console.log(id)
    res.render("create/step8.ejs",{id})
})

router.get("/:id/amenities",isLoggedIn,(req,res)=>{
     let {id} = req.params;
    console.log(id)
    res.render("create/step9.ejs",{id})
})

router.get("/:id/title",isLoggedIn,(req,res)=>{
     let {id} = req.params;
    console.log(id)
    res.render("create/step10.ejs",{id})
})

router.get("/:id/description",isLoggedIn,(req,res)=>{
     let {id} = req.params;
    console.log(id)
    res.render("create/step11.ejs",{id})
})

router.get("/:id/describe",isLoggedIn,async(req,res)=>{
     let {id} = req.params;
    console.log(id)
    let uiuiu = await hotelData.find({})
    let oda =  uiuiu[0].describe;
    res.render("create/step12.ejs",{oda,id})
})

router.get("/:id/finish-setup",isLoggedIn,(req,res)=>{
     let {id} = req.params;
    console.log(id)
    res.render("create/step13.ejs",{id})
})

router.get("/:id/instant-book",isLoggedIn,(req,res)=>{
     let {id} = req.params;
    console.log(id)
    res.render("create/step14.ejs",{id})
})

router.get("/:id/visibility",isLoggedIn,(req,res)=>{
     let {id} = req.params;
    console.log(id)
    res.render("create/step15.ejs",{id})
})

router.get("/:id/price",isLoggedIn,(req,res)=>{
     let {id} = req.params;
    console.log(id)
    res.render("create/step16.ejs",{id})
})


module.exports = router;
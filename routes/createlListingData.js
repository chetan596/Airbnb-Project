const express = require("express");
const router = express.Router();
const hotelData= require("../models/hotelcreateData.js")
const Listing = require("../models/listing");
const warpAsync = require("../util/warpAsync.js");
const joi = require("joi");

let listingDataArr = {};

router.get("/structureData",async (req,res)=>{
    let opo =await  hotelData.find({});
    res.json(opo)
})

router.post("/hotel-type-data",(req,res)=>{
    let{hotelType}= req.body;
    listingDataArr.hotelType = hotelType;
}) 


router.post("/room-type",(req,res)=>{
    let{roomType} = req.body
    listingDataArr.roomType = roomType;
})

router.post("/location",(req,res)=>{
    let { country,flatHouse,neaebyLandmark,streetAddress,StateUnionTerritory,DistrictLocality,CityTown,pinCode} = req.body;
    listingDataArr.location = {};
    listingDataArr.location.country = country;
    listingDataArr.location.flatHouse = flatHouse;
    listingDataArr.location.neaebyLandmark = neaebyLandmark;
    listingDataArr.location.streetAddress = streetAddress;
    listingDataArr.location.StateUnionTerritory = StateUnionTerritory;
    listingDataArr.location.DistrictLocality = DistrictLocality;
    listingDataArr.location.DistrictLocality = DistrictLocality;
    listingDataArr.location.CityTown = CityTown;
    listingDataArr.location.pinCode = pinCode;
    res.redirect("/listing/floor-plan");
    

    
})


router.post("/floor-planrt",(req,res)=>{
    let{ Guests,Bedrooms,Bed,Does} = req.body;
    listingDataArr.floorPlan = {};
    listingDataArr.floorPlan.Guests = Guests;
    listingDataArr.floorPlan.Bedrooms = Bedrooms;
    listingDataArr.floorPlan.Bed = Bed;
    listingDataArr.floorPlan.Does = Does;

    res.redirect("/listing/bathrooms")
})



router.post("/bathrooms",(req,res)=>{
    let {PrivateAndAttached,Dedicated,Shared} = req.body;
    listingDataArr.bathrooms = {};
    listingDataArr.bathrooms.PrivateAndAttached = PrivateAndAttached;
    listingDataArr.bathrooms.Dedicated = Dedicated;
    listingDataArr.bathrooms.Shared = Shared;

    


    res.redirect("/listing/occupancy")
})

router.get("/occupancyData",async(req ,res)=>{
    let uiuiu = await hotelData.find({})
    res.json( uiuiu[0].occupancy)
})


router.post("/occupancy",(req ,res)=>{
    let{occupancy} = req.body;
    listingDataArr.occupancy = occupancy;

    // res.redirect("/fgrt")
})


router.get("/amenitiesData",async(req,res)=>{
    let uiuiu = await hotelData.find({})
    res.json( uiuiu[0].amenities)
})

router.post("/occupancy2",(req ,res)=>{
    let {amenities,standoutAmenities} = req.body;
    listingDataArr.amenitiess = {};
    listingDataArr.amenitiess.amenities = amenities;
    listingDataArr.amenitiess.standoutAmenities = standoutAmenities;

    // res.redirect("/fgrt")
})


router.post("/title",(req,res)=>{
    let{title}= req.body;
    listingDataArr.title = title;

    res.redirect("/listing/description")
})

router.post("/description",(req,res)=>{
    let{description}= req.body;
    listingDataArr.description = description;

    res.redirect("/listing/describe")
})

router.post("/describe",(req,res)=>{
    let{describe}= req.body;
    listingDataArr.describe = describe;

    res.redirect("/finish-setup")
})



router.post("/instant-book",(req,res)=>{
    let{instantBook}= req.body;
    listingDataArr.instantBook = instantBook;

    
})


router.post("/visibility",(req,res)=>{
    let{welcomeReservation}= req.body;
    listingDataArr.welcomeReservation = welcomeReservation;

    res.redirect("/listing/price")
})

router.post("/price",(req,res)=>{
    let{price}= req.body;
    
    listingDataArr.price = Number(price.replace(/[^0-9]/g,''));

    res.redirect("/listingData/listing-review")
})


let hotelTitles ;
let roomTypes ; 
let occupancys ;
let describes ;
let instantBooks ;


router.get("/listing-review",(req,res)=>{
    res.render("create/step17.ejs",{listingDataArr})
})

router.post("/listing-reviewData",warpAsync(async(req,res)=>{
    let result =await  hotelData.find({})
      hotelTitles = result[0].hotelType.map(item => item.title);
       roomTypes = result[0].roomType;
       occupancys= result[0].occupancy.map(item => item.title)
       occupancys= result[0].occupancy.map(item => item.title)
       amenities1 = result[0].amenities[0].map(item => item.title)
       amenities2 = result[0].amenities[1].map(item => item.title)
       describes = result[0].describe.map(item => item.title)
       instantBooks = result[0].instantBook;
 
 
     const HotelDataValid = joi.object({
             hotelType : joi.string().valid(...hotelTitles).required().messages({
                 "string.empty" : "ghghghjgj",
                 "any.required" : "this is required"
             }),
             roomType : joi.string().valid(...roomTypes).required(),
             location : joi.object().required(),
             floorPlan : joi.object().required(),
             bathrooms : joi.object().required(),
             occupancy : joi.array().items(joi.string().valid(...occupancys)).required(),
             amenitiess : joi.object().required(),
             title : joi.string().required(),
             description : joi.string().required(),
             describe : joi.array().items(joi.string().valid(...describes)).required(),
             instantBook : joi.string().valid(...instantBooks).required(),
             welcomeReservation : joi.string().valid("yes","no").required(),
             price : joi.number().required().min(0)
     
        
     })
     // let rul = HotelDataValid.validate();
     const { error, value } = HotelDataValid.validate(listingDataArr, { abortEarly: false });
     
     const errorFields = [];
     const successFields = [];
 
     if (error) {
         const errorFieldNames = error.details.map(err => err.path[0]);
         const uniqueErrorFields = [...new Set(errorFieldNames)];
         
         HotelDataValid._ids._byKey.forEach((field, key) => {
             if (uniqueErrorFields.includes(key)) {
                 errorFields.push(key);
             } else {
                 successFields.push(key);
             }
         });
     } else {
         // All fields are valid
         HotelDataValid._ids._byKey.forEach((field, key) => {
             successFields.push(key);
         });
     }
     if(!error){
        const dataSave1 =await  new Listing(listingDataArr);
        dataSave1.save()
 
     }else{
         console.log("---Error---", error)
     }
     return res.json({
         successFields,
         errorFields
     });
    
 }));


module.exports = router;
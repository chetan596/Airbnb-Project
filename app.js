const express = require("express");
const app = express();
const listing = require("./models/listing")
const hotelData= require("./models/hotelcreateData.js")
const path = require("path");
const ExpressError = require("./util/exressError.js")
const WarpAsync = require("./util/warpAsync.js");
const warpAsync = require("./util/warpAsync.js");
const { log } = require("console");
const joi = require("joi");




// midelwever
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public/css")))
app.use(express.static(path.join(__dirname, "public/js")))
// set value
app.set("view engine", "ejs");
app.set("views" ,path.join(__dirname, "views") )



let listingDataArr = {};
// Routes
// Index route
app.get("/",warpAsync(async(req , res)=>{
    let listingData = await listing.find({})
   res.render("listing/listing.ejs",{listingData})
}))

// create route
app.get("/host/home",async (req, res)=>{
    res.render("create/create.ejs")

})

app.get("/become-a-host",(req,res)=>{
    res.render("create/becomeAHost.ejs")
})
app.get("/about-your-plays",(req,res)=>{
    res.render("create/step1.ejs")
})
app.get("/structure",(req,res)=>{
   
    res.render("create/step2.ejs")
})
app.get("/structureData",async (req,res)=>{
        let opo =await  hotelData.find({});
        res.json(opo)
})
app.post("/hotel-type-data",(req,res)=>{
    let{hotelType}= req.body;
    listingDataArr.hotelType = hotelType;
}) 
app.post("/room-type",(req,res)=>{
    let{roomType} = req.body
    listingDataArr.roomType = roomType;
})
app.get("/privacy-type",async (req,res)=>{
    let uiuiu = await hotelData.find({});
    let rrr = uiuiu[0].roomType;
    res.render("create/step3.ejs", {rrr})
})
app.get("/location",(req,res)=>{
    res.render("create/step4.ejs")
})


app.post("/location",(req,res)=>{
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
    res.redirect("/floor-plan");
    

    
})
app.get("/floor-plan",(req,res)=>{
    res.render("create/step5.ejs")
})
app.post("/floor-planrt",(req,res)=>{
    let{ Guests,Bedrooms,Bed,Does} = req.body;
    listingDataArr.floorPlan = {};
    listingDataArr.floorPlan.Guests = Guests;
    listingDataArr.floorPlan.Bedrooms = Bedrooms;
    listingDataArr.floorPlan.Bed = Bed;
    listingDataArr.floorPlan.Does = Does;

    res.redirect("/bathrooms")
})
app.get("/bathrooms",(req,res)=>{
    res.render("create/step6.ejs")
})
app.post("/bathrooms",(req,res)=>{
    let {PrivateAndAttached,Dedicated,Shared} = req.body;
    listingDataArr.bathrooms = {};
    listingDataArr.bathrooms.PrivateAndAttached = PrivateAndAttached;
    listingDataArr.bathrooms.Dedicated = Dedicated;
    listingDataArr.bathrooms.Shared = Shared;

    


    res.redirect("/occupancy")
})
app.get("/occupancy",(req ,res)=>{
    res.render("create/step7.ejs")
})
app.get("/occupancyData",async(req ,res)=>{
    let uiuiu = await hotelData.find({})
    res.json( uiuiu[0].occupancy)
})
app.post("/occupancy",(req ,res)=>{
    let{occupancy} = req.body;
    listingDataArr.occupancy = occupancy;

    // res.redirect("/fgrt")
})
app.get("/stand-out",(req,res)=>{
    res.render("create/step8.ejs")
})
app.get("/amenities",(req,res)=>{
    res.render("create/step9.ejs")
})
app.get("/amenitiesData",async(req,res)=>{
    let uiuiu = await hotelData.find({})
    res.json( uiuiu[0].amenities)
  })
app.post("/occupancy2",(req ,res)=>{
    let {amenities,standoutAmenities} = req.body;
    listingDataArr.amenitiess = {};
    listingDataArr.amenitiess.amenities = amenities;
    listingDataArr.amenitiess.standoutAmenities = standoutAmenities;

    // res.redirect("/fgrt")
})


app.get("/title",(req,res)=>{
    res.render("create/step10.ejs")
})
app.post("/title",(req,res)=>{
    let{title}= req.body;
    listingDataArr.title = title;

    res.redirect("/description")
})
app.get("/description",(req,res)=>{
    res.render("create/step11.ejs")
})
app.post("/description",(req,res)=>{
    let{description}= req.body;
    listingDataArr.description = description;

    res.redirect("/describe")
})
app.get("/describe",async(req,res)=>{
    let uiuiu = await hotelData.find({})
    let oda =  uiuiu[0].describe;
    res.render("create/step12.ejs",{oda})
})
app.post("/describe",(req,res)=>{
    let{describe}= req.body;
    listingDataArr.describe = describe;

    res.redirect("/finish-setup")
})
app.get("/finish-setup",(req,res)=>{
    res.render("create/step13.ejs")
})
app.get("/instant-book",(req,res)=>{
    
    res.render("create/step14.ejs")
})
app.get("/visibility",(req,res)=>{
    res.render("create/step15.ejs")
})

app.post("/instant-book",(req,res)=>{
    let{instantBook}= req.body;
    listingDataArr.instantBook = instantBook;

    
})
app.post("/visibility",(req,res)=>{
    let{welcomeReservation}= req.body;
    listingDataArr.welcomeReservation = welcomeReservation;

    res.redirect("/price")
})
app.get("/price",(req,res)=>{
    
    res.render("create/step16.ejs")
})
app.post("/price",(req,res)=>{
    let{price}= req.body;
    
    listingDataArr.price = Number(price.replace(/[^0-9]/g,''));

    res.redirect("/listing-review")
})
app.get("/test",async(req,res)=>{
  let uiuiu = await hotelData.find({})
  let oda = uiuiu[0].describe;
  res.json( )
})
let hotelTitles ;
let roomTypes ; 
let occupancys ;
let describes ;
let instantBooks ;
app.get("/listing-review", async(req,res)=>{
//    let result =await  hotelData.find({})
//      hotelTitles = result[0].hotelType.map(item => item.title);
//       roomTypes = result[0].roomType;
//       occupancys= result[0].occupancy.map(item => item.title)
//       occupancys= result[0].occupancy.map(item => item.title)
//       amenities1 = result[0].amenities[0].map(item => item.title)
//       amenities2 = result[0].amenities[1].map(item => item.title)
//       describes = result[0].describe.map(item => item.title)
//       instantBooks = result[0].instantBook;


//     const HotelDataValid = joi.object({
//             hotelType : joi.string().valid(...hotelTitles).required(),
//             roomType : joi.string().valid(...roomTypes).required(),
//             location : joi.object().required(),
//             floorPlan : joi.object().required(),
//             bathrooms : joi.object().required(),
//             occupancy : joi.array().items(joi.string().valid(...occupancys)).required(),
//             amenitiess : joi.object().required(),
//             title : joi.string().required(),
//             description : joi.string().required(),
//             describe : joi.array().items(joi.string().valid(...occupancys)).required(),
//             instantBook : joi.string().valid(...instantBooks).required(),
//             welcomeReservation : joi.string().valid("yes","no").required(),
//             price : joi.number().required().min(0)
    
       
//     })
//     let rul = HotelDataValid.validate(listingDataArr);
//     console.log(rul)
//         if(rul.error){
//             console.log("err")
           
//         }else{
           
//             console.log("not error")
//         }
        res.render("create/step17.ejs")
});
// Show route

app.get("/:id",WarpAsync(async  (req,res,next )=>{

    let { id } = req.params;
    let hotelView = await listing.findById(id);
  //   console.log(id , hotelView)
    res.render("show/show.ejs" ,{hotelView})

}))



app.use((req, res, next) => {
    next(new ExpressError("Page not found", 404));
});

// Error-handling middleware
app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong" } = err;
    res.status(status).send(message);
});
app.listen(3000,()=>{
    console.log("The server hav been started.");
    
})
const joi = require("joi");
const hotelData= require("./models/hotelcreateData.js")
dkfj()
let hotelTitles ;
let roomTypes ; 
let occupancys ;
let amenities1 ;
let amenities2 ;
let describes ;
let instantBooks ;
let HotelDataValid ;
function dkfj(){
        hotelData.find({})
    .then((result) => {
         hotelTitles = result[0].hotelType.map(item => item.title);
          roomTypes = result[0].roomType;
          occupancys= result[0].occupancy.map(item => item.title)
          occupancys= result[0].occupancy.map(item => item.title)
          describes = result[0].describe.map(item => item.title)
          instantBooks = result[0].instantBook;
    
    }).then(()=>{
         HotelDataValid = joi.object({
            hotelType : joi.string().valid(...hotelTitles).required(),
            roomType : joi.string().valid(...roomTypes).required(),
            location : joi.object().required(),
            floorPlan : joi.object().required(),
            bathrooms : joi.object().required(),
            occupancy : joi.array().items(joi.string().valid(...occupancys)).required(),
            amenitiess : joi.object({}).required(),
            title : joi.string().required(),
            description : joi.string().required(),
            describe : joi.array().items(joi.string().valid(...occupancys)).required(),
            instantBook : joi.string().valid(...instantBooks).required(),
            welcomeReservation : joi.string().valid("yes","no").required(),
            price : joi.number().required().min(0)
    
       
    })




    })
    .catch((err) => {
        console.log("Error: ", err);
    });
}

 
module.exports = HotelDataValid;
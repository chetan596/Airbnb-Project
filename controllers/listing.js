const Listing = require("../models/listing");
const LocationData = require("../models/locationData.js")
const axios = require("axios")

module.exports.index = async(req , res)=>{
  const justLoggedIn = req.session.justLoggedIn || false;
  delete req.session.justLoggedIn; // Clear the session variable after use
  let listingData = await Listing.find({})
   res.render("./listing/listing.ejs",{listingData , justLoggedIn});
}

module.exports.listingShow = async (req, res, next) => {

    let { id } = req.params;
    let hotelView = await Listing.findById(id);
    //   console.log(id , hotelView)
    res.render("show/show.ejs")

}

module.exports.listingData =  async (req, res) => {
    let { id } = req.params;
   const hotelView = await Listing.findById(id)

    .populate({ path : 'reviews', populate : {
        path : "author"
    }})
    .populate("owner") 

    
    res.json(hotelView)
}


module.exports.isUser = (req, res) => {
  if (req.user) {
    res.json({
      user: true,
      username: req.user.username, // ✅ only username sent
      avatar: req.user.avatar // ✅ only avatar object sent
    });
  } else {
    res.json({ user: false });
  }
};

async function eerd(){
  try{
    await LocationData.collection.createIndex({city: 1 });
  await LocationData.collection.createIndex({state: 1 });
  await LocationData.collection.createIndex({country: 1 });
  console.log("Error nhi bkl index dangaya" )
  }catch(err){
    console.log("Error hai bkl index nhi dana" , err)
  }
}
// eerd()

module.exports.locationAutocomplete = async (req,res) => {
  const query = req.query.q;
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  let countryData ;
  if (ip != "::1"){
      try{
    const response = await axios.get(`http://api.ipinfo.io/lite/${ip}?token=4033e04d05036e`);
    const country = response.data.country;
    countryData = country;
    }catch(err){
    console.log(err , "ip me error hai ")
    }
  }else{
    countryData = "India"
  }



  if(!query || query.length < 1){
    // console.log(query.length)
    return res.json([]);
  }

 
try {
  const query = req.query.q || "";
  const countryData = req.query.country || "India";
  const regex = new RegExp("^" + query, "i"); // starting match only

  let finalResults = [];

  // Step 1: Find city matches from preferred country
  const cityMatchesInPreferredCountry = await LocationData.find({
    country: countryData,
    city: { $regex: regex },
  })
    .limit(5)
    .select("city state country -_id");

  finalResults = [...cityMatchesInPreferredCountry];

  const countNeeded = 5 - finalResults.length;

  // Step 2: If less than 5, check other cities from other countries
  if (countNeeded > 0) {
    const otherCityMatches = await LocationData.find({
      country: { $ne: countryData },
      city: { $regex: regex },
    })
      .limit(countNeeded)
      .select("city state country -_id");

    finalResults = [...finalResults, ...otherCityMatches];
  }

  const stillCountNeeded = 5 - finalResults.length;

  // Step 3: If still less than 5, try matching state (from preferred country)
  if (stillCountNeeded > 0) {
    const stateMatches = await LocationData.find({
      country: countryData,
      state: { $regex: regex },
    })
      .limit(stillCountNeeded)
      .select("city state country -_id");

    finalResults = [...finalResults, ...stateMatches];
  }

  res.json(finalResults);

} catch (err) {
  console.error("Server error:", err);
  res.status(500).json({ error: "Server Error" });
}


}
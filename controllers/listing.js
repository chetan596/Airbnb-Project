const Listing = require("../models/listing");

module.exports.index = async(req , res)=>{
    let listingData = await Listing.find({})
   res.render("./listing/listing.ejs",{listingData})
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


module.exports.isUser = (req,res)=>{
    if(req.user){
        res.json({user : true})
    }else{
         res.json({user : false})
    }
}
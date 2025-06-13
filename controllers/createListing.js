const hotelData= require("../models/hotelcreateData.js")


module.exports.hostHome = (req, res)=>{
    let userId ;
    if(req.user){
         
         res.render("create/create.ejs",{userId :  req.user._id})
    }else{
      res.render("create/create.ejs",{userId : "55481584151"})
    }
   

}



module.exports.becomeAHost = (req,res)=>{
   let {id} = req.params;
    
    res.render("create/becomeAHost.ejs",{id})
}


module.exports.aboutYourPlays = (req,res)=>{
    let {id} = req.params;
    console.log(id)
    res.render("create/step1.ejs",{id} )
}

module.exports.structure = (req,res)=>{
    let {id} = req.params;
    console.log(id)
    res.render("create/step2.ejs",{id})
}

module.exports.privacyType = async (req,res)=>{
    let uiuiu = await hotelData.find({});
    let rrr = uiuiu[0].roomType;
     let {id} = req.params;
    console.log(id)
    res.render("create/step3.ejs", {rrr,id})
}


module.exports.location = (req,res)=>{
     let {id} = req.params;
    console.log(id)
    res.render("create/step4.ejs",{id})
}

module.exports.floorPlan = (req,res)=>{
      let {id} = req.params;
    console.log(id)
    res.render("create/step5.ejs",{id})
}

module.exports.bathrooms = (req,res)=>{
    let {id} = req.params;
    console.log(id)
    res.render("create/step6.ejs",{id})
}

module.exports.occupancy = (req ,res)=>{
    let {id} = req.params;
    console.log(id)
    res.render("create/step7.ejs",{id})
}

module.exports.standOut = (req,res)=>{
    let {id} = req.params;
    console.log(id)
    res.render("create/step8.ejs",{id})
}

module.exports.amenities = (req,res)=>{
     let {id} = req.params;
    console.log(id)
    res.render("create/step9.ejs",{id})
}

module.exports.photo = (req,res)=>{
 let {id} = req.params;
    console.log(id)
    res.render("create/imageUplode",{id})
}
module.exports.setphoto = (req,res)=>{
       
  res.render("create/setphoto")
}
module.exports.setphoto22 = (req,res)=>{
    let {id} = req.params;
    console.log(id)
   res.render("create/setphoto",{id})
}

module.exports.title = (req,res)=>{
     let {id} = req.params;
    console.log(id)
    res.render("create/step10.ejs",{id})
}

module.exports.description = (req,res)=>{
     let {id} = req.params;
    console.log(id)
    res.render("create/step11.ejs",{id})
}

module.exports.describe = async(req,res)=>{
     let {id} = req.params;
    console.log(id)
    let uiuiu = await hotelData.find({})
    let oda =  uiuiu[0].describe;
    res.render("create/step12.ejs",{oda,id})
}

module.exports.finishSetup = (req,res)=>{
     let {id} = req.params;
    console.log(id)
    res.render("create/step13.ejs",{id})
}

module.exports.instantBook = (req,res)=>{
     let {id} = req.params;
    console.log(id)
    res.render("create/step14.ejs",{id})
}

module.exports.visibility = (req,res)=>{
     let {id} = req.params;
    console.log(id)
    res.render("create/step15.ejs",{id})
}

module.exports.price = (req,res)=>{
     let {id} = req.params;
    console.log(id)
    res.render("create/step16.ejs",{id})
}
const express = require("express");
const app = express();
const listing = require("./models/listing")
const path = require("path")


// midelwever
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public/css")))
app.use(express.static(path.join(__dirname, "public/js")))
// set value
app.set("view engine", "ejs");
app.set("views" ,path.join(__dirname, "views") )




// Routes
// Index route
app.get("/",async(req , res)=>{
    let listingData = await listing.find({})
   res.render("listing/listing.ejs",{listingData})
})

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

app.post("/hotel-type-data",(req,res)=>{
    res.send(req.body);
    console.log(req.body)
})
app.post("/room-type",(req,res)=>{
    // res.send(req.body);
    console.log(req.body)
})
app.get("/privacy-type",(req,res)=>{
    res.render("create/step3.ejs")
})
app.get("/location",(req,res)=>{
    res.render("create/step4.ejs")
})


app.post("/location",(req,res)=>{
    res.redirect("/floor-plan")
    console.log(req.body);
    
})
app.get("/floor-plan",(req,res)=>{
    res.render("create/step5.ejs")
})
app.post("/floor-planrt",(req,res)=>{
    console.log(req.body)
    res.redirect("/bathrooms")
})
app.get("/bathrooms",(req,res)=>{
    res.render("create/step6.ejs")
})
app.post("/bathrooms",(req,res)=>{
    console.log(req.body)
    res.redirect("/occupancy")
})
app.get("/occupancy",(req ,res)=>{
    res.render("create/step7.ejs")
})
app.post("/occupancy",(req ,res)=>{
    console.log(req.body, "1")
    res.redirect("/fgrt")
})
app.post("/occupancy2",(req ,res)=>{
    console.log(req.body, "2")
    res.redirect("/fgrt")
})
app.get("/stand-out",(req,res)=>{
    res.render("create/step8.ejs")
})
app.get("/amenities",(req,res)=>{
    res.render("create/step9.ejs")
})
app.get("/title",(req,res)=>{
    res.render("create/step10.ejs")
})
app.post("/title",(req,res)=>{
    console.log(req.body)
    res.redirect("/description")
})
app.get("/description",(req,res)=>{
    res.render("create/step11.ejs")
})
app.post("/description",(req,res)=>{
    console.log(req.body)
    res.redirect("/describe")
})
app.get("/describe",(req,res)=>{
    res.render("create/step12.ejs")
})
app.post("/describe",(req,res)=>{
    console.log(req.body)
    res.redirect("/finish-setup")
})
app.get("/finish-setup",(req,res)=>{
    res.render("create/step13.ejs")
})
app.get("/instant-book",(req,res)=>{
    res.render("create/step14.ejs")
})
app.post("/instant-book",(req,res)=>{
    console.log(req.body);
    
})
app.get("/fgrt",(req,res)=>{
    res.send("working----")
})
// Show route

// app.get("/:id",async (req,res )=>{
//     let { id } = req.params;
//   let hotelView = await listing.findById(id);
// //   console.log(id , hotelView)
//   res.render("show/show.ejs" ,{hotelView})
// })

app.listen(3000,()=>{
    console.log("The server hav been started.");
    
})
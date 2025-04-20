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
// Show route

app.get("/:id",async (req,res )=>{
    let { id } = req.params;
  let hotelView = await listing.findById(id);
  res.render("show/show.ejs" ,{hotelView})
})

app.listen(3000,()=>{
    console.log("The server hav been started.");
    
})
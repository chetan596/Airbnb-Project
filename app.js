const express = require("express");
const app = express();
const listing = require("./models/listing")
const path = require("path")


// midelwever
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public/css")))
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
app.get("/listing/new",async (req, res)=>{
    res.render("create/create.ejs")

})

app.post("/listing/new",async (req ,res)=>{
    let newListing = new listing(req.body.g) 
    await newListing.save()
    console.log(req.body.g)
    res.send("working...")
})

// Show route
app.get("/:id",async (req,res)=>{
    let {id } = req.params;
    let hotelView = await listing.findById(id)
   res.render("show/show.ejs" , {hotelView})
})


app.listen(3000,()=>{
    console.log("The server hav been started.");
    
})
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


// Show route
app.get("/:id",async(req,res)=>{
    let { id } = req.params;
    let show = await listing.findById(id)
    res.render("listing/show.ejs", {show})
})



app.listen(3000,()=>{
    console.log("The server hav been started.");
    
})
const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
router.get("/singup",(req,res)=>{
    res.render("singup/singup.ejs")
})


router.post("/loginIn",async(req,res)=>{
    let {email} = req.body;
    console.log(email)  
    let userEx = await User.findOne({email})
    if(userEx){
        res.send("Enter password")
    }else{
        res.send("logine")
    }
    // res.send("fjdjfjkaj")
})
router.post("/singup",async(req,res)=>{
    // let {username, password , email} = req.body;
    let newUser = new User({
        username : "chetan",
        email : "chetanPawar@gmail.com"
    })

    let Usersave = await User.register(newUser , "password");
    console.log("user was create ", Usersave);
    res.redirect("/")

})

module.exports = router;
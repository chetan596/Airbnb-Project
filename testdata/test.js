const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")
const session = require("express-session");
const flash = require("connect-flash")
const path = require("path");



app.set("view engine", "ejs");
app.set("views" ,path.join(__dirname, "views") )


app.use(flash())

app.get("/",(req, res)=>{
    res.send("Done!")
})


app.get("/register",(req,res)=>{
    let {name = "bhai kon hai tu" } = req.query;
    req.session.name = name;
    req.flash("error" , "gaand lag gai bhai")
    res.redirect("/hello")
})

app.get("/hello",(req,res)=>{
    res.render("new.ejs", {name : req.session.name , msg : req.flash("error")})
})



app.listen(8080,()=>{
    console.log("connet to server")
})
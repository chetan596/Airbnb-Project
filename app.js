if(process.env.NODE_ENV != 'production'){
require('dotenv').config()
}
// console.log(process.env.CHETAN)
const express = require("express");
const app = express();
const Listing = require("./models/listing")
const Review = require("./models/Review")
const flash = require("connect-flash")
const ExpressError = require("./util/exressError.js")
const warpAsync = require("./util/warpAsync.js");
const listingRouter = require("./routes/listing.js");
const createListingRouter = require("./routes/createListing.js");
const createListingDataRouter = require("./routes/createlListingData.js");
const userRouter = require("./routes/user.js");
const loginRouter = require("./routes/login.js");
const reviewRouter = require("./routes/review.js");
const path = require("path");
const session = require("express-session"); 
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");





// midelwever
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public/css")))
app.use(express.static(path.join(__dirname, "public/js")))
app.use(session({
    secret: "sexwhitshikha",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
}))
app.use(passport.initialize());
app.use(passport.session());

// Use email instead of username
passport.use(new LocalStrategy({ usernameField: "email" }, User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// set value
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))





app.use("/", listingRouter);
app.use("/", userRouter)
app.use("/", reviewRouter)
app.use("/listing", createListingRouter)
app.use("/listingData", createListingDataRouter)
app.use("/login", loginRouter)






// Show route




app.get("/:id", warpAsync(async (req, res, next) => {

    let { id } = req.params;
    let hotelView = await Listing.findById(id);
    //   console.log(id , hotelView)
    res.render("show/show.ejs")

}))



app.use((req, res, next) => {
    next(new ExpressError("Page not found", 404));
});

// Error-handling middleware
app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong" } = err;
    res.status(status).send(message);
});
app.listen(3000, () => {
    console.log("The server hav been started.");

})
const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

// Generate OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Temporary store
let UserOtp = {};
let VerifiedEmails = {};

// GET signup page
router.get("/singup", (req, res) => {
    res.render("singup/singup.ejs");
});

// Check if user exists (before signup)
router.post("/loginIn", async (req, res) => {
    let { email } = req.body;
    email = email.toLowerCase();

    let userEx = await User.findOne({ email });
    if (userEx) {
       res.render("singup/password.ejs", { email });
    } else {
        res.render("singup/createUser.ejs", { email });
    }
});

// Move to user creation screen
router.post("/errer", (req, res) => {
    let { email } = req.body;
    email = email.toLowerCase();
   
});

// Send OTP to email
router.post("/email", (req, res) => {
    let { email, userName, userLast } = req.body;
    email = email.toLowerCase();

    const otp = generateOTP();
    console.log(otp)
    UserOtp[email] = otp;
    VerifiedEmails[email] = false; // Mark as unverified

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'chetan.workpor@gmail.com',
            pass: 'udus prfp hkhp fuiu'
        }
    });

    const mailOptions = {
        from: 'chetan.workpor@gmail.com',
        to: email,
        subject: 'Welcome to Airbnb - Your OTP for Account Verification',
        text: `Dear ${userName} ${userLast},

We’re excited to welcome you to Airbnb!

To get started, please verify your account using the One-Time Password (OTP) below:

Your OTP: ${otp}

Please enter this OTP on the verification screen to continue setting up your account.

If you did not initiate this signup, you can safely ignore this email.

Warm regards,  
Team Airbnb`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
            return res.send("Failed to send email.");
        }
        console.log('OTP sent to:', email);
        res.render("singup/otp.ejs", { email });
    });
});

// Verify OTP
router.post("/otp-verify", (req, res) => {
    let { otp, email } = req.body;
    email = email.toLowerCase();
    console.log(req.body)
    console.log(email , otp , "Set--")
    // res.json("---verify otp---")

    if (UserOtp[email] && UserOtp[email] === otp) {
        delete UserOtp[email];
        VerifiedEmails[email] = true; // Mark as verified
         res.json({success : true});
    } else {
         res.json({success : false});
    }
});

// Final Signup (only if email verified)
router.post("/singup", async (req, res) => {
    console.log(req.body)
    let {username,userLastName,birthDate,email,password} = req.body;
    email = email.toLowerCase();

    if (!VerifiedEmails[email]) {
        return res.send("Email not verified. Please enter OTP first.");
    }
   
    try {
        let newUser = new User({ username,userLastName, birthDate,email });
        let savedUser = await User.register(newUser, password);
        delete VerifiedEmails[email]; // Clean-up
        console.log("User registered:", savedUser);
        res.redirect("/");
    } catch (err) {
        console.log("Signup error:", err);
        res.send("Signup failed.");
    }
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).json({ success: false, message: "Auth error" });
    if (!user) return res.status(400).json({ success: false, message: "Invalid credentials" });

    req.login(user, (err) => {
      if (err) return res.status(500).json({ success: false, message: "Login failed" });

      // Instead of res.redirect here:
      return res.json({ success: true, redirectTo: "/" });
    });
  })(req, res, next);
});



module.exports = router;
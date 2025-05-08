const express = require("express");
const { route } = require("./listing");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("hey;;")
})

module.exports = router;
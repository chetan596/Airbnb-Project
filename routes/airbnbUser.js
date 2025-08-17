const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const { isLoggedIn } = require("../loginMiddle.js");

router.post("/wishList", (req, res) => {
    if(!req.user){
        return res.status(401).json({ isLoggedIn: false});
    }else{
       return res.status(200).json({ isLoggedIn: true });
    }
  
});

router.post("/wishlist/recentHotels",isLoggedIn,async(req,res)=>{
    try{
    const userId = req.user._id;
      const { recentHotels } = req.body; // Array of { id, date }

    if(!req.body.recentHotels || !Array.isArray(req.body.recentHotels)){
        return res.status(400).json({ message: "Invalid data format" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const existingRecent = user.wishlist.recentViewed || [];
        // Map old entries (ObjectId to index)
    const map = new Map();
    existingRecent.forEach((entry) => {
      map.set(entry.hotelId.toString(), entry); // toString() ensures ObjectId matches string
    });

    // Loop new items, remove duplicate and insert fresh
    for (const hotel of recentHotels) {
      const id = hotel.id;
      const date = hotel.date;

      // Remove if already exists
      map.delete(id);

      // Add fresh at end
      map.set(id, {
        hotelId: id,
        viewdAt: date
      });
    }

    // Convert back to array
    user.wishlist.recentViewed = Array.from(map.values());

    await user.save();

    return res.status(200).json({ message: "Recent hotels synced successfully" });
  } catch (err) {
    console.error("Sync recent hotels failed:", err);
    return res.status(500).json({ error: "Internal Server Error"});
}


 
})
router.get("/wishlist", isLoggedIn,async(req, res) => {
    const userId = req.user._id;
    const user = await User.findById(userId);

  const wishList = user.wishlist;
// for (const [key, value] of Object.entries(wishList)) {
//   console.log(key, value);
// }

    res.render("user/wishList",{wishList})
})



module.exports = router;
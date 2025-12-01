const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const { isLoggedIn } = require("../loginMiddle.js");
const Listing = require("../models/listing")


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

    const existingRecent = user.wishlist.Recently_viewed || [];
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
    user.wishlist.Recently_viewed = Array.from(map.values());

    await user.save();

    return res.status(200).json({ message: "Recent hotels synced successfully" });
  } catch (err) {
    console.error("Sync recent hotels failed:", err);
    return res.status(500).json({ error: "Internal Server Error"});
}


 
})


router.get("/wishlist", isLoggedIn, async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    const rtrr = [];

    // --- Handle old wishlist format ---
    if (user.wishlist) {
      const arr = Object.entries(user.wishlist);

      for (const [key, hotels] of arr) {
        const keyObj = { key, hotelImgs: [], viewDate: [] };

        for (const entry of hotels) {
          const hotelDe = await Listing.findById(entry.hotelId);

          if (!hotelDe) {
            console.warn(`Listing not found for hotelId: ${entry.hotelId}`);
            continue;
          }

          const hotelImg = hotelDe.image?.[0] || null;
          keyObj.hotelImgs.push(hotelImg);
          keyObj.viewDate.push(entry.viewdAt || null);
        }

        rtrr.push(keyObj);
       
      }
    }

    // --- Handle new userWishlist format ---
    if (user.userWishlist) {
      const entries = Array.from(user.userWishlist.entries());

      for (const [key, hotels] of entries) {
        const keyObj = { key, hotelImgs: [], viewDate: [] };

        for (const hotel of hotels) {
          const hotelDe = await Listing.findById(hotel.hotelId);

          if (!hotelDe) {
            console.warn(`Listing not found for hotelId: ${hotel.hotelId}`);
            continue;
          }

          const hotelImg = hotelDe.image?.[0] || null;
          keyObj.hotelImgs.push(hotelImg);
          keyObj.viewDate.push(hotel.viewedAt || null);
        }

        rtrr.push(keyObj);
      }
    }

    console.log("Final_Wishlist:-----------", rtrr);
    res.render("user/wishList", { rtrr });

  } catch (err) {
    console.error("Error in /wishlist route:", err);
    res.status(500).send("Server error");
  }
});


router.post("/wishlistCreate", isLoggedIn, async (req, res) => {
  try {
    const { wishListName, id } = req.body;   // frontend sends 'id'
    const hotelId = id;                      // map it to hotelId for schema
    const userId = req.user._id;

    const user = await User.findById(userId);
    const userId22 = user.userWishlist;

        const listing = await Listing.findById(id);
    console.log("Listing found:", listing.image[0]);


    console.log("User Wishlist:", userId22);

    if (!user) {
      return res.status(404).json({ status: "error", message: "User not found" });
    }

    // Create wishlist if not already present
    if (!user.userWishlist.has(wishListName)) {
      user.userWishlist.set(wishListName, []);
    }

    const hotels = user.userWishlist.get(wishListName) || [];

    // Check if hotel already exists in wishlist
    const already = hotels.some(
      (h) => h.hotelId.toString() === hotelId
    );

    if (already) {
      return res.status(400).json({ status: false, wishListName,
      hotelId: id, allreadyExty : true, message: "Hotel already exists in wishlist" });
    }

    // Add new hotel
    hotels.push({ hotelId });
    user.userWishlist.set(wishListName, hotels);

    await user.save();

    return res.json({ 
      status: true, 
      message: "Hotel added to wishlist", 
      wishListName, 
      hotelId,
      hotelImg: listing.image[0].path
    });

  } catch (err) {
    console.error("Wishlist error:", err);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});


router.post("/wishlistAdd", isLoggedIn, async (req, res) => {
  try {
    const { id, wishListName } = req.body;
    const userId = req.user._id;

    const user = await User.findById(userId);
    const listing = await Listing.findById(id);
    console.log("Listing found:", listing.image[0]);



    if (!user) {
      return res.status(404).json({ status: "error", message: "User not found" });
    }

    // Check if wishlist exists
    if (!user.userWishlist.has(wishListName)) {
      return res.status(404).json({ status: "error", message: "Wishlist not found" });
    }

    const hotels = user.userWishlist.get(wishListName) || [];
    const already = hotels.some((h) => h.hotelId.toString() === id);
    if (already) {
      return res.status(400).json({ status: false, wishListName,
      hotelId: id, allreadyExty : true, message: "Hotel already exists in wishlist" });
    }

    // Add new hotel
    hotels.push({ hotelId: id });
    user.userWishlist.set(wishListName, hotels);
 

    await user.save();

    return res.json({
      status: true,
      message: "Hotel added to wishlist",
      wishListName,
      hotelId: id,
       allreadyExty : false,
      hotelImg: listing.image[0].path
// Send back the image URL
    });

  } catch (err) {
    console.error("Wishlist error:", err);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
});


router.delete("/wishlist", isLoggedIn, async (req, res) => {
  try {
    const userId = req.user._id;
    const { wishListName, hotelId } = req.body;

    const user = await User.findById(userId);
    const listing = await Listing.findById(hotelId);  
    if (!user) {
      return res.status(404).json({ status: "error", message: "User not found" });
    }

    if (!user.userWishlist.has(wishListName)) {
      return res.status(404).json({ status: "error", message: "Wishlist not found" });
    }

    // get hotels array for that wishlist
    let hotels = user.userWishlist.get(wishListName) || [];

    // filter out the hotelId to remove
    hotels = hotels.filter(h => h.hotelId.toString() !== hotelId);

    // set updated array back
    user.userWishlist.set(wishListName, hotels);

    await user.save();

    return res.json({ status: "ok", message: "Hotel removed", wishListName, hotelId , hotelImg: listing.image[0].path });
  } catch (err) {
    console.error("Remove from wishlist error:", err);
    return res.status(500).json({ status: "error", message: "Internal Server Error"});
  }
});


router.delete("/wishlistDelete", isLoggedIn, async (req, res) => {
  try {
    const userId = req.user._id;
    const { wishListName } = req.body;  
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    if (!user.userWishlist.has(wishListName)) {
      return res.status(404).json({ success: false, message: "Wishlist not found" });
    }
    user.userWishlist.delete(wishListName);
    await user.save();

    return res.json({ success: true, message: "Wishlist deleted", wishListName });
  }
  catch (err) {
    console.error("Delete wishlist error:", err);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}); 


router.get("/wishlist/:wishListName", isLoggedIn, async (req,res) => {
    const WishListName = req.params.wishListName;
    const userId = req.user._id;

    const user =  await User.findById(userId);
    
    const hotelsInWishlist = user.userWishlist.get(WishListName) || [];
    
    const wishlists_Listings = [];
    
    for (const hotelEntry of hotelsInWishlist) {
      const listing = await Listing.findById(hotelEntry.hotelId);
      if (listing) {
        wishlists_Listings.push(listing);
      }
    }

    res.render("user/specificWishList", { hotelsInWishlist, WishListName, wishlists_Listings });
})


module.exports = router;


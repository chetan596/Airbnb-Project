const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


const wishlistitemSchema = new mongoose.Schema({
  hotelId : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing",
    required : true
  },
  viewedAt: {
    type: Date,
    default: Date.now
  }
})





const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username : {
         type: String,
        required: true
    },
    userLastName: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
     createdAt :{
        type : Date,
        default : new Date()
    },
    avatar: {
    image: {
      type: String, // image URL
      default: null // means no image uploaded
    },
    initial: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },

  isVerified : {
    type : Boolean,
     default : false

  },

 wishlist : {
    Recently_viewed : [{
      hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing"
      },
      viewdAt: {
        type: Date,
        default: Date.now
      }
    }],

  },

  userWishlist : {
    type : Map,
    of : [wishlistitemSchema],
    default : {}
  }

});

// Tell passport to use "email" instead of default "username"
userSchema.plugin(passportLocalMongoose, {
    usernameField: "email"
});

module.exports = mongoose.model("User", userSchema);
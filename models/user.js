const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

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
    }
});

// Tell passport to use "email" instead of default "username"
userSchema.plugin(passportLocalMongoose, {
    usernameField: "email"
});

module.exports = mongoose.model("User", userSchema);

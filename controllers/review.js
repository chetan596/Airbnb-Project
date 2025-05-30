const Listing = require("../models/listing");
const Review = require("../models/Review");

module.exports.renderReview = (req, res) => {
    res.render("show/review.ejs")
}
module.exports.renderReviewData = async (req, res) => {
    let listingNew = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listingNew.reviews.push(newReview)
    await listingNew.save();
    await newReview.save();
    res.redirect("/")
}
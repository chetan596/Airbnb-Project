const express = require("express");
const router = express.Router();

const { isLoggedIn } = require("../loginMiddle.js");
const reviewcontroller = require("../controllers/review.js")
router.get('/:id/review',isLoggedIn, reviewcontroller.renderReview );
router.post('/:id/review',isLoggedIn , reviewcontroller.renderReviewData);

module.exports = router;
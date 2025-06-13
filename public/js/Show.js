// Get listing ID from URL
const urlParams = window.location.pathname.split('/');
const listingId = urlParams[urlParams.length - 1];

// DOM Elements
const nav = document.querySelector("nav");
nav.style.position = "relative"
const hedingBox = document.querySelector(".herae");
const heding = document.querySelector("#h2");
const image1Box = document.querySelector(".mainImage");
const image1Box2 = document.querySelector(".mainImage11");
const image1Box3 = document.querySelector(".mainImage22");
const image1Box4 = document.querySelector(".mainImage33");
const image1Box5 = document.querySelector(".mainImage44");
const image1 = document.querySelector(".mainImage img");
const para1 = document.querySelector(".ehrh");
const para2 = document.querySelector(".uieri");
const ratingBox = document.querySelector(".reting-box");
const ratingBoxIcon = document.querySelector(".reting-box i");
const ratingBoxPara = document.querySelector(".reting-box p");
const ratingBoxText = document.querySelector(".reting-box a");
const hosrName = document.querySelector(".hostNmare");
const Descrption = document.querySelector(".aboutthelace p");
const reviewsListBox = document.querySelector('.reviewsListBox');
const totalReview = document.querySelector(".Totalrev");
const totalReviewBox = document.querySelector(".moreShowIn");

// Function to calculate average rating from reviews
function calculateAverageRating(reviews) {
    if (!reviews || !Array.isArray(reviews) || reviews.length === 0) {
        console.log('No reviews available for rating calculation');
        return 0;
    }
    
    let totalRating = 0;
    let validReviews = 0;
    
    // Rating distribution counters
    let ratingCounts = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    };
    
    // Category rating accumulators
    let categoryRatings = {
        cleanliness: { total: 0, count: 0 },
        checkIn: { total: 0, count: 0 },
        accuracy: { total: 0, count: 0 },
        communication: { total: 0, count: 0 },
        location: { total: 0, count: 0 },
        value: { total: 0, count: 0 }
    };
    
    reviews.forEach((review, index) => {
        if (review && review.rating && !isNaN(review.rating)) {
            const rating = parseFloat(review.rating);
            totalRating += rating;
            validReviews++;
            
            // Count each rating (round to nearest integer for distribution)
            const roundedRating = Math.round(rating);
            if (roundedRating >= 1 && roundedRating <= 5) {
                ratingCounts[roundedRating]++;
            }
            
            console.log(`Review ${index + 1}: Rating = ${review.rating}`);
        } else {
            console.log(`Review ${index + 1}: Invalid or missing rating`);
        }
        
        // Calculate category ratings if available
        if (review && typeof review === 'object') {
            Object.keys(categoryRatings).forEach(category => {
                if (review[category] && !isNaN(review[category])) {
                    const categoryRating = parseFloat(review[category]);
                    categoryRatings[category].total += categoryRating;
                    categoryRatings[category].count++;
                }
            });
        }
    });
    
    if (validReviews === 0) {
        console.log('No valid ratings found in reviews');
        return 0;
    }
    
    const averageRating = totalRating / validReviews;
    
    // Calculate and log category averages
    console.log('\n=== CATEGORY RATINGS ANALYSIS ===');
    const categoryAverages = {};
    Object.keys(categoryRatings).forEach(category => {
        const data = categoryRatings[category];
        if (data.count > 0) {
            const average = (data.total / data.count).toFixed(2);
            categoryAverages[category] = parseFloat(average);
            
            // Update DOM elements for each category
            const elementMap = {
                cleanliness: '.reviewCleanliness',
                accuracy: '.reviewAccuracy', 
                checkIn: '.reviewCheckIn',
                communication: '.reviewCommunication',
                location: '.reviewLocation',
                value: '.reviewValue'
            };
            
            const element = document.querySelector(elementMap[category]);
            if (element) {
                element.innerText = average;
            }
            
            console.log(`${category.charAt(0).toUpperCase() + category.slice(1)}: ${average} (${data.count} reviews)`);
        } else {
            categoryAverages[category] = 0;
            console.log(`${category.charAt(0).toUpperCase() + category.slice(1)}: No data available`);
        }
    });
    
    // Calculate overall category average
    const validCategoryAverages = Object.values(categoryAverages).filter(avg => avg > 0);
    const overallCategoryAverage = validCategoryAverages.length > 0 
        ? (validCategoryAverages.reduce((sum, avg) => sum + avg, 0) / validCategoryAverages.length).toFixed(2)
        : 0;
    
    console.log(`\nOverall Category Average: ${overallCategoryAverage}`);
    console.log(`Total Category Reviews: ${Math.max(...Object.values(categoryRatings).map(cat => cat.count))}`);
    
    // Store category averages globally for potential use elsewhere
    window.categoryAverages = categoryAverages;
    
    // Calculate and log rating distribution percentages
    console.log('\n=== RATING DISTRIBUTION ANALYSIS ===');
    console.log(`Total Reviews: ${validReviews}`);
    console.log(`Average Rating: ${averageRating.toFixed(2)}`);
    console.log('\nRating Distribution:');
    
    for (let star = 5; star >= 1; star--) {
        const count = ratingCounts[star];
        const percentage = ((count / validReviews) * 100).toFixed(1);
        
    }
    document.querySelector(".overallLine5").style.width = ` ${((ratingCounts[5] / validReviews) * 100).toFixed(1)}%`
    document.querySelector(".overallLine4").style.width = ` ${((ratingCounts[4] / validReviews) * 100).toFixed(1)}%`
    document.querySelector(".overallLine3").style.width = ` ${((ratingCounts[3] / validReviews) * 100).toFixed(1)}%`
    document.querySelector(".overallLine2").style.width = ` ${((ratingCounts[2] / validReviews) * 100).toFixed(1)}%`
    document.querySelector(".overallLine1").style.width = ` ${((ratingCounts[1] / validReviews) * 100).toFixed(1)}%`
   
    // Additional insights
    const positiveReviews = ratingCounts[4] + ratingCounts[5];
    const negativeReviews = ratingCounts[1] + ratingCounts[2];
    const neutralReviews = ratingCounts[3];
    
  
    
    return averageRating;
}

// Time ago function
function getTimeAgo(dateString) {
    try {
        const now = new Date();
        const reviewDate = new Date(dateString);
        
        // Check if date is valid
        if (isNaN(reviewDate.getTime())) {
            return "Unknown date";
        }
        
        // Calculate difference in milliseconds first
        const diffInMs = now - reviewDate;
        const diffInSeconds = Math.floor(diffInMs / 1000);
        
        console.log('Time calculation:', {
            now: now.toISOString(),
            reviewDate: reviewDate.toISOString(),
            diffInMs,
            diffInSeconds
        });
        
        // Less than 30 seconds
        if (diffInSeconds < 30) {
            return "just now";
        }
        
        // Minutes
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        if (diffInMinutes < 60) {
            return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
        }
        
        // Hours
        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) {
            return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
        }
        
        // Days
        const diffInDays = Math.floor(diffInHours / 24);
        if (diffInDays < 30) {
            return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
        }
        
        // Months
        const diffInMonths = Math.floor(diffInDays / 30);
        if (diffInMonths < 12) {
            return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
        }
        
        // Years
        const diffInYears = Math.floor(diffInMonths / 12);
        if (diffInYears >= 1) {
            return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
        }
        
        // Fallback to date format
        return reviewDate.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short' 
        });
    } catch (error) {
        console.error('Error in getTimeAgo:', error);
        return "Unknown date";
    }
}

// Capitalize first letter function
function capitalizeFirstLetter(str) {
    if (!str || typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Generate star rating HTML
function generateStars(rating) {
    let starsHTML = '';
    const numRating = parseInt(rating) || 0; // Convert to number and handle invalid values
    
    for (let i = 1; i <= 5; i++) {
        if (i <= numRating) {
            starsHTML += '<i class="ri-star-fill"></i>';
        } else {
            starsHTML += '<i class="ri-star-line"></i>';
        }
    }
    return starsHTML;
}

// Render reviews function
function renderReviews(reviews) {
    if (!reviews || !Array.isArray(reviews) || reviews.length === 0) {
        console.log('No reviews to render');
        return;
    }
    
    const maxReviews = Math.min(reviews.length, 6);
    
    for (let i = 0; i < maxReviews; i++) {
        const review = reviews[i];
        
        // Safety checks
        if (!review || !review.author || !review.author.username) {
            console.log(`Skipping review ${i} - missing data`);
            continue;
        }
        
        const timeAgo = getTimeAgo(review.createAt);
        const authorName = capitalizeFirstLetter(review.author.username);
        const starsHTML = generateStars(review.rating);
        const comment = review.comment || 'No comment provided';
        
        // Handle comment length - slice if longer than 207 characters
        const maxCommentLength = 207;
        const isLongComment = comment.length > maxCommentLength;
        const displayComment = isLongComment 
            ? comment.slice(0, maxCommentLength) + "..." 
            : comment;
        
        // Determine show more button display style
        const showMoreDisplay = isLongComment ? 'block' : 'none';
        
        const reviewHTML = `
            <div class="userReviewBox">
                <div class="userPoflie">
                    <div class="userreviewImg">
                        <img src="https://photosweek.org/wp-content/uploads/girl-dp_52.jpg" alt="User Avatar">
                    </div>
                    <div class="revuwUserName">
                        <h6>${authorName}</h6>
                        <p>7 years on Airbnb</p>
                    </div>
                </div>
                <div class="userReting">
                    <div class="retingStar">
                        ${starsHTML}
                    </div>
                    <p>• ${timeAgo}</p>
                </div>
                <div class="userreviewMsg">
                    <p>${displayComment}</p>
                </div>
                <div class="seeMoreTage" style="display: ${showMoreDisplay};">
                    <a href="javascript:void(0);">Show More</a>
                </div>
            </div>
        `;
        
        reviewsListBox.insertAdjacentHTML('beforeend', reviewHTML);
    }
    
    // Add click event listeners for "Show More" buttons
    addShowMoreEventListeners();
}

// Function to add event listeners for "Show More" buttons
function addShowMoreEventListeners() {
    const showMoreButtons = document.querySelectorAll('.seeMoreTage a');
    
    showMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Show More div was clicked');
            
            // You can add additional functionality here
            // For example, expand the review text or open a modal
            const reviewBox = this.closest('.userReviewBox');
            const reviewMsg = reviewBox.querySelector('.userreviewMsg p');
            
            // Example: Alert the user (you can replace this with your desired functionality)
            alert('Show More clicked for review: ' + reviewMsg.textContent.substring(0, 50) + '...');
        });
    });
}

// Remove loading classes
function removeLoadingClasses() {
    const loadingElements = [ hedingBox, image1Box, image1Box2,image1Box3 ,image1Box4 ,image1Box5 , para1, para2, ratingBox,];
    loadingElements.forEach(element => {
        if (element) element.classList.remove("loding");
    });
}

// Handle description text
function handleDescription(description) {
    if (!description) return;
    
    const maxLength = 500;
    const showMoreBtn = document.querySelector(".showfffafa");
    
    if (description.length >= maxLength) {
        Descrption.innerText = description.slice(0, maxLength) + "...";
    } else {
        if (showMoreBtn) showMoreBtn.style.display = "none";
        Descrption.innerText = description;
    }
}

// API call with the ID in URL
fetch(`/api/listing/${listingId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Received data:', data);
const keywords = [
  "cover",
  "front view",
  "entrance",
  "reception",
  "lobby",
  "bedroom",
  "bathroom",
  "kitchen",
  "balcony",
  "dining area",
  "living room",
  "outside view",
  "parking area",
  "lift area",
  "corridor",
  "gym",
  "swimming pool",
  "conference room",
  "play area",
  "terrace",
  "staircase",
  "garden",
  "room window view",
  "workspace",
  "study table",
  "tv unit",
  "wardrobe",
  "washbasin",
  "shower area",
  "hall",
  "laundry area"
];

const defaultImage = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg";

// Result object banate hain
const result = {};

// Har keyword ke liye filter karke paths nikaalte hain
keywords.forEach(keyword => {
  result[keyword] = data.image
    .filter(img => img.originalname.toLowerCase().includes(keyword))
    .map(img => img.path);
});

// Helper: match, warna koi image, warna default
function getImageSmart(primaryPathArray, usedPaths) {
  if (primaryPathArray && primaryPathArray.length > 0) {
    // Jo match kare vo do aur track karo
    const path = primaryPathArray[0];
    usedPaths.add(path);
    return path;
  }

  // Koi bhi unused image do
  const unused = data.image.find(img => !usedPaths.has(img.path));
  if (unused) {
    usedPaths.add(unused.path);
    return unused.path;
  }

  // Agar sab use ho gaye ya image hi nahi hai
  return defaultImage;
}

// Keep track of used paths
const usedPaths = new Set();

// Apply images
if (data.image && data.image.length > 0) {
  image1.src = getImageSmart(result["cover"], usedPaths);
  document.querySelector('.mainImage11 img').src = getImageSmart(result["bedroom"], usedPaths);
  document.querySelector('.mainImage22 img').src = getImageSmart(result["bathroom"], usedPaths);
  document.querySelector('.mainImage33 img').src = getImageSmart(result["living room"], usedPaths);
  document.querySelector('.mainImage44 img').src = getImageSmart(result["hall"], usedPaths);
} else {
  // Images hi nahi hain, sab default lagao
  image1.src = defaultImage;
  document.querySelector('.mainImage11 img').src = defaultImage;
  document.querySelector('.mainImage22 img').src = defaultImage;
  document.querySelector('.mainImage33 img').src = defaultImage;
  document.querySelector('.mainImage44 img').src = defaultImage;
}




        // Safety checks for data
        if (!data) {
            throw new Error('No data received');
        }
        
        // Update basic info
        if (data.title) heding.innerText = data.title;
       
        
        // Location info with safety checks
        if (data.location) {
            para1.innerText = `${data.location.CityTown || 'Unknown City'} in ${data.location.StateUnionTerritory || 'Unknown State'}, ${data.location.country || 'Unknown Country'}`;
        }
        
        // Floor plan info with safety checks
        if (data.floorPlan) {
            para2.innerText = `${data.floorPlan.Guests || '0'} guests • ${data.floorPlan.Bedrooms || '0'} bedrooms • ${data.floorPlan.Bed || '0'} beds`;
        }
        
        // Calculate average rating from reviews
        let averageRating = 0;
        const reviewCount = data.reviews ? data.reviews.length : 0;
        
        if (data.reviews && data.reviews.length > 0) {
            averageRating = calculateAverageRating(data.reviews);
        }
        
        // Update rating info with calculated average
        if (averageRating > 0) {
            ratingBoxPara.innerText = `${averageRating.toFixed(2)} •`;
            document.querySelector(".secodAvgreciv").innerText = `${averageRating.toFixed(2)}`;
        } else {
            ratingBoxPara.innerText = "No rating •";
        }
        
        ratingBoxText.innerText = `${reviewCount} review${reviewCount !== 1 ? 's' : ''}`;
        ratingBoxIcon.classList.remove("none");
        
        // Update host name with safety check
        if (data.owner && data.owner.username) {
            hosrName.innerText = `Hosted by ${capitalizeFirstLetter(data.owner.username)}`;
        }
        
        // Handle description
        if (data.description) {
            handleDescription(data.description);
        }
        
        // Render reviews with detailed logging
        console.log('Reviews data:', data.reviews);
        if (data.reviews && data.reviews.length > 0) {
            console.log(`Rendering ${data.reviews.length} reviews`);
            renderReviews(data.reviews);
        } else {
            totalReviewBox.style.display = "none"
            document.querySelector(".fullbox33").style.display = "none"
            document.querySelector(".reting-box").innerHTML =`<p class="noReborrr"><i class="ri-star-fill " ></i>No reviews yet</p>`
            reviewsListBox.innerHTML = ` <p class="noreviewPara">
            No reviews (yet)
           </p>`
            console.log('No reviews found');
        }
        
        if (data.reviews) {
            totalReview.innerText = `. ${data.reviews.length}`;
        }
        
        // Remove loading classes
        removeLoadingClasses();
    })
    .catch(err => {
        console.error('Error fetching listing data:', err);
        
        // Remove loading classes even on error
        removeLoadingClasses();
        
        // Show error message to user
        if (heding) heding.innerText = 'Error loading listing';
    });
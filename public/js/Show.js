
class ListingPage {
    constructor() {
        this.listingId = this.getListingIdFromUrl();
        this.usedImagePaths = new Set();
        this.categoryAverages = {};
        this.initializeElements();
        this.setupEventListeners();
        this.loadListingData();
    }

    // Extract listing ID from URL
    getListingIdFromUrl() {
        const urlParams = window.location.pathname.split('/');
        return urlParams[urlParams.length - 1];
    }

    // Initialize DOM elements
    initializeElements() {
        this.elements = {
            nav: document.querySelector("nav"),
            headingBox: document.querySelector(".herae"),
            heading: document.querySelector("#h2"),
            images: {
                main: document.querySelector(".mainImage img"),
                box1: document.querySelector(".mainImage11 img"),
                box2: document.querySelector(".mainImage22 img"),
                box3: document.querySelector(".mainImage33 img"),
                box4: document.querySelector(".mainImage44 img")
            },
            para1: document.querySelector(".ehrh"),
            para2: document.querySelector(".uieri"),
            rating: {
                box: document.querySelector(".reting-box"),
                icon: document.querySelector(".reting-box i"),
                para: document.querySelector(".reting-box p"),
                text: document.querySelector(".reting-box a")
            },
            hostName: document.querySelector(".hostNmare"),
            description: document.querySelector(".aboutthelace p"),
            reviewsList: document.querySelector('.reviewsListBox'),
            totalReview: document.querySelector(".Totalrev"),
            totalReviewBox: document.querySelector(".moreShowIn"),
            amenities: {
                box1: document.querySelector(".offerBox1"),
                box2: document.querySelector(".offerBox2")
            },
            topNavChange: document.querySelector(".info-price"),
            price: document.querySelector(".mianPariceHadingee3"),
            avgRating: document.querySelector(".secodAvgreciv")
        };

        // Set nav position
        if (this.elements.nav) {
            this.elements.nav.style.position = "relative";
        }
    }

    // Setup event listeners
    setupEventListeners() {
        this.setupScrollListener();
        this.setupNavigation();
    }

    // Setup scroll listener for sticky navigation
    setupScrollListener() {
        const navPart2 = document.querySelector(".navPart2");
        if (!this.elements.topNavChange || !navPart2) return;

        window.addEventListener("scroll", () => {
            const rect = this.elements.topNavChange.getBoundingClientRect();
            navPart2.style.top = rect.top <= 0 ? "0rem" : "-6rem";
        });
    }

    // Setup smooth scroll navigation
    setupNavigation() {
        const navItems = [
            { trigger: ".navLocation", target: ".mapMainBoxs", offset: 100 },
            { trigger: ".navPhoto", target: ".hotel-image", offset: 100 },
            { trigger: ".navAmenities", target: ".mainplaceoffbox", offset: 83 },
            { trigger: ".navReviews", target: ".reviewBox", offset: 140 }
        ];

        navItems.forEach(({ trigger, target, offset }) => {
            const triggerEl = document.querySelector(trigger);
            const targetEl = document.querySelector(target);
            
            if (triggerEl && targetEl) {
                triggerEl.addEventListener("click", () => {
                    this.smoothScrollTo(targetEl, offset);
                });
            }
        });
    }

    // Smooth scroll utility
    smoothScrollTo(element, offset = 0) {
        const locationY = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetY = locationY - offset;
        
        window.scrollTo({
            top: offsetY,
            behavior: "smooth"
        });
    }

    // Calculate average rating from reviews
    calculateAverageRating(reviews) {
        if (!Array.isArray(reviews) || reviews.length === 0) {
            console.log('No reviews available for rating calculation');
            return { average: 0, distribution: {} };
        }

        let totalRating = 0;
        let validReviews = 0;
        const ratingCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        const categoryRatings = {
            cleanliness: { total: 0, count: 0 },
            checkIn: { total: 0, count: 0 },
            accuracy: { total: 0, count: 0 },
            communication: { total: 0, count: 0 },
            location: { total: 0, count: 0 },
            value: { total: 0, count: 0 }
        };

        // Process each review
        reviews.forEach(review => {
            if (review?.rating && !isNaN(review.rating)) {
                const rating = parseFloat(review.rating);
                totalRating += rating;
                validReviews++;

                const roundedRating = Math.round(rating);
                if (roundedRating >= 1 && roundedRating <= 5) {
                    ratingCounts[roundedRating]++;
                }
            }

            // Process category ratings
            Object.keys(categoryRatings).forEach(category => {
                if (review?.[category] && !isNaN(review[category])) {
                    const categoryRating = parseFloat(review[category]);
                    categoryRatings[category].total += categoryRating;
                    categoryRatings[category].count++;
                }
            });
        });

        if (validReviews === 0) {
            return { average: 0, distribution: {} };
        }

        const averageRating = totalRating / validReviews;

        // Update category ratings in DOM
        this.updateCategoryRatings(categoryRatings);
        
        // Update rating distribution bars
        this.updateRatingDistribution(ratingCounts, validReviews);

        return { 
            average: averageRating, 
            distribution: ratingCounts,
            totalReviews: validReviews 
        };
    }

    // Update category ratings in DOM
    updateCategoryRatings(categoryRatings) {
        const elementMap = {
            cleanliness: '.reviewCleanliness',
            accuracy: '.reviewAccuracy',
            checkIn: '.reviewCheckIn',
            communication: '.reviewCommunication',
            location: '.reviewLocation',
            value: '.reviewValue'
        };

        const categoryAverages = {};
        
        Object.keys(categoryRatings).forEach(category => {
            const data = categoryRatings[category];
            if (data.count > 0) {
                const average = (data.total / data.count).toFixed(2);
                categoryAverages[category] = parseFloat(average);

                const element = document.querySelector(elementMap[category]);
                if (element) {
                    element.innerText = average;
                }
            }
        });

        this.categoryAverages = categoryAverages;
    }

    // Update rating distribution bars
    updateRatingDistribution(ratingCounts, totalReviews) {
        for (let i = 1; i <= 5; i++) {
            const percentage = ((ratingCounts[i] / totalReviews) * 100).toFixed(1);
            const element = document.querySelector(`.overallLine${i}`);
            if (element) {
                element.style.width = `${percentage}%`;
            }
        }
    }

    // Format time ago
    getTimeAgo(dateString) {
        try {
            const now = new Date();
            const reviewDate = new Date(dateString);

            if (isNaN(reviewDate.getTime())) {
                return "Unknown date";
            }

            const diffInSeconds = Math.floor((now - reviewDate) / 1000);

            if (diffInSeconds < 30) return "just now";
            
            const diffInMinutes = Math.floor(diffInSeconds / 60);
            if (diffInMinutes < 60) {
                return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
            }

            const diffInHours = Math.floor(diffInMinutes / 60);
            if (diffInHours < 24) {
                return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
            }

            const diffInDays = Math.floor(diffInHours / 24);
            if (diffInDays < 30) {
                return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
            }

            const diffInMonths = Math.floor(diffInDays / 30);
            if (diffInMonths < 12) {
                return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`;
            }

            const diffInYears = Math.floor(diffInMonths / 12);
            return `${diffInYears} year${diffInYears !== 1 ? 's' : ''} ago`;

        } catch (error) {
            console.error('Error in getTimeAgo:', error);
            return "Unknown date";
        }
    }

    // Capitalize first letter
    capitalizeFirstLetter(str) {
        if (!str || typeof str !== 'string') return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Generate star rating HTML
    generateStars(rating) {
        const numRating = parseInt(rating) || 0;
        let starsHTML = '';
        
        for (let i = 1; i <= 5; i++) {
            const starClass = i <= numRating ? 'ri-star-fill' : 'ri-star-line';
            starsHTML += `<i class="${starClass}"></i>`;
        }
        
        return starsHTML;
    }

    // Render reviews
    renderReviews(reviews) {
        if (!Array.isArray(reviews) || reviews.length === 0) {
            this.showNoReviews();
            return;
        }

        const maxReviews = Math.min(reviews.length, 6);
        
        for (let i = 0; i < maxReviews; i++) {
            const review = reviews[i];
            
            if (!review?.author?.username) {
                console.log(`Skipping review ${i} - missing data`);
                continue;
            }

            const reviewHTML = this.createReviewHTML(review);
            this.elements.reviewsList.insertAdjacentHTML('beforeend', reviewHTML);
        }

        this.setupShowMoreListeners();
    }

    // Create review HTML
    createReviewHTML(review) {
        const timeAgo = this.getTimeAgo(review.createAt);
        const authorName = this.capitalizeFirstLetter(review.author.username);
        const starsHTML = this.generateStars(review.rating);
        const comment = review.comment || 'No comment provided';
        
        const maxCommentLength = 207;
        const isLongComment = comment.length > maxCommentLength;
        const displayComment = isLongComment 
            ? comment.slice(0, maxCommentLength) + "..." 
            : comment;

        return `
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
                ${isLongComment ? `
                    <div class="seeMoreTage">
                        <a href="javascript:void(0);">Show More</a>
                    </div>
                ` : ''}
            </div>
        `;
    }

    // Show no reviews state
    showNoReviews() {
        if (this.elements.totalReviewBox) {
            this.elements.totalReviewBox.style.display = "none";
        }
        
        const fullBox = document.querySelector(".fullbox33");
        if (fullBox) fullBox.style.display = "none";
        
        if (this.elements.rating.box) {
            this.elements.rating.box.innerHTML = `
                <p class="noReborrr">
                    <i class="ri-star-fill"></i>No reviews yet
                </p>
            `;
        }
        
        if (this.elements.reviewsList) {
            this.elements.reviewsList.innerHTML = `
                <p class="noreviewPara">No reviews (yet)</p>
            `;
        }
    }

    // Setup show more listeners
    setupShowMoreListeners() {
        const showMoreButtons = document.querySelectorAll('.seeMoreTage a');
        
        showMoreButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const reviewBox = button.closest('.userReviewBox');
                const reviewMsg = reviewBox.querySelector('.userreviewMsg p');
                
                // Expand functionality can be implemented here
                alert('Show More clicked for review: ' + reviewMsg.textContent.substring(0, 50) + '...');
            });
        });
    }

    // Handle description text
    handleDescription(description) {
        if (!description || !this.elements.description) return;
        
        const maxLength = 500;
        const showMoreBtn = document.querySelector(".showfffafa");
        
        if (description.length >= maxLength) {
            this.elements.description.innerText = description.slice(0, maxLength) + "...";
        } else {
            if (showMoreBtn) showMoreBtn.style.display = "none";
            this.elements.description.innerText = description;
        }
    }

    // Get smart image selection
    getSmartImage(pathArray, defaultImage) {
        if (pathArray && pathArray.length > 0) {
            const path = pathArray[0];
            this.usedImagePaths.add(path);
            return path;
        }

        // Find unused image
        const unused = this.currentImages?.find(img => !this.usedImagePaths.has(img.path));
        if (unused) {
            this.usedImagePaths.add(unused.path);
            return unused.path;
        }

        return defaultImage;
    }

    // Update images
    updateImages(images) {
        const keywords = [
            "cover", "front view", "entrance", "reception", "lobby",
            "bedroom", "bathroom", "kitchen", "balcony", "dining area",
            "living room", "outside view", "parking area", "lift area",
            "corridor", "gym", "swimming pool", "conference room",
            "play area", "terrace", "staircase", "garden",
            "room window view", "workspace", "study table", "tv unit",
            "wardrobe", "washbasin", "shower area", "hall", "laundry area"
        ];

        const defaultImage = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg";
        const imageMap = {};

        // Create image map by keywords
        keywords.forEach(keyword => {
            imageMap[keyword] = images
                .filter(img => img.originalname.toLowerCase().includes(keyword))
                .map(img => img.path);
        });

        this.currentImages = images;

        // Apply images
        if (images && images.length > 0) {
            this.elements.images.main.src = this.getSmartImage(imageMap["cover"], defaultImage);
            this.elements.images.box1.src = this.getSmartImage(imageMap["bedroom"], defaultImage);
            this.elements.images.box2.src = this.getSmartImage(imageMap["bathroom"], defaultImage);
            this.elements.images.box3.src = this.getSmartImage(imageMap["living room"], defaultImage);
            this.elements.images.box4.src = this.getSmartImage(imageMap["hall"], defaultImage);
        } else {
            // Set all to default
            Object.values(this.elements.images).forEach(img => {
                if (img) img.src = defaultImage;
            });
        }
    }

    // Load amenities
    async loadAmenities(amenitiesData) {
        try {
            const response = await fetch("/listingData/structureData");
            const structureData = await response.json();
            
            this.renderAmenities(amenitiesData.amenities, structureData[0].amenities[1], this.elements.amenities.box1);
            this.renderAmenities(amenitiesData.standoutAmenities.slice(0, 5), structureData[0].amenities[0], this.elements.amenities.box2);
        } catch (error) {
            console.error('Error loading amenities:', error);
        }
    }

    // Render amenities
    renderAmenities(amenitiesList, amenitiesStructure, container) {
        if (!container) return;

        amenitiesList.forEach(amenityTitle => {
            const amenity = amenitiesStructure.find(item => item.title === amenityTitle);
            if (!amenity) return;

            const div = document.createElement("div");
            div.className = "itemBoxplace1";
            div.innerHTML = `
                <div class="inmgBoxincd">
                    <img src="${amenity.image}" alt="${amenityTitle}">
                </div>
                <div class="ararttt">
                    <p>${amenityTitle.replace(/<br\s*\/?>/gi, ' ').replace(/&nbsp;/gi, ' ').trim()}</p>
                </div>
            `;
            container.appendChild(div);
        });
    }

    // Remove loading classes
    removeLoadingClasses() {
        const loadingElements = [
            this.elements.headingBox,
            document.querySelector(".mainImage"),
            document.querySelector(".mainImage11"),
            document.querySelector(".mainImage22"),
            document.querySelector(".mainImage33"),
            document.querySelector(".mainImage44"),
            this.elements.para1,
            this.elements.para2,
            this.elements.rating.box
        ];

        loadingElements.forEach(element => {
            if (element) element.classList.remove("loding");
        });
    }

    // Update listing data in DOM
    updateListingData(data) {
        // Basic info
        if (data.title && this.elements.heading) {
            this.elements.heading.innerText = this.capitalizeFirstLetter(data.title);
        }

        // Location info
        if (data.location && this.elements.para1) {
            const { CityTown = 'Unknown City', StateUnionTerritory = 'Unknown State', country = 'Unknown Country' } = data.location;
            this.elements.para1.innerText = `${CityTown} in ${StateUnionTerritory}, ${country}`;
        }

        // Floor plan info
        if (data.floorPlan && this.elements.para2) {
            const { Guests = '0', Bedrooms = '0', Bed = '0' } = data.floorPlan;
            this.elements.para2.innerText = `${Guests} guests • ${Bedrooms} bedrooms • ${Bed} beds`;
        }

        // Price
        if (data.price && this.elements.price) {
            this.elements.price.innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i>${data.price.toLocaleString("en-IN")}`;
        }

        // Rating and reviews
        const reviewCount = data.reviews ? data.reviews.length : 0;
        let averageRating = 0;

        if (data.reviews && data.reviews.length > 0) {
            const ratingData = this.calculateAverageRating(data.reviews);
            averageRating = ratingData.average;
        }

        // Update rating display
        if (averageRating > 0) {
            if (this.elements.rating.para) {
                this.elements.rating.para.innerText = `${averageRating.toFixed(2)} •`;
            }
            if (this.elements.avgRating) {
                this.elements.avgRating.innerText = averageRating.toFixed(2);
            }
        } else {
            if (this.elements.rating.para) {
                this.elements.rating.para.innerText = "No rating •";
            }
        }

        if (this.elements.rating.text) {
            this.elements.rating.text.innerText = `${reviewCount} review${reviewCount !== 1 ? 's' : ''}`;
        }

        if (this.elements.rating.icon) {
            this.elements.rating.icon.classList.remove("none");
        }

        // Host name
        if (data.owner?.username && this.elements.hostName) {
            this.elements.hostName.innerText = `Hosted by ${this.capitalizeFirstLetter(data.owner.username)}`;
        }

        // Description
        if (data.description) {
            this.handleDescription(data.description);
        }

        // Reviews
        this.renderReviews(data.reviews);

        // Total review count
        if (data.reviews && this.elements.totalReview) {
            this.elements.totalReview.innerText = `. ${data.reviews.length}`;
        }

        // Images
        if (data.image) {
            this.updateImages(data.image);
        }

        // Amenities
        if (data.amenitiess) {
            this.loadAmenities(data.amenitiess);
        }
    }

    // Main method to load listing data
    async loadListingData() {
        try {
            const response = await fetch(`/api/listing/${this.listingId}`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Received data:', data);

            if (!data) {
                throw new Error('No data received');
            }

            this.updateListingData(data);
            this.removeLoadingClasses();

        } catch (error) {
            console.error('Error fetching listing data:', error);
            this.handleError();
        }
    }

    // Handle errors
    handleError() {
        this.removeLoadingClasses();
        
        if (this.elements.heading) {
            this.elements.heading.innerText = 'Error loading listing';
        }
    }
}

// Initialize the listing page when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ListingPage();
});
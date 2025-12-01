document.querySelector("nav").style.position = "relative"

class ListingPage {
    constructor() {
        this.listingId = this.extractListingId();
        this.usedImagePaths = new Set();
        this.categoryAverages = {};
        this.currentImages = [];
        this.initializeElements();
        this.setupEventListeners();
        // this.loadListingData();
    }
    
    extractListingId() {
        const urlSegments = window.location.pathname.split('/');
        return urlSegments[urlSegments.length - 1];
    }

     lodingAOtherContan() {
  const elements = [
    { selector: ".hostingBy", display: "flex" },
    { selector: ".whatofferaplace", display: "block" },
    { selector: ".yeufhjhdas", display: "block" },
    { selector: ".imagesBoxListing", display: "block" },
    { selector: ".mainplaceoffbox", display: "block" },
    { selector: ".clanderMain", display: "block" },
    { selector: ".reviewBox", display: "block" },
    { selector: ".mapMainBoxs", display: "block" },
    { selector: ".mapMainBoxse", display: "block" },
    { selector: ".jfha", display: "block" },
    { selector: ".erefaf22", display: "block" },
    // { selector: ".totDayrr", display: "inline-block" }
  ];

  elements.forEach((item, index) => {
    setTimeout(() => {
      const el = document.querySelector(item.selector);
      if (el) {
        el.style.display = item.display;
      }
    }, index * 200); // 200ms delay between each item
  });
}

     renderAvatar(selector, avatar) {
  const container = document.querySelector(selector);
  console.log(container)
  if (!container || !avatar) return;

  if (avatar.image) {
  container.insertAdjacentHTML("beforeend", `<img src="${avatar.image}" alt="user avatar">`);
  container.style.backgroundColor = "transparent";
} else {
  container.insertAdjacentHTML("beforeend", `<p>${avatar.initial}</p>`);
  container.style.backgroundColor = avatar.color;

  const style = getComputedStyle(container);
  const height = parseFloat(style.height);
  if (!isNaN(height)) {
    container.querySelector("p").style.fontSize = `${height * 0.5}px`;
  }
}

}
    initializeElements() {
        this.elements = {
            
            headingBox: document.querySelector(".herae"),
            heading: document.querySelector("#h2"),
            images: {
                main: document.querySelector(".mainImage img"),
                box1: document.querySelector(".mainImage11 img"),
                box2: document.querySelector(".mainImage22 img"),
                box3: document.querySelector(".mainImage33 img"),
                box4: document.querySelector(".mainImage44 img")
            },
            locationText: document.querySelector(".ehrh"),
            floorPlanText: document.querySelector(".uieri"),
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
            avgRating: document.querySelector(".secodAvgreciv")
        };

        // if (this.elements.nav) {
        //     this.elements.;
        // }
    }

    setupEventListeners() {
        this.setupScrollListener();
        this.setupNavigation();
    }

    setupScrollListener() {
        const navPart2 = document.querySelector(".navPart2");
        if (!this.elements.topNavChange || !navPart2) return;

        window.addEventListener("scroll", () => {
            const rect = this.elements.topNavChange.getBoundingClientRect();
            navPart2.style.top = rect.top <= 0 ? "0rem" : "-6rem";
        });
    }

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

    smoothScrollTo(element, offset = 0) {
        const targetY = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetY, behavior: "smooth" });
    }

    calculateAverageRating(reviews) {
        if (!Array.isArray(reviews) || reviews.length === 0) {
            return { average: 0, distribution: {}, totalReviews: 0 };
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

            Object.keys(categoryRatings).forEach(category => {
                if (review?.[category] && !isNaN(review[category])) {
                    const categoryRating = parseFloat(review[category]);
                    categoryRatings[category].total += categoryRating;
                    categoryRatings[category].count++;
                }
            });
        });

        if (validReviews === 0) {
            return { average: 0, distribution: {}, totalReviews: 0 };
        }

        const averageRating = totalRating / validReviews;
        this.updateCategoryRatings(categoryRatings);
        this.updateRatingDistribution(ratingCounts, validReviews);

        return { 
            average: averageRating, 
            distribution: ratingCounts,
            totalReviews: validReviews 
        };
    }

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

    updateRatingDistribution(ratingCounts, totalReviews) {
        for (let i = 1; i <= 5; i++) {
            const percentage = ((ratingCounts[i] / totalReviews) * 100).toFixed(1);
            const element = document.querySelector(`.overallLine${i}`);
            if (element) {
                element.style.width = `${percentage}%`;
            }
        }
    }

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

    capitalizeFirstLetter(str) {
        if (!str || typeof str !== 'string') return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    generateStars(rating) {
        const numRating = parseInt(rating) || 0;
        let starsHTML = '';
        
        for (let i = 1; i <= 5; i++) {
            const starClass = i <= numRating ? 'ri-star-fill' : 'ri-star-line';
            starsHTML += `<i class="${starClass}"></i>`;
        }
        
        return starsHTML;
    }

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

                     if (review.author?.avatar) {
                this.renderAvatar(`.userReviewBox:nth-child(${i + 1}) .userreviewImg`, review.author.avatar);
            }
        }

        this.setupShowMoreListeners();
    }

    createReviewHTML(review) {
        const timeAgo = this.getTimeAgo(review.createAt);
        const authorName = this.capitalizeFirstLetter(review.author.username);
        const starsHTML = this.generateStars(review.rating);
        const comment = review.comment || 'No comment provided';
        const UsrOld = this.getTimeAgo(review.author.createdAt);
        const UserImg =  review.author.avatar;
        const maxCommentLength = 207;
        const isLongComment = comment.length > maxCommentLength;
        const displayComment = isLongComment 
            ? comment.slice(0, maxCommentLength) + "..." 
            : comment;
       
        return `
            <div class="userReviewBox">
                <div class="userPoflie">
                    <div class="userreviewImg userAvtar">
                        
                    </div>
                    <div class="revuwUserName">
                        <h6>${authorName}</h6>
                        <p>${UsrOld.split(" ")[0]} ${UsrOld.split(" ")[1]} on Airbnb</p>
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

    showNoReviews() {
        if (this.elements.totalReviewBox) {
            this.elements.totalReviewBox.style.display = "none";
        }
        
        const fullBox = document.querySelector(".fullbox33");
        if (fullBox) fullBox.style.display = "none";
        
        if (this.elements.rating.box) {
            document.querySelector(".hostHrev").style.display = 'none';
            this.elements.rating.box.innerHTML = `
                <p class="noReborrr">
                    <i class="ri-star-fill"></i>No reviews yet
                </p>
            `;
        }
        
        if (this.elements.reviewsList) { 
           document.querySelector(".hostHrev").style.display = 'none';
            this.elements.reviewsList.innerHTML = `
                <p class="noreviewPara">No reviews (yet)</p>
            `;
        }
    }

    setupShowMoreListeners() {
        const showMoreButtons = document.querySelectorAll('.seeMoreTage a');
        
        showMoreButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const reviewBox = button.closest('.userReviewBox');
                const reviewMsg = reviewBox.querySelector('.userreviewMsg p');
                alert('Show More clicked for review: ' + reviewMsg.textContent.substring(0, 50) + '...');
            });
        });
    }

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

    getSmartImage(pathArray, defaultImage) {
        if (pathArray && pathArray.length > 0) {
            const path = pathArray[0];
            this.usedImagePaths.add(path);
            return path;
        }

        const unused = this.currentImages?.find(img => !this.usedImagePaths.has(img.path));
        if (unused) {
            this.usedImagePaths.add(unused.path);
            return unused.path;
        }

        return defaultImage;
    }

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

        keywords.forEach(keyword => {
            imageMap[keyword] = images
                .filter(img => img.originalname.toLowerCase().includes(keyword))
                .map(img => img.path);
        });

        this.currentImages = images;

        if (images && images.length > 0) {
            this.elements.images.main.src = this.getSmartImage(imageMap["cover"], defaultImage);
            this.elements.images.box1.src = this.getSmartImage(imageMap["bedroom"], defaultImage);
            this.elements.images.box2.src = this.getSmartImage(imageMap["bathroom"], defaultImage);
            this.elements.images.box3.src = this.getSmartImage(imageMap["living room"], defaultImage);
            this.elements.images.box4.src = this.getSmartImage(imageMap["hall"], defaultImage);
        } else {
            Object.values(this.elements.images).forEach(img => {
                if (img) img.src = defaultImage;
            });
        }
    }

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

    removeDispalRemoveClass(){
         const loadingElements = [
            
            document.querySelector(".checkIn"),
            document.querySelector(".checkOut"),
           
        ];

         const loadingElements2= [
            
            document.querySelector(".flexBoxgt"),
            document.querySelector(".pcicebtn"),
            document.querySelector(".dfefdcvd"),
             document.querySelector(".totDayrr"),
           
        ];
       
        loadingElements.forEach(element => {
            if (element) element.classList.remove("ccegfgs");
        });
        loadingElements2.forEach(element => {
            if (element) element.classList.remove("checkInRemove");
        });
    }

    removeLoadingClasses() {
        const loadingElements = [
            this.elements.headingBox,
            document.querySelector(".mainImage"),
            document.querySelector(".mainImage11"),
            document.querySelector(".mainImage22"),
            document.querySelector(".mainImage33"),
            document.querySelector(".mainImage44"),
            document.querySelector(".sharBoxCover"),
            document.querySelector(".sharBoxCover2"),
            document.querySelector(".priceHadingBox "),
            document.querySelector(".checkIn"),
            document.querySelector(".checkOut"),
            this.elements.locationText,
            this.elements.floorPlanText,
            this.elements.rating.box
        ];
        document.querySelector(".mainPriceBox").classList.remove("mainPriceBoxNone");
        document.querySelector(".htBookDate").classList.remove("htBookDateRemove");
        document.querySelector(".checkOut").classList.remove("htBookDateRemove");
        loadingElements.forEach(element => {
            if (element) element.classList.remove("loding");
        });
    }

    updateListingData(data) {
        if (data.title && this.elements.heading) {
            this.elements.heading.innerText = this.capitalizeFirstLetter(data.title);
        }

        if (data.location && this.elements.locationText) {
            const { CityTown = 'Unknown City', StateUnionTerritory = 'Unknown State', country = 'Unknown Country' } = data.location;
            this.elements.locationText.innerText = `${CityTown} in ${StateUnionTerritory}, ${country}`;
        }

        if (data.floorPlan && this.elements.floorPlanText) {
            const { Guests = '0', Bedrooms = '0', Bed = '0' } = data.floorPlan;
            this.elements.floorPlanText.innerText = `${Guests} guests • ${Bedrooms} bedrooms • ${Bed} beds`;
        }

       
        

        const reviewCount = data.reviews ? data.reviews.length : 0;
        let averageRating = 0;

        if (data.reviews && data.reviews.length > 0) {
            const ratingData = this.calculateAverageRating(data.reviews);
            averageRating = ratingData.average;
        }

        if (averageRating > 0) {
            if (this.elements.rating.para) {
                this.elements.rating.para.innerText = `${averageRating.toFixed(2)} •`;
            }
            if (this.elements.avgRating) {
                document.querySelector('.Rdfajhd h6').innerText = averageRating.toFixed(2);
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

        if (data.owner?.username && this.elements.hostName) {
            document.querySelector(".hstdelit h4").innerText = `${this.capitalizeFirstLetter(data.owner.username)}`;
            this.elements.hostName.innerText = `Hosted by ${this.capitalizeFirstLetter(data.owner.username)}`;
        }

       

// Usage
if (data.owner && data.owner.avatar) {
  this.renderAvatar(".hostsImage", data.owner.avatar);
  this.renderAvatar(".hImgBox", data.owner.avatar);
}

if(data.owner && data.owner.isVerified){
    console.log(data.owner.isVerified)
document.querySelector(".hImgBox").insertAdjacentHTML("beforeend", `
  <div class="verifyIcon">
    <i class="ri-shield-check-fill"></i>
  </div>
`);
}



        if (data.description) {
            this.handleDescription(data.description);
        }

        this.renderReviews(data.reviews);

        if (data.reviews && this.elements.totalReview) {
            document.querySelector(".totRvieHosHost h6").innerText = `${data.reviews.length}`
            this.elements.totalReview.innerText = `. ${data.reviews.length}`;
        }

        if (data.image) {
            this.updateImages(data.image);
        }

        if (data.amenitiess) {
            this.loadAmenities(data.amenitiess);
        }
    }

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
            if (data.price) {
                this.price = data.price; // ✅ Only set if present
            }
           let datelis =  this.getTimeAgo(data.createdAt);
             if(["hours","minute","just"].includes(datelis.split(" ")[1])){
                 document.querySelector(".hsotyer h6").innerText = "New";
                 document.querySelector(".yearofhosthing").innerText = "New";
           document.querySelector(".ejfadere").style.display = "none";

               
            }else{
                 document.querySelector(".hsotyer h6").innerText =  datelis.split(" ")[0];
                 document.querySelector(".yearofhosthing").innerText =  `${datelis.split(" ")[0]} ${datelis.split(" ")[1]} hosting`;
           document.querySelector(".ejfadere").innerText =  `${datelis.split(" ")[1]} of hosting`;
                console.log(datelis.split(" ")[1])
            }
          
            
           
            document.querySelector(".dateCity").innerText = `nights in ${this.capitalizeFirstLetter(data.location.CityTown)}`;
            document.querySelector(".AllCtiyCner").innerText = `${data.location.CityTown},${data.location.StateUnionTerritory},${data.location.country}`
            document.querySelector(".shar-box1").style.display = "flex";
            document.querySelector(".feerers22").style.display = "flex";
            this.updateListingData(data);
            this.removeLoadingClasses();
            this.removeDispalRemoveClass()
            this.lodingAOtherContan();

        } catch (error) {
            console.error('Error fetching listing data:', error);
            this.handleError();
        }
    }

    handleError() {
        this.removeLoadingClasses();
        
        if (this.elements.heading) {
            this.elements.heading.innerText = 'Error loading listing';
        }
    }
}

// Calendar functionality
class Calendar {
    constructor(calendarElementId , listingPageInstance) {
        this.calendarEl = document.getElementById(calendarElementId);
        this.currentDate = new Date();
        this.allowedRange = [];
        this.selectedDates = [];
        this.listingPage = listingPageInstance;
    }

    init(range, defaults) {
        this.allowedRange = range.slice().sort((a, b) => a - b);
        this.selectedDates = defaults.slice().sort((a, b) => a - b);
        this.render();
        this.logSelection();
    }

    render() {
        this.calendarEl.innerHTML = '';

        let start, end;
        if (this.selectedDates.length === 2) {
            [start, end] = this.selectedDates.slice().sort((a, b) => a - b);
        }

        for (let m = 0; m < 2; m++) {
            const monthDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + m, 1);
            const year = monthDate.getFullYear();
            const month = monthDate.getMonth();

            const monthEl = document.createElement('div');
            monthEl.className = 'month';

            const header = document.createElement('div');
            header.className = 'month-header';

            const leftArrow = document.createElement('span');
            leftArrow.className = m === 0 ? 'nav-arrow' : 'nav-arrow invisible';
            leftArrow.innerHTML = '<i class="ri-arrow-left-wide-fill"></i>';
            if (m === 0) leftArrow.onclick = () => {
                this.currentDate.setMonth(this.currentDate.getMonth() - 1);
                this.render();
            };

            const title = document.createElement('span');
            title.className = 'month-title';
            title.textContent = `${monthDate.toLocaleString('default', { month: 'long' })} ${year}`;

            const rightArrow = document.createElement('span');
            rightArrow.className = m === 1 ? 'nav-arrow' : 'nav-arrow invisible';
            rightArrow.innerHTML = '<i class="ri-arrow-right-wide-fill"></i>';
            if (m === 1) rightArrow.onclick = () => {
                this.currentDate.setMonth(this.currentDate.getMonth() + 1);
                this.render();
            };

            header.append(leftArrow, title, rightArrow);

            const weekdays = document.createElement('div');
            weekdays.className = 'weekdays';
            ['S', 'M', 'T', 'W', 'T', 'F', 'S'].forEach(d => {
                weekdays.innerHTML += `<div>${d}</div>`;
            });

            const days = document.createElement('div');
            days.className = 'days';
            const firstDay = new Date(year, month, 1).getDay();
            const totalDays = new Date(year, month + 1, 0).getDate();

            for (let b = 0; b < firstDay; b++) {
                const emptyDay = document.createElement('div');
                emptyDay.className = 'empty-day';
                days.appendChild(emptyDay);
            }

            for (let d = 1; d <= totalDays; d++) {
                const thisDate = new Date(year, month, d);
                const wrap = document.createElement('div');
                wrap.className = 'dateCove';
                const dayEl = document.createElement('div');
                dayEl.textContent = d;

                if (this.selectedDates.some(sd => this.isSameDate(sd, thisDate))) {
                    dayEl.classList.add('selected-date');
                }

                if (this.selectedDates.length === 2) {
                    if (this.isSameDate(thisDate, start)) {
                        wrap.classList.add('smallClor');
                    } else if (this.isSameDate(thisDate, end)) {
                        wrap.classList.add('ChangeClor');
                    }
                    
                    if (thisDate > start && thisDate < end) {
                        dayEl.classList.add('change');
                    }
                }

                if (thisDate < this.allowedRange[0]) {
                    wrap.classList.add('previData');
                } else if (thisDate > this.allowedRange[1]) {
                    wrap.classList.add('nextData');
                }

                if (thisDate >= this.allowedRange[0] && thisDate <= this.allowedRange[1]) {
                    dayEl.style.cursor = 'pointer';
                    dayEl.onclick = () => this.handleDateSelect(new Date(thisDate));
                } else {
                    dayEl.style.cursor = 'default';
                }

                wrap.appendChild(dayEl);
                days.appendChild(wrap);
            }

            monthEl.append(header, weekdays, days);
            this.calendarEl.appendChild(monthEl);
        }
    }

    handleDateSelect(date) {
        if (this.selectedDates.length === 2 && !this.selectedDates.some(d => this.isSameDate(d, date))) {
            this.selectedDates = [];
        }
        
        if (!this.selectedDates.some(d => this.isSameDate(d, date))) {
            this.selectedDates.push(date);
            this.selectedDates.sort((a, b) => a - b);
        }
        
        this.render();
        this.logSelection();
    }

    logSelection() {
        if (this.selectedDates.length !== 2) return;
        
        const [start, end] = this.selectedDates;
        const dayGap = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        
        const totalDataEl = document.querySelector(".TotalData");
        const headerEl = document.querySelector(".clnHd2");
        const checkinEl = document.querySelector("#checkinlabel");
        const checkoutEl = document.querySelector("#checkoutlabel");
        const totlanight = document.querySelector(".totDayrr");
        const totalPrice = document.querySelector(".mianPariceHadingee3");
        console.log(totlanight,"hhghffhgff")
        if (totalDataEl) totalDataEl.textContent = dayGap;
        if (totlanight) totlanight.textContent = `${dayGap} of night`;
        if (headerEl) headerEl.textContent = `${this.formatShort(start)} - ${this.formatShort(end)}`;
        if (checkinEl) checkinEl.value = this.formatDate(start);
        if (checkoutEl) checkoutEl.value = this.formatDate(end);

const pricePerNight = this.listingPage.price;

    if (typeof pricePerNight !== 'number') {
        console.warn("Price not available yet.");
        return; // ✅ Stop if price is not ready
    }

    const totalCost = dayGap * pricePerNight;
     totalPrice.innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i>${totalCost.toLocaleString("en-IN")}`;
    console.log("Total Cost:", totalCost);


        console.log(totlanight,"hhghffhgff")
        console.log("Check-in:", this.formatDate(start));
        console.log("Check-out:", this.formatDate(end));
        console.log("Duration:", dayGap, "days");
    }

    isSameDate(a, b) {
        return a.getFullYear() === b.getFullYear() &&
               a.getMonth() === b.getMonth() &&
               a.getDate() === b.getDate();
    }

    formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    formatShort(date) {
        return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const listingPage = new ListingPage();
function getTodayDateAsDateObj() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0 se start hota hai
  const day = today.getDate();
  return new Date(year, month, day);
 }
  function getTodayDateAsDateObj2() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0 se start hota hai
  const day = today.getDate();
  return new Date(year, month+6, day);
 }
    // Wait for data to load
    listingPage.loadListingData().then(() => {
        const calendar = new Calendar('calendar', listingPage);
        calendar.init(
            [getTodayDateAsDateObj(), getTodayDateAsDateObj2()],
            [getTodayDateAsDateObj(), getTodayDateAsDateObj2()]
        );
    });
});

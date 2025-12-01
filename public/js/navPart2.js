// DOM Elements
const navbar = document.querySelector("nav");
const navSearch = document.querySelector(".nav2");
const overlay = document.querySelector(".overlayNva");
const dropdown = document.querySelector(".dropdown")
const filterNav23 = document.querySelector(".main-1")

document.addEventListener("DOMContentLoaded",()=>{
    
    
})

// State
let isExpanded = false;
let isFirstSliderClick = true;
let calendarInstance = null;

// HTML Templates
const compactSearchMarkup = `
  <div class="anacClick">
    <div class="nav-right"><p>Anywhere</p></div>
    <div class="nav-cnter"><p>Any week</p></div>
    <div class="nav-left"><p>Add guests</p> <i class="ri-search-line"></i></div>
  </div>
`;

const expandedFormMarkup = `
   <div class="navFormBox">
            <div class="bigShcer">
                <div class="navslider">
                    
                </div>
                
            <div class="navSearch navsliderBox navHovercolor" id="box1">
                <div class="navSearchLabal">Where</div>
                <div class="navSearchInputBox">
                    <input type="text" id="location" placeholder="Search destinations">
                    <input class="disPalNoneNav " id="CheckIn" type="text" name="CheckIn">
                    <input class="disPalNoneNav" id="CheckOut" type="text" name="CheckOut">
                    <input class="disPalNoneNav" id="Guests" type="text" name="Adults">
                    <input class="disPalNoneNav" id="Children" type="text" name="Children">
                    <input class="disPalNoneNav" id="Infants" type="text" name="Infants">
                </div>
            </div>
            <div class="navLineSpane gap13r "></div>
            <div class="navCheckIN navsliderBox dp navHovercolor" id="box2">
                <div class="navSearchLabal">Check-in</div>
                <div class="navSearchInputBox">
                    <span class="showChechinDate">Add dates</span>
                </div>
            </div>
            <div class="navLineSpane gap12r"></div>
           <div class="navCheckOut2 navsliderBox">
             <div class="navCheckOut  dp navHovercolor" id="box3">
                <div class="navSearchLabal">Check-out</div>
                <div class="navSearchInputBox">
                    <span class="showChechOutDate">Add dates</span>
                </div>
                
            </div>
           </div>
            <div class="navLineSpane gap11r"></div>
            <div class="MainSearch navsliderBox dp navHovercolor " id="box4">
                <div class="navaddGust">
                    <div class="navSearchLabal">Who</div>
                <div class="navSearchInputBox">
                    <span class="AddGustCountNav">Add guests</span><span class="InfantsClass"></span>
                
                </div>
                </div>
                <div class="Scherchcall">
                   <button class="bigsaerchClassVdd"> <div class="scherchIcon"><i class="ri-search-line"></i></div>
                    <div class="secharNamedd">Search</div>
                </button>
                </div>
            </div>
             <div class="dropdown" id="dropdown">
               
                

             </div>
            </div>
        </div>
`;

// Main Functions
function showCompactNav() {
let main = document.querySelector("main");

  navbar.classList.add('small');
  filterNav23.classList.add("mainFilterSmall")
  main.classList.add("mainSmalldiv")
  navbar.classList.remove('expanded');
  navSearch.classList.remove('Nav2enpand');
  navSearch.classList.add('Nav2small');
  navSearch.innerHTML = compactSearchMarkup;
  overlay.style.display = "none";
}

function showExpandedNav() {

  let main = document.querySelector("main");
  navbar.classList.remove('small', 'expanded');
    main.classList.remove("mainSmalldiv")
  filterNav23.classList.remove("mainFilterSmall")
  navSearch.classList.remove('Nav2enpand', 'Nav2small');
  navSearch.innerHTML = expandedFormMarkup;

  // Reattach event listeners after DOM update
  attachBoxListeners();
  setupHoverEffects();
}

function expandNavOnClick() {
  isExpanded = true;
  navbar.classList.remove('small');
  navSearch.classList.remove('Nav2small');
  navbar.classList.add('expanded');
  navSearch.innerHTML = expandedFormMarkup;
  overlay.style.display = 'flex';

  // Reattach event listeners after DOM update
  attachBoxListeners();
  setupHoverEffects();
}

// Event Listeners
window.addEventListener('scroll', () => {
  if (isExpanded) {
    // Collapse if currently expanded
    isExpanded = false;
    showCompactNav();
  } else {
    if (window.scrollY > 10) {
      showCompactNav();
    } else {
      showExpandedNav();
    }
  }
});



navSearch.addEventListener('click', (e) => {
  const target = e.target.closest('.anacClick');
  if (target) {
    expandNavOnClick();
  }
});

// Box Management
function attachBoxListeners() {
  const boxes = ['box1', 'box2', 'box3', 'box4'].map(id => document.getElementById(id));
  const dropdown = document.getElementById("dropdown");

  if (boxes.some(box => !box) || !dropdown) {
    console.warn("Required elements not found");
    return;
  }

  boxes.forEach((box, index) => {
    if (box) {
      box.addEventListener("click", (e) => handleBoxClick(e, index, box, dropdown));
    }
  });
}

function handleBoxClick(e, index, box, dropdown) {
  box.classList.remove("navHovercolor");
  document.querySelector(".bigShcer").style.backgroundColor = "#EBEBEB";
  document.querySelector(".secharNamedd").style.display = ' block'
  document.querySelector(".Scherchcall button").classList.add("bigsaerchClass")

  activateSlider(index);

  const elements = getNavElements();
  if (!elements) return;

  const { left, width } = calculateDropdownPosition(index, elements);

  updateDropdown(dropdown, left, width, index);
  updateBoxStyles(index, e, elements);
}

function getNavElements() {
  const elements = {
    mainSearch: document.querySelector(".MainSearch"),
    gap11r: document.querySelector(".gap11r"),
    gap12r: document.querySelector(".gap12r"),
    gap13r: document.querySelector(".gap13r"),
    navCheckOut: document.querySelector(".navCheckOut"),
    navCheckIN: document.querySelector(".navCheckIN"),
    navSearch: document.querySelector(".navSearch")
  };

  // Check if all elements exist
  if (Object.values(elements).some(el => !el)) {
    console.warn("Some navigation elements not found");
    return null;
  }

  return elements;
}

function calculateDropdownPosition(index, elements) {
  const box1 = document.getElementById("box1");
  const box4 = document.getElementById("box4");

  let left = 0;
  let width = 0;

  if (index === 0) {
    left = box1.offsetLeft;
    width = box1.offsetWidth + document.getElementById("box2").offsetWidth + 9;
  } else if (index === 3) {
    left = box4.offsetLeft - document.getElementById("box3").offsetWidth - 9;
    width = box4.offsetWidth + document.getElementById("box3").offsetWidth + 9;
  } else {
    left = box1.offsetLeft;
    width = (box4.offsetLeft + box4.offsetWidth) - box1.offsetLeft;
  }

  return { left, width };
}

function updateDropdown(dropdown, left, width, boxIndex) {
  dropdown.style.left = `${left}px`;
  dropdown.style.width = `${width}px`;
  dropdown.style.display = 'block';


  let clander = document.querySelector(".navComdelMainDiv")
    const input = document.querySelector(".navSearchInputBox input");

  // Add content based on box index using if-else instead of switch
  if (boxIndex === 0) {
    dropdown.style.height = "64.6vh";
    addLocationContent();
    
    searchLocation()
    
    
  } else if (boxIndex === 1 || boxIndex === 2) {
    if (!clander) {
      dropdown.style.height = "69vh"
      addCalendarContent();

    }

  } else if (boxIndex === 3) {
    dropdown.style.height = "62vh"

    addGuestsContent();
  }
}

function updateBoxStyles(index, e, elements) {
  const { mainSearch, gap11r, gap12r, gap13r, navCheckOut, navCheckIN, navSearch } = elements;

  // Reset all secondary hover effects
  [navCheckIN, mainSearch, navCheckOut, navSearch].forEach(el => {
    el.classList.remove("secontHoverEff");
  });
  const navCheckOut2 = document.querySelector(".navCheckOut2")
  const MainSearch2 = document.querySelector(".MainSearch")
  const navSearch2 = document.querySelector(".navSearch")
  const navCheckIN2 = document.querySelector(".navCheckIN")
  if (index === 0) {
    // First box (Where)
    navCheckIN.classList.add("secontHoverEff");
    mainSearch.classList.add("secontHoverEff");
    navCheckOut.classList.add("secontHoverEff");
    navCheckOut2.classList.remove("secontHoverEff2")
    navCheckOut2.classList.remove("secontHoverEff22")
    navSearch2.classList.remove("secontHoverEff1")
    navCheckIN2.classList.add("navCheckOut2BRrHover");

    navCheckIN2.classList.remove("secontHoverEff011");
    navCheckIN2.style.zIndex = "9"
    navSearch2.style.zIndex = "11"
    mainSearch.classList.add("dp");
    navCheckOut.classList.add("dp");
    MainSearch2.classList.remove("secontHoverEff3");
    setGapOpacity(gap13r, gap12r, gap11r, "0", "1", "1");
    
  } else if (index === 3) {
    // Last box (Who)
    navCheckIN.classList.add("secontHoverEff");
    navCheckOut.classList.add("secontHoverEff");
    navSearch.classList.add("secontHoverEff");
    navCheckOut2.classList.add("secontHoverEff2")
    navCheckOut2.classList.remove("secontHoverEff22")
    navCheckIN2.classList.remove("navCheckOut2BRrHover");
    navCheckOut2.style.zIndex = "8"
    MainSearch2.classList.remove("secontHoverEff3");
    navSearch2.classList.remove("secontHoverEff1")
    navCheckIN2.classList.remove("secontHoverEff011");
    navCheckIN2.style.zIndex = "99"
    navSearch2.style.zIndex = "11"
    MainSearch2.style.zIndex = "99"

    navCheckOut.classList.add("dp");
    mainSearch.classList.remove("dp");

    setGapOpacity(gap13r, gap12r, gap11r, "1", "1", "0");
  } else {
    // Middle boxes (Check-in/Check-out)
    mainSearch.classList.add("dp");
    navCheckIN2.classList.remove("navCheckOut2BRrHover");
    navCheckOut2.classList.remove("secontHoverEff2")
    navCheckOut2.style.zIndex = "11"
    if (e.target.closest(".navCheckOut")) {
      // Check-out clicked
      mainSearch.classList.add("secontHoverEff");
      navCheckIN.classList.add("secontHoverEff");
      navSearch.classList.add("secontHoverEff");
      MainSearch2.classList.add("secontHoverEff3");
      navCheckIN2.classList.add("secontHoverEff011");
      navCheckOut2.classList.remove("secontHoverEff22")
      navSearch2.classList.remove("secontHoverEff1")
      navSearch2.style.zIndex = "11"
      MainSearch2.style.zIndex = "9"

      navCheckIN2.style.zIndex = "9"

      navCheckOut.classList.remove("dp");
      navCheckIN.classList.add("dp");

      setGapOpacity(gap13r, gap12r, gap11r, "1", "0", "0");
    } else {
      // Check-in clicked
      mainSearch.classList.add("secontHoverEff");
      navCheckOut.classList.add("secontHoverEff");
      navSearch.classList.add("secontHoverEff");
      MainSearch2.classList.remove("secontHoverEff3");
      navCheckOut2.classList.add("secontHoverEff22")
      navSearch2.classList.add("secontHoverEff1")
      navCheckIN2.classList.remove("secontHoverEff011");
      navCheckIN2.style.zIndex = "99"
      navSearch2.style.zIndex = "8"
      navCheckOut2.style.zIndex = "8"
      navCheckOut2.style.zIndex = "8"
      navCheckIN.classList.remove("dp");
      navCheckOut.classList.remove("dp");

      setGapOpacity(gap13r, gap12r, gap11r, "0", "0", "1");
    }
  }
}

function setGapOpacity(gap13r, gap12r, gap11r, opacity13, opacity12, opacity11) {
  gap13r.style.opacity = opacity13;
  gap12r.style.opacity = opacity12;
  gap11r.style.opacity = opacity11;
}

// Slider Animation
function activateSlider(index) {
  const boxes = document.querySelectorAll('.navsliderBox');
  const slider = document.querySelector('.navslider');

  if (!boxes[index] || !slider) return;

  const box = boxes[index];
  slider.style.left = box.offsetLeft + 'px';
  slider.style.width = box.offsetWidth + 'px';
  slider.style.height = box.offsetHeight + 'px';
  slider.classList.add('active');

  if (isFirstSliderClick) {
    isFirstSliderClick = false;
  }
}

// Hover Effects
function setupHoverEffects() {
  setupHoverEffect(".navCheckIN", ".gap13r", ".gap12r");
  setupHoverEffect(".navCheckOut", ".gap12r", ".gap11r");
  setupSingleHoverEffect(".MainSearch", ".gap11r");

  
}

function setupHoverEffect(hoverSelector, aboveSelector, belowSelector) {
  const hoverEl = document.querySelector(hoverSelector);
  const aboveEl = document.querySelector(aboveSelector);
  const belowEl = document.querySelector(belowSelector);

  if (!hoverEl || !aboveEl || !belowEl) return;

  hoverEl.addEventListener("mouseenter", (e) => {
    if (e.target.classList.contains("dp")) {
      aboveEl.style.opacity = "0";
      belowEl.style.opacity = "0";
    }
  });

  hoverEl.addEventListener("mouseleave", (e) => {
    if (e.target.classList.contains("dp")) {
      aboveEl.style.opacity = "1";
      belowEl.style.opacity = "1";
    }
  });
}

function setupSingleHoverEffect(hoverSelector, targetSelector) {
  const hoverEl = document.querySelector(hoverSelector);
  const targetEl = document.querySelector(targetSelector);

  if (!hoverEl || !targetEl) return;

  hoverEl.addEventListener("mouseenter", (e) => {
    if (e.target.classList.contains("dp")) {
      targetEl.style.opacity = "0";
    }
  });

  hoverEl.addEventListener("mouseleave", (e) => {``
    if (e.target.classList.contains("dp")) {
      targetEl.style.opacity = "1";
    }
  });
}

// Content Functions
function addLocationContent() {
  console.log("Chetan Is sex with bhoomi")
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown) return;
  
  dropdown.innerHTML = `
     <div class="NavLoationContaner">
                   <div class="navScrllolocation">
                     <ul class="loctionSchechul">
                        <li class="NavloctionSgget">Suggested destinations</li>
                        <li>
                            <div class="locationcox">
                                <div class="locationImagNav">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/ea5e5ee3-e9d8-48a1-b7e9-1003bf6fe850.png">
                                </div>
                                <div class="loctaionNameNav">
                                    <h6>Nearby</h6>
                                    <p>Find what’s around you</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="locationcox">
                                <div class="locationImagNav">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/97624dd8-97a3-4733-97cc-b8dc0c74d23d.png">
                                </div>
                                <div class="loctaionNameNav">
                                    <h6>Puducherry, Puducherry</h6>
                                    <p>Great for a weekend getaway</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="locationcox">
                                <div class="locationImagNav">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/57f4f6ff-23b1-45c9-a895-25a9863f4122.png">
                                </div>
                                <div class="loctaionNameNav">
                                    <h6>Kodaikanal, Tamil Nadu</h6>
                                    <p>For nature lovers</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="locationcox">
                                <div class="locationImagNav">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/07869b83-5328-4f3d-8087-a7d1e9782434.png">
                                </div>
                                <div class="loctaionNameNav">
                                    <h6>Ooty, Tamil Nadu</h6>
                                    <p>Popular with travellers near you</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="locationcox">
                                <div class="locationImagNav">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/06f0f050-c167-4d1e-89e1-2775be94f82a.png">
                                </div>
                                <div class="loctaionNameNav">
                                    <h6>North Goa, Goa</h6>
                                    <p>Popular beach destination</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="locationcox">
                                <div class="locationImagNav">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/dd61b8e6-7fa1-46d7-9284-7f3977e5da31.png">
                                </div>
                                <div class="loctaionNameNav">
                                    <h6>Yercaud, Tamil Nadu</h6>
                                    <p>Known for its lakes</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="locationcox">
                                <div class="locationImagNav">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/41bb6ae3-07f4-4ef4-b9d7-37d9f7a55d2b.png">
                                </div>
                                <div class="loctaionNameNav">
                                    <h6>Bengaluru, Karnataka</h6>
                                    <p>For sights like Lalbagh Botanical Garden</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="locationcox">
                                <div class="locationImagNav">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/7167e066-5543-4a7f-9fcb-50b2e477ccd6.png">
                                </div>
                                <div class="loctaionNameNav">
                                    <h6>Mahabalipuram, Tamil Nadu</h6>
                                    <p>For its stunning architecture</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="locationcox">
                                <div class="locationImagNav">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/447b22da-3842-4977-89c9-d58e182c0ce2.png">
                                </div>
                                <div class="loctaionNameNav">
                                    <h6>Yelagiri, Tamil Nadu</h6>
                                    <p>Known for its lakes</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="locationcox">
                                <div class="locationImagNav">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/07869b83-5328-4f3d-8087-a7d1e9782434.png">
                                </div>
                                <div class="loctaionNameNav">
                                    <h6>Munnar, Kerala</h6>
                                    <p>For nature lovers</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="locationcox">
                                <div class="locationImagNav">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/ebb968b2-3fb6-45d3-b675-7765e487f7b9.png">
                                </div>
                                <div class="loctaionNameNav">
                                    <h6>New Delhi, Delhi</h6>
                                    <p>For sights like India Gate</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="locationcox">
                                <div class="locationImagNav">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/ebb968b2-3fb6-45d3-b675-7765e487f7b9.png">
                                </div>
                                <div class="loctaionNameNav">
                                    <h6>Mumbai, Maharashtra</h6>
                                    <p>For its top-notch dining</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="locationcox">
                                <div class="locationImagNav">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/fa32e243-625d-486b-80d2-0a1bd74e214f.png">
                                </div>
                                <div class="loctaionNameNav">
                                    <h6>Kochi, Kerala</h6>
                                    <p>For its stunning architecture</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="locationcox">
                                <div class="locationImagNav">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/4499ccb1-c8fb-4b5c-8383-44e589d200fa.png">
                                </div>
                                <div class="loctaionNameNav">
                                    <h6>Madikeri, Karnataka</h6>
                                    <p>A hidden gem</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="locationcox">
                                <div class="locationImagNav">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/58e934fa-33ed-4caf-800e-7e268bb0d3c7.png">
                                </div>
                                <div class="loctaionNameNav">
                                    <h6>Wayanad, Kerala</h6>
                                    <p>Great for summer getaways</p>
                                </div>
                            </div>
                        </li>
                       
                        <li>
                            <div class="locationcox">
                                <div class="locationImagNav">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/2b5fff53-d328-4beb-839a-cfe4fcb4223a.png">
                                </div>
                                <div class="loctaionNameNav">
                                    <h6>Mysore, Karnataka</h6>
                                    <p>Popular with travellers near you</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="locationcox">
                                <div class="locationImagNav">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/72db635b-4710-4145-b326-01d9f0641e16.png">
                                </div>
                                <div class="loctaionNameNav">
                                    <h6>Coimbatore, Tamil Nadu</h6>
                                    <p>Off the beaten path</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="locationcox">
                                <div class="locationImagNav">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/ebb968b2-3fb6-45d3-b675-7765e487f7b9.png">
                                </div>
                                <div class="loctaionNameNav">
                                    <h6>South Goa, Goa</h6>
                                    <p>Because your wishlist has stays in South Goa</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="locationcox">
                                <div class="locationImagNav">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/ed75c050-042b-44ba-a991-54044d93a91b.png">
                                </div>
                                <div class="loctaionNameNav">
                                    <h6>Jaipur, Rajasthan</h6>
                                    <p>For sights like Amber Fort</p>
                                </div>
                            </div>
                        </li>
                       
                        <li>
                            <div class="locationcox">
                                <div class="locationImagNav">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/447b22da-3842-4977-89c9-d58e182c0ce2.png">
                                </div>
                                <div class="loctaionNameNav">
                                    <h6>Calangute, Goa</h6>
                                    <p>For its bustling nightlife</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="locationcox">
                                <div class="locationImagNav">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/447b22da-3842-4977-89c9-d58e182c0ce2.png">
                                </div>
                                <div class="loctaionNameNav">
                                    <h6>Tirupati, Andhra Pradesh</h6>
                                    <p>Near you</p>
                                </div>
                            </div>
                        </li>
                       

                    </ul>
                   </div>
                </div>
  `;


  
  ShowLolocationInNav()
}

function addCalendarContent() {
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown) return;

  dropdown.innerHTML = `
    <div class="navComdelMainDiv">
      <div class="clanderMain navclanderMain">
        <div class="navClanderDataEct">
          <div class="navclanedatemothn">
            <div class="Navdate">Dates</div>
            <div class="Navmonth">Months</div>
            <div class="NavYear">Flexible</div>
          </div>
        </div>
        <div class="calendar-container navcalendar-container">
          <div id="calendar"></div>
        </div>
      </div>
    </div>
  `;

  // Initialize calendar after DOM is ready
  setTimeout(() => {
    initializeCalendar();
  }, 0);
}

function addGuestsContent() {
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown) return;

  dropdown.innerHTML = `
    <div class="NavAddgustBoxDr">
                    <div class="navAddGustMainboxdr">
                        <div class="gustBoxbr">
                            <h6>Adults</h6>
                            <p>Ages 13 or above</p>
                        </div>
                        <div class="gustAddDr">
                            <div class="btnCoverGustAdd22"><div class="gustmainsBtndt"><i class="ri-subtract-line"></i></div></div>
                            <div class="gustNumderdt">0</div>
                            
                            <div class="btnCoverGustAdd2"><div class="gustaddBtndt"><i class="ri-add-line"></i></div></div>
                            
                        </div>
                    </div>
                    <div class="navAddCliranMainboxdr">
                        <div class="gustBoxbr">
                            <h6>Children</h6>
                            <p>Ages 2–12</p>
                        </div>
                        <div class="gustAddDr">
                             <div class="addClilAddCover btnCoverGustAdd" > <div class="gustmainsBtndt cillDeAdd BtmDistbalNav"><i class="ri-subtract-line"></i></div></div>
                            <div class="gustNumderdt cilldCount">0</div>
                           <div class="removeCillCover"> <div class="gustaddBtndt cillDeremove"><i class="ri-add-line"></i></div></div>
                            
                        </div>
                    </div>
                    <div class="navAddINFanMainboxdr">
                        <div class="gustBoxbr">
                            <h6>Infants</h6>
                            <p>Under 2</p>
                        </div>
                        <div class="gustAddDr">
                            <div class="removeInfantsCover btnCoverGustAdd"><div class="gustmainsBtndt removeInfants BtmDistbalNav"><i class="ri-subtract-line"></i></div></div>
                            <div class="gustNumderdt InfantsConst">0</div>
                            <div class="addInfantsCover"><div class="gustaddBtndt addInfants"><i class="ri-add-line"></i></div></div>
                            
                        </div>
                    </div>
                    <div class="navAddPetMainboxdr">
                         <div class="gustBoxbr">
                            <h6>Pets</h6>
                            <p class="petboott">Bringing a service animal?</p>
                        </div>
                        <div class="gustAddDr">
                            <div class="gustmainsBtndt"><i class="ri-subtract-line"></i></div>
                            <div class="gustNumderdt">2</div>
                            <div class="gustaddBtndt"><i class="ri-add-line"></i></div>
                            
                        </div>
                    </div>
                </div>
  `;

  addGustEvent()
}

function initializeCalendar() {
  const calendarEl = document.getElementById('calendar');
  if (!calendarEl) {
    console.warn('Calendar element not found');
    return;
  }

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
  calendarInstance = new Calendar2('calendar');
  calendarInstance.init(
    [getTodayDateAsDateObj(), getTodayDateAsDateObj2()],
    []
  );
}

// Calendar Class
class Calendar2 {
  constructor(calendarElementId) {
    this.calendarEl = document.getElementById(calendarElementId);
    this.currentDate = new Date();
    this.allowedRange = [];
    this.selectedDates = [];
  }

  init(range, defaults) {
    if (!this.calendarEl) {
      console.warn('Calendar element not found');
      return;
    }

    this.allowedRange = range.slice().sort((a, b) => a - b);
    this.selectedDates = defaults.slice().sort((a, b) => a - b);
    this.render();
    this.logSelection();
  }

  render() {
    if (!this.calendarEl) return;

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
      if (m === 0) {
        leftArrow.onclick = () => {
          this.currentDate.setMonth(this.currentDate.getMonth() - 1);
          this.render();
        };
      }

      const title = document.createElement('span');
      title.className = 'month-title';
      title.textContent = `${monthDate.toLocaleString('default', { month: 'long' })} ${year}`;

      const rightArrow = document.createElement('span');
      rightArrow.className = m === 1 ? 'nav-arrow' : 'nav-arrow invisible';
      rightArrow.innerHTML = '<i class="ri-arrow-right-wide-fill"></i>';
      if (m === 1) {
        rightArrow.onclick = () => {
          this.currentDate.setMonth(this.currentDate.getMonth() + 1);
          this.render();
        };
      }

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

      // Empty days for alignment
      for (let b = 0; b < firstDay; b++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'empty-day';
        days.appendChild(emptyDay);
      }

      // Days of the month
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
    // Agar koi date select nahi hai
    const showChechInDate = document.querySelector(".showChechinDate")
    const showChechOutDate = document.querySelector(".showChechOutDate")
    const showChechOutDateBox = document.querySelector("#box3");
    const addGustBox = document.querySelector("#box4");
    if (this.selectedDates.length === 0) {
      showChechInDate.innerText = "Add dates"
      showChechOutDate.innerText = "Add dates";
      showChechInDate.classList.remove("showChechinDateColor");
      showChechOutDate.classList.remove("showChechinDateColor");
      console.log("Please select check-in and check-out dates");
      return;
    }

    // Agar sirf ek date select hai
    if (this.selectedDates.length === 1) {
      console.log("Check-in date is selected:", this.formatShort(this.selectedDates[0]));
      showChechInDate.innerText = this.formatShort(this.selectedDates[0]);
      showChechInDate.classList.add("showChechinDateColor");
      showChechOutDateBox.click();
      showChechOutDate.innerText = "Add dates"
      console.log("Please select check-out date");
      return;
    }

    // Agar do dates select hain
    if (this.selectedDates.length === 2) {
      // Dates ko sort karke check-in aur check-out determine karte hain
      const [checkInDate, checkOutDate] = this.selectedDates.slice().sort((a, b) => a - b);
      const dayGap = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
      showChechInDate.innerText = this.formatShort(checkInDate);
      showChechOutDate.innerText = this.formatShort(checkOutDate);

      document.querySelector("#CheckIn").value = this.formatShort(checkInDate);
      document.querySelector("#CheckOut").value = this.formatShort(checkOutDate);

      showChechInDate.classList.add("showChechinDateColor");
      showChechOutDate.classList.add("showChechinDateColor");
      addGustBox.click();
      console.log("Duration:", dayGap, "days");
    }
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
    return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;
  }
}

const searchBox = document.querySelector(".loctionSchechul");

function searchLocation() {

  const searchBox = document.querySelector(".loctionSchechul");
  const input = document.querySelector(".navSearchInputBox input");
  
  if (!searchBox || !input) {
    console.error("Required DOM elements not found");
    return;
  }
  
  let debounceTimer = null;
  
  // Default suggestions HTML
  const defaultSuggestions = `
    <li class="NavloctionSgget">Suggested destinations</li>
    <li>
      <div class="locationcox">
        <div class="locationImagNav">
          <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/ea5e5ee3-e9d8-48a1-b7e9-1003bf6fe850.png" alt="Nearby">
        </div>
        <div class="loctaionNameNav">
          <h6>Nearby</h6>
          <p>Find what's around you</p>
        </div>
      </div>
    </li>
    <li>
      <div class="locationcox">
        <div class="locationImagNav">
          <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/97624dd8-97a3-4733-97cc-b8dc0c74d23d.png" alt="Puducherry">
        </div>
        <div class="loctaionNameNav">
          <h6>Puducherry, Puducherry</h6>
          <p>Great for a weekend getaway</p>
        </div>
      </div>
    </li>
    <li>
      <div class="locationcox">
        <div class="locationImagNav">
          <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/57f4f6ff-23b1-45c9-a895-25a9863f4122.png" alt="Kodaikanal">
        </div>
        <div class="loctaionNameNav">
          <h6>Kodaikanal, Tamil Nadu</h6>
          <p>For nature lovers</p>
        </div>
      </div>
    </li>
    <li>
      <div class="locationcox">
        <div class="locationImagNav">
          <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/07869b83-5328-4f3d-8087-a7d1e9782434.png" alt="Ooty">
        </div>
        <div class="loctaionNameNav">
          <h6>Ooty, Tamil Nadu</h6>
          <p>Popular with travellers near you</p>
        </div>
      </div>
    </li>
    <li>
      <div class="locationcox">
        <div class="locationImagNav">
          <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/06f0f050-c167-4d1e-89e1-2775be94f82a.png" alt="North Goa">
        </div>
        <div class="loctaionNameNav">
          <h6>North Goa, Goa</h6>
          <p>Popular beach destination</p>
        </div>
      </div>
    </li>
    <li>
      <div class="locationcox">
        <div class="locationImagNav">
          <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/dd61b8e6-7fa1-46d7-9284-7f3977e5da31.png" alt="Yercaud">
        </div>
        <div class="loctaionNameNav">
          <h6>Yercaud, Tamil Nadu</h6>
          <p>Known for its lakes</p>
        </div>
      </div>
    </li>
    <li>
      <div class="locationcox">
        <div class="locationImagNav">
          <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/41bb6ae3-07f4-4ef4-b9d7-37d9f7a55d2b.png" alt="Bengaluru">
        </div>
        <div class="loctaionNameNav">
          <h6>Bengaluru, Karnataka</h6>
          <p>For sights like Lalbagh Botanical Garden</p>
        </div>
      </div>
    </li>
    <li>
      <div class="locationcox">
        <div class="locationImagNav">
          <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/7167e066-5543-4a7f-9fcb-50b2e477ccd6.png" alt="Mahabalipuram">
        </div>
        <div class="loctaionNameNav">
          <h6>Mahabalipuram, Tamil Nadu</h6>
          <p>For its stunning architecture</p>
        </div>
      </div>
    </li>
    <li>
      <div class="locationcox">
        <div class="locationImagNav">
          <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/447b22da-3842-4977-89c9-d58e182c0ce2.png" alt="Yelagiri">
        </div>
        <div class="loctaionNameNav">
          <h6>Yelagiri, Tamil Nadu</h6>
          <p>Known for its lakes</p>
        </div>
      </div>
    </li>
    <li>
      <div class="locationcox">
        <div class="locationImagNav">
          <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/07869b83-5328-4f3d-8087-a7d1e9782434.png" alt="Munnar">
        </div>
        <div class="loctaionNameNav">
          <h6>Munnar, Kerala</h6>
          <p>For nature lovers</p>
        </div>
      </div>
    </li>
    <li>
      <div class="locationcox">
        <div class="locationImagNav">
          <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/ebb968b2-3fb6-45d3-b675-7765e487f7b9.png" alt="New Delhi">
        </div>
        <div class="loctaionNameNav">
          <h6>New Delhi, Delhi</h6>
          <p>For sights like India Gate</p>
        </div>
      </div>
    </li>
    <li>
      <div class="locationcox">
        <div class="locationImagNav">
          <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/ebb968b2-3fb6-45d3-b675-7765e487f7b9.png" alt="Mumbai">
        </div>
        <div class="loctaionNameNav">
          <h6>Mumbai, Maharashtra</h6>
          <p>For its top-notch dining</p>
        </div>
      </div>
    </li>
    <li>
      <div class="locationcox">
        <div class="locationImagNav">
          <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/fa32e243-625d-486b-80d2-0a1bd74e214f.png" alt="Kochi">
        </div>
        <div class="loctaionNameNav">
          <h6>Kochi, Kerala</h6>
          <p>For its stunning architecture</p>
        </div>
      </div>
    </li>
    <li>
      <div class="locationcox">
        <div class="locationImagNav">
          <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/4499ccb1-c8fb-4b5c-8383-44e589d200fa.png" alt="Madikeri">
        </div>
        <div class="loctaionNameNav">
          <h6>Madikeri, Karnataka</h6>
          <p>A hidden gem</p>
        </div>
      </div>
    </li>
    <li>
      <div class="locationcox">
        <div class="locationImagNav">
          <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/58e934fa-33ed-4caf-800e-7e268bb0d3c7.png" alt="Wayanad">
        </div>
        <div class="loctaionNameNav">
          <h6>Wayanad, Kerala</h6>
          <p>Great for summer getaways</p>
        </div>
      </div>
    </li>
    <li>
      <div class="locationcox">
        <div class="locationImagNav">
          <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/2b5fff53-d328-4beb-839a-cfe4fcb4223a.png" alt="Mysore">
        </div>
        <div class="loctaionNameNav">
          <h6>Mysore, Karnataka</h6>
          <p>Popular with travellers near you</p>
        </div>
      </div>
    </li>
    <li>
      <div class="locationcox">
        <div class="locationImagNav">
          <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/72db635b-4710-4145-b326-01d9f0641e16.png" alt="Coimbatore">
        </div>
        <div class="loctaionNameNav">
          <h6>Coimbatore, Tamil Nadu</h6>
          <p>Off the beaten path</p>
        </div>
      </div>
    </li>
    <li>
      <div class="locationcox">
        <div class="locationImagNav">
          <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/ebb968b2-3fb6-45d3-b675-7765e487f7b9.png" alt="South Goa">
        </div>
        <div class="loctaionNameNav">
          <h6>South Goa, Goa</h6>
          <p>Because your wishlist has stays in South Goa</p>
        </div>
      </div>
    </li>
    <li>
      <div class="locationcox">
        <div class="locationImagNav">
          <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/ed75c050-042b-44ba-a991-54044d93a91b.png" alt="Jaipur">
        </div>
        <div class="loctaionNameNav">
          <h6>Jaipur, Rajasthan</h6>
          <p>For sights like Amber Fort</p>
        </div>
      </div>
    </li>
    <li>
      <div class="locationcox">
        <div class="locationImagNav">
          <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/447b22da-3842-4977-89c9-d58e182c0ce2.png" alt="Calangute">
        </div>
        <div class="loctaionNameNav">
          <h6>Calangute, Goa</h6>
          <p>For its bustling nightlife</p>
        </div>
      </div>
    </li>
    <li>
      <div class="locationcox">
        <div class="locationImagNav">
          <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/447b22da-3842-4977-89c9-d58e182c0ce2.png" alt="Tirupati">
        </div>
        <div class="loctaionNameNav">
          <h6>Tirupati, Andhra Pradesh</h6>
          <p>Near you</p>
        </div>
      </div>
    </li>
  `;

  // Function to show loading state
  const showLoading = () => {
    searchBox.innerHTML = `
      <div class="yuerhye1">
        <div class="dot-loader navsearchLoder">
          <div class="dot navdot"></div>
          <div class="dot navdot"></div>
          <div class="dot navdot"></div>
        </div>
      </div>
    `;
  };

  // Function to create search result item
  const createSearchResultItem = (item, query) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const imageDiv = document.createElement("div");
    const locationNameDiv = document.createElement("div");
    const locationImage = document.createElement("img");
    const locationName = document.createElement("h6");

    // Set up classes
    div.classList.add("locationcox");
    imageDiv.classList.add("locationImagNav");
    locationNameDiv.classList.add("loctaionNameNav");
    locationName.classList.add("Scear400f");

    // Set image
    locationImage.src = "https://res.cloudinary.com/dmenkblkq/image/upload/v1748702799/WhatsApp_Image_2025-04-24_at_14.22.54_daf3419c-removebg-preview_z3ur2x.png";
    locationImage.alt = `${item.city}, ${item.state}`;

    // Create regex for highlighting
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, "gi");

    // Apply highlighting to matching text
    let highlightedCity = item.city || '';
    let highlightedState = item.state || '';
    let highlightedCountry = item.country || '';

    if (regex.test(item.city)) {
      highlightedCity = item.city.replace(regex, `<span class="highlighrLoNa">$1</span>`);
    } else if (regex.test(item.state)) {
      highlightedState = item.state.replace(regex, `<span class="highlighrLoNa">$1</span>`);
    } else if (regex.test(item.country)) {
      highlightedCountry = item.country.replace(regex, `<span class="highlighrLoNa">$1</span>`);
    }

    locationName.innerHTML = `${highlightedCity}, ${highlightedState}, ${highlightedCountry}`;

    // Append elements
    imageDiv.appendChild(locationImage);
    locationNameDiv.appendChild(locationName);
    div.appendChild(imageDiv);
    div.appendChild(locationNameDiv);
    li.appendChild(div);
    
    return li;
  };

  // Function to handle search results
  const handleSearchResults = (data, query) => {
    searchBox.innerHTML = "";
    
    if (!data || data.length === 0) {
      searchBox.innerHTML = `
        <li class="NavloctionSgget">No results found</li>
        <li>
          <div class="locationcox">
            <div class="loctaionNameNav">
              <h6>No locations found for "${query}"</h6>
              <p>Try a different search term</p>
            </div>
          </div>
        </li>
      `;
      return;
    }
    console.log(data.length)
  


    data.forEach(item => {
      if (item && item.city && item.state && item.country) {
        const listItem = createSearchResultItem(item, query);
        searchBox.appendChild(listItem);
      }
        if(data.length === 1){
      
      document.querySelector(".dropdown").style.height = "19.6vh"
    }else if(data.length === 2){
      console.log(data.length)
     document.querySelector(".dropdown").style.height = "30.6vh"
    }else if(data.length === 3){
      console.log(data.length)
     document.querySelector(".dropdown").style.height = "42.6vh"
    }else if(data.length === 4){
     document.querySelector(".dropdown").style.height = "53.6vh"
    } else if(data.length === 5){
      document.querySelector(".dropdown").style.height = "64.6vh"
    }
    });
  };

  // Function to handle API errors
  const handleError = (error) => {
    console.error("Search error:", error);
    searchBox.innerHTML = `
      <li class="NavloctionSgget">Error</li>
      <li>
        <div class="locationcox">
          <div class="loctaionNameNav">
            <h6>Something went wrong</h6>
            <p>Please try again later</p>
          </div>
        </div>
      </li>
    `;
  };

  // Initialize with default suggestions
  searchBox.innerHTML = defaultSuggestions;
  ShowLolocationInNav()
  // Add input event listener
  input.addEventListener("input", (e) => {
    const query = e.target.value.trim();

    // Clear previous timer
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    // If query is empty, show default suggestions
    if (query.length === 0) {
      searchBox.innerHTML = defaultSuggestions;
      ShowLolocationInNav()
      document.querySelector(".dropdown").style.height = "64.6vh"
      return;
    }

    // If query is too short, don't search
    // if (query.length < 2) {
    //   return;
    // }

    // Show loading state
    // showLoading();

    // Set new timer for debounced search
    debounceTimer = setTimeout(() => {
      fetch(`/location-autocomplete?q=${encodeURIComponent(query)}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log(query.length,data.length)
          handleSearchResults(data, query);
          ShowLolocationInNav()
        })

        .catch(error => {
          handleError(error);
        });
    }, 300);
  });

  // Optional: Add focus event to show suggestions when input is focused
  input.addEventListener("focus", () => {
    if (input.value.trim().length === 0) {
      // searchBox.innerHTML = defaultSuggestions;
      searchBox.innerHTML = "kfahfhajh";
      ShowLolocationInNav()
      document.querySelector(".dropdown").style.height = "64.6vh"
    }
  });



}

function ShowLolocationInNav(){
 const searchBox = document.querySelectorAll(".locationcox");
 const searchBoxInput = document.querySelector(".navSearchInputBox input");
 const CleanderBox = document.querySelector("#box2");
  
  if (searchBox.length === 0) {
    console.log("No elements found with class 'locationcox'");
    return;
  }
  searchBox.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      const div = item.querySelector(".loctaionNameNav h6").textContent
      

      
      searchBoxInput.value = div;
      CleanderBox.click()
    });
  });       
}


function addGustEvent() {
  let guests = 0;
  let Children = 0;

  const addGustNum = document.querySelector(".gustaddBtndt");
  const removeGustNum = document.querySelector(".gustmainsBtndt");
  const GustNum = document.querySelector(".gustNumderdt");
  const disGustNum = document.querySelector(".btnCoverGustAdd22");
  const disGustNum1 = document.querySelector(".btnCoverGustAdd2");
  const NavShowSs = document.querySelector(".AddGustCountNav");

  const removeClil = document.querySelector(".cillDeAdd");
  const addClil = document.querySelector(".cillDeremove");
  const cilldCount = document.querySelector(".cilldCount");
  const removeCover = document.querySelector(".addClilAddCover");
  const AddCover = document.querySelector(".removeClilAddCover");

  // Initial button states
  removeGustNum.classList.add("BtmDistbalNav");
  disGustNum.classList.add("btnCoverGustAdd");

  function updateNavText() {
    const total = guests + Children;
    document.querySelector("#Guests").value = guests;
    document.querySelector("#Children").value = Children;
    if (total >= 16) {
      NavShowSs.innerText = `${total}+ guests`;
      NavShowSs.classList.add("colorAddGusrnav")
    } else if (total > 0) {
      NavShowSs.innerText = `${total} guests`;
      NavShowSs.classList.add("colorAddGusrnav")
    } else {
      NavShowSs.innerText = `Add guests`;
      NavShowSs.classList.remove("colorAddGusrnav")
    }
  }

  addGustNum.addEventListener("click", () => {
    if (guests + Children < 16 && guests < 16) {
      guests++;
      GustNum.innerText = guests;

      removeGustNum.classList.remove("BtmDistbalNav");
      disGustNum.classList.remove("btnCoverGustAdd");

      addGustNum.classList.remove("BtmDistbalNav");
      disGustNum1.classList.remove("btnCoverGustAdd");

      if (guests + Children >= 16) {
        addGustNum.classList.add("BtmDistbalNav");
        disGustNum1.classList.add("btnCoverGustAdd");
        addClil.classList.add("BtmDistbalNav");
        removeCover.classList.add("btnCoverGustAdd");
      }
    }

    updateNavText();
  });

  removeGustNum.addEventListener("click", () => {
    if (guests > 0) {
      guests--;
      GustNum.innerText = guests;

      addGustNum.classList.remove("BtmDistbalNav");
      disGustNum1.classList.remove("btnCoverGustAdd");
      addClil.classList.remove("BtmDistbalNav");
      removeCover.classList.remove("btnCoverGustAdd");
      disGustNum.classList.remove("btnCoverGustAdd");

      if (guests === 0) {
        removeGustNum.classList.add("BtmDistbalNav");
        disGustNum.classList.add("btnCoverGustAdd");
      }
    }

    updateNavText();
  });

  addClil.addEventListener("click", () => {
    if (guests + Children < 16 && Children < 16) {
      Children++;
      cilldCount.innerText = Children;

      removeClil.classList.remove("BtmDistbalNav");
      removeCover.classList.remove("btnCoverGustAdd");

      addGustNum.classList.remove("BtmDistbalNav");
      disGustNum1.classList.remove("btnCoverGustAdd");

      if (guests + Children >= 16) {
        addClil.classList.add("BtmDistbalNav");
        removeCover.classList.add("btnCoverGustAdd");
        addGustNum.classList.add("BtmDistbalNav");
        disGustNum1.classList.add("btnCoverGustAdd");
      }
    }

    updateNavText();
  });

  removeClil.addEventListener("click", () => {
    if (Children > 0) {
      Children--;
      cilldCount.innerText = Children;

      addClil.classList.remove("BtmDistbalNav");
      removeCover.classList.remove("btnCoverGustAdd");
      addGustNum.classList.remove("BtmDistbalNav");
      disGustNum1.classList.remove("btnCoverGustAdd");

      if (Children === 0) {
        removeClil.classList.add("BtmDistbalNav");
        removeCover.classList.add("btnCoverGustAdd");
      }
    }

    updateNavText();
  });


  //Infants
  let Infants = 0
  let alddCg = Children + guests;
  const AddInfants = document.querySelector(".addInfants");
  const RemovInfants = document.querySelector(".removeInfants");
  const InfantsCount= document.querySelector(".InfantsConst");
  const AddCoverInfants= document.querySelector(".addInfantsCover");
  const removecoverInfants= document.querySelector(".removeInfantsCover");

  const NavShowInfants = document.querySelector(".InfantsClass")

  AddInfants.addEventListener("click",()=>{
    console.log(alddCg)
    if (1 > guests ) {
      console.log(alddCg)
      guests++;
      GustNum.innerText = guests;
      updateNavText();
    }
    Infants++;
     NavShowInfants.innerText = `, ${Infants} infant`
    InfantsCount.innerText = Infants;
    
    document.querySelector("#Infants").value = Infants;
   

    // removeclass
    RemovInfants.classList.remove("BtmDistbalNav")
    removecoverInfants.classList.remove("btnCoverGustAdd");

    if (Infants >=5) {
      AddInfants.classList.add("BtmDistbalNav")
    AddCoverInfants.classList.add("btnCoverGustAdd");

    }
  })



   RemovInfants.addEventListener("click",()=>{

    Infants--;
    InfantsCount.innerText = Infants;
    NavShowInfants.innerText = `, ${Infants} infant`
    document.querySelector("#Infants").value = Infants;

          AddInfants.classList.remove("BtmDistbalNav")
    AddCoverInfants.classList.remove("btnCoverGustAdd");

        if (Infants <= 0) {
          NavShowInfants.innerText = ``
          document.querySelector("#Infants").value = 0;
      RemovInfants.classList.add("BtmDistbalNav")
    removecoverInfants.classList.add("btnCoverGustAdd")
    }
  })
  
}



function search(){
  
const searchBtn = document.querySelector(".bigsaerchClassVdd");

console.log(searchBtn)
searchBtn.addEventListener("click",()=>{
  console.log("BtnClick")
  
const data = {
      location: document.querySelector("#location").value,
      CheckOut: document.querySelector("#CheckOut").value,
      CheckIn: document.querySelector("#CheckIn").value,
      Guests: document.querySelector("#Guests").value,
      Children: document.querySelector("#Children").value,
      Infants: document.querySelector("#Infants").value
    };

  fetch("/Search",{
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(data)
  }).then(res => {
    console.log("datawassend")
  }).catch(err => {
    console.error("Search api error")
  })


})
}




// Initialize
document.addEventListener('DOMContentLoaded', () => {
  
   

  if (navSearch) {
    setupHoverEffects();
    attachBoxListeners();
    search();
  }
});

console.log(document.querySelectorAll(".locationcox"))
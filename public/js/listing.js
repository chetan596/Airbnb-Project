

document.querySelectorAll(".swipar-bnt").forEach((box) => {
  box.style.display = "none";
})
document.querySelectorAll(".swiper-button-prev").forEach((box) => {
  box.style.display = "none";
})

fetch("/listingFilterData")
  .then(res => res.json())
  .then(datas => {


    const allFilterBoxes = document.querySelectorAll(".filterSmallMAinBox");

    datas.reverse().forEach((img, index) => {
      const box = allFilterBoxes[index];
      if (box) {
        // Child elements find करें
        const imgDiv = box.querySelector(".filter-img");
        const nameDiv = box.querySelector(".filterName");
        const imgElement = box.querySelector(".filter-img img");
        const nameElement = box.querySelector(".filterName p");

        // Classes remove करें
        imgDiv.classList.remove("lodinnglcassff", "loding");
        nameDiv.classList.remove("lodinnglcassffparadd", "loding");

        // Content set करें
        imgElement.src = img.image;
        nameElement.innerHTML = img.title;
      }
      // console.log(img)
    });
  })

const filter = document.querySelector(".filter");
const rightBtn = document.querySelector(".next-btn22");
const leftBtn = document.querySelector(".rightddd");

function scrollBox(direction) {
  const scrollAmount = 150;
  const duration = 300;
  const start = filter.scrollLeft;
  const maxScroll = filter.scrollWidth - filter.clientWidth;
  let end;

  if (direction === "right") {
    end = Math.min(start + scrollAmount, maxScroll);
  } else {
    end = Math.max(start - scrollAmount, 0);
  }

  let startTime = null;

  function animateScroll(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutQuad(progress);
    filter.scrollLeft = start + (end - start) * ease;

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    } else {
      updateButtonVisibility();
    }
  }

  requestAnimationFrame(animateScroll);
}

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function updateButtonVisibility() {
  const maxScroll = filter.scrollWidth - filter.clientWidth;
  const currentScroll = filter.scrollLeft;

  // Left button visibility
  leftBtn.style.visibility = currentScroll <= 0 ? "hidden" : "visible";

  // Right button visibility
  rightBtn.style.visibility = currentScroll >= maxScroll - 1 ? "hidden" : "visible";
}

// Button click handlers
rightBtn.addEventListener("click", () => scrollBox("right"));
leftBtn.addEventListener("click", () => {
  if (filter.scrollLeft > 0) {
    scrollBox("left");
  }
});

// Update visibility on scroll and resize
filter.addEventListener("scroll", updateButtonVisibility);
window.addEventListener("resize", updateButtonVisibility);

// Initial state
updateButtonVisibility();




var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 4,

  },
  mousewheel: true,
  keyboard: true,
});


document.querySelectorAll(".swiper").forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.querySelector(".swipar-bnt").style.display = "flex"
    box.querySelector(".swiper-button-prev").style.display = "flex"
  })
})
document.querySelectorAll(".swiper").forEach((box) => {
  box.addEventListener("mouseleave", () => {
    box.querySelector(".swipar-bnt").style.display = "none";
    box.querySelector(".swiper-button-prev").style.display = "none";
  })
});

document.querySelectorAll(".swiper-button-next").forEach((box) => {
  box.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
  })

})

document.querySelectorAll(".swiper-button-prev").forEach((box) => {
  box.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
  })

})



// Called from login file, sets up click tracking
function wishlistUpdate(isUserLoggedIn) {
  console.log(isUserLoggedIn, "isUserLoggedIn","wishlistUpdate called");
  document.querySelectorAll(".listing-box-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const hotelId = link.getAttribute("href").split("/").pop();
      const visitDate = new Date().toISOString();

      if (isUserLoggedIn) {
        updateRecentHotels({ id: hotelId, date: visitDate });
      } else {
        saveToLocalStorage(hotelId, visitDate);
      }
    });
  });
}

// Save for guest
function saveToLocalStorage(hotelId, visitDate) {
    console.log("Saving to localStorage for guest user", hotelId, visitDate);
  const username = localStorage.getItem("currentUsername") || "guest";
  let recentHotels = JSON.parse(localStorage.getItem(`recentHotels_${username}`)) || [];

  recentHotels = recentHotels.filter(h => h.id !== hotelId);
  recentHotels.unshift({ id: hotelId, date: visitDate });
  localStorage.setItem(`recentHotels_${username}`, JSON.stringify(recentHotels));
}

// Sync guest data to backend on login
function syncRecentToDatabase(username) {

  console.log("Syncing recent hotels for user:", username);
  const key = `recentHotels_${username}`;
  const recentHotels = JSON.parse(localStorage.getItem(key)) || [];
  console.log("Recent hotels to sync:", recentHotels);
  if (!recentHotels.length) return;

  fetch("/user/wishlist/recentHotels", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ recentHotels })
  })
    .then(res => res.json())
    .then(data => {
      localStorage.removeItem(key); // ✅ Clean up after sync
      console.log("Synced recent hotels for", username, data);
    })
    .catch(err => console.error("Sync error:", err));
}

// Logged-in user's direct updates
function updateRecentHotels(entry) {
  console.log("Updating recent hotels for logged-in user", entry);
  fetch("/user/wishlist/recentHotels", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ recentHotels: [entry] })
  })
    .then(res => res.json())
    .then(data => {
      console.log("Updated hotel for logged-in user", data);
    })
    .catch(err => console.error("Update error:", err));
}



const wishListCreateInpute = document.querySelector(".inputBoxWishList input"); 
const wishListCreateLabel = document.querySelector(".inputBoxWishList label");
const wishListCreateBox = document.querySelector(".inputBoxWishList");

wishListCreateInpute.addEventListener("focus",()=>{
  wishListCreateLabel.classList.add("focusedLabel");
  wishListCreateBox.classList.add("wishListInputBoxBorderFocus");
  console.log("focused");
})



wishListCreateInpute.addEventListener("focusout",(e)=>{
  wishListCreateInpute.value.length < 1 && wishListCreateLabel.classList.remove("focusedLabel");
  wishListCreateBox.classList.remove("wishListInputBoxBorderFocus");
  console.log("focusedout");
})

wishListCreateInpute.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  const length = value.length;
  const inputeLenght = document.querySelector(".wishListNameLength");
  const createButton = document.querySelector(".createWishlIstBtnFrom");  
  inputeLenght.textContent = `${length}/50 characters`;
  if(length >=1){
    console.log(length, "ON");
    createButton.classList.add("createWishlIstBtnFromActive");
    createButton.disabled = false;
  }else{
     console.log(length, "OFF")
      createButton.classList.remove("createWishlIstBtnFromActive");
    createButton.disabled = true;
  }
});


const wishListFromData = document.getElementById("wishListFrom");

wishListFromData.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target); 
  const data = Object.fromEntries(formData.entries());

fetch("/user/wishlistCreate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
})
.then(async (res) => {
  const contentType = res.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return res.json();
  } else {
    const text = await res.text(); // fallback for HTML
    throw new Error("Non-JSON response: " + text);
  }
})
.then(data => {
  console.log("Wish list created:", data);
})
.catch(err => console.error("Error creating wish list:", err));

});



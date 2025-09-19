let selectedWishlist = localStorage.getItem("selectedWishlist");

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

const inputeWishListFromHtml = `      <div class="wishCreateContante">
        <div class="NewWishListCreate">
          <div class="wishListHadingBOx">
            <h1>Create wishlist</h1>
            <button><i class="ri-arrow-left-line"></i></button>
          </div>

          <div class="wishListinputFrom">
            <form id="wishListFrom">
              <div class="wishListNameCreate">
                <div class="inputBoxWishList">
                  <label for="wishListName" class="wishListNameLabel">Name</label>
                  <input type="text" id="wishListName" name="wishListName" maxlength="50" required>
                </div>
                <span class="wishListNameLength">0/50 characters</span>
              </div>

              <div class="createWishlIstContanerBTn">
                <div class="createWishlIstBtn">
                  <div>
                    <span>Cancel</span>
                  </div>
                 <div>
                   <button class="createWishlIstBtnFrom" type="submit" disabled>Create</button>
                 </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
`
const wishCreateSavePopHtml = `
      <div class="wishListCreatePoP">
        <div class="wishListCreatecontaner">
          <div class="wishListCreateImgBox">
            <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
          </div>
          <div class="whisListsaveName">
            <p>save to <span>WishList</span></p>
          </div>
        </div>

        <div class="wishListChangeBtn">
          <button class="wishListChangeBtnbtn goudiennde" id="goudiennde">Change</button>
        </div>
      </div>
`;


function addWishListCreateFrom(id) {
  console.log("addWishListCreateFrom called with id:", id);

  document.body.insertAdjacentHTML("beforeend", inputeWishListFromHtml);

  // Wait until the element is actually added
  const wishListCreateInpute = document.querySelector(".inputBoxWishList input");
  if (!wishListCreateInpute) {
    console.error("Wishlist input element not found!");
    return;
  }

  const wishListCreateLabel = document.querySelector(".inputBoxWishList label");
  const wishListCreateBox = document.querySelector(".inputBoxWishList");

  // Input focus handlers
  wishListCreateInpute.addEventListener("focus", () => {
    wishListCreateLabel.classList.add("focusedLabel");
    wishListCreateBox.classList.add("wishListInputBoxBorderFocus");
  });

  wishListCreateInpute.addEventListener("focusout", () => {
    if (wishListCreateInpute.value.length < 1) {
      wishListCreateLabel.classList.remove("focusedLabel");
    }
    wishListCreateBox.classList.remove("wishListInputBoxBorderFocus");
  });

  // Input change handler
  wishListCreateInpute.addEventListener("input", (e) => {
    const value = e.target.value.trim();
    const length = value.length;
    const inputLength = document.querySelector(".wishListNameLength");
    const createButton = document.querySelector(".createWishlIstBtnFrom");

    inputLength.textContent = `${length}/50 characters`;

    if (length >= 1) {
      createButton.classList.add("createWishlIstBtnFromActive");
      createButton.disabled = false;
    } else {
      createButton.classList.remove("createWishlIstBtnFromActive");
      createButton.disabled = true;
    }
  });

  const wishListFromData = document.getElementById("wishListFrom");
  if (!wishListFromData) {
    console.error("Wishlist form not found!");
    return;
  }

  // Handle form submit
  wishListFromData.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    fetch("/user/wishlistCreate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, id }),
    })
      .then(async (res) => {
        const contentType = res.headers.get("content-type");
        if (contentType?.includes("application/json")) {
          return res.json();
        } else {
          const text = await res.text();
          throw new Error("Non-JSON response: " + text);
        }
      })
      .then((data) => {
        console.log("Wish list created:", data);

        if (data.status) {
          selectedWishlist = data.wishListName;
          localStorage.setItem("selectedWishlist", data.wishListName);

          document.querySelector(".wishCreateContante")?.remove();

          let aTage = document.querySelector(`a[href='/${data.hotelId}']`);
          if (aTage) {
            aTage.querySelector(".wislist-conttainer svg").style.fill = "#FF385C";
          }

          document.body.insertAdjacentHTML("beforeend", wishCreateSavePopHtml);
          const imgBox = document.querySelector(".wishListCreateImgBox img");
          const nameSpan = document.querySelector(".whisListsaveName span");
          if (imgBox && nameSpan) {
            imgBox.src = data.hotelImg;
            nameSpan.textContent = data.wishListName;
            document.querySelector(".goudiennde")?.addEventListener("click", addWishListCreateFrom.bind(null,data.hotelId));
          }

          setTimeout(removeWishListPOP, 3000);
        } else if (data.allreadyExty) {
          console.warn("Hotel already exists in wishlist");
          removeWishlist(data.wishListName, data.hotelId);
        }
      })
      .catch((err) => console.error("Error creating wish list:", err));
  });
}

function addToWishList(id, selectedWishlist) {
  console.log("Adding to wishlist:", id, selectedWishlist);

  fetch("/user/wishlistAdd", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, wishListName: selectedWishlist }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status) {
        document.body.insertAdjacentHTML("beforeend", wishCreateSavePopHtml);

        let aTage = document.querySelector(`a[href='/${data.hotelId}']`);
        if (aTage) {
          aTage.querySelector(".wislist-conttainer svg").style.fill = "#FF385C";
        }

        setTimeout(() => {
          const imgBox = document.querySelector(".wishListCreateImgBox img");
          const nameSpan = document.querySelector(".whisListsaveName span");
          if (imgBox && nameSpan) {
            imgBox.src = data.hotelImg;
            nameSpan.innerHTML = data.wishListName;
          }
          document.querySelector(".goudiennde")?.addEventListener("click", addWishListCreateFrom.bind(null,data.hotelId));

        }, 2000);


        setTimeout(removeWishListPOP, 3000);
      } else if (data.allreadyExty) {
        removeWishlist(data.wishListName, data.hotelId);
      }
    })
    .catch((err) => console.error("Error adding to wishlist:", err));
}

function removeWishlist(wishListName, hotelId) {
  console.log("Removing from wishlist:", wishListName, hotelId);

  fetch("/user/wishlist", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ wishListName, hotelId }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Hotel removed from wishlist", data);

      if (data.status === "ok") {
        let aTage = document.querySelector(`a[href='/${data.hotelId}']`);
        if (aTage) {
          aTage.querySelector(".wislist-conttainer svg").style.fill =
            "rgba(0, 0, 0, 0.5)";
        }

        setTimeout(() => {
          document.body.insertAdjacentHTML("beforeend", wishCreateSavePopHtml);
          document.querySelector(".wishListChangeBtn").style.display = "none";

          const imgBox = document.querySelector(".wishListCreateImgBox img");
          const container = document.querySelector(".whisListsaveName");

          if (imgBox && container) {
            imgBox.src = data.hotelImg;
            container.innerHTML = `<p>Removed from <span>${data.wishListName}</span></p>`;
          }

          setTimeout(removeWishListPOP, 3000);
        }, 1300);
      } else {
        alert("Error: " + data.message);
      }
    })
    .catch((err) => console.error("Error removing wishlist:", err));
}

function removeWishListPOP() {
  const wishListCreatePop = document.querySelector(".wishListCreatePoP");
  if (wishListCreatePop) {
    wishListCreatePop.classList.add("wishListCreatePoPFadeOut22");
    setTimeout(() => wishListCreatePop.remove(), 500);
  }
}





// wishList detele contaner



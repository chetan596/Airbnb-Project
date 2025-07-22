fetch("/listingFilterData")
.then(res => res.json())
.then(datas =>{
    
   
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


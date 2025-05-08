const urlParams = window.location.pathname.split('/');
const listingId = urlParams[urlParams.length - 1]; // '665a123456789'

let hedingBox = document.querySelector(".herae")
let heding = document.querySelector("#h2")
let image1Box = document.querySelector(".mainImage")
let image1 = document.querySelector(".mainImage img")
let para1 = document.querySelector(".ehrh")
let para2 = document.querySelector(".uieri")
let ratingBox = document.querySelector(".reting-box")
let ratingBoxIcon = document.querySelector(".reting-box i")
let ratingBoxPara = document.querySelector(".reting-box p")
let ratingBoxText = document.querySelector(".reting-box a")

// API call with the ID in URL
fetch(`/api/listing/${listingId}`)
  .then((response) => {
    return response.json(); // return this Promise
  })
  .then((data) => {  

      heding.innerText = data.title;
      image1.src = data.image
      para1.innerText = `${data.location.CityTown} in ${data.location.StateUnionTerritory},${data.location.country}`;
      para2.innerText = `${data.floorPlan.Guests} guests . ${data.floorPlan.Bedrooms} bedrooms . ${data.floorPlan.Bed} beds`;
      ratingBoxPara.innerText = "8.86 ."
      ratingBoxText.innerText = " 88 review"
      ratingBoxIcon.classList.remove("none")
      para1.classList.remove("loding");         
      para2.classList.remove("loding");         
      ratingBox.classList.remove("loding");         
      hedingBox.classList.remove("loding");         
      image1Box.classList.remove("loding");
    
   })
  .catch((err) => {
    console.log(err);
  });

let nextBnt = document.querySelector(".s2-bnt-next");
nextBnt.classList.add("bnutdfa")
nextBnt.innerText = "Publish"
let popup = document.querySelector(".pop-up-s17")
nextBnt.addEventListener("click",(e)=>{
  e.preventDefault()
  popup.style.display = "flex"
})

let buttom = document.querySelector("button")


validateData()

function validateData() {
    axios.post('/listingData/listing-reviewData', {
        // Dummy Data send kar raha hun
        hotelType: "hotel",
        roomType: "",
        location: {},
        floorPlan: {},
        bathrooms: {},
        occupancy: ["single"],
        amenitiess: {},
        title: "Best Hotel",
        description: "Nice stay",
        describe: ["double"],
        instantBook: "yes",
        welcomeReservation: "no",
        price: 100
    })
    .then(response => {
        const { successFields, errorFields } = response.data;
        // const gridBox = document.getElementById('gridBox');
        // gridBox.innerHTML = '';
        console.log(successFields)

        console.log(errorFields)
        const delay = 2000;
function showCard(id) {
  document.getElementById(id).classList.add('visible');
}
function populateList(containerId, items, isError) {
  const cont = document.getElementById(containerId);
  items.forEach(text => {
    const pill = document.createElement('span');
    pill.className = 'pill ' + (isError ? 'pill-error' : 'pill-success');
    pill.textContent = text;
    cont.appendChild(pill);
  });
}
// Sequence
setTimeout(() => {
  populateList('successList', successFields, false);
  showCard('card1');
}, delay);
setTimeout(() => {
  populateList('errorList', errorFields, true);
  showCard('card2');
}, delay * 2);
setTimeout(() => {
  const buttons = document.getElementById('actionButtons');
  if (errorFields.length === 0) {
    const btn = document.createElement('a'); btn.className='btn btn-primary'; btn.textContent='Finish';btn.href ="/" ;buttons.appendChild(btn);
  } else {
     let eradf = document.createElement("a"); eradf.className='btn btn-secondary' ; eradf.textContent='Re-enter data'; eradf.href = "/listing/become-a-host"
    // const retry = document.createElement('button'); retry.; retry.;
    buttons.append( eradf);
  }
  showCard('card3');
}, delay * 3);





    })
    .catch(error => {
        console.error(error);
    });
}

let ddd = document.querySelector(".btn-secondary")
  

// Theme toggle
// document.getElementById('theme-toggle').onclick = () => {
//   const body = document.body;
//   body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
// };
// const successFields = ['Location', 'Title', 'Description', 'Image', 'Image', 'Image', 'Image', 'Image', 'Image', 'Image'];
// const errorFields   = ['Tags', 'Rating'];

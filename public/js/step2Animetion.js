
function name(params) {
  document.querySelector(".s-line-1").style.width = "100%";

}
name();

fetch("/listingData/structureData")
  .then((response) => {
    return response.json(); // return this Promise
  })
  .then((data) => {
    let arr = data[0].hotelType;
   let grid = document.querySelector(".s-grid");
arr.forEach((e,i)=> {
  let box = document.createElement("div");
  let box2 = document.createElement("div");
  let img = document.createElement("div");
  let img2 = document.createElement("img");

  let para = document.createElement("p");


  box.classList = "s-grid-boxs";
  box2.classList = "s-icon";
  img.classList = "s2-img";
  img2.src = e.image;
  para.innerHTML = e.title;
  box.style.animationDelay = `${0.4 + i * 0.1}s`
  console.log()
  grid.appendChild(box);
  box.appendChild(box2)
  box.setAttribute("data" , e.title)
  box2.appendChild(img)
  img.appendChild(img2)
  // img2.setAttribute("loading","lazy")
  img.appendChild(para)
  // console.log(a.image);

})
let nextBnt = document.querySelector(".s2-bnt-next");
desebal(nextBnt)
function desebal(egg){
  egg.removeAttribute("href")
  egg.classList.add("desebal")
  // alert("PPPPP")
}

let selectedValue = null;

let selBxs = document.querySelectorAll(".s-grid-boxs");
selBxs.forEach((card)=>{
  card.addEventListener("click",()=>{
    document.querySelectorAll(".s-grid-boxs").forEach(c => c.classList.remove("selected"))
    card.classList.add("selected");
    selectedValue = card.getAttribute("data");
    if(!selectedValue){
      console.log("ddddf")
    }else{
      nextBnt.setAttribute("href" , "/listing/privacy-type")
      nextBnt.classList.remove("desebal");
  console.log("reove");
  
    }
  })
})
nextBnt.addEventListener("click",()=>{
  submitData();
  
})
function submitData() {
  if(!selectedValue) return alert("hjkk") ;
  fetch("/listingData/hotel-type-data",{
    method : "POST",
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify({hotelType: selectedValue})
  }).then(res => res.json())
    .then((data) =>{}).catch((err)=>{
      console.log("-----Error-----");
      
    })
}
  })
  .catch((err) => {
    console.log(err);
  });




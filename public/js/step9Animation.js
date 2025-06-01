const pathSegments = window.location.pathname.split('/');
const listingId = pathSegments[2]; 
 
function name(params) {
  document.querySelector(".s-line2-1").style.width = "100%";

}
name();

document.querySelector(".s-line-1").classList.add("opop")
document.querySelector(".s-line-2").classList.add("opop")
document.querySelector(".s-line-3").classList.add("opop")
document.querySelector(".s-line-4").classList.add("opop")
document.querySelector(".s-line-5").classList.add("opop")
document.querySelector(".s-line-6").classList.add("opop")
document.querySelector(".s-line-7").classList.add("opop")

fetch(`/listingData/amenitiesData`)
  .then((response) => {
    return response.json(); // return this Promise
  })
  .then((data) => {  

    const arr2 = data[0];
    const arr = data[1];
    

    let grid = document.querySelector(".s-grid");
    arr2.forEach((e, i) => {
      let box = document.createElement("div");
      let box2 = document.createElement("div");
      let img = document.createElement("div");
      let img2 = document.createElement("img");
    
      let para = document.createElement("p");
    
    
      box.classList = "lopiu";
      box2.classList = "s9-pqwe";
      img.classList = "s2-img";
      img2.src = e.image;
      para.innerHTML = e.title;
      box.style.animationDelay = `${0.4 + i * 0.1}s`
      console.log()
      grid.appendChild(box);
      box.appendChild(box2)
      box.setAttribute("data", e.title)
      box2.appendChild(img)
      img.appendChild(img2)
      // img2.setAttribute("loading","lazy")
      img.appendChild(para)
      // console.log(a.image);
    
    })
    let nextBnt = document.querySelector(".s2-bnt-next");
    desebal(nextBnt)
    function desebal(egg) {
      egg.removeAttribute("href")
      egg.classList.add("desebal")
      // alert("PPPPP")
    }
    
    let selectedValue = [];
    let selectedValue2 = [];
    let selBxs = document.querySelectorAll(".lopiu");
    selBxs.forEach((card2) => {
      card2.addEventListener("click", () => {
        document.querySelectorAll(".lopiu").forEach(c => c.classList.remove("selectedds"))
        // console.log(card2, "dddd22")
        card2.classList.toggle("selected2");
        if (!selectedValue.includes(card2.getAttribute("data"))) {
          selectedValue.push(card2.getAttribute("data"))
        } else {
          selectedValue = selectedValue.filter(item => item !== card2.getAttribute("data"))
        }
        if (!selectedValue) {
          alert("!selectedValue , ------Error-------")
        } else {
          
              if(selectedValue.length != 0 || selectedValue2 != 0){
          nextBnt2.setAttribute("href", `/listing/${listingId}/title`)
          nextBnt2.classList.remove("desebal");
          
          console.log(selectedValue.length,  selectedValue2.length ,  'rtyh');
         }else{
          desebal(nextBnt2)
          console.log(selectedValue.length,  selectedValue2.length);
         }
          
         
          
        
    
        }
      })
    })
    // nextBnt.addEventListener("click",()=>{
    //   submitData();
    
    // })
    // function submitData() {
     
    //     fetch("/occupancy", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ value: selectedValue })
    //     }).then(res => res.json())
    //       .then((data) => { }).catch((err) => {
    //         console.log("-----Error-----");
    
    //       })
    //   }
        
      
    
    
    
    
    
    // 2 boxs--------
    
    let grid2 = document.querySelector("#ddfe");
    arr.forEach((e, i) => {
      let box = document.createElement("div");
      let box2 = document.createElement("div");
      let img = document.createElement("div");
      let img2 = document.createElement("img");
    
      let para = document.createElement("p");
    
    
      box.classList = "s-grid-boxs123";
      box2.classList = "s-icon";
      img.classList = "s2-img";
      img2.src = e.image;
      para.innerHTML = e.title;
      box.style.animationDelay = `${1.3 + i * 0.1}s`
      // console.log()
      grid2.appendChild(box);
      box.appendChild(box2)
      box.setAttribute("data", e.title)
      box2.appendChild(img)
      img.appendChild(img2)
      // img2.setAttribute("loading","lazy")
      img.appendChild(para)
      // console.log(a.image);
    
    })
    let nextBnt2 = document.querySelector(".s2-bnt-next");
    desebal(nextBnt2)
    function desebal(egg) {
      egg.removeAttribute("href")
      egg.classList.add("desebal")
      // alert("PPPPP")
    }
    
    
    
    let selBxs2 = document.querySelectorAll(".s-grid-boxs123");
    selBxs2.forEach((card) => {
      card.addEventListener("click", () => {
        document.querySelectorAll(".s-grid-boxs").forEach(c => c.classList.remove("selectedds"))
        // console.log(card, "dddd")
        card.classList.toggle("selected2");
        if (!selectedValue2.includes(card.getAttribute("data"))) {
          selectedValue2.push(card.getAttribute("data"))
        } else {
          selectedValue2 = selectedValue2.filter(item => item !== card.getAttribute("data"))
        }
        if (!selectedValue2) {
          alert("!selectedValue2 , ------Error-------")
        } else {
          console.log(selectedValue2 , "2vlar--");
          
         if(selectedValue.length != 0 || selectedValue2 != 0){
          nextBnt2.setAttribute("href",  `/listing/${listingId}/title`)
          nextBnt2.classList.remove("desebal");
          
          console.log(selectedValue.length,  selectedValue2.length ,  'rtyh');
         }else{
          desebal(nextBnt2)
          console.log(selectedValue.length,  selectedValue2.length);
         }
          
          
          // console.log("reove");
    
        }
      })
    })
    nextBnt2.addEventListener("click", () => {
      if(selectedValue.length != 0 || selectedValue2.length !=0){
        // submitData();
        submitData2();
      }else{
       alert("-Error-")
      }
    
    })
    function submitData2() {
    
      fetch("/listingData/occupancy2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amenities: selectedValue2 , standoutAmenities: selectedValue})
      }).then(res => res.json())
        .then((data) => { }).catch((err) => {
          console.log("-----Error-----");
    
        })
    
    
    }
   })
  .catch((err) => {
    console.log(err);
  });


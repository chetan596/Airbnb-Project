function name(params) {
    document.querySelector(".s-line2-4").style.width = "100%"
  
  }
  name()
  document.querySelector(".s-line2-1").classList.add("opop")
  document.querySelector(".s-line2-2").classList.add("opop")
  document.querySelector(".s-line2-3").classList.add("opop")
  
  document.querySelector(".s-line-1").classList.add("opop")
  document.querySelector(".s-line-2").classList.add("opop")
  document.querySelector(".s-line-3").classList.add("opop")
  document.querySelector(".s-line-4").classList.add("opop")
  document.querySelector(".s-line-5").classList.add("opop")
  document.querySelector(".s-line-6").classList.add("opop")
  document.querySelector(".s-line-7").classList.add("opop")













let grid = document.querySelector(".s-grid-s12");
// arr.forEach((e,i)=> {
//   let box = document.createElement("div");
//   let box2 = document.createElement("div");
//   let img = document.createElement("div");
//   let img2 = document.createElement("img");

//   let para = document.createElement("p");


//   box.classList = "s-grid-boxs-s12";
//   box2.classList = "s-icon-s-12";
//   img.classList = "s2-img-s12";
//   img2.src = e.image;
//   para.innerHTML = e.title;
//   box.style.animationDelay = `${0.4 + i * 0.1}s`
//   console.log()
//   grid.appendChild(box);
//   box.appendChild(box2)
//   box.setAttribute("data" , e.title)
//   box2.appendChild(img)
//   img.appendChild(img2)
//   // img2.setAttribute("loading","lazy")
//   img.appendChild(para)
//   // console.log(a.image);

// })
let nextBnt = document.querySelector(".s2-bnt-next");
desebal(nextBnt)
function desebal(egg){
  egg.removeAttribute("href")
  egg.classList.add("desebal")
  // alert("PPPPP")
}



let selectedValue = [];
  
let selBxs = document.querySelectorAll(".gir-boxs121");
selBxs.forEach((card)=>{
  card.addEventListener("click",()=>{
    document.querySelectorAll(".s-grid-boxs").forEach(c => c.classList.remove("selectedds"))
    console.log(card , "dddd")
    card.classList.toggle("lopiuy");
    if(!selectedValue.includes(card.getAttribute("data"))){
      selectedValue.push(card.getAttribute("data"))
    }else{
      selectedValue = selectedValue.filter(item => item !== card.getAttribute("data"))
    }
    if(!selectedValue){
      alert("!selectedValue , ------Error-------")
    }else{

      console.log(selectedValue, "2vlar--");
      
      if(selectedValue.length != 0 ){
       nextBnt.setAttribute("href", "/listing/finish-setup")
       nextBnt.classList.remove("desebal");
       
       console.log(selectedValue.length,  'rtyh');
      }else{
       desebal(nextBnt)
       console.log(selectedValue.length);
      }
  //     nextBnt.setAttribute("href" , "/fgrt")
  //     nextBnt.classList.remove("desebal");
  // console.log("reove");
  
    }
  })
})
nextBnt.addEventListener("click",()=>{
  if (selectedValue.length === 0) {
    desebal(nextBnt)
  } else {
    submitData();
  }

  
})
function submitData() {
  if(selectedValue.length === 0) {
    return alert("hjkk") 
  }else{
fetch("/listingData/describe",{
    method : "POST",
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify({describe: selectedValue})
  }).then(res => res.json())
    .then((data) =>{}).catch((err)=>{
      console.log("-----Error-----");
      
    })
  }
 
}
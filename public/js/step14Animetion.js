
let nextBnt = document.querySelector(".s2-bnt-next");
desebal(nextBnt)
function desebal(egg){
  egg.removeAttribute("href")
  egg.classList.add("desebal")
  // alert("PPPPP")
}

let selectedValue = null;

let selBxs = document.querySelectorAll(".ser");
selBxs.forEach((card)=>{
  card.addEventListener("click",()=>{
    document.querySelectorAll(".ser").forEach(c => c.classList.remove("selected"))
    card.classList.add("selected");
    selectedValue = card.getAttribute("data");
    if(!selectedValue){
      console.log("ddddf")
    }else{
      nextBnt.setAttribute("href" , "/fgrt")
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
  fetch("/room-type",{
    method : "POST",
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify({instantBook: selectedValue})
  }).then(res => res.json())
    .then((data) =>{}).catch((err)=>{
      console.log("-----Error-----");
      
    })
}
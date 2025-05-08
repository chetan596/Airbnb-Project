
function name(params) {
  document.querySelector(".s-line3-1").style.width = "100%"

}
name()
document.querySelector(".s-line2-1").classList.add("opop")
document.querySelector(".s-line2-2").classList.add("opop")
document.querySelector(".s-line2-3").classList.add("opop")
document.querySelector(".s-line2-4").classList.add("opop")
document.querySelector(".s-line2-5").classList.add("opop")

document.querySelector(".s-line-1").classList.add("opop")
document.querySelector(".s-line-2").classList.add("opop")
document.querySelector(".s-line-3").classList.add("opop")
document.querySelector(".s-line-4").classList.add("opop")
document.querySelector(".s-line-5").classList.add("opop")
document.querySelector(".s-line-6").classList.add("opop")
document.querySelector(".s-line-7").classList.add("opop")



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
      nextBnt.setAttribute("href" , "/listing/visibility")
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
  fetch("/listingData/instant-book",{
    method : "POST",
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify({instantBook: selectedValue})
  }).then(res => res.json())
    .then((data) =>{}).catch((err)=>{
      console.log("-----Error-----");
      
    })
}
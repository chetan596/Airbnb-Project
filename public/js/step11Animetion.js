function name(params) {
  document.querySelector(".s-line2-3").style.width = "100%"

}
name()
document.querySelector(".s-line2-1").classList.add("opop")
document.querySelector(".s-line2-2").classList.add("opop")

document.querySelector(".s-line-1").classList.add("opop")
document.querySelector(".s-line-2").classList.add("opop")
document.querySelector(".s-line-3").classList.add("opop")
document.querySelector(".s-line-4").classList.add("opop")
document.querySelector(".s-line-5").classList.add("opop")
document.querySelector(".s-line-6").classList.add("opop")
document.querySelector(".s-line-7").classList.add("opop")



let nextBnt2 = document.querySelector(".s2-bnt-next");
desebal(nextBnt2)
function desebal(egg) {

  egg.removeAttribute("href")
  egg.classList.add("desebal")
  // alert("PPPPP")
}
let sop = false;
const form = document.querySelector("form")
const textInput = document.querySelector("textarea");
const tcfr = document.querySelector(".opi");
const charCount = document.getElementById("wordCount");
const maxLength = 500;

textInput.addEventListener("input", () => {
  
  if (textInput.value.length > maxLength) {
    textInput.value = textInput.value.slice(0, maxLength);
    charCount.textContent = `Character limit reached: ${maxLength}/${maxLength}`;
    charCount.className = "error";
    tcfr.classList.add("loiurr")
  } else {
    if(textInput.value.trim().length >0){
      addr()
      sop = true;
      console.log("-----Delete-----");
      
    }else{
      desebal(nextBnt2);
      sop = false;
      console.log("-----Add-----");
    }
    charCount.textContent = ` ${textInput.value.length} / ${maxLength}`;
//     charCount.className = "info";
charCount.classList.remove("error");
    tcfr.classList.remove("loiurr")
  }
});


function addr() {
  nextBnt2.classList.remove("desebal");
}

nextBnt2.addEventListener("click",(e)=>{
  e.preventDefault();
 if(!sop){
  alert("title for enter")
 }else{
  form.submit()
 }
})
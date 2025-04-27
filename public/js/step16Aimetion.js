
function name(params) {
  document.querySelector(".s-line3-3").style.width = "100%"

}
name()
document.querySelector(".s-line2-1").classList.add("opop")
document.querySelector(".s-line2-2").classList.add("opop")
document.querySelector(".s-line2-3").classList.add("opop")
document.querySelector(".s-line2-4").classList.add("opop")
document.querySelector(".s-line2-5").classList.add("opop")
document.querySelector(".s-line3-1").classList.add("opop")
document.querySelector(".s-line3-2").classList.add("opop")

document.querySelector(".s-line-1").classList.add("opop")
document.querySelector(".s-line-2").classList.add("opop")
document.querySelector(".s-line-3").classList.add("opop")
document.querySelector(".s-line-4").classList.add("opop")
document.querySelector(".s-line-5").classList.add("opop")
document.querySelector(".s-line-6").classList.add("opop")
document.querySelector(".s-line-7").classList.add("opop")



let input = document.querySelector("input")
let totle = document.querySelector(".cc")
let totleww = document.querySelector(".prise-boxss12")
let aswe = document.querySelector(".show-totel-price")
let bsePrice = document.querySelector(".bse-price")
let servicefee = document.querySelector(".service-fee")
let totelfee = document.querySelector(".t-o-l")
let youEarnnd = document.querySelector(".you-earnnd")
const enableBtn = document.querySelector(".edit-box");
let nextBnt = document.querySelector(".s2-bnt-next");
let form =document.querySelector("form")
input.value = "0"

// const input = document.getElementById("priceInput");
    // const message = document.getElementById("message");

    input.addEventListener("input", function () {
      enableBtn.classList.add("dis")
      let raw = input.value;
        let width = Math.max(1,2 + input.value.length * 2.5)
      input.style.width = `${width}rem`
        console.log("add" ,width)
      // Remove "tax" word if entered
      if (/tax/i.test(raw)) {
        raw = raw.replace(/tax/gi, "");
      }
      // Remove all non-digit characters
      let numericValue = raw.replace(/[^0-9]/g, "");

      // Format as Indian number (e.g. 1,23,456)
      let formattedValue = formatIndianNumber(numericValue);

      input.value = formattedValue;
      let asw = input.value.replace(/,/g,"") * 0.142;
      let awe = input.value.replace(/,/g,"")
      let ytuto = Math.floor(Number(awe) + asw )
      totle.innerText = `${ytuto.toLocaleString("en-IN")}`;
      bsePrice.innerText = input.value;
      servicefee.innerText = Math.floor(asw);
      totelfee.innerText = `${Math.floor(Number(awe) + asw ).toLocaleString("en-IN")}`
      youEarnnd.innerText = Math.floor(Number(awe) + asw - ytuto*0.1658).toLocaleString("en-IN");
      // console.log(awe, ytuto , Math.floor( ytuto*0.1658));
      nextBnt.classList.remove("desebal")
      if(input.value == 0 || input.value == ""){
        desebal(nextBnt)
      }
    });

    function formatIndianNumber(numberStr) {
      if (numberStr.length <= 3) return numberStr;

      let last3 = numberStr.slice(-3);
      let rest = numberStr.slice(0, -3);

      // Add commas every 2 digits in the rest part
      let formattedRest = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");

      return formattedRest + "," + last3;
    }




// Jab tak button na dabao, input disabled rahega
enableBtn.addEventListener("click", () => {
    input.value = "0";
    input.style.width = "3rem"
  input.removeAttribute("readonly");
  input.focus();
});

// Jab input box mein "Enter" dabao, dobara readonly ho jaaye
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    input.setAttribute("readonly", true);
    input.blur(); // input se focus hata do
    enableBtn.classList.remove("dis")
  }
});
input.addEventListener("blur",()=>{
  input.setAttribute("readonly", true);
  enableBtn.classList.remove("dis")
})

aswe.addEventListener("click",()=>{
aswe.classList.add("dis")
  totleww.classList.add("dis2")
  console.log("cjidlfkja");
  
})
desebal(nextBnt)
function desebal(egg){
  egg.removeAttribute("href")
  egg.classList.add("desebal")
  // alert("PPPPP")
}

nextBnt.addEventListener("click",(e)=>{
  e.preventDefault()

    
    submitData()


})
function submitData() {
  alert("sumdit")
form.submit()
}
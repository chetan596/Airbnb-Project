function name(params) {
    document.querySelector(".s-line-5").style.width = "100%"
  
  }
  name();
document.querySelector(".s-line-1").classList.add("opop")
document.querySelector(".s-line-2").classList.add("opop")
document.querySelector(".s-line-3").classList.add("opop")
document.querySelector(".s-line-4").classList.add("opop")


let nextBnt = document.querySelector(".s2-bnt-next");

bhu()




let PBtn = document.querySelector(".plas1")
let PBtn2 = document.querySelector(".plas2")
let PBtn3 = document.querySelector(".plas3")
let MBtn = document.querySelector(".mines1")
let MBtn2 = document.querySelector(".mines2")
let MBtn3 = document.querySelector(".mines3")
let Guests = document.querySelector("#Guests")
let Bedrooms = document.querySelector("#Bedrooms")
let Bed = document.querySelector("#Bed")
// let nextBnt = document.querySelector(".s2-bnt-next");
let form =  document.querySelector("form");




let gusetsValue = 0;
let bedroomsValue = 0;
let bedValue = 0;
PBtn.style.visibility = "hidden";
PBtn2.style.visibility = "hidden";
PBtn3.style.visibility = "hidden";


Guests.value = gusetsValue
Bedrooms.value = bedroomsValue;
Bed.value = bedValue;
MBtn.addEventListener("click",()=>{
    if(gusetsValue < 10){
        console.log(gusetsValue);
        
        if(gusetsValue >= 0){
            console.log(gusetsValue);
            PBtn.style.visibility = "visible";
        }
        gusetsValue++
        Guests.value = gusetsValue;
        mjui()

    }
})
PBtn.addEventListener("click",()=>{
    if(gusetsValue <= 10){
        console.log(gusetsValue);
        if(gusetsValue == 1){
            PBtn.style.visibility = "hidden";
            bhu()
        }
        gusetsValue--
        Guests.value = gusetsValue

    }
})

console.log(bedroomsValue);
MBtn2.addEventListener("click",()=>{
    if(bedroomsValue < 10){
        console.log(bedroomsValue);
        if(bedroomsValue >= 0){
            console.log(bedroomsValue);
            PBtn2.style.visibility = "visible";
        }
        bedroomsValue++
        Bedrooms.value = bedroomsValue;
        mjui()

    }
})
PBtn2.addEventListener("click",()=>{
    if(bedroomsValue <= 10){
        console.log(bedroomsValue);
        if(bedroomsValue == 1){
            PBtn2.style.visibility = "hidden";
            bhu()
        }
        bedroomsValue--
        Bedrooms.value = bedroomsValue

    }
})


// bed
MBtn3.addEventListener("click",()=>{
    if(bedValue < 10){
        console.log(bedValue);
        if(bedValue >= 0){
            console.log(bedroomsValue);
            PBtn3.style.visibility = "visible";
        }
        bedValue++
        Bed.value = bedValue
        mjui()
    }
})
PBtn3.addEventListener("click",()=>{
    if(bedValue <= 10){
        console.log(bedValue);
        if(bedValue == 1){
            PBtn3.style.visibility = "hidden";
            bhu()
        }
        bedValue--
        Bed.value = bedValue

     
    }
})


// bed
// nextBnt.setAttribute("href" ,)
nextBnt.addEventListener("click",(e)=>{
    e.preventDefault();

    form.submit();

})

function mjui(){
    nextBnt.setAttribute("href" ,"/next")
    nextBnt.classList.remove("desebal");
}

function bhu(egg){
  nextBnt.removeAttribute("href")
  nextBnt.classList.add("desebal")
  // alert("PPPPP")
}

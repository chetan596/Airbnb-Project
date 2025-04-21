let PBtn = document.querySelector(".plas1")
let PBtn2 = document.querySelector(".plas2")
let PBtn3 = document.querySelector(".plas3")
let MBtn = document.querySelector(".mines1")
let MBtn2 = document.querySelector(".mines2")
let MBtn3 = document.querySelector(".mines3")
let Guests = document.querySelector("#Guests")
let Bedrooms = document.querySelector("#Bedrooms")
let Bed = document.querySelector("#Bed")
let nextBnt = document.querySelector(".s2-bnt-next");
let form =  document.querySelector("form");




let gusetsValue = 2;
let bedroomsValue = 2;
let bedValue = 2;



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
        Guests.value = gusetsValue
    }
})
PBtn.addEventListener("click",()=>{
    if(gusetsValue <= 10){
        console.log(gusetsValue);
        if(gusetsValue == 1){
            PBtn.style.visibility = "hidden";
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
        Bedrooms.value = bedroomsValue
    }
})
PBtn2.addEventListener("click",()=>{
    if(bedroomsValue <= 10){
        console.log(bedroomsValue);
        if(bedroomsValue == 1){
            PBtn2.style.visibility = "hidden";
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
            PBtn2.style.visibility = "visible";
        }
        bedValue++
        Bed.value = bedValue
    }
})
PBtn3.addEventListener("click",()=>{
    if(bedValue <= 10){
        console.log(bedValue);
        if(bedValue == 1){
            PBtn2.style.visibility = "hidden";
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
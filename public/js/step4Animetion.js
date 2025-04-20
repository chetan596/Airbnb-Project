let gBox =document.querySelectorAll(".s3-loca-s2")

gBox.forEach((group)=>{
    // console.log(e.target);
    
    let input =group.querySelector("input");
let labal =group.querySelector(".lable1");
    input.addEventListener("focus",()=>{
        console.log("add");
        labal.classList.add("lable1-active")
        
    })
    input.addEventListener("blur",()=>{
        if (input.value.trim() ==="") {
            labal.classList.remove("lable1-active")
            console.log("remove");
        }
        
    })
})
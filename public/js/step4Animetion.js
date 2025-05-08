function name(params) {
    document.querySelector(".s-line-3").style.width = "100%"
  
  }
  name();
document.querySelector(".s-line-1").classList.add("opop")
document.querySelector(".s-line-2").classList.add("opop")
let nextBnt = document.querySelector(".s2-bnt-next");

let gBox =document.querySelectorAll(".s3-loca-s2")
let ErrMsg = document.querySelector(".velidetion-err-msg-box")

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
});






let from =  document.querySelector("#my-from");
let finalError  =document.querySelector(".velidetion-err-msg-box");

let fields = [
    {id : "Street addres" ,label : "Street addres",bos:"street" , span : "span1" },
    {id : "District/locality" ,label : "District/locality",bos :"district" , span : "span2" },
    {id : "City/town" ,label : "City/town",bos :"city" , span : "span3" },
    {id : "State/union territory" ,label : "State/union territory", bos: "state" , span : "span4"},
    {id : "pin code" ,label : "PIN code", bos : "pinCode" , span : "span5" },
];

nextBnt.addEventListener("click",(e)=>{
    e.preventDefault();
    let missingFields = [];

    fields.forEach(field =>{
        let input = document.getElementById(field.id);
        let box = document.getElementById(field.bos);
        let span = document.getElementById(field.span);
        const value = input.value.trim();
        
        
        if(!value){
            missingFields.push(field.label);
           c
            span.classList.add("span-unhide")
            
        }
        else{
            box.classList.remove("erro-border")
            span.classList.remove("span-unhide")
        }
    });

    if(missingFields.length > 0){
        finalError.style.display = "block"
        finalError.innerHTML = `<i class="ri-error-warning-line"></i> Please complete all required address fields (${missingFields.join(", ")}) to proceed. Incomplete address details cannot be saved.`
    }else{
         from.submit()
         finalError.style.display = "none"
         nextBnt.setAttribute("href" ,"/next")
         nextBnt.classList.remove("desebal");
         console.log("save");
         
    }
})



    

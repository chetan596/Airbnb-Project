document.addEventListener("DOMContentLoaded", () => {
    let loginBox = document.querySelector(".nav-loginBox");
    let singInBox = document.querySelector(".loginBox-nav");
    let loginBtn = document.querySelector(".Longi-122")
    let loginBtn1 = document.querySelector(".login-popopu")
    let loder1 = document.querySelector(".yuerhye1")
    let logineContant = document.querySelector(".loginPopupBox")
    loginBox.addEventListener("click", (e) => {
        e.stopPropagation()
        loginBox.classList.add("boxShodo")
        singInBox.style.display = "block"

    });



    document.addEventListener("click", () => {
        loginBox.classList.remove("boxShodo")
        singInBox.style.display = "none"
        // singInBigBox.style.display = "none"
        console.log("hey! -----EERfzdfdd")

    })



    loginBtn.addEventListener("click", (e) => {
        e.preventDefault()
        loginBtn1.style.display = "flex";
        loginFrom()
        // console.log("bnt was click")
    })


    function loginFrom() {
        // console.log("API was call..")
        fetch("/singup")
            .then(res => res.text())
            .then(html => {
                loder1.style.display = "none";
                logineContant.innerHTML = html
                let input = document.querySelector("#email");
                let from = document.querySelector("form")
                let labal = document.querySelector("#label");
                let bnt = document.querySelector(".LongBnt1")
                let errorMsg = document.querySelector(".ErrorParaLogin")
                let singInBigBox = document.querySelector(".login-popopu");
                let singInBigBox11 = document.querySelector(".loginPopupBox");
                let singInCloceBnt = document.querySelector(".loginhHading button");
                console.log(input)
                input.addEventListener("focus", () => {
                    console.log("add");
                    labal.classList.add("label2lg")

                })

                input.addEventListener("blur", () => {


                    if (input.value.trim() === "") {
                        labal.classList.remove("label2lg")
                        bnt.style.backgroundColor = "crimson";

                    }

                })

                from.addEventListener("submit", (e) => {
                    e.preventDefault();
                    const value = input.value.trim();

                    if (!value) {
                        labal.style.color = "red"
                        input.classList.add("erro-border")
                        errorMsg.style.visibility = "visible"
                        errorMsg.innerHTML = `<i class="ri-error-warning-line"></i> Email is required `
                        bnt.style.backgroundColor = "crimson";
                    }
                    else {
                        labal.style.color = "black"
                        input.classList.remove("erro-border")
                        errorMsg.style.visibility = "hidden"
                        let bnt22 = document.querySelector(".LongBnt1")
                        bnt22.addEventListener("click", () => {
                            document.querySelector(".yuerhye1").classList.remove("disNone11")
                            bnt.style.backgroundColor = "#d3d3d3d6";
                            console.log("ntb was click")
                            ApiCall2()
                        })

                    };
                })




                singInBigBox11.addEventListener("click", (e) => {
                    e.stopPropagation()
                })


                singInBigBox.addEventListener("click", () => {
                    singInBigBox.style.display = "none"
                    // console.log(singInBigBox)

                })
                singInCloceBnt.addEventListener("click", () => {
                    singInBigBox.style.display = "none"
                    console.log(singInBigBox, "lkjjhhjggf")

                })


                function ApiCall2() {
                    console.log("----err-r--r")
                    fetch("/errer", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email: input.value })
                    }).then(res => res.text())
                    .then(html =>{
                        console.log(html)
                         logineContant.innerHTML = html
                         let boxss = document.querySelectorAll(".fornBox22s")
                         
                        
                        boxss.forEach((box)=>{
                            let input = box.querySelector(".inputBoxUser");
                             let labal = box.querySelector(".labelUser");
                             let inputBoxs = box.querySelector(".TextBox1");
                             let eroorP = box.querySelector(".ErrorMsg233")
                             console.log(eroorP)
                              input.addEventListener("focus",()=>{
                                console.log(input.type)
                                 inputBoxs.style.borderColor = "black"
                               labal.classList.add("labalTop")
                                inputBoxs.style.backgroundColor = "white"
                                if(eroorP){
                                     eroorP.style.display = "none"
                                }
                              if(input.type === "url"){
                                input.type = "date"
                              }
                                console.log("---Focus---")
                                input.addEventListener("blur",()=>{
                                    if (input.value.trim() ==="") {
                                        labal.classList.remove("labalTop")
                                        eroorP.style.display = "block"
                                        inputBoxs.style.borderColor = "red";
                                        inputBoxs.style.backgroundColor = "#ff00000d"
                                        console.log(eroorP);
                                        if(input.type == "date"){
                                        input.type = "url"
                              }
                                        }else{
                                           
                                        }
        
                                    })
                            })
                        })
                    })
                }

            })
    }









})



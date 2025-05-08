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
                        btnClick()
                        SubmitCall()
                    };
                })


                function SubmitCall(){
                   let bnt = document.querySelector(".LongBnt1")
                   bnt.addEventListener("click",()=>{
                    console.log("---Bnt was click----")
                    from.submit();
                   })
                }

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

               function btnClick(){
                bnt.addEventListener("click", ()=>{
                    document.querySelector(".yuerhye1").classList.remove("disNone11")
                    bnt.style.backgroundColor = "#d3d3d3d6";
                    console.log("ntb was click")
                    
                })
               }

            })
    }









})











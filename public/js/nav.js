

document.addEventListener("DOMContentLoaded", () => {
  let userIs = document.querySelector(".navMainBox2")
  let userNot = document.querySelector(".navMainBox23w")
  let notificationIcon = document.querySelector(".notificationIcon")

 let isUserLoggedIn = false;

fetch("/navBox")
  .then(res => res.json())
  .then(data => {
    if (data.user) {
      userIs.style.display = "block";
      notificationIcon.style.display = "block";
      userNot.style.display = "none";
      handleLoginResponse(data);
      renderAvatar(".login-img", data.avatar);
    } else {
      userIs.style.display = "none";
      userNot.style.display = "block";
      handleLoginResponse({ user: false, username: "guest" }); // <-- Important: call for guest also
    }
  });

// Function to handle avatar
function renderAvatar(selector, avatar) {
  const container = document.querySelector(selector);
  if (!container || !avatar) return;

  if (avatar.image) {
    container.innerHTML = `<img src="${avatar.image}" alt="user avatar">`;
    container.style.backgroundColor = "transparent";
  } else {
    container.innerHTML = `<p>${avatar.initial}</p>`;
    container.style.backgroundColor = avatar.color;

    const style = getComputedStyle(container);
    const height = parseFloat(style.height);
    if (!isNaN(height)) {
      const p = container.querySelector("p");
      if (p) p.style.fontSize = `${height * 0.5}px`;
    }
  }
}

// Function to handle login response
function handleLoginResponse(data) {
  const isLoggedIn = data.user || false;
  const username = data.username || "guest";

  localStorage.setItem("currentUsername", username);

  if (isLoggedIn && !sessionStorage.getItem(`recentSyncDone_${username}`)) {

    // 🔁 Migrate guest data → user data
    const guestKey = "recentHotels_guest";
    const loggedInKey = `recentHotels_${username}`;
    const guestData = JSON.parse(localStorage.getItem(guestKey)) || [];

    if (guestData.length) {
      localStorage.setItem(loggedInKey, JSON.stringify(guestData));
      localStorage.removeItem(guestKey);
    }

    // ✅ Sync to server
    sessionStorage.setItem(`recentSyncDone_${username}`, 'true');
    syncRecentToDatabase(username);
  }

  wishlistUpdate(isLoggedIn);
}











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
    let singInBigBox11 = document.querySelector(".loginPopupBox");
    singInBigBox11.classList.remove("smallHg")

  })



  loginBtn.addEventListener("click", (e) => {
    e.preventDefault()
    loginBtn1.style.display = "flex";
    loginFrom()

  })


  function loginFrom() {
    console.log("function was call")
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

        input.addEventListener("focus", () => {

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
          bnt.classList.remove("button-click-effect"); // Reset
          void bnt.offsetWidth; // Reflow
          bnt.classList.add("button-click-effect"); // Add animation

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

            document.querySelector(".yuerhye1").classList.remove("disNone11")
            bnt.style.background = "#d3d3d3d6";
            bnt.style.cursor = "not-allowed";

            // console.log("ddddddd")
            ApiCall2()


          };
        })




        singInBigBox11.addEventListener("click", (e) => {
          e.stopPropagation()
        })


        singInBigBox.addEventListener("click", () => {
          singInBigBox.style.display = "none"


        })
        singInCloceBnt.addEventListener("click", () => {
          singInBigBox.style.display = "none";

        })


        function ApiCall2() {

          fetch("/loginIn", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: input.value })
          }).then(res => res.text())
            .then(html => {
              console.log("Chetan comingdata", html)
              logineContant.innerHTML = html
              let boxss = document.querySelectorAll(".fornBox22s")
              let form = document.querySelector("form")
              let bnt = document.querySelector(".bntUserFr")
              let otpBox = document.querySelector(".otpPop1")
              let otpBox22 = document.querySelector(".otpBoxss")
              let Loding = document.querySelector(".yuerhye1")
              let BackBtn = document.querySelector(".bntyuopg button")
              let opopop = document.querySelector(".yuierr")
              let singInBigBox11 = document.querySelector(".loginPopupBox");
              let pass2 = document.querySelector(".pass2")
              let labelUser = document.querySelector(".labelUser")
              let from2st = document.querySelector(".from2st")
              let Show = document.querySelector("#Show")
              let inbox12 = document.querySelector(".BOX2233")
              let ErrMsgOP = document.querySelector(".ErrMsgOP")
              let ErrMsdiv2 = document.querySelector(".errDiv")
              let loginBtn122 = document.querySelector(".bntfr23")

              if (opopop) {
                singInBigBox11.classList.add("smallHg")
                pass2.addEventListener("focus", () => {
                  inbox12.style.border = "2px solid black"
                  labelUser.classList.add("labalTop")
                  ErrMsgOP.style.display = "none"
                  singInBigBox11.classList.remove("errdivhegit")
                  ErrMsdiv2.style.display = "none"
                })
                pass2.addEventListener("blur", () => {
                  if (pass2.value.length == 0) {
                    labelUser.classList.remove("labalTop")

                  }
                  inbox12.style.border = "1px solid black"

                })

                Show.addEventListener("click", () => {

                  pass2.type = pass2.type === "password" ? "text" : "password";
                  Show.innerText = Show.innerText === "Show" ? "Hide" : "Show";

                })
                from2st.addEventListener("submit", (e) => {

                  loginBtn122.classList.remove("button-click-effect"); // Reset
                  void loginBtn122.offsetWidth; // Reflow
                  loginBtn122.classList.add("button-click-effect"); // Add animation
                  if (pass2.value.length >= 8) {
                    loginBtn122.classList.remove("button-click-effect"); // Reset
                    void loginBtn122.offsetWidth; // Reflow
                    loginBtn122.classList.add("button-click-effect"); // Add animation

                    loginBtn122.style.background = "#d3d3d3d6";
                    loginBtn122.disabled = true;
                    loginBtn122.style.cursor = "not-allowed";
                    document.querySelector(".yuerhye1").classList.remove("disNone11");


                    fetch("/login", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ password: pass2.value, email: input.value })
                    })
                      .then(res => res.json())
                      .then(data => {

                        if (data.success) {
                          // ✅ Manually redirect the browser
                          window.location.href = data.redirectTo;
                        } else {
                          singInBigBox11.classList.add("errdivhegit")
                          loginBtn122.style.background = `linear-gradient(90deg, #e91e63, #dc143c)`;
                          loginBtn122.disabled = false;
                          loginBtn122.style.cursor = "pointer";
                          document.querySelector(".yuerhye1").classList.add("disNone11");

                          ErrMsdiv2.style.display = "flex"
                          console.error(data.message);
                        }
                      });
                    ErrMsgOP.style.display = "none"
                  } else {



                    ErrMsgOP.style.display = "block"

                  }
                  e.preventDefault()



                })




              } else {
                singInBigBox11.classList.remove("smallHg")

              }
              BackBtn.addEventListener("click", () => {
                cloceBack()
              })


              boxss.forEach((box) => {
                let input = box.querySelector(".inputBoxUser");
                let labal = box.querySelector(".labelUser");
                let inputBoxs = box.querySelector(".TextBox1");
                let eroorP = box.querySelector(".ErrorMsg233");

                input.addEventListener("focus", () => {

                  inputBoxs.classList.add("inputBoxUser2")
                  labal.classList.add("labalTop")
                  inputBoxs.style.backgroundColor = "white"
                  labal.style.color = "#434343e8"
                  if (eroorP) {
                    eroorP.style.display = "none"
                  }
                  if (input.type === "url") {
                    input.type = "date"
                  }

                  input.addEventListener("blur", () => {
                    inputBoxs.classList.remove("inputBoxUser2")
                    if (input.value.trim() === "") {
                      labal.classList.remove("labalTop")

                      if (eroorP) {

                        eroorP.style.display = "block"
                      }

                      inputBoxs.style.borderColor = "red";
                      inputBoxs.style.backgroundColor = "#ff00000d"
                      labal.style.color = "red";

                      if (input.type == "date") {
                        input.type = "url"
                      }
                    } else {
                      inputBoxs.style.borderColor = "#222222";

                    }

                  })

                })


              })

              form.addEventListener("submit", (e) => {

                bnt.classList.remove("button-click-effect"); // Reset
                void bnt.offsetWidth; // Reflow
                bnt.classList.add("button-click-effect"); // Add animation
                e.preventDefault();
                let allClass = document.querySelectorAll(".labalTop")
                let emailInput = document.querySelector("#em")
                let username = document.querySelector('#user');
                let userLast1 = document.querySelector('#last');
                if (allClass.length >= 5) {
                  document.querySelector(".yuerhye1").classList.remove("disNone11");
                  Loding.style.display = "f"

                  bnt.style.background = "#d3d3d3d6";
                  bnt.disabled = true;
                  bnt.style.cursor = "not-allowed";

                  otpsand(emailInput.value, otpBox, username.value, userLast1.value, emailInput.value, otpBox22, Loding, form, bnt)


                } else {


                  let allClass = document.querySelectorAll("input");
                  for (input of allClass) {
                    input.focus()
                  }
                }

              })
              const password = document.getElementById("password");
              const strengthText = document.getElementById("strengthText");
              const reqList = document.getElementById("reqList");
              const passShow = document.getElementById("Show")
              const dobInput = document.getElementById('date');
              const errorDiv = document.getElementById('dobError');
              const passStrMsg = document.querySelector(".passStrMsg")

              dobInput.addEventListener('change', () => {
                const today = new Date();
                const selectedDate = new Date(dobInput.value);

                const birthYear = selectedDate.getFullYear();
                const currentYear = today.getFullYear();

                // Calculate age
                let age = currentYear - birthYear;

                // Check if birthday hasn't occurred yet this year
                const hasBirthdayPassed =
                  today.getMonth() > selectedDate.getMonth() ||
                  (today.getMonth() === selectedDate.getMonth() && today.getDate() >= selectedDate.getDate());

                if (!hasBirthdayPassed) {
                  age--; // birthday hasn't come yet this year
                }

                // Validation
                if (birthYear > currentYear) {
                  errorDiv.style.display = "block"

                  errorDiv.innerHTML = `<i class="ri-error-warning-fill"></i>  Future year invalid hai.`;
                } else if (age < 18) {
                  errorDiv.style.display = "block"

                  errorDiv.innerHTML = `<i class="ri-error-warning-fill"></i>  18 saal se kam hai. 18 saal se zyada chahiye.`;
                } else {
                  errorDiv.style.display = "none"

                  errorDiv.innerHTML = ""; // No error
                }
              });

              const rules = {
                charLen: { el: document.getElementById("charLen"), test: val => val.length >= 8 },
                upper: { el: document.getElementById("upper"), test: val => /[A-Z]/.test(val) },
                lower: { el: document.getElementById("lower"), test: val => /[a-z]/.test(val) },
                digitOrSymbol: {
                  el: document.getElementById("digitOrSymbol"),
                  test: val => /[0-9]/.test(val) || /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(val)
                }
              };

              password.addEventListener("focus", showReq);
              password.addEventListener("input", updateRules);

              function showReq() {
                passStrMsg.style.display = "block";
                reqList.style.display = "block";
              }

              function updateRules() {
                passStrMsg.style.color = "red"
                for (let key in rules) {
                  const li = rules[key].el;
                  li.classList.add("redColorErr")
                }
                const val = password.value;
                let validCount = 0;

                for (let key in rules) {
                  const passed = rules[key].test(val);
                  const li = rules[key].el;
                  const icon = li.querySelector(".icon");
                  if (passed) {
                    li.classList.add("valid");
                    icon.innerHTML = `<i class="ri-checkbox-circle-fill"></i>`;
                    validCount++;
                  } else {
                    li.classList.remove("valid");
                    icon.innerHTML = `<i class="ri-close-circle-fill"></i>`;
                  }
                }

                if (val.length === 0) {
                  strengthText.textContent = "";
                  password.classList.remove("input-error");
                  return;
                }

                if (validCount === 4) {
                  strengthText.textContent = "strong";
                  passStrMsg.style.color = "green"
                  strengthText.className = "strength strong";
                  password.classList.remove("input-error");
                  reqList.style.display = "none";
                } else if (validCount >= 2) {
                  strengthText.textContent = "good";
                  strengthText.className = "strength good";
                  password.classList.remove("input-error");
                  reqList.style.display = "block";
                } else {
                  strengthText.textContent = "weak";
                  strengthText.className = "strength weak";
                  password.classList.add("input-error");
                  reqList.style.display = "block";
                }
              }
              passShow.addEventListener("click", () => {

                password.type = password.type === "password" ? "text" : "password";
                passShow.innerText = passShow.innerText === "Show" ? "Hide" : "Show";

              })



              function checkBlur() {
                if (password.value.length === 0) {
                  reqList.style.display = "none";
                  strengthText.textContent = "";
                }
              }


            })
        }

        function otpsand(input, otpBox, username, userLast, email, otpBox22, Loding, form, bnt) {



          fetch("/email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: input, userName: username, userLast: userLast })
          }).then(res => res.text())
            .then(html => {

              otpBox.style.display = "flex"
              otpBox22.innerHTML = html

              const inputs = document.querySelectorAll('.otp-input');
              let loding = document.querySelector(".kiope")
              let errMsg = document.querySelector(".otpErrormsg");
              let cloerea = document.querySelector("#CloceRE");
              cloerea.addEventListener("click", () => {
                otpBox.style.display = "none"
                Loding.style.display = "none"
                bnt.style.background = `linear-gradient(90deg, #e91e63, #dc143c)`
                bnt.disabled = false;
                bnt.style.cursor = "pointer";
              })
              otpBox.addEventListener("click", (e) => {

                otpBox.style.display = "none"
                Loding.style.display = "none"
                bnt.style.cursor = "pointer";
                bnt.disabled = false;
                bnt.style.background = `linear-gradient(90deg, #e91e63, #dc143c)`


              });
              otpBox22.addEventListener("click", (e) => {
                e.stopPropagation()

              })

              function resetBorders() {
                inputs.forEach(input => {
                  input.classList.remove('error', 'success');
                  input.style.border = '1px solid black';
                  errMsg.style.display = "none"
                });
              }

              function checkOTP() {
                const enteredOTP = Array.from(inputs).map(input => input.value).join('');
                if (enteredOTP.length === inputs.length) {
                  inputs.forEach(input => {
                    input.classList.add("ljhy");

                  });
                  loding.style.display = "flex"
                  fetch("/otp-verify", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ otp: enteredOTP, email: email })
                  }).then(res => res.json())
                    .then(data => {

                      inputs.forEach(input => {
                        input.classList.remove("ljhy");

                      });
                      loding.style.display = "none"
                      if (data.success) {

                        inputs.forEach(input => {
                          input.classList.remove('error');
                          input.classList.add('success');

                          form.submit();
                        });

                      } else {
                        inputs.forEach(input => {
                          input.classList.remove('success');
                          input.classList.add('error');
                          errMsg.style.display = "block"
                        });
                      }
                    }).catch(error => console.log(error, "----Error----"))

                }
              }

              inputs.forEach((input, index) => {
                input.addEventListener('keydown', (e) => {
                  const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
                  const isDigit = /^[0-9]$/.test(e.key);

                  if (!isDigit && !allowedKeys.includes(e.key)) {
                    e.preventDefault(); // Block dot, slash, letters, etc.
                  }

                  if (e.key === 'Backspace') {
                    if (input.value === '' && index > 0) {
                      inputs[index - 1].focus();
                      inputs[index - 1].value = '';
                      e.preventDefault();
                    }
                  }
                });

                input.addEventListener('input', (e) => {
                  const value = e.target.value.replace(/\D/g, ''); // Allow only digits
                  if (value) {
                    resetBorders(); // Reset border when new input comes
                    input.value = value[0];
                    if (index < inputs.length - 1) {
                      inputs[index + 1].focus();
                    }
                  }
                  setTimeout(checkOTP, 10);
                });

                input.addEventListener('paste', (e) => {
                  e.preventDefault();
                  resetBorders();
                  const pasteData = (e.clipboardData || window.clipboardData).getData('text');
                  const digits = pasteData.replace(/\D/g, '').split('');
                  inputs.forEach((inp, i) => {
                    inp.value = digits[i] || '';
                  });

                });
              });

            })
        }

      })
  }







  function cloceBack() {
    let singInBigBox11 = document.querySelector(".loginPopupBox");
    singInBigBox11.classList.remove("smallHg")
    loginFrom()
  }

  let login = document.querySelector(".login-popopu");

  // wislist opation


  const wishlistButtons = document.querySelectorAll(".wislist-conttainer svg");

  wishlistButtons.forEach((button) => {
    button.addEventListener("click", async (e) => {
      e.stopPropagation();
      e.preventDefault();
      fetch("/user/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json/x-www-form-urlencoded"
        },
      }).then(res => res.json())
        .then(data => {
          if (!data.isLoggedIn) {
            login.style.display = "flex";
            loginFrom()

            console.log("User is not logged in", data);
          } else {
            console.log("User is logged in", data);
          }
        })
        .catch(err => {
          console.error("Error:", err);
        });

    })
  })

});






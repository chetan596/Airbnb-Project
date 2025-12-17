
function welcome() {

  const welcomeBox = `
    <div class="ter-and-condition-container">
      <div class="welcomeBox">
        <div class="welcomeTopHading">
          <h1>Create your profile</h1>
          <button><i class="ri-close-fill"></i></button>
        </div>
        <div class="welcomeBoxContent">
          <div class="welcomeLogo">
            <img src="https://img.icons8.com/?size=256&id=103424&format=png" alt="">
          </div>
          <h3>Welcome to Airbnb</h3>
          <p>Discover places to stay and unique experiences around the world.</p>
          <button class="welcomeBtn">Continue</button>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    document.body.insertAdjacentHTML("beforeend", welcomeBox);

    // ✅ Select after it's added to DOM
    const welcomeBoxElement = document.querySelector(".welcomeBox");
    const welcomeMainBox = document.querySelector(".ter-and-condition-container");
    const welcomeCloseButton = document.querySelector(".welcomeTopHading button");
    const welcomeButton = document.querySelector(".welcomeBtn");
    welcomeBoxElement.addEventListener("click", (e) => {
      e.stopPropagation();
    })

    document.addEventListener("click", () => {

      welcomeMainBox.remove();
    });

    welcomeCloseButton.addEventListener("click", () => {
      welcomeMainBox.remove();
    });

    welcomeButton.addEventListener("click", () => {

      welcomeButton.classList.remove("button-click-effect"); // Reset
      void welcomeButton.offsetWidth; // Reflow
      welcomeButton.classList.add("button-click-effect"); // Add animation
      Setprofile();
    });
  }, 1000);
}

function Setprofile() {
  const DpSetHtml = `<div class="Dp-uplode-container">

          <div class="welcomeTopHading">
            <h1>Create your profile</h1>
            <button><i class="ri-close-fill"></i></button>
          </div>
          <div class="dp-container-big">
          <div class="dp-container">
            <h3>Add a profile photo</h3>
            <p>Pick an image that shows your face. Hosts won't be able to see you profile photo untill you reservtion is
              confimed.</p>
            <div class="dp-defult">
              <div class="dp-defult-img">
                <img 
                  src="https://res.cloudinary.com/dmenkblkq/image/upload/v1754136875/WhatsApp_Image_2025-08-02_at_17.24.45_84c813fa-Pica-removebg-preview_1_jm5uja.png"
                  alt="">
                  
              </div>
            </div>
            <input type="file" class="dp-upload" accept="image/*" style="display: none;">
            <div class="dpuplodeBtnLast">
               <button class="welcomeBtn" id="dpUploadButton">Upload a photo <span class="dp-upload-icon"><i
                  class="ri-upload-cloud-2-line"></i></span>

            </button>

            
            </div>
            <span class="do-later">i'll do this later</span>
          </div>
          </div>
   </div>`

  document.querySelector(".ter-and-condition-container").innerHTML = DpSetHtml;
  document.querySelector(".Dp-uplode-container").addEventListener("click", (e) => {
    e.stopPropagation();
  });


  const dpUploadButton = document.querySelector("#dpUploadButton");
  const dpUploadInput = document.querySelector(".dp-upload");

  function iieor() {
    const welcomeButton = document.querySelector(".welcomeBtn")
    welcomeButton.classList.remove("button-click-effect"); // Reset
    void welcomeButton.offsetWidth; // Reflow
    welcomeButton.classList.add("button-click-effect");
    console.log("clicked");
    dpUploadInput.click();
  }
  dpUploadButton.addEventListener("click", iieor);



  dpUploadInput.addEventListener("change", async (e) => {


    dpUploadButton.innerHTML = `

                <div class="yuerhye1">
                  <div class="dot-loader image-loader">
                    <div class="dot2"></div>
                    <div class="dot2"></div>
                    <div class="dot2"></div>
                  </div>
                </div>`;

    dpUploadButton.disabled = true;
    dpUploadButton.classList.add("disabledDpUploadButton");
    const file = e.target.files[0];
    if (!file) return;

    if (file && file.type.startsWith("image/")) {
      dpUploadButton.removeEventListener("click", iieor);
      const imgUrl = URL.createObjectURL(file);

      document.querySelector(".do-later").remove();
      document.querySelector(".dp-container img").style.display = "none";
      document.querySelector(".dp-defult-img").classList.add("loding");

      document.querySelector(".dp-container h3").innerText = "Looking good!";
      document.querySelector(".dp-container p").innerText = "This photo will to your profile. it will also be seen by hosts or guests so be sure it doesn't include any personal or sensitive info.";// Update image src

      document.querySelector(".dp-container img").src = imgUrl;
      document.querySelector(".dp-container img").onload = () => {
        document.querySelector(".dp-container img").style.display = "block";
        document.querySelector(".dp-defult-img").classList.remove("loding");

      }
      document.querySelector(".dpuplodeBtnLast").insertAdjacentHTML("beforeend", `<button class="changeDpBtn">Change photo</button>`);
      // Update image src
      dpUploadButton.disabled = false;
      dpUploadButton.querySelector(".yuerhye1").remove();

      dpUploadButton.classList.remove("disabledDpUploadButton");

      dpUploadButton.innerText = "Done";

      document.querySelector(".changeDpBtn").addEventListener("click", () => {
        ResetProfile();
      })

      dpUploadButton.addEventListener("click", () => {

        document.querySelector(".ter-and-condition-container").remove();

        const formData = new FormData();
        formData.append("profileImage", file);

       function uploadProfile(formData) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open("POST", "/profile");

        // Progress only in console
        xhr.upload.onprogress = function (event) {
            if (event.lengthComputable) {
                let percent = Math.round((event.loaded / event.total) * 100);
                console.log(percent + "% uploaded");
            }
        };

        // Response
        xhr.onload = function () {
            try {
                let res = JSON.parse(xhr.responseText);
                resolve(res);
            } catch (err) {
                reject(err);
            }
        };

        xhr.onerror = function () {
            reject("Network error");
        };

        xhr.send(formData);
    });
}


// 🟢 Use same as your fetch code
uploadProfile(formData)
    .then(responseText => {
        console.log("Upload successful:", responseText.success, responseText);
        if (responseText.success) {
            document.querySelector(".login-img").innerHTML = 
                `<img src="${responseText.file}" alt="user avatar">`;
            document.querySelector(".login-img").style.backgroundColor = "transparent";
        }
    })
    .catch(error => {
        console.error("Upload error:", error);
    });

      });

    }


  });




}




function ResetProfile() {
  Setprofile()
}

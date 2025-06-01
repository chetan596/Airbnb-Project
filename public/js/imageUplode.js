let photoUplod = document.querySelector("#photoUplode");
let fileInpute = document.querySelector("#fileInpute");
let fileInputeBox = document.querySelector(".mainphotoDiv");
let fileInputefrom = document.querySelector("form");
let mainDiv = document.querySelector(".photoDivBox ");



// fileInputefrom.addEventListener("submit",(e)=>{
//     e.preventDefault()
// })
photoUplod.addEventListener("click", () => {
    fileInpute.click()
})
document.addEventListener("dragover", (e) => {
    e.preventDefault()
    photoUplod.style.display = "none"
    fileInputeBox.classList.add("mainphotoDivBlack")
})
document.addEventListener("drop", (e) => {
    e.preventDefault()
    fileInpute.files = e.dataTransfer.files
     mainDiv.classList.add("lofingInapee")
 mainDiv.innerHTML = ` <div>
             <p>Magically arranging your</p>
            <P>photos to show off your space</P>

            <p class="lodingcont"></p>

              <div class="loderBox2rr">
                  <div class="loader"></div>
              </div>
           </div>`
   let fileConnff = document.querySelector(".lodingcont ");
    imageUplode(fileConnff)
    // fileInputefrom.submit()
})

fileInpute.addEventListener("change", (e) => {
    mainDiv.classList.add("lofingInapee")
 mainDiv.innerHTML = ` <div>
             <p>Magically arranging your</p>
            <P>photos to show off your space</P>

            <p class="lodingcont"></p>

              <div class="loderBox2rr">
                  <div class="loader"></div>
              </div>
           </div>`

   let fileConnff = document.querySelector(".lodingcont ");
    // fileInputefrom.submit()
    imageUplode(fileConnff)
})

function imageUplode(fileConnff) {
    const files = Array.from(fileInpute.files);
    const fileLength = files.length;
    let succCount = 0;

    // शुरू में एक बार दिखाएँ कि 0 में से N फ़ाइलें अपलोड हुईं
    fileConnff.innerText = `0 of ${fileLength} uploaded`;

    for (const file of files) {
        const formData = new FormData();
        formData.append("Image", file); // backend के field नाम से मैच करें

        fetch("/listingData/photo", {
            method: "POST",
            body: formData
        })
        .then(async (res) => {
            const contentType = res.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                const data = await res.json();
                // हर सफल अपलोड के बाद काउंट बढ़ाएँ और UI अपडेट करें
                succCount++;
                fileConnff.innerText = `${succCount} of ${fileLength} uploaded`;
                console.log("Upload success:", data);
            } else {
                const text = await res.text();
                console.warn("Non-JSON response:", text);
            }
        })
        .catch(err => {
            console.error("Upload error:", err);
        });
    }
}






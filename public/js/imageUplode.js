let photoUplod = document.querySelector("#photoUplode");
let fileInpute = document.querySelector("#fileInpute");
let fileInputeBox = document.querySelector(".mainphotoDiv");
let fileInputefrom = document.querySelector("form");
let mainDiv = document.querySelector(".photoDivBox");
let bntNext = document.querySelector(".bnt-next a");
let main = document.querySelector("main");
let allUploadedPhotos = []; // to store uploaded photo data
const pathSegments = window.location.pathname.split('/');
const listingId = pathSegments[2]; // index 2 corresponds to the ID

bntNext.setAttribute("href" , `/listing/${listingId}/describe`)

photoUplod.addEventListener("click", () => {
    fileInpute.click();
});

document.addEventListener("dragover", (e) => {
    e.preventDefault();
    photoUplod.style.display = "none";
    fileInputeBox.classList.add("mainphotoDivBlack");
});

document.addEventListener("drop", (e) => {
    e.preventDefault();
    fileInpute.files = e.dataTransfer.files;
    handleUpload();
});

fileInpute.addEventListener("change", handleUpload);

function handleUpload() {
    mainDiv.classList.add("lofingInapee");
    mainDiv.innerHTML = `
        <div>
            <p>Magically arranging your</p>
            <p>photos to show off your space</p>
            <p class="lodingcont"></p>
            <div class="loderBox2rr">
                <div class="loader"></div>
            </div>
        </div>`;

    let fileConnff = document.querySelector(".lodingcont");
    imageUplode(fileConnff);
}

function imageUplode(fileConnff) {
    const files = Array.from(fileInpute.files);
    const fileLength = files.length;
    let succCount = 0;
    let paths = [];

    fileConnff.innerText = `0 of ${fileLength} uploaded`;

    for (const file of files) {
        const formData = new FormData();
        formData.append("Image", file);

        fetch("/listingData/photo", {
            method: "POST",
            body: formData
        })
        .then(async (res) => {
            const contentType = res.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                const data = await res.json();
                succCount++;
                fileConnff.innerText = `${succCount} of ${fileLength} uploaded`;

                const yy = data.files.map(file => ({
                    path: file.path,
                    originalname: file.originalname
                }));

                paths.push(...yy);
            } else {
                const text = await res.text();
                console.warn("Non-JSON response:", text);
            }

            if (succCount === fileLength) {
                console.log("All uploads done!");
                allUploadedPhotos = paths; // Save for submit

                fetch("/listing/showphoto")
                .then(res => res.text())
                .then(html => {
                    main.innerHTML = html;

                    const main3 = document.querySelector(".smallimage");
                    const coverSwiperWrapper = document.querySelector(".mainCoverphoto .swiper-wrapper");

                    main3.innerHTML = "";
                    coverSwiperWrapper.innerHTML = "";

                    for (let i = 0; i < paths.length; i++) {
                        const { path, originalname } = paths[i];

                        let label = "Other Photo";
                        const lowerName = originalname.toLowerCase();

                        if (lowerName.includes("cover")) {
                            label = "Cover Photo";

                            // Add to Swiper slides
                            coverSwiperWrapper.innerHTML += `
                                <div class="swiper-slide">
                                    <div class="immageBoxset" style="background-image: url('${path}')">
                                        <span class="photHaf">
                                            <p>${label}</p>
                                        </span>
                                    </div>
                                </div>`;
                        } else {
                            if (lowerName.includes("bedroom")) label = "Bedroom Photo";
                            else if (lowerName.includes("kitchen")) label = "Kitchen Photo";

                            // Add to smallimage grid
                            main3.innerHTML += `
                                <div class="immageBoxset" style="background-image: url('${path}')">
                                    <span class="photHaf">
                                        <p>${label}</p>
                                    </span>
                                </div>`;
                        }
                    }

                    // Initialize Swiper after images injected
                    new Swiper(".mySwiper", {
                        spaceBetween: 30,
                        centeredSlides: true,
                        autoplay: {
                            delay: 2500,
                            disableOnInteraction: false,
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                    });

                    // Re-attach submit listener (DOM reloaded)
                    const submitBtn = document.querySelector("#submitImagesBtn");
                    if (submitBtn) {
                        submitBtn.addEventListener("click", submitUploadedPhotos);
                    }
                });
            }
        })
        .catch(err => {
            console.error("Upload error:", err);
        });
    }
}


bntNext.addEventListener("click", (e) => {
   submitUploadedPhotos()
});


function submitUploadedPhotos() {
    if (allUploadedPhotos.length === 0) {
        alert("No uploaded images to submit.");
        return;
    }

    fetch("/listingData/savePhotos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(allUploadedPhotos)
    })
    .then(res => res.json())
    .then(data => {
        console.log("Successfully submitted:", data);
        alert("Photos submitted successfully!");
    })
    .catch(err => {
        console.error("Submit error:", err);
        alert("Something went wrong while submitting photos.");
    });
}

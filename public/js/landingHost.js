let slideValue = document.querySelector(".rang-num");
let hinde1 = document.querySelector(".sddf");
let hinde2 = document.querySelector(".host-about");
let numNight = document.querySelector(".num-night");

var el = document.querySelector('.some-element');
var input = document.querySelector("input")
input.addEventListener("input", () => {
    od = new Odometer({
        el: el,
        value: 333555,

        // Any option (other than auto and selector) can be passed in here
        format: '(,ddd)',
        theme: 'default'
    });
    // let num  = Math.floor(input.value * 0.3)
    let ff = input.value * 2226;
    od.update(ff);
    numNight.innerText = input.value;
    slideValue.innerHTML = `${input.value} nights`;
    slideValue.style.left = (input.value * 2.5) + "%";
    const value = input.value * 3;

    

    input.style.background = `linear-gradient(to right, #D70466 0%, #D70466 ${value}%, #d3d3d3 ${value}%, #d3d3d3 100%)`;

})


input.addEventListener("mousedown", () => {
    // console.log("no");
    slideValue.classList.add("vid");
    hinde1.classList.add("hidden")
    hinde2.classList.add("hidden")
    input.style.padding = "4px 0px"
})
input.addEventListener("mouseup", () => {
    // console.log("fo");
    hinde1.classList.remove("hidden")
    hinde2.classList.remove("hidden")
    slideValue.classList.remove("vid")
    input.style.padding = "0px 0px"
})
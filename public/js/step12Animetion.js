function name(params) {
    document.querySelector(".s-line2-4").style.width = "100%"
  
  }
  name()
  document.querySelector(".s-line2-1").classList.add("opop")
  document.querySelector(".s-line2-2").classList.add("opop")
  document.querySelector(".s-line2-3").classList.add("opop")
  
  document.querySelector(".s-line-1").classList.add("opop")
  document.querySelector(".s-line-2").classList.add("opop")
  document.querySelector(".s-line-3").classList.add("opop")
  document.querySelector(".s-line-4").classList.add("opop")
  document.querySelector(".s-line-5").classList.add("opop")
  document.querySelector(".s-line-6").classList.add("opop")
  document.querySelector(".s-line-7").classList.add("opop")


  const arr = [
    { title: "House", image: "https://media-hosting.imagekit.io/5db01f53fd6a4336/WhatsApp%20Image%202025-04-19%20at%2018.42.25_55362321.jpg?Expires=1839691225&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BM8S4MUuvph6BCDvTFg5DhZwQgIbgSgw-OGslQW6rYfTEc3CoZsSh3duglJ95OJUdoZoJ4bN1Q0ztTr3jJhNLv7BITrwS27iGpefWmvC6FIceNTYpkGK-g1lOUNDQC9HnhapsgVEcbqOAYOgfuVGCqcLdEkGGff2uOqp~oE6~dfliHBi2uNCDZyEIcs-C3e8xQCcNM71HFX5dBb~kZxpojzfz3MqnB-W0GM9E9~X1~USZ~xN8mLgDqzdO3PQ~BmGBdb3yWHcdGD-BmSCaBV1rmwCWWD9cQTEaxHdJDWD0LBJPmLLT6hL9V4mtTrhYHwo~EhUNyCQOfveuDKNZpMCvw__" },
    { title: "Flat/Apartment", image: "https://media-hosting.imagekit.io/c205ac9172e3449d/WhatsApp%20Image%202025-04-19%20at%2019.42.57_9bde11be.jpg?Expires=1839694828&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WBwZpFGZSztPmVbg7d9NNFU3sqLBmchkzc8fNDbr6QVEHtq~71KnRjMWo4SjaTHnTpacNXYnhx7r0UhnCSBfRF-vc1HOTT4ZMhtOaNqTZxsPfE1eWVYWX40kXZjHllHFp2I352sp-wxFgtMaRYvjMyH1yovszml96Ad6es6Py5tKWhqb0DBrMREQLYYS0tjItq~pn-PJJS~-WnpD07tKNkrFLeUnrbXXX6q08HwB1QYAaVjGpoCJRXbEaRbPfwAkwEpNAQUN5LGgVVPFkli1bue42meEqg07i4YFlugqLxfPHweBTY0E9oBDIKcht9ecf4D-7PLVB01jVJK5XUAQUA__" },
    { title: "Barn", image: "https://media-hosting.imagekit.io/3de6e228ab954a90/Minimalist%20Barn%20Icon.png?Expires=1839697512&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=THwd6dOV5ipMaOM~Zpo-EG7Pbo3w0ej-KaGylFc0TFebYtO984kAAfNZ1WiBHHSlzdv3k25cMfbN3nlLMEvfm4G4be0hwwrgEyDkfqz8D-9GMMupHpPDAvxUwYXDX14j9DmGP4l2Mf6958iLAChwVRAVqfdYfS0~qwRyZyWg0ft7l-ONqrX~0fc6nxwdndfvLavJtZrRIlrhrFy6ymlkREZt7uFhGWS2ewptMUSnWMijvG43mxPB9c2KMp1ozOpq5JwkxBnKNA2Id66RGAlAkXG2k4OVDbntElF8RkjV23Cyma4-yaVu~ll8UsFPX6GJSgyrEPuyqPywR0MtAZAREg__" },
];











let grid = document.querySelector(".s-grid-s12");
// arr.forEach((e,i)=> {
//   let box = document.createElement("div");
//   let box2 = document.createElement("div");
//   let img = document.createElement("div");
//   let img2 = document.createElement("img");

//   let para = document.createElement("p");


//   box.classList = "s-grid-boxs-s12";
//   box2.classList = "s-icon-s-12";
//   img.classList = "s2-img-s12";
//   img2.src = e.image;
//   para.innerHTML = e.title;
//   box.style.animationDelay = `${0.4 + i * 0.1}s`
//   console.log()
//   grid.appendChild(box);
//   box.appendChild(box2)
//   box.setAttribute("data" , e.title)
//   box2.appendChild(img)
//   img.appendChild(img2)
//   // img2.setAttribute("loading","lazy")
//   img.appendChild(para)
//   // console.log(a.image);

// })
let nextBnt = document.querySelector(".s2-bnt-next");
desebal(nextBnt)
function desebal(egg){
  egg.removeAttribute("href")
  egg.classList.add("desebal")
  // alert("PPPPP")
}



let selectedValue = [];
  
let selBxs = document.querySelectorAll(".gir-boxs121");
selBxs.forEach((card)=>{
  card.addEventListener("click",()=>{
    document.querySelectorAll(".s-grid-boxs").forEach(c => c.classList.remove("selectedds"))
    console.log(card , "dddd")
    card.classList.toggle("lopiuy");
    if(!selectedValue.includes(card.getAttribute("data"))){
      selectedValue.push(card.getAttribute("data"))
    }else{
      selectedValue = selectedValue.filter(item => item !== card.getAttribute("data"))
    }
    if(!selectedValue){
      alert("!selectedValue , ------Error-------")
    }else{

      console.log(selectedValue, "2vlar--");
      
      if(selectedValue.length != 0 ){
       nextBnt.setAttribute("href", "/finish-setup")
       nextBnt.classList.remove("desebal");
       
       console.log(selectedValue.length,  'rtyh');
      }else{
       desebal(nextBnt)
       console.log(selectedValue.length);
      }
  //     nextBnt.setAttribute("href" , "/fgrt")
  //     nextBnt.classList.remove("desebal");
  // console.log("reove");
  
    }
  })
})
nextBnt.addEventListener("click",()=>{
  if (selectedValue.length === 0) {
    desebal(nextBnt)
  } else {
    submitData();
  }

  
})
function submitData() {
  if(selectedValue.length === 0) {
    return alert("hjkk") 
  }else{
fetch("/describe",{
    method : "POST",
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify({describe: selectedValue})
  }).then(res => res.json())
    .then((data) =>{}).catch((err)=>{
      console.log("-----Error-----");
      
    })
  }
 
}
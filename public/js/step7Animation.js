function name(params) {
  document.querySelector(".s-line-6").style.width = "100%"

}
name();
document.querySelector(".s-line-1").classList.add("opop")
document.querySelector(".s-line-2").classList.add("opop")
document.querySelector(".s-line-3").classList.add("opop")
document.querySelector(".s-line-4").classList.add("opop")
document.querySelector(".s-line-5").classList.add("opop")




  const arr = [
    { title: "Me", image: "https://media-hosting.imagekit.io/61d9291eb4914505/WhatsApp%20Image%202025-04-22%20at%2012.19.02_17cb0048.jpg?Expires=1839929184&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tGZb7g7ITmIggxA~AKCBGa4-Y0kc9PoE9ftCQZbbpxY~y9cebOBhWS7qHG~XDGCCrdwFg2~LmzG5MkYWsrHmgPDaOV90cuXM13Orgq7Dpv7Q6RAtcxxwf5y~2RxTYmi52hlLw3Jh20jnH-gVO-Vhumq6z5ZYrRefbrvl0Nc60Ws5adQCUsePJ9hWQ4~spw5bR7qgkZaZ8nRdr2h8cvMrdYlvrOC7RqHJILi5AzG30TOkOVRTI54e9TR0x2QGcPTvb2ul8i-zqnnCX5IBDDKgsqZjep7lsbGW~-WjI6ZCZ5SSy0b6xQNsGPrDaj4TQjT76ht7gwExbqPGTDfBz0lFlQ__" },
    { title: "My&nbsp;family", image: "https://media-hosting.imagekit.io/90dccbf835664f11/WhatsApp%20Image%202025-04-22%20at%2012.53.54_93eb5a7c.jpg?Expires=1839934522&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Q0L391LlWn~9cvSl6tCNT5vfu1VpElWfuNXfFO-mT6jtv9Cj~pzEUVYmnGQ8Z1NgybDpfeeVb1kgXnw0KT83WGP3mXDiQEmcN0NPja8bu07bOw1UktSLQx4q8m7TJm64VTOLdUA7HIUhIb7bnl75y761yj2mW7NGu~ZJDdTjtbcGs5BoXW7SR5~LiGKLmAsYt3YF6wXEKeRwwVOYoldDOPORDMOouMUZcAxZTLLnNXBNnW6Ik5JY2Kum8yEuw-YWfd7yQFbMpSDd9MlTOrQYD-cov4XA9eWSoQHePZsx9-QxpOSq7HHx6nAzjbNO92EIwSVMHN5ftls6m8xildUcgA__" },
    { title: "Other&nbsp;guests", image: "https://media-hosting.imagekit.io/100c1f3ab90b455e/WhatsApp%20Image%202025-04-22%20at%2012.19.03_a88491bd.jpg?Expires=1839929213&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wd-3oaCTH0j3j~5Se0LAb~jTnvCv8fenjRgFG5AiJIJbiOq7Fk3a~D5I3L8-WgMarMR7MFMO1y1WTVr~ACVdG5Z6qdIedb-UNR320cQL5GWM3PSH2lKoZd0gS~QWwZoCye3-sGHlaTzOA55FnsGMdJC4XPZ~RNtZ4P-zXigZ7B6GC9IKcjKRBzvRy9qRaHVWVFtC7hnnyAi6kWTgvHDe693D~aLez2UbyGVtxua3SKYWyx9Ay2mt~SmIJbGa-j8kl8J-xFp1jC6roR7oZEX7glv-PHSyFDqTE2iXZuqg~Q28SeMyDkvLC5f~vZPXoN09sV6R68GsENkIo9JUR2Jhow__" },
    { title: "Flatmates/housema", image: "https://media-hosting.imagekit.io/91acaa1213f74c19/WhatsApp%20Image%202025-04-22%20at%2012.43.26_3d78826b.jpg?Expires=1839934026&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BgGFAJgpY7iUVr6lkX8hR8fX5kbvcbvgsFmnaOJhJ9FDU~SQ7OyJQqFGDvZizZolKRq4yv5E9pxLIW6iawtJXEWigGmsQxNWudkyKJn-xtPgeB1L0MHwcbqsGBA~r7hBWmUQJXfBYVR2EkaOHrstYoPzI7iYXtvdGI0n5yZ-WOQGYiOjchE~0ySQvJQ2gFfcBZGWDbImGNRZ0y4ijtV~pAaU66rk8R8iclou47WfEC73u2rLQ2iA5a9icZ17KuNkWjTTv19mJ4wqYMcIQbH1zRtEhp-SxPEekBLt-mIHDEMivSCz25x53jOSB6Uc~rj6hvPcPhaq98Bm9tXYDgl3Fg__" },
    
  ];
  
  let grid = document.querySelector(".s-grid");
  arr.forEach((e,i)=> {
    let box = document.createElement("div");
    let box2 = document.createElement("div");
    let img = document.createElement("div");
    let img2 = document.createElement("img");
  
    let para = document.createElement("p");
  
  
    box.classList = "s-grid-boxs";
    box2.classList = "s-icon";
    img.classList = "s2-img";
    img2.src = e.image;
    para.innerHTML = e.title;
    box.style.animationDelay = `${0.4 + i * 0.1}s`
    console.log()
    grid.appendChild(box);
    box.appendChild(box2)
    box.setAttribute("data" , e.title)
    box2.appendChild(img)
    img.appendChild(img2)
    // img2.setAttribute("loading","lazy")
    img.appendChild(para)
    // console.log(a.image);
  
  })
  let nextBnt = document.querySelector(".s2-bnt-next");
  desebal(nextBnt)
  function desebal(egg){
    egg.removeAttribute("href")
    egg.classList.add("desebal")
    // alert("PPPPP")
  }
  
  let selectedValue = [];
  
  let selBxs = document.querySelectorAll(".s-grid-boxs");
  selBxs.forEach((card)=>{
    card.addEventListener("click",()=>{
      document.querySelectorAll(".s-grid-boxs").forEach(c => c.classList.remove("selectedds"))
      console.log(card , "dddd")
      card.classList.toggle("selected");
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
         nextBnt.setAttribute("href", "/stand-out")
         nextBnt.classList.remove("desebal");
         
         console.log(selectedValue.length,  'rtyh');
        }else{
         desebal(nextBnt)
         console.log(selectedValue.length);
        }
       
    
      }
    })
  })
  nextBnt.addEventListener("click",()=>{
    submitData();
    
  })
  function submitData() {
    if(selectedValue.length === 0) {
      return alert("hjkk") 
    }else{
 fetch("/occupancy",{
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify({value: selectedValue})
    }).then(res => res.json())
      .then((data) =>{}).catch((err)=>{
        console.log("-----Error-----");
        
      })
    }
   
  }

function name(params) {
  document.querySelector(".s-line-1").style.width = "100%";

}
name();

fetch("/structureData")
  .then((response) => {
    return response.json(); // return this Promise
  })
  .then((data) => {
    let arr = data[0].hotelType;
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

let selectedValue = null;

let selBxs = document.querySelectorAll(".s-grid-boxs");
selBxs.forEach((card)=>{
  card.addEventListener("click",()=>{
    document.querySelectorAll(".s-grid-boxs").forEach(c => c.classList.remove("selected"))
    card.classList.add("selected");
    selectedValue = card.getAttribute("data");
    if(!selectedValue){
      console.log("ddddf")
    }else{
      nextBnt.setAttribute("href" , "/privacy-type")
      nextBnt.classList.remove("desebal");
  console.log("reove");
  
    }
  })
})
nextBnt.addEventListener("click",()=>{
  submitData();
  
})
function submitData() {
  if(!selectedValue) return alert("hjkk") ;
  fetch("/hotel-type-data",{
    method : "POST",
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify({hotelType: selectedValue})
  }).then(res => res.json())
    .then((data) =>{}).catch((err)=>{
      console.log("-----Error-----");
      
    })
}
  })
  .catch((err) => {
    console.log(err);
  });

// const arr = [
//   { title: "House", image: "https://media-hosting.imagekit.io/5db01f53fd6a4336/WhatsApp%20Image%202025-04-19%20at%2018.42.25_55362321.jpg?Expires=1839691225&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BM8S4MUuvph6BCDvTFg5DhZwQgIbgSgw-OGslQW6rYfTEc3CoZsSh3duglJ95OJUdoZoJ4bN1Q0ztTr3jJhNLv7BITrwS27iGpefWmvC6FIceNTYpkGK-g1lOUNDQC9HnhapsgVEcbqOAYOgfuVGCqcLdEkGGff2uOqp~oE6~dfliHBi2uNCDZyEIcs-C3e8xQCcNM71HFX5dBb~kZxpojzfz3MqnB-W0GM9E9~X1~USZ~xN8mLgDqzdO3PQ~BmGBdb3yWHcdGD-BmSCaBV1rmwCWWD9cQTEaxHdJDWD0LBJPmLLT6hL9V4mtTrhYHwo~EhUNyCQOfveuDKNZpMCvw__" },
//   { title: "Flat/Apartment", image: "https://media-hosting.imagekit.io/c205ac9172e3449d/WhatsApp%20Image%202025-04-19%20at%2019.42.57_9bde11be.jpg?Expires=1839694828&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WBwZpFGZSztPmVbg7d9NNFU3sqLBmchkzc8fNDbr6QVEHtq~71KnRjMWo4SjaTHnTpacNXYnhx7r0UhnCSBfRF-vc1HOTT4ZMhtOaNqTZxsPfE1eWVYWX40kXZjHllHFp2I352sp-wxFgtMaRYvjMyH1yovszml96Ad6es6Py5tKWhqb0DBrMREQLYYS0tjItq~pn-PJJS~-WnpD07tKNkrFLeUnrbXXX6q08HwB1QYAaVjGpoCJRXbEaRbPfwAkwEpNAQUN5LGgVVPFkli1bue42meEqg07i4YFlugqLxfPHweBTY0E9oBDIKcht9ecf4D-7PLVB01jVJK5XUAQUA__" },
//   { title: "Barn", image: "https://media-hosting.imagekit.io/3de6e228ab954a90/Minimalist%20Barn%20Icon.png?Expires=1839697512&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=THwd6dOV5ipMaOM~Zpo-EG7Pbo3w0ej-KaGylFc0TFebYtO984kAAfNZ1WiBHHSlzdv3k25cMfbN3nlLMEvfm4G4be0hwwrgEyDkfqz8D-9GMMupHpPDAvxUwYXDX14j9DmGP4l2Mf6958iLAChwVRAVqfdYfS0~qwRyZyWg0ft7l-ONqrX~0fc6nxwdndfvLavJtZrRIlrhrFy6ymlkREZt7uFhGWS2ewptMUSnWMijvG43mxPB9c2KMp1ozOpq5JwkxBnKNA2Id66RGAlAkXG2k4OVDbntElF8RkjV23Cyma4-yaVu~ll8UsFPX6GJSgyrEPuyqPywR0MtAZAREg__" },
//   { title: "Bed&amp;Breakfast", image: "https://media-hosting.imagekit.io/d49f113b42474199/ChatGPT%20Image%20Apr%2019,%202025,%2006_15_54%20PM.png?Expires=1839696881&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=AkA2W09m8eMLtI4npFAbgjzAzsvRSwPRrFvxDo6OPs5F~Z1iCPM0dp5aZ6Ygx8LVDolLAbSAyQgmJ54vrKutY7BKhfQpXyv9vb8wSW75m9UGkfModziBiyry8~~mnISTmkuj8MPLyPoTijyVw5pkX-6BnDHQvfL4LeCRalEpuQ6woNKP5wRCVdiqkzq3QGdCqOPcbaoFVy9TzK1qEKuuK61qQilROVSCAP3Me9CX-JqJAdxNHEsQtaBDnACrPORw8mSgkRwvZ4SuyHerTZx0TxMi8v9B~gFtmZwHpWVzQKn0Q5boCCzM45fslxCG6E1ZPzHXbYP0ljKrphLQ1U1lXQ__" },
//   { title: "Boat", image: "https://media-hosting.imagekit.io/ee851e69e237407e/ChatGPT%20Image%20Apr%2019,%202025,%2006_18_45%20PM.png?Expires=1839697428&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rbAnAFb7tYVbb2asqaTL9uUODLP6tbq1TwVLetXGGUV46Y7f5sSFB4dMUZk0bd3eXlHr1JyPIExf0WbFi1KwO4T2FiJjLhYndZFGdimpo6S9O0W4pq89p87SOC~jtdoXflARqWxJ7a7chjcMz3YNGk3~vry5MgR6yl2x9SHTpVDDWZAFHRSGLSJNubKL9pWT-dhjAieRexDib3LUGYNm0caJlgPqN~vWTPN0PUeziRMnMhfjVdjOFFV3Ql9-N5Km5YfSC9JQn6Aft00xP8t9Bg7OqPKqDPbbM9ImuflApcGJr~Uf1pCu2KowRgWpD4Ta37a6MyisRUiihp6anGJVNQ__" },
//   { title: "Campervan/Moto...", image: "https://media-hosting.imagekit.io/f7e40c3563c44f37/ChatGPT%20Image%20Apr%2019,%202025,%2006_34_47%20PM.png?Expires=1839697971&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jAQ2-DGZO2DiSjQMUMyYtZXlsPuemOpodfqleCvUObb3~M9NpWFHd9eRPsF1KpB1DBSUJzLHVaVFre28mdG7JkWB19mrzZHSn1LoRG8ktZLC2pchJ7WAOua1RyqSRQuPuFRcmEGZ1BA4laW0j6A0cITwvV3fia-8kFh3PHdO~G-n4SFyfUCwIaSAOgJDJLZOiwA7E8IYWT9zFo4hnmASIl9zF0iAcROs2C7DpB8KNl6xh~SYSRGG3J19qffpwZSlAJdKQFr~yKaa7~KZGmkKKcthfyaQgoRRz1SikAolb1aSVnq782GWW~wn6ZjpOOZRKjL8jivRgxrrA-uu8lNV7w__" },
//   { title: "Casa&nbsp;Particular", image: "https://media-hosting.imagekit.io/df224f01bb43494a/ChatGPT%20Image%20Apr%2019,%202025,%2006_39_27%20PM.png?Expires=1839698178&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Dxt9pAp49u68p-94hVAdU5~T1DJVcjLuK8jFvYzFU8QW-nMumBHr9eF3j3XAtuZvE5sj8ik8U-61pTKLireASLr3R6EvUs1TUKoIms3EqQmQNyx2WVqAo55sRNxGuXn-MCaCVutjfjtwyz2ymNta8Ca1CJn5pAifVWM36QU-2GUiwovnhEL0U41iA3klcKUepd4q2v4MbvJ1zREmDLklpdWZFQwtcCHQ1bPK1BfXGZWZSL6kQ~V4YWm8A6Bf6w1Kr9wg4lwixr72J~5J2zXpYsaZRk0rNAwbeFd0c1RKRfYNvX2DASQjJZYy58aWmGAJ084mhmBvXeQJXam4c2qa7A__" },
//   { title: "Hotel", image: "https://media-hosting.imagekit.io/1c83f2fcf54d4f84/ChatGPT%20Image%20Apr%2019,%202025,%2006_20_45%20PM.png?Expires=1839701485&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JiuDLmIdfUtxUhKIarjCcfirLnqlhrWBNgUt34D2PbJhWYtByZwPL8EXaByktjgaPUroIAVP7XEIrPxTjSk8jvP5~OlJQ9ZOmuu5zmOcZJYfHd0vDx66PA~DG1HZXalg9LBBnbSwgxR48lWX90EzC18cpFyWQAz0dPjznwoYDxhBbfN1OGnJ66wHtrVwOJ3jgQeITYy~jikUKLA~PG4cmS8-iqwkGHAPwa6Iu7RksvFHdUsw-O4sgH9Tn~Nhvm-19yAOy8Xom~j861Nmg3jpPxtLnCPzpSPsUJwEsDIUv8dKKMvmLKTPNILHpZpSXTFD4Pdajt1R1F~lJBhDgt~33Q__" },
//   { title: "Guest&nbsp;house", image: "https://media-hosting.imagekit.io/c196583be61b4e15/ChatGPT%20Image%20Apr%2019,%202025,%2006_17_58%20PM.png?Expires=1839700514&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yPkrRfA~ytTOB75~RY2VWyy2CsBHHozyQSKBN-C6Q2~i607sNZ9KyN8IPW8bpGMtkCgRC-uSLEw3kFjH-rJdcEUYd24Cc5H9gN73R5jRJ8RM5FkKivQ2jqo1CJtjacIE6P-5ccbmDLjTz2u642tcGEENtT6F4-lPfIl48EaNc~T0gzO3GN3q8voxbfHcIivsotVxTP60ZG4qHNl1TgnGa5sYfRNyXRSKy1M7qmF4M8Phk2J8rMNJJGBydwGB8mmFGczuSnMYgYPAii362Oh3FCMOCXSgGofdcwGdruiDutoin5DgEgxKeH26Ml9kBYAoGBHGNR11YgLndlyOW4cTuw__" },
//   { title: "House&nbsp;boat", image: "https://media-hosting.imagekit.io/d6fcfc0eca884f71/ChatGPT%20Image%20Apr%2019,%202025,%2006_39_04%20PM.png?Expires=1839701776&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ioDVvSKaVr10gFcdEyQHyxb-ZzAUleZYjuSP6Ko7Ah~lhghOuNjijSy~D0AJhmljgTNliscbAg1-HWQ9bXWHCCrYqP278p2K7HyeJ9FWqpgOHOEYnaaRvHzxmVTJtbPLE0M5IGXjmjAIfDks6Ptw5dPBRMAJ9w0HR6n1ugyYaEdGBs~s1H5IUkdw0JLhRs~2MhsL~H0fAVpnHfb2wMR9PLtHwOkewJuHQpAvfnCcuk9AT6OSozLNadLGHOw9kOiVQUEHOTZ4oJ9XAiXzbC26bmRfC9uxdSNlmN9PL9q9w7Sw3XLao0v2msjNHoFdL7ws1OQF7WNUdsfngWvfFHilkA__" },
//   { title: "Riad", image: "https://media-hosting.imagekit.io/587d31936aa24b94/ChatGPT%20Image%20Apr%2019,%202025,%2006_55_28%20PM.png?Expires=1839702739&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cCj-CuDgsupfWPqFpgf9est4SJuuoglWuy9HO7QNUZolW7fLPKSwjjAuliXVcaWZaRMBXIpJsWSp~ZFrQj9C~SwbFIuiBqV7OPxdLRzk7YXeVzdqziKz9eE4jnz937xe0FX8FiK88DRwFPzUdrJ~njXAwWEZ4wQxszvaWjp-w1lJ5S13dmW~~39SUv23QQn9xf-0zW4h3LVclQQXBqwUpWyBsGWq-mM9DhCxIdnMmdQH2cmfduPYhxZVYigp0TFRSybFE982aKDF1LyMMcyyl1EPElRLTE0T2gWycOtF7Faey~XoehnEWgM36hhx5zGtcPHYAa53fBqoiltg1JGMJg__" },
//   { title: "Kezhan", image: "https://media-hosting.imagekit.io/214da031298a40ae/ChatGPT%20Image%20Apr%2019,%202025,%2006_34_01%20PM.png?Expires=1839701496&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Z-IZ8EV85mYrwGYVsNcb9eyCYl0vWYZcMtbIbXJmLcsIX5rrUa8PJr9KdftHtZl96XupuziiaKmevtfIvTcIgb4Q3hGxm7JbAjjgL~k07dirXar-MQXxNGcEPmtZvyM9MmWBu9r0lINuHrC3cjO4r-7BBTQlGJY6MoMNZ-UsCb~W1oD508lvG4lVB-3WXMZ5zy~srwkXijJ31pnE4MpRUbZt3m-vtTlvG3aS3eSdNnXPTv6mIc6l1Xf4gTCkOJaP~5psCae7IIxQu79qv~Zq3RterI8AlABxGrVK~tGereOVszRosgxbb4keI0~C5f-nfVo-0rUKt7SN0wYYKDP8zA__" },
//   { title: "Castle", image: "https://media-hosting.imagekit.io/a93675642d504b1a/ChatGPT%20Image%20Apr%2019,%202025,%2006_40_39%20PM.png?Expires=1839698250&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VLUQTm3Jiu4sIduNFLX-LyKuh7khH3Zs06eTrP1963xV6US0crdJRVvbGzG5vqr3mfsehs-CGNjm~est0~LoWSDeANhJ8pwg~weUOj0V0uy~Z3SgI5DQd6OPVww-DJhFBc~11QE0IKZmsJdWmaWv9xxhEwJ6OwcnIJJjvjpbCO7j5td1RoktyPHdm5bDcYo9gEbhT8Y3j0e541i0rA2r4xi~A44PKG1qTE3dCgohdfGDWMVi-JkOYyEZ74Vg2igX0pkn5CKHyVrlKGcD2bjuR1zYPlVMsxY7WN~a-cpL6-HmdBE7hUaGexRWOyhCcHyP-Sw5J5og6ahCNZ9pMQGlAQ__" },
//   { title: "Cave", image: "https://media-hosting.imagekit.io/368846d147104169/ChatGPT%20Image%20Apr%2019,%202025,%2006_41_09%20PM.png?Expires=1839698575&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=X9KOoztNip~J2mX7Cwe7OXgTGVj24USGendsPzwchXjisKGTbew0hHkF4-9jC2EUt~0LGbzsMlTsLO9rBJgdcJJ8WxI6FG2ZmCUcIxiKNJhG6dLaqzYQ67Vd9K5NqtaDNfOspr-kX58iwhN5BGozpKn8lcFYAgnja0pGAqXwEfQ6JFoEOyaJbsVz9Lm7mx7GQIudAuyRoyuRL1MnPhYFmFFZakLqK58ClvijZhsZ9dIfKhKb6Z2RocZWsL8NHsNnir73HjfSM~vFehifl4tRzJBzgUTneOHEFalfHzfaZ2KwA4Us59d5IoF~6cgNaoXluAE-EBnA~5n3cfc16BSdpQ__" },
//   { title: "Container", image: "https://media-hosting.imagekit.io/9e0f4f3894234486/ChatGPT%20Image%20Apr%2019,%202025,%2006_23_11%20PM.png?Expires=1839704425&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zhBUXOMkkA5ujDwvxtDp0lH8I7k3J1klXvXhBUIbKYL235Bk8H5ZGfYbyxtLmWkiBV7zts9KK2wqEtwCU1ivo7g2ajXrAbwJDzbW2LCLKP~AmOBijLycObFGjXHROf5G9RvFMX1zv543GDUGqn4mEhpT33e3wVnEMGcFKH79ZYrLAO81DKYureffYsgM703oFf9KDomZSPtA06-hiiHu79RzUivj6mO5WDd6JoUEUj1Y40ZSMHAvzhJqxjIh31D0QjMtxr805ZNsc0QN9Yu0shuIcvtLr3HT9fcAuajBgLaBm-dEaKzQ-KGiOrAVbTzcTdBAEyDa91ur1w2pf4r7lg__" },
//   { title: "Dammuso", image: "https://media-hosting.imagekit.io/2a9ddb4b674849f9/ChatGPT%20Image%20Apr%2019,%202025,%2006_51_39%20PM.png?Expires=1839698933&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=NIKG3FkfkWdQ6ezwhERPABu7MskxNe0V8f9py-GUsjSpRbRpKns3W2Dhtf8rP~4qFh8sIBbGzuqnPDSVU0klHeGwzGA30UeG4pU5ZpbZNtqhFaTn1JggqY36FfrC53z~caUr3RSi4OVzYZBXzFrctw2GtSheJpywMnyuvNSAATp~DYKYdr3tpZGN1ePSbrEdl4-lRrAyH7GgIxRrpoMTrw60f5sz7gX9IiovP01LFR0jmbciTRKAsIAzVeYtke7VU4Y7g4-A6AfwHqnDWRgxOwZ3xakbsjVNsjeP7JQfek0IW8mAoB~zHT4LKSVU71e3opZDBp1Q6N1oCIhK7-2vmg__" },
//   { title: "Cycladic&nbsp;Home", image: "https://media-hosting.imagekit.io/1baba9a9e3224dda/ChatGPT%20Image%20Apr%2019,%202025,%2006_48_24%20PM.png?Expires=1839698956&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=V3sp-8nu8bOQMOhZXfwBNpQSwVjmazeqjhqYoBzENKC2mFb0XTT5CrZJjgIoIbGlUfrjHrJ1Le2WvUcAmfQSW25uNcOWESvR5~1WDas6kB6eIW1qOJMfvySYy0nLm-d1oYNZbTQgT7XTDqn~xy9FEMoU14dSQkBdfFnxFXSGuq4MwucJ9yvC2WWXx89aX6UMSCoGmJRHaFto1t8vOJhEZUEwWbLk~DQEJ-aXTJR1iv-oNF9~6FG0rBCxjQHNECQKQ1M9ZhMGrO4bjU1-6KDmJ8h4kojlL2~NE5t--rwbZWiSUid4EmsAgbhJFW0aQCjP5FpPvcdfjQKsihk4FJz3QQ__" },
//   { title: "Dome", image: "https://media-hosting.imagekit.io/ac1f97a6dcc54fdc/ChatGPT%20Image%20Apr%2019,%202025,%2006_54_00%20PM.png?Expires=1839699083&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=eWC8btlnrrzcSh7-G15MXco8aR6xlgivHcWhXpKyOA6ZnaE8wIQsgK4hijb9gd2hBF65xaW~Y38--~JjsUg6amnXM2VSs9VOENSQIG0kUf7A2chIw1pHdMp8MaAdpEPfecRATIzQQtWrV23~X742zPT8Zje8-~UVJcCMuF~dTdeR~N-WUc6kTKY~NlXsKtEPckt8hP4RoF07lJ6L3p9PVlWZzSSKI0TWr9WoVw3WvYNE6CzMBJvLsBibJ1UMX7zQI-kfYuyzIkMcYCoSg-DbYVvW8Dah-arwpBmVeZuYUlEgTh9ljapvjQ2uuH20E5jtxaPJJnFUPm4pBSfRry0K3A__" },
//   { title: "Earth&nbsp;Hone", image: "https://media-hosting.imagekit.io/6182660ffad745d1/ChatGPT%20Image%20Apr%2019,%202025,%2006_56_21%20PM.png?Expires=1839699208&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JVE61nOj8hjEOkqzo1pn4y-M76JAs-3iEOkAiToMWM9jlOsHjIQIhayjQnZA77pQkTY3yszZXvK0YLC904JraYkbDTnhN8KC~QX-13~49JifoR-v8lKIJgnWirNpC33wYRQ~GgRxuM5kw-qdvEF9-qGiItZOot-~Acfv3hUekLwkm9E5MPyjBcnAWbZSA8ilcvSqNAvowCIGsVjTeOvFktk3wqYGpW8KQOnOr8wqKwBOwOgPnfz-VKrXSk8Lov9qN64hhBfNc743h5nI124wRR0BAlXvNRH60ZKLP7UCkbomoDUL1rbwF6slPvWxOc4aPAvHpZv9iij~aKjTorIWgg__" },
//   { title: "Farm", image: "https://media-hosting.imagekit.io/1ac265f0e9be4b69/ChatGPT%20Image%20Apr%2019,%202025,%2006_15_00%20PM.png?Expires=1839700328&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=3Py4QPLOdoTjadiHEYxHHhzi2DSKTCBPELOSR8yyAsFJvxqxc5OsQfTD9RnoNxzIEM227wgDCKMReskJpk9DdfOW5P4TU0RtO516GTi-cbQ~~7NfxdN3UEINe6nPq8D62YiwOFDMXdFkjhSJBCHyJmSrTN3o8Poky-EGI72nkfb1xZfsbOgnpJRY5q4gf76JsDb-uY6SScIR-jfXQGd9qVbbDNGYSDHLqD9kVQv9-afIJ8ljwqajc1Kwv0Gn2e0aaJ2tGiWRV0iKb6rCzUNbhBNQoyAQauivi3zUla5Kd6qrxWIWdMWW4Uuje6ydj22mtaUhVSfcDXCvg2Ho497qIQ__" }
// ];


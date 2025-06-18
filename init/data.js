const mongoose = require("mongoose");
// const data = require("./data")
const Schema = mongoose.Schema;
main().then(() => {
    console.log("The databass was successfully connectd");
}).catch((err) => {
    console.log("----Error---", err);

})
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Airbnb")
}
const hotelCreateData = new Schema({
    hotelType : {
        type : Array,   
    },
    roomType : {
        type : Array,
    },
    occupancy : {
        type : Array,
    },
    amenities : {
        type : Array,
    },
    describe: {
        type : Array,
    },
    instantBook: {
        type : Array,
    }
})

let data= mongoose.model("data", hotelCreateData)


const data11 = new data({
    hotelType : [
  { title: "House", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748691277/WhatsApp_Image_2025-05-31_at_17.02.09_75111154-removebg-preview_g4rg4i.png" },

  { title: "Flat/Apartment", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748691277/WhatsApp_Image_2025-05-31_at_17.02.09_e158d76e-removebg-preview_dtumw9.png" },

  
  { title: "Barn", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748691773/Minimalist_Barn_Icon-removebg-preview_dooiwe.png" },

  { title: "Bed&amp;Breakfast", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748691772/ChatGPT_Image_Apr_19__2025__06_15_54_PM-removebg-preview_vce4my.png" },

  { title: "Boat", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748692898/ChatGPT_Image_Apr_19__2025__06_18_45_PM-removebg-preview_jahmg9.png" },


  { title: "Campervan/Moto...", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748692916/ChatGPT_Image_Apr_19__2025__06_34_47_PM-removebg-preview_zvdkh8.png" },


  { title: "Casa&nbsp;Particular", image: "Casa&nbsp;Particular",
      "image": "https://res.cloudinary.com/dmenkblkq/image/upload/v1748692917/ChatGPT_Image_Apr_19__2025__06_36_54_PM-removebg-preview_ef8onj.png" },
  { title: "Hotel", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748692902/ChatGPT_Image_Apr_19__2025__06_20_45_PM-removebg-preview_zi2hqb.png" },
  { title: "Guest&nbsp;house", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748692895/ChatGPT_Image_Apr_19__2025__06_17_58_PM-removebg-preview_yyxxzm.png" },
  { title: "House&nbsp;boat", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748692910/ChatGPT_Image_Apr_19__2025__06_34_01_PM-removebg-preview_vtywih.png" },
  { title: "Riad", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748692909/ChatGPT_Image_Apr_19__2025__06_29_08_PM-removebg-preview_m7i0mn.png" },
  { title: "Kezhan", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748692873/ChatGPT_Image_Apr_19__2025__06_46_20_PM-removebg-preview_dlvxw0.png" },
  { title: "Castle", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748692873/ChatGPT_Image_Apr_19__2025__06_40_39_PM-removebg-preview_b4qiyq.png" },
  { title: "Cave", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748692873/ChatGPT_Image_Apr_19__2025__06_41_09_PM-removebg-preview_bwihrs.png" },
  { title: "Container", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748692905/ChatGPT_Image_Apr_19__2025__06_23_11_PM-removebg-preview_kuubcn.png" },
  { title: "Dammuso", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748692882/ChatGPT_Image_Apr_19__2025__06_51_39_PM-removebg-preview_cuylan.png" },
  { title: "Cycladic&nbsp;Home", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748692880/ChatGPT_Image_Apr_19__2025__06_48_24_PM-removebg-preview_isqrzk.png" },
  { title: "Dome", image: "Dome",
      "image": "https://res.cloudinary.com/dmenkblkq/image/upload/v1748692883/ChatGPT_Image_Apr_19__2025__06_54_00_PM-removebg-preview_qpqf2e.png" },
  { title: "Earth&nbsp;Hone", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748692889/ChatGPT_Image_Apr_19__2025__06_56_21_PM-removebg-preview_ujm8ir.png" },
  { title: "Farm", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748692890/ChatGPT_Image_Apr_19__2025__06_15_00_PM-removebg-preview_yv8mvb.png" }
] ,  roomType : ["aRoom","aShardRoom"],
     occupancy : [
        { title: "Me", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748696248/WhatsApp_Image_2025-05-31_at_18.25.42_193e2a0e-removebg-preview_k2jvtd.png" },

        { title: "My&nbsp;family", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748696378/WhatsApp_Image_2025-05-31_at_18.25.42_94ec106f-removebg-preview_r9nrzf.png" },
        { title: "Other&nbsp;guests", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748696438/WhatsApp_Image_2025-05-31_at_18.25.43_c1cce3e4-removebg-preview_v1fw7z.png" },
        { title: "Flatmates/housema", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748696506/WhatsApp_Image_2025-05-31_at_18.25.43_1161821d-removebg-preview_k5mmjn.png" },
        
], amenities : [[
    { title: "Wi-fi", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748697492/ChatGPT_Image_Apr_22__2025__11_58_33_AM-removebg-preview_qmrjo0.png" },
    { title: "TV", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748697555/WhatsApp_Image_2025-04-23_at_14.43.16_1789bcb5-removebg-preview_e7jerx.png" },
    { title: "Kitchen", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748697608/WhatsApp_Image_2025-04-23_at_14.43.20_d2fdb609-removebg-preview_gjvgzb.png" },
    { title: "Washing&nbsp;machine", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748697659/WhatsApp_Image_2025-04-23_at_14.57.18_4ade668c-removebg-preview_ocfmwk.png" },


    { title: "Free&nbsp;parking&nbsp;on<br/>premises", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748697755/WhatsApp_Image_2025-04-23_at_15.06.16_b2946999-removebg-preview_v0nel9.png" },


    { title: "Paid&nbsp;parking&nbsp;on<br/>premises", image:  "https://res.cloudinary.com/dmenkblkq/image/upload/v1748697801/WhatsApp_Image_2025-04-23_at_15.08.04_bd55ef98-removebg-preview_e068up.png"},
    { title: "Air&nbsp;conditioning", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748697861/WhatsApp_Image_2025-04-23_at_15.29.32_f5fe04b0-removebg-preview_bxwnbp.png" },
    { title: "Dedicated<br/>workspace", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748697899/WhatsApp_Image_2025-04-23_at_15.29.36_cc478f00-removebg-preview_zorihr.png" },
  
  ], [
    { title: "Pool", image:  "https://res.cloudinary.com/dmenkblkq/image/upload/v1748698524/WhatsApp_Image_2025-04-23_at_19.11.19_00b0563a-removebg-preview_xxxyn3.png"},
    { title: "Hot&nbsp;tub", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748698566/WhatsApp_Image_2025-04-23_at_19.17.00_6255e28b-removebg-preview_vjlmgj.png" },
    { title: "Patio", image:  "https://res.cloudinary.com/dmenkblkq/image/upload/v1748700348/WhatsApp_Image_2025-05-31_at_19.34.50_2a97e2ff-removebg-preview_tdi5w4.png"},
    { title: "BBQ&nbsp;grill", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748698652/ChatGPT_Image_Apr_23__2025__06_27_18_PM-removebg-preview_rdnoh7.png" },
    { title: "Outdoor&nbsp;dining&nbsp;area", image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748698708/ChatGPT_Image_Apr_23__2025__06_39_19_PM-removebg-preview_l5m6yx.png" },
    { title: "Other&nbsp;guests", image: "https://media-hosting.imagekit.io/100c1f3ab90b455e/WhatsApp%20Image%202025-04-22%20at%2012.19.03_a88491bd.jpg?Expires=1839929213&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wd-3oaCTH0j3j~5Se0LAb~jTnvCv8fenjRgFG5AiJIJbiOq7Fk3a~D5I3L8-WgMarMR7MFMO1y1WTVr~ACVdG5Z6qdIedb-UNR320cQL5GWM3PSH2lKoZd0gS~QWwZoCye3-sGHlaTzOA55FnsGMdJC4XPZ~RNtZ4P-zXigZ7B6GC9IKcjKRBzvRy9qRaHVWVFtC7hnnyAi6kWTgvHDe693D~aLez2UbyGVtxua3SKYWyx9Ay2mt~SmIJbGa-j8kl8J-xFp1jC6roR7oZEX7glv-PHSyFDqTE2iXZuqg~Q28SeMyDkvLC5f~vZPXoN09sV6R68GsENkIo9JUR2Jhow__" },
    { title: "Flatmates/housema", image: "https://media-hosting.imagekit.io/91acaa1213f74c19/WhatsApp%20Image%202025-04-22%20at%2012.43.26_3d78826b.jpg?Expires=1839934026&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BgGFAJgpY7iUVr6lkX8hR8fX5kbvcbvgsFmnaOJhJ9FDU~SQ7OyJQqFGDvZizZolKRq4yv5E9pxLIW6iawtJXEWigGmsQxNWudkyKJn-xtPgeB1L0MHwcbqsGBA~r7hBWmUQJXfBYVR2EkaOHrstYoPzI7iYXtvdGI0n5yZ-WOQGYiOjchE~0ySQvJQ2gFfcBZGWDbImGNRZ0y4ijtV~pAaU66rk8R8iclou47WfEC73u2rLQ2iA5a9icZ17KuNkWjTTv19mJ4wqYMcIQbH1zRtEhp-SxPEekBLt-mIHDEMivSCz25x53jOSB6Uc~rj6hvPcPhaq98Bm9tXYDgl3Fg__" }, { title: "Wi-fi", image: "https://media-hosting.imagekit.io/b5572221990441e5/ChatGPT_Image_Apr_22__2025__11_58_33_AM-removebg-preview.png?Expires=1840015915&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GYMKPtZHnzwcVCwFzEakWZahqnFvgBZBLRY37TsAZQVXblshAajjDGYHGJyYD5LdahR4igKC3RxCa0lRjTqk6kWbGYtigu1BcnS-e1ARlSIi7BUpLAwpinWezyHnGIWia6DymyLIoipUoq~de2rk95i~171~eIx9wD28SwkL1IWFHPPS-opNHvawy5geRTP5eqcaFOXew5CyVTehlUpyypUU57j0hXMQi7O5muJNwsSYgUwo5JUte1Lf42G1CumaxMoYTUBxA6cErdRTTlvuv8XytQ3mQ3MYvvFwIIyZ1R5aULVhh7hIsXykVRk5A7VT3e~ec8HLDHEnIbCgP06z9A__" },
    { title: "TV", image: "https://media-hosting.imagekit.io/e2bd44be8c294762/WhatsApp_Image_2025-04-23_at_14.43.16_1789bcb5-removebg-preview.png?Expires=1840016459&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FYW~2Sy9cIuQZfm0aKuF0dP5kleVbAJQwZpgmNCeNzrVeQUjyN2BJk3fIwxhzi7mB5D-cL46prmjRPVJTv-ccK2wxJdCmvmgEAijZ1VoV3cbH93uv6vPz57tFbgVnPUdmUhJ6VKAq9yqZFYdbhMr4NeLUlcg0Y7oklZSmAxgbPzNhtSZVXEcxNrKa2~i6ueGZTbiAv4oM2PKwbGX~3Pg1XgywPPrLIA~KeSemja1n1t5SCtzrJiTX8ExUkTrAz1u-1yont7sqqJhCx~jdOSGTSIqzgRo9WvDqhKoijG2cUaoaVHUzhn2PBorUL59R9B1EvFuZOLy4c1h1JihRm5aYg__" },
    { title: "Kitchen", image: "https://media-hosting.imagekit.io/b9c15ecb107141e4/WhatsApp_Image_2025-04-23_at_14.43.20_d2fdb609-removebg-preview.png?Expires=1840016552&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=H9~60O5l~ObbFj8wo4ouPGaIdKcICAEOoa1w30qkonipOYuKvWthOhaV8bf1WlG-k8zOnCQin8J6KYVvsZ7t~01cW-mH0sFSrhXNXpc~OMJcgbNwubkXvMpLTYK9t~xKR3sraiXyqptMWTRe30HOeOwqDlaKOonTTAO0THcQ3dG6z2fYX2UTcJ3rRuWIcF24hQLzg~3w7oKBzfi9-kQqNUHBCTF-RRwP3r726SkFcig97d9J0fbccveyVRo0QrBRef0Ppij-dXYJT7vtpN~1lFWg7LsjciBEz1AOEAxItdmYyUn1Py5H8juZgbKcX9koYWNrcddl9kkSLPcHpqWkRg__" },
    { title: "Washing&nbsp;machine", image: "https://media-hosting.imagekit.io/366edc827680426d/WhatsApp_Image_2025-04-23_at_14.57.18_4ade668c-removebg-preview.png?Expires=1840016933&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=dGY1A~ytxCJGRslC~GQrDD6HbncT6yeawpzDc55339kZS7eHVTcF4HIBtotAD9CHgQxWnmamZlL69J-rQbyFeaF7QfMLhC2noFRkisAeR0YBkWkJRfIoicK~M7WW060L4GeDTrzqQmas-C9byUFWm3AJb0u7FDPWbUeMFbq-MDEBF0XFMmQxaDGfVLxt3QNvGUp4FXfBB6uQvanumrGvIxUMWuzuGhNk8RkNQOyD~JRMNCQC1xmv~S4-kt2s3dFHx1P0exX8nwHYzbEIFd1juol3ZlBKOdKHRBBtgSRLCNkHN2LuJQNpZGkkUZIbUwVrhIJdxEhG4Z3niqj5yBQEng__" },
    { title: "Free&nbsp;parking&nbsp;on<br/>premises", image: "https://media-hosting.imagekit.io/6b5862d22aba465c/WhatsApp_Image_2025-04-23_at_15.06.16_b2946999-removebg-preview.png?Expires=1840017359&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UFFsE4LBneVdZDypoUX8ZLnKwmHaMIKy2PwU9-9Bydon2SpOsTl4NeFU5GMnLoX9aMBsVjpzNGPIRaBEDDJKScV3IEYD8kubNpdkz9oWqZy3kuInfpSklRAVljJmB-lnYAEJzsniahpv8BQLLI55B09YKXqNwyeidlcNP3~HBM4FK-kqcZBx80i4U~UfNYrWD1NcA~UrsYCFFpaS7kcMIzDxenuONE~O-5qvlNB9Hw37~6OMHJF7XL8gT8OgHAQjEDt96kCPEkdTmBQkoXYh~Q29zhx933teGErFD5z37nhO6hYwmLU0-mbPsGkASYitpjHtL-HMg5hETcDnXeLxig__" },
    { title: "Paid&nbsp;parking&nbsp;on<br/>premises", image: "https://media-hosting.imagekit.io/85b75e437b204e1a/WhatsApp_Image_2025-04-23_at_15.08.04_bd55ef98-removebg-preview.png?Expires=1840018707&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nQs4Jqqy401rakY5mwMMEfs8nNl84bJ37GhJ6kvyiR7zKavX5H8UvVBhTMPhrGvjHJu-f54~IUEW~DB1jRfQoFd18IQPApFK--K1SjgIgBlqr82VPpdCIRALik34OlDCfE0Hm90qc1PjzSvEVQBN9rgH-8PT~8st0VNT2kxbJohd9BeQ08q0YWy54y1io~hrqrZE7aTvmGcrWOwZM5B~qgAgynIJCftYZaTaREWnOw0fhydb46MPQHObqQ5aNDGIlPUu7QjRFhzsl~I7-VVWkfdW6hCy2oSSHmubq8jxWwusqk3wbAiTJLClCUeSvVxVH5vF2S1DJxt0qlPRxDNZhw__" },
    { title: "Air&nbsp;conditioning", image: "https://media-hosting.imagekit.io/39b3fa74decf4e26/WhatsApp_Image_2025-04-23_at_15.29.32_f5fe04b0-removebg-preview.png?Expires=1840018895&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gQ4Mczqn72bFw5-YXZ04CDJY6okX4yUt40oMt-5D1nwq7td0c0SJW6~Vu4Lmv2fL3A17DDOQynJPCqxXOXU69~ZpVusv-Qt37PApRcdIDKcSC55w7GGtX1Rpos2hXK14j7aeDu8d16FBYxuuakAn1zBa2WItXTU3IKuCW7X5Ush8T5OvnT9qPyLQf7RwX6XnBCf~VCOzcWHJfzj4QgT0Ws4xtGgrEfUpbgLBwA7voP-uO7Wxp5tloGUGadmoNT4QTCe6n9k9bRc6mZTZSXTQf8eEYTy~3seY1Av4xBGAJ1ZWwmRaAQoXLyzD3zXGOB8dKrbWqrRcN8Py7n1oTS64wg__" },
  
  
  
]],
describe : [
    {
      title: "Charming",
      image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748702585/WhatsApp_Image_2025-04-24_at_14.21.07_3febff9e-removebg-preview_wyzp6y.png"
    },
    {
      title: "Hip",
      image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748702638/WhatsApp_Image_2025-04-24_at_14.21.37_9d6c43d5-removebg-preview_ccgff5.png"
    },
    {
      title: "Stylish",
      image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748702689/WhatsApp_Image_2025-04-24_at_14.22.15_95e36ba0-removebg-preview_txywg8.png"
    },
    {
      title: "Upscale",
      image:  "https://res.cloudinary.com/dmenkblkq/image/upload/v1748702745/WhatsApp_Image_2025-04-24_at_14.22.40_4412787b-removebg-preview_eebp06.png"
    },
    {
      title: "Central",
      image:  "https://res.cloudinary.com/dmenkblkq/image/upload/v1748702799/WhatsApp_Image_2025-04-24_at_14.22.54_daf3419c-removebg-preview_z3ur2x.png"
    },
    {
      title: "unique",
      image: "https://res.cloudinary.com/dmenkblkq/image/upload/v1748702862/WhatsApp_Image_2025-04-24_at_14.38.13_737550a5-removebg-preview_vb1sfm.png"
    }
  ]
  ,

instantBook : ["Approver","not-Approver"]



}
        
)

data11.save().then(()=>{
    console.log('hotel data save');
    
}).catch(()=>{
    console.log("----Error----");
    
})
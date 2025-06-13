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
        { title: "Me", image: "https://media-hosting.imagekit.io/61d9291eb4914505/WhatsApp%20Image%202025-04-22%20at%2012.19.02_17cb0048.jpg?Expires=1839929184&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tGZb7g7ITmIggxA~AKCBGa4-Y0kc9PoE9ftCQZbbpxY~y9cebOBhWS7qHG~XDGCCrdwFg2~LmzG5MkYWsrHmgPDaOV90cuXM13Orgq7Dpv7Q6RAtcxxwf5y~2RxTYmi52hlLw3Jh20jnH-gVO-Vhumq6z5ZYrRefbrvl0Nc60Ws5adQCUsePJ9hWQ4~spw5bR7qgkZaZ8nRdr2h8cvMrdYlvrOC7RqHJILi5AzG30TOkOVRTI54e9TR0x2QGcPTvb2ul8i-zqnnCX5IBDDKgsqZjep7lsbGW~-WjI6ZCZ5SSy0b6xQNsGPrDaj4TQjT76ht7gwExbqPGTDfBz0lFlQ__" },
        { title: "My&nbsp;family", image: "https://media-hosting.imagekit.io/90dccbf835664f11/WhatsApp%20Image%202025-04-22%20at%2012.53.54_93eb5a7c.jpg?Expires=1839934522&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Q0L391LlWn~9cvSl6tCNT5vfu1VpElWfuNXfFO-mT6jtv9Cj~pzEUVYmnGQ8Z1NgybDpfeeVb1kgXnw0KT83WGP3mXDiQEmcN0NPja8bu07bOw1UktSLQx4q8m7TJm64VTOLdUA7HIUhIb7bnl75y761yj2mW7NGu~ZJDdTjtbcGs5BoXW7SR5~LiGKLmAsYt3YF6wXEKeRwwVOYoldDOPORDMOouMUZcAxZTLLnNXBNnW6Ik5JY2Kum8yEuw-YWfd7yQFbMpSDd9MlTOrQYD-cov4XA9eWSoQHePZsx9-QxpOSq7HHx6nAzjbNO92EIwSVMHN5ftls6m8xildUcgA__" },
        { title: "Other&nbsp;guests", image: "https://media-hosting.imagekit.io/100c1f3ab90b455e/WhatsApp%20Image%202025-04-22%20at%2012.19.03_a88491bd.jpg?Expires=1839929213&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wd-3oaCTH0j3j~5Se0LAb~jTnvCv8fenjRgFG5AiJIJbiOq7Fk3a~D5I3L8-WgMarMR7MFMO1y1WTVr~ACVdG5Z6qdIedb-UNR320cQL5GWM3PSH2lKoZd0gS~QWwZoCye3-sGHlaTzOA55FnsGMdJC4XPZ~RNtZ4P-zXigZ7B6GC9IKcjKRBzvRy9qRaHVWVFtC7hnnyAi6kWTgvHDe693D~aLez2UbyGVtxua3SKYWyx9Ay2mt~SmIJbGa-j8kl8J-xFp1jC6roR7oZEX7glv-PHSyFDqTE2iXZuqg~Q28SeMyDkvLC5f~vZPXoN09sV6R68GsENkIo9JUR2Jhow__" },
        { title: "Flatmates/housema", image: "https://media-hosting.imagekit.io/91acaa1213f74c19/WhatsApp%20Image%202025-04-22%20at%2012.43.26_3d78826b.jpg?Expires=1839934026&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BgGFAJgpY7iUVr6lkX8hR8fX5kbvcbvgsFmnaOJhJ9FDU~SQ7OyJQqFGDvZizZolKRq4yv5E9pxLIW6iawtJXEWigGmsQxNWudkyKJn-xtPgeB1L0MHwcbqsGBA~r7hBWmUQJXfBYVR2EkaOHrstYoPzI7iYXtvdGI0n5yZ-WOQGYiOjchE~0ySQvJQ2gFfcBZGWDbImGNRZ0y4ijtV~pAaU66rk8R8iclou47WfEC73u2rLQ2iA5a9icZ17KuNkWjTTv19mJ4wqYMcIQbH1zRtEhp-SxPEekBLt-mIHDEMivSCz25x53jOSB6Uc~rj6hvPcPhaq98Bm9tXYDgl3Fg__" },
        
], amenities : [[
    { title: "Wi-fi", image: "https://media-hosting.imagekit.io/b5572221990441e5/ChatGPT_Image_Apr_22__2025__11_58_33_AM-removebg-preview.png?Expires=1840015915&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GYMKPtZHnzwcVCwFzEakWZahqnFvgBZBLRY37TsAZQVXblshAajjDGYHGJyYD5LdahR4igKC3RxCa0lRjTqk6kWbGYtigu1BcnS-e1ARlSIi7BUpLAwpinWezyHnGIWia6DymyLIoipUoq~de2rk95i~171~eIx9wD28SwkL1IWFHPPS-opNHvawy5geRTP5eqcaFOXew5CyVTehlUpyypUU57j0hXMQi7O5muJNwsSYgUwo5JUte1Lf42G1CumaxMoYTUBxA6cErdRTTlvuv8XytQ3mQ3MYvvFwIIyZ1R5aULVhh7hIsXykVRk5A7VT3e~ec8HLDHEnIbCgP06z9A__" },
    { title: "TV", image: "https://media-hosting.imagekit.io/e2bd44be8c294762/WhatsApp_Image_2025-04-23_at_14.43.16_1789bcb5-removebg-preview.png?Expires=1840016459&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FYW~2Sy9cIuQZfm0aKuF0dP5kleVbAJQwZpgmNCeNzrVeQUjyN2BJk3fIwxhzi7mB5D-cL46prmjRPVJTv-ccK2wxJdCmvmgEAijZ1VoV3cbH93uv6vPz57tFbgVnPUdmUhJ6VKAq9yqZFYdbhMr4NeLUlcg0Y7oklZSmAxgbPzNhtSZVXEcxNrKa2~i6ueGZTbiAv4oM2PKwbGX~3Pg1XgywPPrLIA~KeSemja1n1t5SCtzrJiTX8ExUkTrAz1u-1yont7sqqJhCx~jdOSGTSIqzgRo9WvDqhKoijG2cUaoaVHUzhn2PBorUL59R9B1EvFuZOLy4c1h1JihRm5aYg__" },
    { title: "Kitchen", image: "https://media-hosting.imagekit.io/b9c15ecb107141e4/WhatsApp_Image_2025-04-23_at_14.43.20_d2fdb609-removebg-preview.png?Expires=1840016552&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=H9~60O5l~ObbFj8wo4ouPGaIdKcICAEOoa1w30qkonipOYuKvWthOhaV8bf1WlG-k8zOnCQin8J6KYVvsZ7t~01cW-mH0sFSrhXNXpc~OMJcgbNwubkXvMpLTYK9t~xKR3sraiXyqptMWTRe30HOeOwqDlaKOonTTAO0THcQ3dG6z2fYX2UTcJ3rRuWIcF24hQLzg~3w7oKBzfi9-kQqNUHBCTF-RRwP3r726SkFcig97d9J0fbccveyVRo0QrBRef0Ppij-dXYJT7vtpN~1lFWg7LsjciBEz1AOEAxItdmYyUn1Py5H8juZgbKcX9koYWNrcddl9kkSLPcHpqWkRg__" },
    { title: "Washing&nbsp;machine", image: "https://media-hosting.imagekit.io/366edc827680426d/WhatsApp_Image_2025-04-23_at_14.57.18_4ade668c-removebg-preview.png?Expires=1840016933&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=dGY1A~ytxCJGRslC~GQrDD6HbncT6yeawpzDc55339kZS7eHVTcF4HIBtotAD9CHgQxWnmamZlL69J-rQbyFeaF7QfMLhC2noFRkisAeR0YBkWkJRfIoicK~M7WW060L4GeDTrzqQmas-C9byUFWm3AJb0u7FDPWbUeMFbq-MDEBF0XFMmQxaDGfVLxt3QNvGUp4FXfBB6uQvanumrGvIxUMWuzuGhNk8RkNQOyD~JRMNCQC1xmv~S4-kt2s3dFHx1P0exX8nwHYzbEIFd1juol3ZlBKOdKHRBBtgSRLCNkHN2LuJQNpZGkkUZIbUwVrhIJdxEhG4Z3niqj5yBQEng__" },
    { title: "Free&nbsp;parking&nbsp;on<br/>premises", image: "https://media-hosting.imagekit.io/6b5862d22aba465c/WhatsApp_Image_2025-04-23_at_15.06.16_b2946999-removebg-preview.png?Expires=1840017359&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UFFsE4LBneVdZDypoUX8ZLnKwmHaMIKy2PwU9-9Bydon2SpOsTl4NeFU5GMnLoX9aMBsVjpzNGPIRaBEDDJKScV3IEYD8kubNpdkz9oWqZy3kuInfpSklRAVljJmB-lnYAEJzsniahpv8BQLLI55B09YKXqNwyeidlcNP3~HBM4FK-kqcZBx80i4U~UfNYrWD1NcA~UrsYCFFpaS7kcMIzDxenuONE~O-5qvlNB9Hw37~6OMHJF7XL8gT8OgHAQjEDt96kCPEkdTmBQkoXYh~Q29zhx933teGErFD5z37nhO6hYwmLU0-mbPsGkASYitpjHtL-HMg5hETcDnXeLxig__" },
    { title: "Paid&nbsp;parking&nbsp;on<br/>premises", image: "https://media-hosting.imagekit.io/85b75e437b204e1a/WhatsApp_Image_2025-04-23_at_15.08.04_bd55ef98-removebg-preview.png?Expires=1840018707&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nQs4Jqqy401rakY5mwMMEfs8nNl84bJ37GhJ6kvyiR7zKavX5H8UvVBhTMPhrGvjHJu-f54~IUEW~DB1jRfQoFd18IQPApFK--K1SjgIgBlqr82VPpdCIRALik34OlDCfE0Hm90qc1PjzSvEVQBN9rgH-8PT~8st0VNT2kxbJohd9BeQ08q0YWy54y1io~hrqrZE7aTvmGcrWOwZM5B~qgAgynIJCftYZaTaREWnOw0fhydb46MPQHObqQ5aNDGIlPUu7QjRFhzsl~I7-VVWkfdW6hCy2oSSHmubq8jxWwusqk3wbAiTJLClCUeSvVxVH5vF2S1DJxt0qlPRxDNZhw__" },
    { title: "Air&nbsp;conditioning", image: "https://media-hosting.imagekit.io/39b3fa74decf4e26/WhatsApp_Image_2025-04-23_at_15.29.32_f5fe04b0-removebg-preview.png?Expires=1840018895&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gQ4Mczqn72bFw5-YXZ04CDJY6okX4yUt40oMt-5D1nwq7td0c0SJW6~Vu4Lmv2fL3A17DDOQynJPCqxXOXU69~ZpVusv-Qt37PApRcdIDKcSC55w7GGtX1Rpos2hXK14j7aeDu8d16FBYxuuakAn1zBa2WItXTU3IKuCW7X5Ush8T5OvnT9qPyLQf7RwX6XnBCf~VCOzcWHJfzj4QgT0Ws4xtGgrEfUpbgLBwA7voP-uO7Wxp5tloGUGadmoNT4QTCe6n9k9bRc6mZTZSXTQf8eEYTy~3seY1Av4xBGAJ1ZWwmRaAQoXLyzD3zXGOB8dKrbWqrRcN8Py7n1oTS64wg__" },
    { title: "Dedicated<br/>workspace", image: "https://media-hosting.imagekit.io/b562fe416aca4613/WhatsApp_Image_2025-04-23_at_15.29.36_cc478f00-removebg-preview.png?Expires=1840019042&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FZfxhECjYs3KzsDshpgwGpiwlLWHXmyCwiwiqn7GKFaacRAoTr9CIXG9SJ-5XWE1NFd4aPuQgj1M-7jiVv1pc3-wYrvwujG7Mhwcw2eQNqS4h~0~CAxtzeUMomG2dVM19v2yiPDonfPifWXcPIQgJtfTDJ5Sc63j20Gi0LOfDX1HZ4jXI6Fvh7g7m1mIFimUpT45U7GzS1CNjcy6mtuOfCfOPBh9vDkJGBvZHi1fHR5N18p~cMUUpo7twrrTC9LM02a6zb4KynIW6JcI9hJfqdssvV7jRTMwNQoSaSgiDriWG3YwayMcyxAkdXk2mCwEjjHAnXgv64Md~ruw68n~Qg__" },
  
  ], [
    { title: "Pool", image: "https://media-hosting.imagekit.io/16b8640de68a4e37/WhatsApp_Image_2025-04-23_at_19.11.19_00b0563a-removebg-preview.png?Expires=1840033055&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tnu3~tQ-wHTSRmyxWYk1a-O9Sbw7~la~ODHJsvmjEQjWIgIwIFwDSeT7WbHGfZ84R4vMUbIsSp~PW1NNL5ZxWyjfdW-7OeTetfYuhHPWlpAr5aWtd0hfQ3YBVg~6zSuLpHvSfjrsRJmlOB9TWjJMw99518ix4~o9ihoygZqxNeyAsGYZHwGoKKQIwlkYXuQXQtZGQ4kWo6p8HHyQO~1WQO0AFkBGFj3t3AlXGl10uZabq7Mj7PYcJKKnMho5MYGJQw0C9VePpO~WTsR8mEyHHWdaZ4D-lHxStVNBT8Z5OMnrpBUr6hmbpKg8-TTFkrVcYrnZRvf2AKmIHpdzc4EiNg__" },
    { title: "Hot&nbsp;tub", image: "https://media-hosting.imagekit.io/50b4da2b2bed44b7/WhatsApp_Image_2025-04-23_at_19.17.00_6255e28b-removebg-preview.png?Expires=1840033538&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gKbB5foUKbpY2e1W8nNAtcNxoLxt2D8ry0smXoMripnjI0zM3CcpmtZA4p2-aN2d9LWq2wAw7ZXvvdRwbLJp7IeIacGSKepto3OLxlH-4Bi2vqLtHYdTI4TWDvx13YgljUrxHAd36DVNA5Jvx9k5TU6GFa1rXHC5XUQgbmYpsgxsbH-tiIV7CHYmbvlOhUSD5q5i9njBO1AkNT1SMB7Ih9ocriakvVhYP04lBfmx5JPAcKVXQwET1VfyKYRWwYxVO1uk8sB-AR7fctJZDavAWjcjR18As0sUdMpa10jDfQfim2366ZySVDr6DSsGm~8hACONafXrEfpGCUkjYr1GAQ__" },
    { title: "Patio", image: "https://media-hosting.imagekit.io/1307c9245f764137/ChatGPT_Image_Apr_23__2025__07_20_37_PM-removebg-preview.png?Expires=1840033755&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UYGx-oqFGGbLOnhFo5rLvknK-B1ugO2XUkKvjxDjoM-1Tks0~rc1lFBZLNkXYCV0cfDvI4DarmWlgLqVXDa2z-zJhD0fnTVhGMGqFsCpCW9kJShLsiK07abmdB1vfrBfvG7d2xyqAUe~vRJnp0FiTju0MRV5p~MEyO4ipK-~1Ut61n-zbhXlRvaHDDXumz7WWNZuWyDhY9SnSG0Z475gUYa2WtuZ1dTm~4njs4CZytrYTz9fKkX0SswoJVkBPpJqfF4E-vsx7sYQrdAYXyeK3WLf~fXK7cWAtf6khShD2rTTbizPUzQaM2bJHSDwaU0U4eP2LDjjT7Udia9LGUXp4Q__" },
    { title: "BBQ&nbsp;grill", image: "https://media-hosting.imagekit.io/91caba5cd1b24df2/ChatGPT_Image_Apr_23__2025__06_27_18_PM-removebg-preview.png?Expires=1840034093&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cZUpRbVwskfzrebQpIIcQ0abUhvC9EWgQkgwyhx5JlGj3HJIs6pSKWSW7vBbbKqxgklxl9u348RxGkmx3N77NT1A6HmzfisiaWH8r6saEQlUbABZVENx0m6Ov4Rc7f6Jl10do9o5cX1L3UaFSzqJBIEYGFOMIi2SveUIXQZ~6s9YZs032yK-Pb7NVQBn~QKg1-7AaE2r5ye5rCBfl5nNdw06xNrifC~f2E7lg4xxVQJemp5HQCtegeQUKSLHZKxg-663SyOXcwxBPJ5m2a6mPYGDXAG3sMWWuBONC8vDA1LM7jLh14O4~84K8erGhu7YRw7Th7KNKMFk-982QoJ3Qw__" },
    { title: "Outdoor&nbsp;dining&nbsp;area", image: "https://media-hosting.imagekit.io/5f9bd647f3f24dc9/ChatGPT_Image_Apr_23__2025__06_39_19_PM-removebg-preview.png?Expires=1840034927&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=E7aVxYbsrJTgej0N6xtyE8Yhl-DDAs4JqNfyIJ3jNdxFqeOcc1nU8aC8aawLVEQFS0An-YEZiWUeqTWX~QOn4yR7egodop2KOHs5KHzGb17-bf6a8K6q9pTgWLFVW1Nn1z~CwvUcMlhk3T-7v9US3ZgcdmbKZUPpYIWHDgU3OC-MdKFbxfxhU66lg-fkIsQORcMkTPVgfwjz90AMqgedIuEqoR7dBWvSKKlRsm7~hbVUWPV-XTLskZkXE5FsecV55afPI7AzNLAK41lpNCKp5gQwAPzcy56zZ5LEZNtILimP~s0XgP48TFRY1BDm6uZDfupZWerZtomSRy28CwFo7g__" },
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
      image: "https://media-hosting.imagekit.io/3d8ec426e7b94597/WhatsApp_Image_2025-04-24_at_14.21.07_3febff9e-removebg-preview.png?Expires=1840118122&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=w~Jgcew133hMH4wn322~u9DbB-GGp37nY-p~tfdoCj~XmE8AnyXE~AoHGR8qyanhlMUS7uxR7ooqFM2TDnJNBC3onVV4MiB23RleBf~KkKV0yateYl6zrEg5~9H~7yeSSYmpUTfUwkxLLAfS1rj-uhDnNHPQ0C97nYrRwVUMsfGMR3BvgQoq8bRDuPkQzuYaVve2K7Xtap4SrK~KbyTVG7nh3EUOUv5qcsA6sEya~JAfn~InVfW3LksOmZQyiqaCndvzdHrEE1IT5MHUw68-cWkA3nwMRAeJgcPf1nFLa~OXjUWV88vamaYwALQJHp3lcfK6LIhMIaxDN2ONb6SK0w__"
    },
    {
      title: "Hip",
      image: "https://media-hosting.imagekit.io/dc1591f6f8db4c79/WhatsApp_Image_2025-04-24_at_14.21.37_9d6c43d5-removebg-preview.png?Expires=1840118429&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GtsEdw3gm9trTH-sD1Yer7xkg7VRXZp-coxE~Sn1MWIdJax2-VONRBJr2qcJ844eAiuJJ9HXL5B9geJv1VFPrv~FOVdZ2oaCm9H4gUhMHzutJb64WAN20n8FVnkUrL2c1VAXkZMlGia2oxyPBl5rnBl86BExNAOlqd0HEmCV4GA52y8R46RZXiwlKVxqwnw9~vswR8I5NUPFXCeWpNtn7VzLPiuQZpNY7UssvZY7L4wGUhaiZHZA-Pql7T0wI8EnShKqNeLYa84W-aA3vW5O4i5UlmrN1PyyiSlfUpGkpR-foVC-AYEYYrdXHwa6qCAsjVh9Zfev37oDkULc-J4fag__"
    },
    {
      title: "Stylish",
      image: "https://media-hosting.imagekit.io/cd2eb3a6fde5478f/WhatsApp_Image_2025-04-24_at_14.22.15_95e36ba0-removebg-preview.png?Expires=1840118764&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Y27i~YtV82ndaENEkzkovA1ctx24HseEHSiY1OAPmuTBWFMfmi160zzO40d7eSnuzoTfjBNXPaepQOUjCqSBjdHVI6~9PQf9G4WjhKmKJFD-VLHmxmQx~u9ny5ee~qC3v3~WO7P67W~9CfzG0aS7sYu4i3Wc2KGWAvjOGBXcWYFR7hhQeRKPmHKsl4p3KOvp~6EcoaZZn3OWl1nBdgGjzkKsIHK3YUgnDZ7hRH524U~iDyRpxRJ5lh0fj18K8jRwDyKb9yUl5XNGY9QatQ06z6Pf8YLHjHJLk0bsmAhIZxpc9p-sJX3GpcDL~4sX1xZNGbcuNSYp1Ha93PrmcamzXg__"
    },
    {
      title: "Upscale",
      image: "https://media-hosting.imagekit.io/09f5486e402e4e00/WhatsApp_Image_2025-04-24_at_14.22.40_4412787b-removebg-preview.png?Expires=1840118962&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=atFR4Evi~Z8SW7~GvqhW~fddh3oUF8~YVwJc6dPryM9zA4zFuv5iGHbsVT9jj8mpcA4Dnt~O1axyShZi6fSQAZSagtzh5D-a63rha8tTsgzTnPJLy1oVedXkty7w8Gsos8Z1-xSeAneXBs8Kx2VJziTAImRclr8HjsrUwwp2TYVK0dDiv6VKY9gYrMAX-qJXXrexUXRnVFP2YdUrkezwghSn0RNKlWPoI7qveRsfjO00y~IAPFDqYD5LKMUyh7MVO8Q4sQd5XoXVmzZ0tOVydS38GpCWwvfcvc7S0DYmSlXD5oqZjy5fdXkldhRwJUxkL4pddM01K0t4tJbPetHkfA__"
    },
    {
      title: "Central",
      image: "https://media-hosting.imagekit.io/85bf33c0a6184e76/WhatsApp_Image_2025-04-24_at_14.22.54_daf3419c-removebg-preview.png?Expires=1840120420&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DGs-Sx9l~Y391HCyOhcVSbTHsvthysbVS5mDSTt8ssnepG6UbUrqf370paQaLYGWz4sgD8-bm7TbYM1exIi3YoMvzF5oBUcGQyAUcUSvQMAQNfh2hf~TmDFEkB-fuvax-qT9JnIpF8L5Co1EiNAa8ybkjjvyFkoXZveETmf1X0~XEsBkjfuPOD-MKy1uuhv0f9sVqaXVYi2mXagjkunSJXjK7obvJiO4RwCU1kymHzil~OQ7r6llFHvREKY8asvqp257YpWDtPJxJVilZ3-9iZ8ei6jU0aoAPusucOv1d78Am82XC8W4aXrU~CFERGiTwW4qz2dEva-UM9IuQEdiyg__"
    },
    {
      title: "unique",
      image: "https://media-hosting.imagekit.io/9052b6e767ef42ef/WhatsApp_Image_2025-04-24_at_14.38.13_737550a5-removebg-preview.png?Expires=1840120598&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BqjlGQ5vvFdC3jS6YSsNh2XveBwD4Q9H3VZqBG08fyeokk-e2aWdeg~RSvUZREA3Y7UwpDUwNB8v2kHMzcj7nbnq2kb5h8KZv8HdB54vMTSjJRGULyM~UNiat15DknQPoWcHEFTFVmAVZcP1DbXjZ9gaoju-vMlnRH3vKzs36Y950n8U-ZIZhpE2T80eXCKbDOV-Lz2QMDvcMFMdWtJVHmy2pY9nAbKn4i3K~MIPYvuSq7I5uzzmo0CN3oF95CA1SHRrTqqVHuYhzsQZA6P1uRChtOlkgEqq75d851DG6lTbPsByLYgJ3QB-G90GaWD28b2oLWi3sDgGwdubJXEm2Q__"
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
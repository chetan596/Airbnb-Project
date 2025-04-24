function name(params) {
  document.querySelector(".s-line2-1").style.width = "100%";

}
name();

document.querySelector(".s-line-1").classList.add("opop")
document.querySelector(".s-line-2").classList.add("opop")
document.querySelector(".s-line-3").classList.add("opop")
document.querySelector(".s-line-4").classList.add("opop")
document.querySelector(".s-line-5").classList.add("opop")
document.querySelector(".s-line-6").classList.add("opop")
document.querySelector(".s-line-7").classList.add("opop")


const arr = [
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
  // { title: "Dedicated<br/>workspace", image: "https://media-hosting.imagekit.io/b562fe416aca4613/WhatsApp_Image_2025-04-23_at_15.29.36_cc478f00-removebg-preview.png?Expires=1840019042&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FZfxhECjYs3KzsDshpgwGpiwlLWHXmyCwiwiqn7GKFaacRAoTr9CIXG9SJ-5XWE1NFd4aPuQgj1M-7jiVv1pc3-wYrvwujG7Mhwcw2eQNqS4h~0~CAxtzeUMomG2dVM19v2yiPDonfPifWXcPIQgJtfTDJ5Sc63j20Gi0LOfDX1HZ4jXI6Fvh7g7m1mIFimUpT45U7GzS1CNjcy6mtuOfCfOPBh9vDkJGBvZHi1fHR5N18p~cMUUpo7twrrTC9LM02a6zb4KynIW6JcI9hJfqdssvV7jRTMwNQoSaSgiDriWG3YwayMcyxAkdXk2mCwEjjHAnXgv64Md~ruw68n~Qg__" },
  // { title: "Air&nbsp;conditioning", image: "https://media-hosting.imagekit.io/39b3fa74decf4e26/WhatsApp_Image_2025-04-23_at_15.29.32_f5fe04b0-removebg-preview.png?Expires=1840018895&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gQ4Mczqn72bFw5-YXZ04CDJY6okX4yUt40oMt-5D1nwq7td0c0SJW6~Vu4Lmv2fL3A17DDOQynJPCqxXOXU69~ZpVusv-Qt37PApRcdIDKcSC55w7GGtX1Rpos2hXK14j7aeDu8d16FBYxuuakAn1zBa2WItXTU3IKuCW7X5Ush8T5OvnT9qPyLQf7RwX6XnBCf~VCOzcWHJfzj4QgT0Ws4xtGgrEfUpbgLBwA7voP-uO7Wxp5tloGUGadmoNT4QTCe6n9k9bRc6mZTZSXTQf8eEYTy~3seY1Av4xBGAJ1ZWwmRaAQoXLyzD3zXGOB8dKrbWqrRcN8Py7n1oTS64wg__" },
  


];

const arr2 = [
  { title: "Wi-fi", image: "https://media-hosting.imagekit.io/b5572221990441e5/ChatGPT_Image_Apr_22__2025__11_58_33_AM-removebg-preview.png?Expires=1840015915&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GYMKPtZHnzwcVCwFzEakWZahqnFvgBZBLRY37TsAZQVXblshAajjDGYHGJyYD5LdahR4igKC3RxCa0lRjTqk6kWbGYtigu1BcnS-e1ARlSIi7BUpLAwpinWezyHnGIWia6DymyLIoipUoq~de2rk95i~171~eIx9wD28SwkL1IWFHPPS-opNHvawy5geRTP5eqcaFOXew5CyVTehlUpyypUU57j0hXMQi7O5muJNwsSYgUwo5JUte1Lf42G1CumaxMoYTUBxA6cErdRTTlvuv8XytQ3mQ3MYvvFwIIyZ1R5aULVhh7hIsXykVRk5A7VT3e~ec8HLDHEnIbCgP06z9A__" },
  { title: "TV", image: "https://media-hosting.imagekit.io/e2bd44be8c294762/WhatsApp_Image_2025-04-23_at_14.43.16_1789bcb5-removebg-preview.png?Expires=1840016459&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FYW~2Sy9cIuQZfm0aKuF0dP5kleVbAJQwZpgmNCeNzrVeQUjyN2BJk3fIwxhzi7mB5D-cL46prmjRPVJTv-ccK2wxJdCmvmgEAijZ1VoV3cbH93uv6vPz57tFbgVnPUdmUhJ6VKAq9yqZFYdbhMr4NeLUlcg0Y7oklZSmAxgbPzNhtSZVXEcxNrKa2~i6ueGZTbiAv4oM2PKwbGX~3Pg1XgywPPrLIA~KeSemja1n1t5SCtzrJiTX8ExUkTrAz1u-1yont7sqqJhCx~jdOSGTSIqzgRo9WvDqhKoijG2cUaoaVHUzhn2PBorUL59R9B1EvFuZOLy4c1h1JihRm5aYg__" },
  { title: "Kitchen", image: "https://media-hosting.imagekit.io/b9c15ecb107141e4/WhatsApp_Image_2025-04-23_at_14.43.20_d2fdb609-removebg-preview.png?Expires=1840016552&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=H9~60O5l~ObbFj8wo4ouPGaIdKcICAEOoa1w30qkonipOYuKvWthOhaV8bf1WlG-k8zOnCQin8J6KYVvsZ7t~01cW-mH0sFSrhXNXpc~OMJcgbNwubkXvMpLTYK9t~xKR3sraiXyqptMWTRe30HOeOwqDlaKOonTTAO0THcQ3dG6z2fYX2UTcJ3rRuWIcF24hQLzg~3w7oKBzfi9-kQqNUHBCTF-RRwP3r726SkFcig97d9J0fbccveyVRo0QrBRef0Ppij-dXYJT7vtpN~1lFWg7LsjciBEz1AOEAxItdmYyUn1Py5H8juZgbKcX9koYWNrcddl9kkSLPcHpqWkRg__" },
  { title: "Washing&nbsp;machine", image: "https://media-hosting.imagekit.io/366edc827680426d/WhatsApp_Image_2025-04-23_at_14.57.18_4ade668c-removebg-preview.png?Expires=1840016933&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=dGY1A~ytxCJGRslC~GQrDD6HbncT6yeawpzDc55339kZS7eHVTcF4HIBtotAD9CHgQxWnmamZlL69J-rQbyFeaF7QfMLhC2noFRkisAeR0YBkWkJRfIoicK~M7WW060L4GeDTrzqQmas-C9byUFWm3AJb0u7FDPWbUeMFbq-MDEBF0XFMmQxaDGfVLxt3QNvGUp4FXfBB6uQvanumrGvIxUMWuzuGhNk8RkNQOyD~JRMNCQC1xmv~S4-kt2s3dFHx1P0exX8nwHYzbEIFd1juol3ZlBKOdKHRBBtgSRLCNkHN2LuJQNpZGkkUZIbUwVrhIJdxEhG4Z3niqj5yBQEng__" },
  { title: "Free&nbsp;parking&nbsp;on<br/>premises", image: "https://media-hosting.imagekit.io/6b5862d22aba465c/WhatsApp_Image_2025-04-23_at_15.06.16_b2946999-removebg-preview.png?Expires=1840017359&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UFFsE4LBneVdZDypoUX8ZLnKwmHaMIKy2PwU9-9Bydon2SpOsTl4NeFU5GMnLoX9aMBsVjpzNGPIRaBEDDJKScV3IEYD8kubNpdkz9oWqZy3kuInfpSklRAVljJmB-lnYAEJzsniahpv8BQLLI55B09YKXqNwyeidlcNP3~HBM4FK-kqcZBx80i4U~UfNYrWD1NcA~UrsYCFFpaS7kcMIzDxenuONE~O-5qvlNB9Hw37~6OMHJF7XL8gT8OgHAQjEDt96kCPEkdTmBQkoXYh~Q29zhx933teGErFD5z37nhO6hYwmLU0-mbPsGkASYitpjHtL-HMg5hETcDnXeLxig__" },
  { title: "Paid&nbsp;parking&nbsp;on<br/>premises", image: "https://media-hosting.imagekit.io/85b75e437b204e1a/WhatsApp_Image_2025-04-23_at_15.08.04_bd55ef98-removebg-preview.png?Expires=1840018707&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nQs4Jqqy401rakY5mwMMEfs8nNl84bJ37GhJ6kvyiR7zKavX5H8UvVBhTMPhrGvjHJu-f54~IUEW~DB1jRfQoFd18IQPApFK--K1SjgIgBlqr82VPpdCIRALik34OlDCfE0Hm90qc1PjzSvEVQBN9rgH-8PT~8st0VNT2kxbJohd9BeQ08q0YWy54y1io~hrqrZE7aTvmGcrWOwZM5B~qgAgynIJCftYZaTaREWnOw0fhydb46MPQHObqQ5aNDGIlPUu7QjRFhzsl~I7-VVWkfdW6hCy2oSSHmubq8jxWwusqk3wbAiTJLClCUeSvVxVH5vF2S1DJxt0qlPRxDNZhw__" },
  { title: "Air&nbsp;conditioning", image: "https://media-hosting.imagekit.io/39b3fa74decf4e26/WhatsApp_Image_2025-04-23_at_15.29.32_f5fe04b0-removebg-preview.png?Expires=1840018895&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gQ4Mczqn72bFw5-YXZ04CDJY6okX4yUt40oMt-5D1nwq7td0c0SJW6~Vu4Lmv2fL3A17DDOQynJPCqxXOXU69~ZpVusv-Qt37PApRcdIDKcSC55w7GGtX1Rpos2hXK14j7aeDu8d16FBYxuuakAn1zBa2WItXTU3IKuCW7X5Ush8T5OvnT9qPyLQf7RwX6XnBCf~VCOzcWHJfzj4QgT0Ws4xtGgrEfUpbgLBwA7voP-uO7Wxp5tloGUGadmoNT4QTCe6n9k9bRc6mZTZSXTQf8eEYTy~3seY1Av4xBGAJ1ZWwmRaAQoXLyzD3zXGOB8dKrbWqrRcN8Py7n1oTS64wg__" },
  { title: "Dedicated<br/>workspace", image: "https://media-hosting.imagekit.io/b562fe416aca4613/WhatsApp_Image_2025-04-23_at_15.29.36_cc478f00-removebg-preview.png?Expires=1840019042&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FZfxhECjYs3KzsDshpgwGpiwlLWHXmyCwiwiqn7GKFaacRAoTr9CIXG9SJ-5XWE1NFd4aPuQgj1M-7jiVv1pc3-wYrvwujG7Mhwcw2eQNqS4h~0~CAxtzeUMomG2dVM19v2yiPDonfPifWXcPIQgJtfTDJ5Sc63j20Gi0LOfDX1HZ4jXI6Fvh7g7m1mIFimUpT45U7GzS1CNjcy6mtuOfCfOPBh9vDkJGBvZHi1fHR5N18p~cMUUpo7twrrTC9LM02a6zb4KynIW6JcI9hJfqdssvV7jRTMwNQoSaSgiDriWG3YwayMcyxAkdXk2mCwEjjHAnXgv64Md~ruw68n~Qg__" },

];



let grid = document.querySelector(".s-grid");
arr2.forEach((e, i) => {
  let box = document.createElement("div");
  let box2 = document.createElement("div");
  let img = document.createElement("div");
  let img2 = document.createElement("img");

  let para = document.createElement("p");


  box.classList = "lopiu";
  box2.classList = "s9-pqwe";
  img.classList = "s2-img";
  img2.src = e.image;
  para.innerHTML = e.title;
  box.style.animationDelay = `${0.4 + i * 0.1}s`
  console.log()
  grid.appendChild(box);
  box.appendChild(box2)
  box.setAttribute("data", e.title)
  box2.appendChild(img)
  img.appendChild(img2)
  // img2.setAttribute("loading","lazy")
  img.appendChild(para)
  // console.log(a.image);

})
let nextBnt = document.querySelector(".s2-bnt-next");
desebal(nextBnt)
function desebal(egg) {
  egg.removeAttribute("href")
  egg.classList.add("desebal")
  // alert("PPPPP")
}

let selectedValue = [];
let selectedValue2 = [];
let selBxs = document.querySelectorAll(".lopiu");
selBxs.forEach((card2) => {
  card2.addEventListener("click", () => {
    document.querySelectorAll(".lopiu").forEach(c => c.classList.remove("selectedds"))
    // console.log(card2, "dddd22")
    card2.classList.toggle("selected2");
    if (!selectedValue.includes(card2.getAttribute("data"))) {
      selectedValue.push(card2.getAttribute("data"))
    } else {
      selectedValue = selectedValue.filter(item => item !== card2.getAttribute("data"))
    }
    if (!selectedValue) {
      alert("!selectedValue , ------Error-------")
    } else {
      
          if(selectedValue.length != 0 || selectedValue2 != 0){
      nextBnt2.setAttribute("href", "/title")
      nextBnt2.classList.remove("desebal");
      
      console.log(selectedValue.length,  selectedValue2.length ,  'rtyh');
     }else{
      desebal(nextBnt2)
      console.log(selectedValue.length,  selectedValue2.length);
     }
      
     
      
    

    }
  })
})
// nextBnt.addEventListener("click",()=>{
//   submitData();

// })
// function submitData() {
 
//     fetch("/occupancy", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ value: selectedValue })
//     }).then(res => res.json())
//       .then((data) => { }).catch((err) => {
//         console.log("-----Error-----");

//       })
//   }
    
  





// 2 boxs--------

let grid2 = document.querySelector("#ddfe");
arr.forEach((e, i) => {
  let box = document.createElement("div");
  let box2 = document.createElement("div");
  let img = document.createElement("div");
  let img2 = document.createElement("img");

  let para = document.createElement("p");


  box.classList = "s-grid-boxs123";
  box2.classList = "s-icon";
  img.classList = "s2-img";
  img2.src = e.image;
  para.innerHTML = e.title;
  box.style.animationDelay = `${1.3 + i * 0.1}s`
  // console.log()
  grid2.appendChild(box);
  box.appendChild(box2)
  box.setAttribute("data", e.title)
  box2.appendChild(img)
  img.appendChild(img2)
  // img2.setAttribute("loading","lazy")
  img.appendChild(para)
  // console.log(a.image);

})
let nextBnt2 = document.querySelector(".s2-bnt-next");
desebal(nextBnt2)
function desebal(egg) {
  egg.removeAttribute("href")
  egg.classList.add("desebal")
  // alert("PPPPP")
}



let selBxs2 = document.querySelectorAll(".s-grid-boxs123");
selBxs2.forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".s-grid-boxs").forEach(c => c.classList.remove("selectedds"))
    // console.log(card, "dddd")
    card.classList.toggle("selected2");
    if (!selectedValue2.includes(card.getAttribute("data"))) {
      selectedValue2.push(card.getAttribute("data"))
    } else {
      selectedValue2 = selectedValue2.filter(item => item !== card.getAttribute("data"))
    }
    if (!selectedValue2) {
      alert("!selectedValue2 , ------Error-------")
    } else {
      console.log(selectedValue2 , "2vlar--");
      
     if(selectedValue.length != 0 || selectedValue2 != 0){
      nextBnt2.setAttribute("href", "/title")
      nextBnt2.classList.remove("desebal");
      
      console.log(selectedValue.length,  selectedValue2.length ,  'rtyh');
     }else{
      desebal(nextBnt2)
      console.log(selectedValue.length,  selectedValue2.length);
     }
      
      
      // console.log("reove");

    }
  })
})
nextBnt2.addEventListener("click", () => {
  if(selectedValue.length != 0 || selectedValue2.length !=0){
    // submitData();
    submitData2();
  }else{
   alert("-Error-")
  }

})
function submitData2() {

  fetch("/occupancy2", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ value1: selectedValue2 , value2: selectedValue})
  }).then(res => res.json())
    .then((data) => { }).catch((err) => {
      console.log("-----Error-----");

    })


}
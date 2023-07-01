  import navbar from "../component/navbar.js"

    let navbar1=document.querySelector("#navbar")
    navbar1.innerHTML=navbar()
    let data=[
      {
        image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/cherrylipbalm_360x.jpg?v=1687931369",
        name:"VITAMIN C SUPER BRIGHT FOAMING",
        price:"280",
        price1:280,
        newarrival:1,
      },
      {
        image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/strawbewrry_360x.jpg?v=1687931299",
        name:"CICA + NIACINAMIDE FACE",
        price:"565",
        price1:565,
        newarrival:1,
      },
      {
        image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/watermelonlip_360x.jpg?v=1687931327",
        name:"AHA BHA & PINEAPPLE FOAMING",
        price:"280",
        price1:280,
        newarrival:1,
      },
      {
        image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/cocolip_360x.jpg?v=1687931353",
        name:"WATERMELON SUPER GLOW",
        price:" 375",
        price1:375,
        newarrival:1,
      },
      {
        image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/cicasun_360x.jpg?v=1687930442",
        name:"ARGAN OIL ANTI HAIRFALL",
        price:"590",
        price1:590,
        newarrival:1,
      },
      {
        image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/haserum_360x.jpg?v=1687931127",
        name:"CICA & 2%SALICYCLIC FACE WASH",
        price:"375",
        price1:375,
        newarrival:1,
      },
      {
        image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/pomserum_360x.jpg?v=1687931141",
        name:"PEA PEPTIDE + CYSTEINE HAIR",
        price:" 633",
        price1:633,
        newarrival:1,
      },
      {
        image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/rosehipfaceoil_360x.jpg?v=1687931156",
        name:"CICA & NIACINAMIDE FACE",
        price:"375",
        price1:375,
        newarrival:1,
      },
      {
        image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/deepporecleanser_360x.jpg?v=1687930794",
        name:"CICA CALMING ACNE RESCUE",
        price:"396",
        price1:396,
        newarrival:1,
      },
      {
        image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/pineapplefw_360x.jpg?v=1687930731",
        name:"QUINOA PROTEIN & OLIVE ",
        price:"590",
        price1:590,
        newarrival:1,
      },
      {
        image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lipplumpingmasklingdon_360x.jpg?v=1687930640",
        name:"HYALURONIC + CERAMIDE HAIR ",
        price:"633 ",
        price1:633,
        newarrival:1,
      },
      {
        image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lipscrub_360x.jpg?v=1687930684",
        name:"RICE WATER + HYALURONIC",
        price:" 445",
        price1:445,
        newarrival:1,
      },
      {
        image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/glowcsleepmask_c155499e-5be9-415e-a19c-bc32a0b442a4_360x.jpg?v=1687931463",
        name:"QUINOA & OLIVE OIL",
        price:" 548",
        price1:548,
        newarrival:1,
      },
      {
        image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/11-Cica-Acne-Relief-Gel-Mask_360x.jpg?v=1687783037",
        name:"AHA EXFOLIATION APPLE CIDER",
        price:"590",
        price1:590,
        newarrival:1,
      },
      {
        image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/vitcpinkclaymask_eb4c5031-0c57-4b13-9db3-f5cd6065e061_360x.jpg?v=1687931445",
        name:"20% VITAMIN C SERUN",
        price:" 499",
        price1:499,
        newarrival:1,
      }
    ]
    let appendData=(data)=>{
        let container = document.getElementById("container")
        container.innerHTML=null;
        data.forEach((el)=>{
          
          let div = document.createElement("div");
          let img = document.createElement("img");
          img.src=el.image;
          img.onclick=()=>{
            localStorage.setItem("product",JSON.stringify(el));
            window.location="product.html"
          }
          let name = document.createElement("h3");
          name.innerText=el.name;
          let price = document.createElement("p");
          price.innerText="₹"+" "+el.price;
          let btn = document.createElement("button");
          btn.innerText="Add To Cart"
          btn.onclick=()=>{
            addTocart(el)
          }
          div.append(img,name,price,btn);
          container.append(div)
        })
      }
      appendData(data);
      let filter = document.getElementById("filter");

      filter.addEventListener("change",function(){
        if(filter.value === "position"){
            appendData(data);
            window.location.reload(true);
         }
        // else if (filter.value === "NewArrival"){
        //     let filtered = data.filter(function(element){
        //         return element.nwearrival===1;
        //     })
        //     appendData(filtered);
        else if (filter.value === "LowToHigh"){
           let priceLH = data.sort(function(a,b){
                if(a.price > b.price) return 1
                if(a.price < b.price) return -1
                return 0
            })
           appendData(priceLH);
        }else if (filter.value === "HighToLow"){
            let priceHL = data.sort(function(a,b){
                 if(a.price > b.price) return -1
                 if(a.price < b.price) return 1
                 return 0
             })
            appendData(priceHL);
         }else if (filter.value === "sortZtoA"){
            let nameP = data.sort(function(a,b){
                 if(a.name > b.name) return -1
                 if(a.name < b.name) return 1
                 return 0
             })
            appendData(nameP);
         }else if (filter.value === "sortAtoZ"){
            let nameP = data.sort(function(a,b){
                 if(a.name > b.name) return 1
                 if(a.name < b.name) return -1
                 return 0
             })
            appendData(nameP);
         }
      })    


let cart = JSON.parse(localStorage.getItem("products"))||[]
let addTocart=(data)=>{
  console.log(cart)
  alert("Product Added")
  cart.push(data);
  localStorage.setItem("products",JSON.stringify(cart))
}
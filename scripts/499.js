
    import navbar from "../component/navbar.js"

    let navbar1=document.querySelector("#navbar")
    navbar1.innerHTML=navbar()
    
    let data=[
      {
        image:"https://www.dotandkey.com/cdn/shop/files/niacinamide_23729e33-ca09-4670-af67-d2aba2b1862e.jpg?v=1687931089",
        name:"VITAMIN C PINK CLAY FACE MASK",
        price:"499",
        price1:499,
        newarrival:1,
      },
      {
        image:"https://www.dotandkey.com/cdn/shop/files/cicaday.jpg?v=1687930139",
        name:"10% NIA CINAMIDE FACE SERUM",
        price:"499",
        price1:499,
        newarrival:1,
      },
      {
        image:"https://www.dotandkey.com/cdn/shop/files/CICAfw.jpg?v=1687930764",
        name:"SALICYLIC & FRENCH GREEN MASK",
        price:"499",
        price1:499,
        newarrival:1,
      },
      {
        image: "https://www.dotandkey.com/cdn/shop/files/cicatoner_3e8f8170-c04e-410c-8411-f9201d4099e2.jpg?v=1687931480",
         name:"PINEAPPLE GLOW VITAMIN C MASK",
        price:" 499",
        price1:499,
        newarrival:1,
      },
      
      {
        image:"https://www.dotandkey.com/cdn/shop/files/cicasun.jpg?v=1687930442",
        name:"10% AHA + 2% BHA EXFOLIATING GLOW",
        price:"499",
        price1:499,
        newarrival:1,
      },
      {
        image:"https://www.dotandkey.com/cdn/shop/files/cicang.jpg?v=1687930120",
        name:"DETAN + GLOW GREEN TEA MASK",
        price:" 499",
        price1:499,
        newarrival:1,
      },
      {
        image:"https://www.dotandkey.com/cdn/shop/products/green-clay_1.webp?v=1687782449",
        name:"CHOCOLATE GLOW FACE MASK",
        price:"499",
        price1:499,
        newarrival:1,
      },
      {
        image:"https://www.dotandkey.com/cdn/shop/files/cicasalicylicserum.jpg?v=1687931110",
        price:"499",
        price1:499,
        newarrival:1,
      },
      {
        image:"https://www.dotandkey.com/cdn/shop/files/CICAfw.jpg?v=1687930764",
        name:"30% AHA + 2% BHA GLOW",
        price:"499",
        price1:499,
        newarrival:1,
      },
      {
        image:"https://www.dotandkey.com/cdn/shop/files/cicatoner_3e8f8170-c04e-410c-8411-f9201d4099e2.jpg?v=1687931480",
        name:"ROSHIP GLOW ELIXIR FACE OIL",
        price:"499",
        price1:499,
        newarrival:1,
      },
      {
        image:"https://www.dotandkey.com/cdn/shop/files/cicaday.jpg?v=1687930139",
        name:"DAMASK ROSE RESUFACING MASK",
        price:" 499",
        price1:499,
        newarrival:1,
      },
      {
        image:"https://www.dotandkey.com/cdn/shop/files/cicang.jpg?v=1687930120",
        name:"CICA CALMING RAPID MASK",
        price:"499",
        price1:499,
        newarrival:1,
      },
      {
        image:"https://www.dotandkey.com/cdn/shop/files/cicatoner_3e8f8170-c04e-410c-8411-f9201d4099e2.jpg?v=1687931480",
       name:"ALHA ARBUTIN + AZELAIC SERUM",
        price:"499",
        price1:499,
        newarrival:1,
      },
      {
        image:"https://www.dotandkey.com/cdn/shop/files/cicasun.jpg?v=1687930442",
         name:"AVOCADO + SUPERFOODS OIL",
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
    let title = document.createElement("h3");
    title.innerText=el.name;
    let price = document.createElement("p");
    price.innerText="₹"+" "+el.price;
    let btn = document.createElement("button");
    btn.innerText="Add To Cart"
    btn.onclick=()=>{
      addTocart(el)
    }
    div.append(img,title,price,btn);
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
             if(a.title > b.title) return -1
             if(a.title < b.title) return 1
             return 0
         })
        appendData(nameP);
     }else if (filter.value === "sortAtoZ"){
        let nameP = data.sort(function(a,b){
             if(a.title > b.title) return 1
             if(a.title < b.title) return -1
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

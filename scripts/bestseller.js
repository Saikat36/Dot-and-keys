


let data=[
    {
      image:"https://www.dotandkey.com/cdn/shop/files/probiotics_284b6e6b-03ca-490e-b428-83497b0d264c_360x.jpg?v=1687930083",
      name:"VITAMIN C + E MOISTURIZER",
      price:"565",
      price1:565,
      newarrival:1,
    },
    {
      image:"https://www.dotandkey.com/cdn/shop/files/vitcsunscreen_360x.jpg?v=1687930457",
      name:"CICA NICIANAMIDA NIGHT GEL",
      price:"470",
      price1:470,
      newarrival:1,
    },
    {
      image:"https://www.dotandkey.com/cdn/shop/files/vitcserum_360x.jpg?v=1687931045",
      name:"10% NIACINAMIDA FACE SERUM",
      price:"499",
      price1:499,
      newarrival:1,
    },
    {
      image:"https://www.dotandkey.com/cdn/shop/files/vitcm_277091b1-2ce9-49cb-980f-967822bcb8aa_360x.jpg?v=1687930199",
      name:"RETINOL & CERAMIDE AGE CREAM",
      price:"625",
      price1:625,
      newarrival:1,
    },
    {
      image:"https://www.dotandkey.com/cdn/shop/files/cicang_360x.jpg?v=1687930120",
      name:"72 HR HYDRATING PROBIOTICGEL",
      price:"535",
      price1:535,
      newarrival:1,
    },
    {
      image:"https://www.dotandkey.com/cdn/shop/files/watersunscreen_360x.jpg?v=1687930470",
      name:"GLOW REVEALING VITAMIN C FACE SERUM",
      price:"599",
      price1:599,
      newarrival:1,
    },
    {
      image:"https://www.dotandkey.com/cdn/shop/files/niacinamide_23729e33-ca09-4670-af67-d2aba2b1862e_360x.jpg?v=1687931089",
      name:"ARGON OIL ANTI HAIRFALL",
      price:"599",
      price1:599,
      newarrival:1,
    },
    {
      image:"https://www.dotandkey.com/cdn/shop/files/retnc_360x.jpg?v=1687930173",
      name:"SALICYLIC & FRENCH GREEN CLAY",
      price:"499",
      price1:499,
      newarrival:1,
    },
    {
      image:"https://www.dotandkey.com/cdn/shop/files/CICAfw_360x.jpg?v=1687930764",
      name:"WATERMELON SUPER GLOW FACE WASH",
      price:"375",
      price1:375,
      newarrival:1,
    },
    {
      image:"https://www.dotandkey.com/cdn/shop/files/20_vitc_69a183a4-a89d-4acb-8818-a7f0a1abd483_360x.jpg?v=1687931059",
      name:"PINEAPPLE GLOW VITAMIN C SLEEPING MASK ",
      price:"499",
      price1:499,
      newarrival:1,
    },
    {
      image:"https://www.dotandkey.com/cdn/shop/files/cicasun_360x.jpg?v=1687930442",
      name:"PEA PEPTIDE +CYSTEINE HAIR SERUM",
      price:"633 ",
      price1:633,
      newarrival:1,
    },
    {
      image:"https://www.dotandkey.com/cdn/shop/files/moringashampoo_360x.jpg?v=1687931560",
      name:"VITAMIN C + E LIP SLEEPING MASK",
      price:" 422",
      price1:422,
      newarrival:1,
    },
    {
      image:"https://www.dotandkey.com/cdn/shop/products/green-clay_1_360x.webp?v=1687782449",
      name:"20% VITAMIN C SERUM ",
      price:"499",
      price1:499,
      newarrival:1,
    },
   
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

let cart = JSON.parse(localStorage.getItem("cart"))||[]
let addTocart=(data)=>{
console.log(cart)
alert("Product Added")
cart.push(data);
localStorage.setItem("products",JSON.stringify(cart))
}
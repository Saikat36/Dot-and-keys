

function first(){
    let x=document.getElementById("in-show")
    let y=document.getElementById("first")

    
    if(x.style.display=="block"){
        x.style.display="none"
        y.innerText="+"
    }
    else{
        x.style.display="block"
        y.innerText="-"
    }
}
function second(){
    let x=document.getElementById("co-show")
    let y=document.getElementById("second")

    
    if(x.style.display=="block"){
        x.style.display="none"
        y.innerText="+"
    }
    else{
        x.style.display="block"
        y.innerText="-"
    }
}
function third(){
    let x=document.getElementById("pr-show")
    let y=document.getElementById("third")

    
    if(x.style.display=="block"){
        x.style.display="none"
        y.innerText="+"
    }
    else{
        x.style.display="block"
        y.innerText="-"
    }
}
function forth(){
    let x=document.getElementById("be-show")
    let y=document.getElementById("forth")

    
    if(x.style.display=="block"){
        x.style.display="none"
        y.innerText="+"
    }
    else{
        x.style.display="block"
        y.innerText="-"
    }
}
function fifth(){
    let x=document.getElementById("pr-show2")
    let y=document.getElementById("fifth")

    
    if(x.style.display=="block"){
        x.style.display="none"
        y.innerText="+"
    }
    else{
        x.style.display="block"
        y.innerText="-"
    }
}
function loadmenu(){
    let x=document.getElementById("mainmenu")
    let y=document.getElementById("menuIcon")
    if(x.style.display=="block"){
        x.style.display="none"
        y.src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
    }
    else{
        x.style.display="block"
        y.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKAZ-B055VeHlpPaWIDB4xwRICm3GdbXvLw&usqp=CAU"
       
    }
}
let text = document.getElementById('text');
let texts = ['SERUMS & MASKS AT FLAT 499','5 BESTSELLERS FREE ON ORDERS 1099+',"UPTO 20% OFF SITEWIDE",'3% OFF ON PREPAID ORDERS+ 10% CASHBACK'];
let i=0;
setInterval(function(){
    let random = Math.floor(Math.random() * 4);
    text.innerText = texts[i];
    i++;
    if(i==4){
        i=0;
    }
},10000)






                                // 1st part          

let slideIndex = 0;
Saikat_showSlides();

function Saikat_showSlides() {
    let i;
    let slides = document.getElementsByClassName("Saikat-mySlides_fade");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(Saikat_showSlides, 2700); // Change image every 2.7 seconds
}


/////////////////////////////////// 2nd part //////////////////////////////

let images = [
"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Sale_Banner_Desktop_27.jpg?v=1661143907",
"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5_Sale_Banner_Desktop_copy.jpg?v=1660886724",
"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3_Sale_Banner_Desktop_copy.jpg?v=1660886724"
];
let index = 0;
// let id;
let conteiner = document.getElementById("image");
        let img = document.createElement("img");
        img.src = images[index];
        conteiner.append(img);
        document.getElementById("dot_1").style.backgroundColor = "#717171";

let prevoius = () => {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    console.log(index)
    img.src = images[index];

    //dot-code
    if(index == 0){
        document.getElementById("dot_1").style.backgroundColor = "#717171";
    } else {
        document.getElementById("dot_1").style.backgroundColor = "#bbb";
    }

    if(index == 1){
        document.getElementById("dot_2").style.backgroundColor = "#717171";
    } else {
        document.getElementById("dot_2").style.backgroundColor = "#bbb";
    }
    
    if(index == 2){
        document.getElementById("dot_3").style.backgroundColor = "#717171";
    }else{
        document.getElementById("dot_3").style.backgroundColor = "#bbb";
    }
}

let next = () => {
    index++;
    console.log(index)
    if (index == images.length) {
        index = 0;
    }
    img.src = images[index];

    //dot-code
    if(index == 0){
        document.getElementById("dot_1").style.backgroundColor = "#717171";
    } else {
        document.getElementById("dot_1").style.backgroundColor = "#bbb";
    }

    if(index == 1){
        document.getElementById("dot_2").style.backgroundColor = "#717171";
    } else {
        document.getElementById("dot_2").style.backgroundColor = "#bbb";
    }
    
    if(index == 2){
        document.getElementById("dot_3").style.backgroundColor = "#717171";
    }else{
        document.getElementById("dot_3").style.backgroundColor = "#bbb";
    }
}       

/////////////////////////////////// 3rd part //////////////////////////////

let data = [
    {
       image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/WATER_TONER.jpg?v=1658564108",
       name:"Vitamin C Super Bright Foaming Face Wash | Triple Vitamin C For",
       price: "280.00",
       add_to_cart:"ADD TO CART"
    },
    {
        image: "https://www.dotandkey.com/cdn/shop/files/watermeloneyepatch_360x.jpg?v=1687931276",
        name:"Cica + Niacinamide Face Sunscreen SPF 50 PA+++|",
        price: "375.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image: "https://www.dotandkey.com/cdn/shop/files/vitcserum_360x.jpg?v=1687931045",
        name:"20% Vitamin C Serum with Blood Orange & Ferulic Acid | For",
        price: "523.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image: "https://www.dotandkey.com/cdn/shop/files/barfc_360x.jpg?v=1687930096",
        name: "AHA BHA & Pineapple Foaming Face Wash | 5% Lactic, Glycolic &",
        price: "849.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image:"https://www.dotandkey.com/cdn/shop/files/cicang_360x.jpg?v=1687930120",
        name:"Vitamin C + E Moisturizer With Sicilian Blood Orange & ",
        price: "231.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image:"https://www.dotandkey.com/cdn/shop/files/pomday_360x.jpg?v=1687930152",
        name: "CICA Niacinamide Night Gel  With Green Tea, Tea Tree Oil &",
        price: "520.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image: "https://www.dotandkey.com/cdn/shop/files/haserum_360x.jpg?v=1687931127",
        name: "Watermelon Super Glow Glycolic Toner With Lactic Acid",
        price: "330.00",
        add_to_cart:"ADD TO CART"
    }
]


let number = 0;

let saikatCartObjects = JSON.parse(localStorage.getItem("products")) || []

let copy = ()=> {
    let cont = document.getElementById("copy");
    cont.innerHTML = null;
    let div1 = document.createElement("div");
    div1.id = "div1"
    let div2 = document.createElement("div");
    div2.id = "div2"
    let div3 = document.createElement("div");
    div3.id = "div3"



    let img1 = document.createElement("img");
    img1.src = data[number].image;
    let titel = document.createElement("p");
    titel.innerText = data[number].name;
    titel.id = "titel"
    let titel1 = document.createElement("p");
    titel1.innerText = data[number].price;
    titel1.id = "titel1"
    let titel2 = document.createElement("p");
    titel2.innerText = data[number].add_to_cart;
    titel2.id = "titel2"
    titel2.addEventListener("click", () =>{
        alert("Product Added")
        saikatCartObjects.push(data[number]);
        localStorage.setItem("products",JSON.stringify(saikatCartObjects));
    })
    div1.append(img1,titel,titel1,titel2);



    let img2 = document.createElement("img");
    img2.src = data[number+1].image;
    let t1 = document.createElement("p");
    t1.innerText = data[number+1].name;
    t1.id = "t1"
    let t2 = document.createElement("p");
    t2.innerText = data[number+1].price;
    t2.id = "t2"
    let t3 = document.createElement("p");
    t3.innerText = data[number+1].add_to_cart;
    t3.id = "t3"
    t3.addEventListener("click", () =>{
        alert("Product Added")
        saikatCartObjects.push(data[number]);
        localStorage.setItem("products",JSON.stringify(saikatCartObjects));
    })
    div2.append(img2,t1,t2,t3);
    


    let img3 = document.createElement("img");
    img3.src = data[number+2].image;
    let t4 = document.createElement("p");
    t4.innerText = data[number+2].name;
    t4.id = "t4"
    let t5 = document.createElement("p");
    t5.innerText = data[number+2].price;
    t5.id = "t5"
    let t6 = document.createElement("p");
    t6.innerText = data[number+2].add_to_cart;
    t6.id = "t6"
    t6.addEventListener("click", () =>{
        alert("Product Added")
        saikatCartObjects.push(data[number]);
        localStorage.setItem("products",JSON.stringify(saikatCartObjects));
    })
    div3.append(img3,t4,t5,t6);

    cont.append(div1, div2,div3)
    console.log(number)
}

copy()
let right = ()=>{
    number++;

if(number==data.length - 2){
    number = 0
 }
    copy();
}
let left = ()=> {
    number--;

if(number < 0){
    number = data.length-3;
}
    copy();
}



////////////////////////////////  4th part  ////////////////////////////




let data4 = [
    {
       image:"https://www.dotandkey.com/cdn/shop/products/green-clay_1_360x.webp?v=1687782449",
       name:"Vitamin C Super Bright Foaming Face Wash | Vitamin C For",
       price: "240.00",
       add_to_cart:"ADD TO CART"
    },
    {
        image: "https://www.dotandkey.com/cdn/shop/files/niacinamide_23729e33-ca09-4670-af67-d2aba2b1862e_360x.jpg?v=1687931089",
        name:"Cica + Niacinamide Face Sunscreen SPF 50 PA+++|",
        price: "746.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image: "https://www.dotandkey.com/cdn/shop/files/lipplumpingmasklingdon_360x.jpg?v=1687930640",
        name:"20% Vitamin C Serum with Blood Orange & Ferulic Acid",
        price: "963.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image: "https://www.dotandkey.com/cdn/shop/products/1-finall-1_1_360x.webp?v=1687782704",
        name: "AHA BHA & Pineapple Foaming Face Wash | 5% Lactic",
        price: "876.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image:"https://www.dotandkey.com/cdn/shop/files/cicasalicylicserum_360x.jpg?v=1687931110",
        name:"Vitamin C + E Moisturizer With Sicilian Blood Orange",
        price: "134.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image:"https://www.dotandkey.com/cdn/shop/files/cherrylipbalm_360x.jpg?v=1687931369",
        name: "CICA Niacinamide Night Gel  With Green Tea, Tea Tree",
        price: "836.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image: "https://www.dotandkey.com/cdn/shop/files/moringashampoo_360x.jpg?v=1687931560",
        name: "Watermelon Super Glow Glycolic Toner With Lactic Acid",
        price: "231.00",
        add_to_cart:"ADD TO CART"
    }
]


let number4 = 0;

let copy4 = ()=> {
    let cont4 = document.getElementById("copy4");
    cont4.innerHTML = null;
    let div41 = document.createElement("div");
    div41.id = "div41"
    let div42 = document.createElement("div");
    div42.id = "div42"
    let div43 = document.createElement("div");
    div43.id = "div43"



    let img41 = document.createElement("img");
    img41.src = data4[number4].image;
    let titel4 = document.createElement("p");
    titel4.innerText = data4[number4].name;
    titel4.id = "titel4"
    let titel14 = document.createElement("p");
    titel14.innerText = data4[number4].price;
    titel14.id = "titel14"
    let titel24 = document.createElement("p");
    titel24.innerText = data4[number4].add_to_cart;
    titel24.id = "titel24"
    titel24.addEventListener("click", () =>{
        alert("Product Added")
        saikatCartObjects.push(data[number]);
        localStorage.setItem("products",JSON.stringify(saikatCartObjects));
    })
    div41.append(img41,titel4,titel14,titel24);


    let img42 = document.createElement("img");
    img42.src = data4[number4+1].image;
    let t14 = document.createElement("p");
    t14.innerText = data4[number4+1].name;
    t14.id = "t14"
    let t24 = document.createElement("p");
    t24.innerText = data4[number4+1].price;
    t24.id = "t24"
    let t34 = document.createElement("p");
    t34.innerText = data4[number4+1].add_to_cart;
    t34.id = "t34"
    t34.addEventListener("click", () =>{
        alert("Product Added")
        saikatCartObjects.push(data[number]);
        localStorage.setItem("products",JSON.stringify(saikatCartObjects));
    })
    div42.append(img42,t14,t24,t34);
    


    let img43 = document.createElement("img");
    img43.src = data4[number4+2].image;
    let t44 = document.createElement("p");
    t44.innerText = data4[number4+2].name;
    t44.id = "t44"
    let t54 = document.createElement("p");
    t54.innerText = data4[number4+2].price;
    t54.id = "t54"
    let t64 = document.createElement("p");
    t64.innerText = data4[number4+2].add_to_cart;
    t64.id = "t64"
    t64.addEventListener("click", () =>{
        alert("Product Added")
        saikatCartObjects.push(data[number]);
        localStorage.setItem("products",JSON.stringify(saikatCartObjects));
    })
    div43.append(img43,t44,t54,t64);

    cont4.append(div41, div42,div43)
    console.log(number4)
}

copy4()
let right4 = ()=>{
    number4++;

if(number4==data4.length - 2){
    number4 = 0
 }
    copy4();
}
let left4 = ()=> {
    number4--;

if(number4 < 0){
    number4 = data4.length-3;
}
    copy4();
}


//            8th part 

let data8 = [
    {
       image:"https://www.dotandkey.com/cdn/shop/files/Artboard11_69483608-b21b-46df-ae8d-e84735e2334e_360x.jpg?v=1687203915",
       name:"Vitamin C + E Moisturizer With Sicilian Blood Orange ",
       del:"595.00",
       price: "565.00",
       add_to_cart:"ADD TO CART"
    },
    {
        image: "https://www.dotandkey.com/cdn/shop/files/pineapplefw_360x.jpg?v=1687930731",
        name:"Retinol  & Ceramide Age Defense Night Cream For Face",
        del:"975.00",
        price: "652.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image: "https://www.dotandkey.com/cdn/shop/files/greenteayellowmask_360x.jpg?v=1687931420",
        name:"CICA Niacinamide Night Gel  With Green Tea, Tea Tree Oil",
        del:"965.00",
        price: "765.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image: "https://www.dotandkey.com/cdn/shop/products/11-Cica-Acne-Relief-Gel-Mask_360x.jpg?v=1687783037",
        name: "Vitamin C + E Moisturizer With Sicilian Blood Orange",
        del:"795.00",
        price: "536.00",
        add_to_cart:"ADD TO CART"
    }
]


let saikat_arr = ()=>{
    let cont = document.getElementById("eight_div");
    // cont.innerHTML = null;
    data8.forEach((el) => {
        let div = document.createElement("div");
        div.id = "same_div"
        let img =  document.createElement("img");
        img.src = el.image;
        let name = document.createElement("p");
        name.innerText = el.name;
        let del = document.createElement("del");
        del.innerText = el.del;
        let price = document.createElement("b");
        price.innerText = el.price;

        let btn = document.createElement("button");
        btn.innerText = el.add_to_cart;
        btn.onclick = ()=>{
            alert("Product Added")
            addCart(el);
        } 
        div.append(img,name,del,price,btn);
        cont.append(div)
    });
}
saikat_arr()

let addCart = (el)=>{
    let productArr = JSON.parse(localStorage.getItem("products")) || [];
    productArr.push(el);
    localStorage.setItem("products", JSON.stringify(productArr))
}




                            // 10th part made by- adarsh



type="text/javascript">
$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    wrapAround:true,
    freeScroll: true
});
type="text/javascript">
    $('.hight').flickity({
    // options
    cellAlign: 'left',
    wrapAround:true,
    freeScroll: true
});
type="text/javascript">
    $('.last1').flickity({
    // options
    cellAlign: 'left',
    wrapAround:true,
    freeScroll: true
});
type="text/javascript">
    $('.last').flickity({
    // options
    cellAlign: 'left',
    wrapAround:true,
    freeScroll: true
});
                        
                        

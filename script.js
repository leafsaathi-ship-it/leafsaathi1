// GLOBAL
let qty = 1;
let currentProduct = {};

// PRODUCTS
const products = [

{
name:"Stoneware Planter Trio",
price:499,
tag:"NEW",
img:"https://www.gardendesign.com/pictures/images/675x529Max/site_3/feeling-flirty-tradescantia-purple-tradescantia-tradescantia-hybrid-proven-winners_17350.jpg",
category:"indoor"
},

{
name:"Snake Plant",
price:399,       // current pri
tag:"Low maintenance",
img:"https://www.ugaoo.com/cdn/shop/products/GroPot_81e08d38-33d8-4694-80d5-5c2c329cf00a.jpg?v=1681552994&width=750",

category:"indoor"
},
{
name:"Money Plant",
price:199,
tag:"Easy growth",

img:"https://www.ugaoo.com/cdn/shop/files/A_image_8.jpg?v=1763725907&width=750",
category:"indoor"
},
{
name:"Peace Lily",
price:299,
tag:"White blooms",

img:"https://www.ugaoo.com/cdn/shop/files/A_image_2.jpg?v=1774857428&width=750",
category:"indoor"
},
{
name:"Spider Plant",
price:299,
tag:"Hanging | Air Purifier | Easy Care",
img:"https://www.ugaoo.com/cdn/shop/files/A_image_2.jpg?v=1774857428&width=750",
category:"indoor"
},
{
name:"ZZ Plant",
price:299,
tag:"Low Light | Premium | Office Plant",
img:"https://www.ugaoo.com/cdn/shop/files/1_af764eda-b091-4320-953d-e4de57387c54.jpg?v=1741698812&width=750g",
category:"indoor"
},
{
name:"Areca Palm",
price:399,
tag:"Indoor Palm | Fresh Air | Large Plant",
img:"https://www.ugaoo.com/cdn/shop/files/medium-gropot-ivory-areca-palm-plant-32515461578884.jpg?v=1755585947&width=750",
category:"indoor"
},
{
name:"Aloe Vera",
price:159,
tag:"Medicinal | Skin Care | Easy",
img:"https://www.ugaoo.com/cdn/shop/products/DSC_0016.jpg?v=1686137850&width=750",
category:"indoor"
},

{
name:"Jade Plant",
price:199,
tag:"Lucky | Bonsai Look | Indoor",
img:"https://www.ugaoo.com/cdn/shop/products/DSC_0016.jpg?v=1686137850&width=750",
category:"indoor"
},
{
name:"Lucky Bamboo",
price:199,
tag:"Feng Shui | Lucky | Gift Item",
img:"https://www.ugaoo.com/cdn/shop/files/Lucky_Bamboo_3_Layer_copy.jpg?v=1758701120&width=750",
category:"indoor"
},

{
name:"Syngonium",
price:249,
tag:"Colorful leaves",
img:"https://www.ugaoo.com/cdn/shop/files/3_041554f7-24b6-467e-a920-fdd296119d16.jpg?v=1756144454&width=750",
category:"indoor"
},
{
name:"Rose Plant",
price:149,
tag:"Flowering | Garden Beauty | Fragrant",
img:"https://nurserylive.com/cdn/shop/files/miniature-rose-pink_af4e62e8-27e9-4f8c-98d6-9ce07342ce9d_600x600.jpg?v=1752562400",
category:"outdoor"
},

{
name:"Hibiscus",
price:149,
tag:"Flowering | पूजा Plant | Easy Grow",
img:"https://nurserylive.com/cdn/shop/files/ChatGPTImageJul17_2025_05_40_02PM_dd6be339-ed20-4a69-9a8d-c809235040a1_670x670.png?v=1752813561",
category:"outdoor"
},
{
name:"Marigold (Genda)",
price:149,
tag:"Seasonal Flower | पूजा | Bright Colors",
img:"https://nurserylive.com/cdn/shop/products/nurserylive-g-african-marigold-orange-plant-153227_600x600.jpg?v=1679749014",
category:"outdoor"
},

{
name:"Bougainvillea",
price:220,
tag:"Climbing | Outdoor Decor | Low Maintenance",
img:"https://nurserylive.com/cdn/shop/products/nurserylive-plants-bougainvillea-white-plant-16968652554380_600x600.jpg?v=1634214816",
category:"outdoor"
},
{
name:"Tulsi Plant",
price:139,
tag:"Sacred | Medicinal | Air Purifier",
img:"https://nurserylive.com/cdn/shop/products/nurserylive-plants-krishna-tulsi-plant-holy-basil-ocimum-tenuiflorum-black-plant-16968990425228_600x600.jpg?v=1634226020",
category:"outdoor"
},
{
name:"Neem Plant",
price:185,
tag:"Medicinal | Shade Tree | Ayurvedic",
img:"https://nurserylive.com/cdn/shop/products/nurserylive-g-curry-leaves-kadi-patta-murraya-koenigii-meetha-neem-plant_600x600.jpg?v=1634218014",
category:"outdoor"
},
{
name:"Ashoka Plant",
price:220,
tag:"Decorative | Tall Plant | Garden Border",
img:"https://nurserylive.com/cdn/shop/products/nurserylive-g-ashoka-tree-pendula-ashok-plant-880337_600x600.jpg?v=1679749105",
category:"outdoor"
},
{
name:"Bamboo Plant ",
price:239,
tag: "Fast Growing | Privacy Plant | Green Wall",
img:"https://nurserylive.com/cdn/shop/products/nurserylive-bambusa-bambos-tree-of-punarvasu-nakshatra-gemini-or-mithun-rashi-plant-1-943863_540x720.jpg?v=1679749176",
category:"outdoor"
},
{
name:"Jasmine (Mogra)",
price:239,
tag:"Fragrant Flower | Night Bloom | Garden",
img:"https://nurserylive.com/cdn/shop/products/nurserylive-g-jasminum-sambac-mogra-arabian-jasmine_600x600.jpg?v=1634222612",
category:"outdoor"
},
{
name:"Mango Plant",
price:599,
tag:"Fruit Plant | Seasonal | Long Term Growth",
img:"https://nurserylive.com/cdn/shop/products/nurserylive-mango-tree-kesar-grafted-plant_600x600.jpg?v=1634223741",
category:"outdoor"
},
{
name:"Apple Ceramic Pot (3.8 Inch Diameter)",
price:235,
tag:"Premium | Indoor Decor",
img:"https://www.ugaoo.com/cdn/shop/files/DSC_6775.jpg?v=1688808767&width=750",
category:"pots"
},
{
name:"Table Top Ceramic Pot (4 Inch Diameter)",
price:370,
tag:"Premium | Indoor Decor",
img:"https://www.ugaoo.com/cdn/shop/files/Table_Top-02.jpg?v=1758225918&width=750",
category:"pots"
},
{
name:"Football Ceramic Pot (5.3 Inch Diameter)",
price:375,
tag:"Premium | Indoor Decor",
img:"https://www.ugaoo.com/cdn/shop/files/football-ceramic-pot-5-3-inch-diameter-32943991586948.jpg?v=1688712100&width=750",
category:"pots"
},
{
name:"Table Top Ceramic Pot (4 Inch Diameter)",
name:"Roma Ceramic Pot (4 Inch )",
price:370,
tag:"Premium | Indoor Decor",
img:"https://www.ugaoo.com/cdn/shop/files/Roma_4_inch-02.jpg?v=1770029059&width=750",
category:"pots"
},
{
name:"Chatura Plastic Pots - Set of 5",
price:599,
tag:"Budget | Lightweight",
img:"https://www.ugaoo.com/cdn/shop/products/red-chatura-plastic-pots-set-of-5-31257679069316.png?v=1675581660&width=750",
category:"pots"
},
{
name:"Gardening Pots - Black Set of 3(8 Inch)",
price:299,
tag:"Budget | Lightweight",
img:"https://www.ugaoo.com/cdn/shop/products/8-inch-set-of-3-gardening-pots-black-32268417400964.jpg?v=1676299663&width=750",
category:"pots"
},
{
name:"Gardening Pots - Black Set of 6(8 Inch)",
price:499,
tag:"Budget | Lightweight",
img:"https://www.ugaoo.com/cdn/shop/products/8-inch-set-of-6-gardening-pots-black-32268417106052.jpg?v=1676299663&width=750",
category:"pots"
},
{
name:"Gardening Plates - Black Set of 6(4 Inch))",
price:235,
tag:"Budget | Lightweight",
img:"https://www.ugaoo.com/cdn/shop/products/baseplates-02.jpg?v=1677558733&width=750",
category:"pots"
},

{
name:"Hanging Pot",
price:199,
tag:"Budget | Lightweight",
img:"https://www.bbassets.com/media/uploads/p/l/40233591_2-klassic-hanging-pot-with-chain-white-71-inch-rattan.jpg",
category:"pots"
},
{
name:" Plastic Pot -white colour(24 Inch)",
price:450,
tag:"Budget | Lightweight",
img:"https://www.alkarty.com/images/product/resized/500-500/15-01-2022c913925c-4e9d-42b3-9791-dd6e6f7945de.jpg",
category:"pots"
},
{
name:" Plastic Pot Brown (12 inch)",
price:199,
tag:"Budget | Lightweight",
img:"https://5.imimg.com/data5/ANDROID/Default/2025/7/526564915/IM/QD/WU/3373764/product-jpeg-500x500.jpg",
category:"pots"
},
{
name:"Plastic Pot Brown with plate(14 Inch)",
price:299,
tag:"Budget | Lightweight",
img:"https://img.clevup.in/427175/RP_14_Pot-With-Plate_01-1740574862796-1742024282112.jpeg?width=600&format=webp",
category:"pots"
},
{
name:"Brown Flower Pot Plates (4 inch)",
price:85,
tag:"Budget | Lightweight",
img:"https://5.imimg.com/data5/SELLER/Default/2021/10/MM/XS/XO/15577036/plastic-flower-pot-plates-1000x1000.jpeg",
category:"pots"
},
{
name:"Snake Plant with White Ceramic Pot",
price:499,
tag:"Air Purifier | Modern Decor",
img:"https://5.imimg.com/data5/NK/IY/IH/SELLER-87602321/snake-plant.png",
category:"pots"
},
{
name:"Money plant with glass pot filled with pebbles",
price:449,
tag:"Lucky | Water Plant",
img:"https://m.media-amazon.com/images/I/41LPQRTKxEL._AC_UF1000,1000_QL80_.jpg",
category:"pots"
},
{
name:"Peace Lily (Good Luck) Plant - with Ceramic Planter",
price:450,
tag:"Elegant | Flowering",
img:"https://lucknownursery.com/wp-content/uploads/2024/05/lucknow-nursery-peace-lily-plant-in-ceramic-pot.png",
category:"pots"
},

];

// LOAD PRODUCTS
function loadProducts(category){

const list = document.getElementById("product-list");

if(!list) return;

list.innerHTML = "";

products
.filter(p => !category || p.category === category)
.forEach(p => {

list.innerHTML += `

<div class="product">

<img src="${p.img}"
onclick='goToProduct(
"${p.name}",
${p.price},
"${p.img}",
"${p.desc}"
)'>

<div class="tag">${p.tag || ""}</div>

<h3>${p.name}</h3>

<p>${p.desc || ""}</p>

<div class="price">
₹${p.price}
</div>

<button class="add-btn"
onclick='addToCart(
"${p.name}",
${p.price},
"${p.img}"
)'>
Add To Cart
</button>

</div>

`;

});

}

// AUTO LOAD
const list = document.getElementById("product-list");

if(list){
loadProducts();
}

// GO TO PRODUCT PAGE
function goToProduct(name, price, img, desc){

localStorage.setItem(
"selectedProduct",

JSON.stringify({
name,
price,
img,
desc
})

);

window.location.href = "product.html";

}

// PRODUCT PAGE LOAD
let product =
JSON.parse(localStorage.getItem("selectedProduct"));

if(product){

currentProduct = product;

// IMAGE
const img =
document.getElementById("product-img");

if(img){
img.src = product.img;
}

// NAME
const title =
document.getElementById("product-name");

if(title){
title.innerText = product.name;
}

// PRICE
const price =
document.getElementById("product-price");

if(price){
price.innerText = product.price;
}

// DESCRIPTION
const desc =
document.getElementById("product-desc");

if(desc){
desc.innerText =
product.desc || "Beautiful plant 🌿";
}

}

// QUANTITY
function changeQty(val){

qty = Math.max(1, qty + val);

const q = document.getElementById("qty");

if(q){
q.innerText = qty;
}

}

// ADD TO CART
function addToCart(name, price, img){

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

// PRODUCT PAGE
if(!name){

name = currentProduct.name;
price = currentProduct.price;
img = currentProduct.img;

}

let existing =
cart.find(item => item.name === name);

if(existing){

existing.qty += qty;

}else{

cart.push({
name,
price,
qty:1,
img
});

}

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert("Added To Cart ✅");

}

// OPEN CART
function openCart(){

const cart =
document.getElementById("cartSidebar");

if(cart){

cart.classList.add("active");

renderCart();

}

}

// CLOSE CART
function closeCart(){

const cart =
document.getElementById("cartSidebar");

if(cart){

cart.classList.remove("active");

}

}

// RENDER CART
function renderCart(){

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

const container =
document.getElementById("cartItems");

const totalEl =
document.getElementById("cartTotal");

if(!container) return;

container.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

total += item.price * item.qty;

container.innerHTML += `

<div class="cart-item">

<img src="${item.img}">

<div class="cart-info">

<h4>${item.name}</h4>

<div class="qty-box">

<button onclick="changeCartQty(${index}, -1)">
-
</button>

<span>${item.qty}</span>

<button onclick="changeCartQty(${index}, 1)">
+
</button>

</div>

<b>₹${item.price}</b>

</div>

</div>

`;

});

if(totalEl){
totalEl.innerText = total;
}

}

// CHANGE CART QTY
function changeCartQty(index, change){

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

cart[index].qty += change;

if(cart[index].qty <= 0){

cart.splice(index,1);

}

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderCart();

}

// WHATSAPP ORDER
function orderNow(){

let msg =
`Hello, I want to order ${currentProduct.name} x${qty}`;

window.open(
`https://wa.me/919713671554?text=${encodeURIComponent(msg)}`
);

}

// CHECKOUT
function checkout(){

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

let msg =
"Hello, I want to order:\n";

let total = 0;

cart.forEach(item => {

msg +=
`${item.name} x${item.qty} - ₹${item.price}\n`;

total += item.price * item.qty;

});

msg += `Total: ₹${total}`;

window.open(
`https://wa.me/919713671554?text=${encodeURIComponent(msg)}`
);

}

// SCROLL
function scrollToProducts(){

const el =
document.getElementById("products");

if(el){

el.scrollIntoView({
behavior:"smooth"
});

}

}

// MOBILE MENU
function toggleMenu(){

const menu =
document.querySelector(".nav-menu");

const burger =
document.querySelector(".hamburger");

menu.classList.toggle("active");

if(menu.classList.contains("active")){

burger.innerHTML = "✖";

}else{

burger.innerHTML = "☰";

}

}

// USER AVATAR
window.onload = function(){

let email =
localStorage.getItem("loggedInUser");

let avatar =
document.getElementById("userAvatar");

let dp =
localStorage.getItem("userDP");

if(!avatar) return;

if(dp){

avatar.innerHTML = `
<img src="${dp}"
style="
width:100%;
height:100%;
border-radius:50%;
object-fit:cover;
">
`;

}else if(email){

avatar.innerText =
email.charAt(0).toUpperCase();

}

};  
function searchProducts(){

let input = document.getElementById("searchInput").value.toLowerCase();

if(input === ""){
loadProducts();
return;
}

const list = document.getElementById("product-list");

if(!list) return;

list.innerHTML = "";

products
.filter(p => 
p.name.toLowerCase().includes(input)
)
.forEach(p=>{

list.innerHTML += `

<div class="product">

<img src="${p.img}"
onclick="goToProduct('${p.name}', ${p.price}, ${p.oldPrice || p.price}, '${p.img}', '${p.desc || ""}', '${p.rating || ""}')">

<h3>${p.name}</h3>

<div class="price">
₹${p.price}
<span class="old">₹${p.oldPrice || ""}</span>
</div>

</div>

`;

});

}
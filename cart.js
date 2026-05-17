let cart = JSON.parse(localStorage.getItem('cart')) || [];

const container = document.getElementById('cart-items');

let total = 0;

container.innerHTML = "";

cart.forEach((item, index) => {

total += item.price * item.qty;

container.innerHTML += `

<div class="cart-item">

<img src="${item.images[0]}" class="cart-img">

<div class="cart-info">

<h3>${item.name}</h3>

<p class="cart-price">
₹${item.price}

<span class="old-price">
₹${item.oldPrice}
</span>
</p>

<p class="discount">
${item.discount}
</p>

<div class="qty-box">

<button onclick="changeQty(${index}, -1)">-</button>

<span>${item.qty}</span>

<button onclick="changeQty(${index}, 1)">+</button>

</div>

<button class="remove-btn"
onclick="removeItem(${index})">
Remove
</button>

</div>

</div>

`;

});

document.getElementById('total').innerText =
"Total: ₹" + total;

/* REMOVE */
function removeItem(i){

cart.splice(i,1);

localStorage.setItem(
'cart',
JSON.stringify(cart)
);

location.reload();

}

/* QTY CHANGE */
function changeQty(i, change){

cart[i].qty += change;

if(cart[i].qty <= 0){
cart.splice(i,1);
}

localStorage.setItem(
'cart',
JSON.stringify(cart)
);

location.reload();

}

/* WHATSAPP CHECKOUT */
function checkout(){

let msg = "🌿 LeafSaathi Order %0A%0A";

cart.forEach(item=>{

msg += `🪴 ${item.name}
x${item.qty}
- ₹${item.price * item.qty}%0A`;

});

msg += `%0A💰 Total: ₹${total}`;

window.open(
`https://wa.me/919713671554?text=${msg}`
);

}
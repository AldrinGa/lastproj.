window.addEventListener('DOMContentLoaded', loadcart);

const shippingJS = document.getElementById("shipping");
const subtotalJS = document.getElementById("subtotal");
const totalJS = document.getElementById("toTal");


function loadcart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const itemcontainer = document.getElementById('item-box');
    itemcontainer.innerHTML = '';
    let subtotal = 0;


    cart.forEach((item, index) => {
        subtotal = subtotal + (item.price * item.quantity);
        const itemTotal = item.price * item.quantity;
        const div = document.createElement('div');
        div.className= 'boxreplce'
        div.innerHTML= `
        <hr class="divider">
        <div class="breadbox">
           <div class="item">
             <button class="remove" onclick="removeItem(${index})">x</button>
             <img src="${item.image}"></img>
             <p>${item.name}</p>
           </div>

           <div class="details">
             <p>₱${item.price}</p>
           <div class="adjstqty">
             <button class="upward" onclick="adjustquantity(${index}, 1)"><img src="https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/caret-up.png?raw=true"></button>
             <span>${item.quantity}</span>
             <button class="down" onclick="adjustquantity(${index}, -1)"><img src="https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/caret-up.png?raw=true"></button>
           </div>
             <p class="total">₱${itemTotal}</p>
           </div>
        </div>
        
        `;
        itemcontainer.appendChild(div);
    });

    let shipping;
    if (cart.length > 0){
      shipping = 50;
    }
    else{
      shipping = 0;
    }
    const total = subtotal + shipping;


    shippingJS.textContent = `₱${shipping}`;
    subtotalJS.textContent = `₱${subtotal}`;
    totalJS.textContent = `₱${total}`

}

function adjustquantity(index, qtychange){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity += qtychange;
    if(cart[index].quantity <=0){
        cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    loadcart();
}

function removeItem(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadcart();

}

function showReceipt(event){
    event.preventDefault();
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    const receiptitems = document.getElementById('receipt-items');
    const receiptTotal = document.getElementById('receipt-total');
    const refid = document.getElementById('reference-id');
    const recPaymet = document.getElementById('rec-paymet');

    receiptitems.innerHTML = ""; 
    receiptTotal.innerHTML = "";
    let subtotal = 0
    
    const day = new Date();
    const name = document.getElementById("customer").value ;
    const contact = document.getElementById("contactno").value ;
    const address = document.getElementById("addr").value ;

    if (!name || !contact || !address) {
        alert("Please complete all required fields before checking out.");
    }

    document.getElementById("rec-date").textContent = day.toLocaleString();
    document.getElementById("rec-name").textContent = name;
    document.getElementById("rec-no").textContent = contact;
    document.getElementById("rec-addr").textContent = address;

    cart.forEach((item)=>{
       subtotal = subtotal + (item.price * item.quantity);
       const div = document.createElement('div');
       div.className = 'receipt-itemTwo';
       div.innerHTML = `<span>${item.name} (x${item.quantity})</span><span>₱${item.price * item.quantity}.00</span>`;
       receiptitems.appendChild(div);
    });

    const paymentInput = document.getElementById("pay").value.trim();
    const payment = parseFloat(paymentInput);
    const shipping = 50;
    const total = shipping + subtotal;

    if (isNaN(payment) || payment <= 0) {
    alert("Please enter a valid payment amount.");
    return;
    };
    if (payment < total) {
    alert(`Insufficient payment! You need at least ₱${total.toFixed(2)}.`);
    return;
    };

    const change = payment - total;
    const payMethod = document.querySelector("select").value;


    receiptTotal.innerHTML = `
      <div class="receipt-itemTwo"><span>Subtotal : </span><span>₱${subtotal.toFixed(2)}</span></div>
      <div class="receipt-itemTwo"><span>Shipping : </span><span>₱${shipping.toFixed(2)}</span></div>
      <div class="receipt-itemTwo"><span>Total : </span><span>₱${total.toFixed(2)}</span></div>
      <div class="receipt-itemTwo"><span>Payment : </span><span>₱${payment.toFixed(2)}</span></div>
      <div class="receipt-itemTwo"><span>Change : </span><span>₱${change.toFixed(2)}</span></div>
    `;

    recPaymet.textContent = "Payment Method : " + payMethod;
    refid.textContent = "Reference No. : REF-" + Math.floor(100000 + Math.random() * 900000);

    const navi = document.getElementById("navi");
    const rectangle = document.getElementById("rectangle");
    const mainbox = document.getElementsByClassName("mainbox");
    const summary = document.getElementsByClassName("summary");
    const itembox = document.getElementById("item-box");
    const foot = document.getElementById("foot");

    if (navi) navi.style.display = "none";
    if (rectangle) rectangle.style.display = "none";
    if (itembox) itembox.style.display = "none";
    if (foot) foot.style.display = "none";


    for (let box of mainbox) {
    box.style.display = "none";
    }
    for (let s of summary) {
    s.style.display = "none";
    }
    
    document.getElementById("receiptbox").style.display = "block";

}

function resetCart() {
    localStorage.removeItem('cart'); 
}

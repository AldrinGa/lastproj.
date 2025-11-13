const products = [
  { id: 1, name: 'Ube Cheesecake', price: 75.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Ube%20Cheesecake_Page%202%20NO%20BG.png?raw=true' },
  { id: 2, name: 'Buko Pandan Croissant', price: 75.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Buko%20Pandan%20Croissant_Page%202%20NO%20BG.png?raw=true' },
  { id: 6, name: 'Sapin Sapin Cups', price: 40.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Sapin-Sapin%20Cups_Page%202%20NO%20BG.png?raw=true' },
  { id: 5, name: 'Calamansi Sugar Cookie', price: 55.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/calamansi%20cookie.png?raw=true' },
  { id: 4, name: 'Milo Sugar Cookie', price: 55.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Milo%20Sugar%20Cookies_Page%202%20NO%20BG.png?raw=true' },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.adtcrt').forEach(button => {
  button.addEventListener('click', () => {
    const id = parseInt(button.getAttribute('data-id'));
    const product = products.find(p => p.id === id);

    if (!product) return alert('Product not found.');

    const exists = cart.find(item => item.id === id);
    if (exists) {
      alert(`${product.name} is already in your cart.`);
      return;
    }

    cart.push({ ...product, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${product.name} added to cart!`);
  });
});
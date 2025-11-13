let products = [];

document.addEventListener('DOMContentLoaded', function() {
     products = [
        { id: 1, name:'Ube Cheesecake', price: 75.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Ube%20Cheesecake_Page%202%20NO%20BG.png?raw=true' },
        { id: 2, name:'Buko Pandan Croissant', price: 75.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Buko%20Pandan%20Croissant_Page%202%20NO%20BG.png?raw=true' },
        { id: 3, name:'Mango Graham Tres Leches', price: 65.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Mango%20Graham%20Tres%20Leches_Page%202%20NO%20BG.png?raw=true' },
        { id: 4, name:'Milo Sugar Cookie', price: 55.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Milo%20Sugar%20Cookies_Page%202%20NO%20BG.png?raw=true' },
        { id: 5, name:'Calamansi Sugar Cookie', price: 55.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/calamansi%20cookie.png?raw=true' },
        { id: 6, name:'Sapin Sapin Cups', price: 40.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Sapin-Sapin%20Cups_Page%202%20NO%20BG.png?raw=true' },
        { id: 7, name:'Ube De Lengua', price: 100.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Ube%20De%20Lengua_Page%203%20NO%20BG.png?raw=true' },
        { id: 8, name:'Choco-desal', price: 50.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Choco-desal_Page%203%20NO%20BG.png?raw=true' },
        { id: 9, name:'Sans Rival Cookie', price: 60.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Sansrival%20Chocochip%20Cookie_Page%203%20NO%20BG.png?raw=true' },
        { id: 10, name:'Buko Pandan Crinkles', price: 55.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Buko%20Pandan%20Crinkles_Page%203%20NO%20BG.png?raw=true' },
        { id: 11, name:'Buko Pandan Chiffon', price: 150.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Buko%20Pandan%20Chiffon_Page%206%20NO%20BG.png?raw=true' },
        { id: 12, name:'Buko Pie Slice', price: 40.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Buko%20Pie%20Slice_Page%206%20NO%20BG.png?raw=true' },
        { id: 13, name:'Triple Chocnut Donut', price: 50.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Triple%20Chocnut%20Donut_Page%206%20NO%20BG.png?raw=true' },
        { id: 14, name:'Chocnut Brookie', price: 60.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Brookie%20Chocnut_Page%206%20NO%20BG.png?raw=true' },
        { id: 15, name:'Mango Silvanas', price: 235.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Mango%20Silvanas_Page%206%20NO%20BG.png?raw=true' },
        { id: 16, name:'Ube Pie Tart', price: 300.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Ube%20Pie%20Tart_Page%207%20NO%20BG.png?raw=true' },
        { id: 17, name:'Brazo De Mercedes Slice', price: 100.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Braso%20De%20Mercedes%20Slice_Page%207%20NO%20BG.png?raw=true' },
        { id: 18, name:'Yema Cassava Cake', price: 250.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Yema%20Cassava%20Cake_Page%207%20NO%20BG.png?raw=true' },
        { id: 19, name:'Ube Macapuno Brownie', price: 50.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Ube%20Macapuno%20Brownie_Page%207%20NO%20BG.png?raw=true' },
        { id: 20, name:'Calamansi Mini Cake', price: 75.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Mini%20Calamansi%20Cake_Page%207%20NO%20BG.png?raw=true' },
        { id: 21, name:'Kare Kare Cookie', price: 50.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Kare%20Kare%20Cookie_Page%206%20NO%20BG.png?raw=true' },
        { id: 22, name:'PutoPao Asado', price: 40.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/PutoPao%20Asado%20Page%206%20NO%20BG.png?raw=true' },
        { id: 23, name:'PutoPao Deluxe', price: 120.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/PutoPao%20Deluxe_Page%206%20NO%20BG.png?raw=true' },
        { id: 24, name:'Queso De Bola Puff', price: 120.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Queso%20De%20Bola%20Puffs_Page%207%20NO%20BG.png?raw=true' },
        { id: 25, name:'Longganisa Sausage Roll', price: 50.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Longganisa%20Sausage%20Rolls_Page%207%20NO%20BG.png?raw=true' },
        { id: 26, name:'Palabok Pie', price: 75.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Palabok%20Pie_Page%207%20NO%20BG.png?raw=true' },
        { id: 27, name:'Palabok Sandwich', price: 75.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Palabok%20Sandwich_Page%208%20NO%20BG.png?raw=true' },
        { id: 28, name:'Veggie Crunch Toast', price: 65.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Veggie%20Crunch%20Toast_Page%208%20NO%20BG.png?raw=true' },
        { id: 29, name:'Corned Beef Stuffed Pandesal', price: 50.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Corned%20Beef%20Stuffed%20Pandesal_Page%208%20NO%20BG.png?raw=true' },
        { id: 30, name:'Spicy Tuna Pandesal', price: 40.00, image: 'https://github.com/AldrinGa/PinoyCrumbs_images/blob/main/Spicy%20Tuna%20Empanada_Page%208%20NO%20BG.png?raw=true' }

    ];

    renderProducts(products);
});

function renderProducts(list) {
    const productsbox = document.getElementById("test");
    productsbox.innerHTML = '';

    list.forEach(b => {
        const div = document.createElement('div');
        const fave = JSON.parse(localStorage.getItem('fave')) || [];
        const isFaved = fave.some(item => item.id === b.id);
        div.className = 'product-card';
        div.innerHTML = `
            <div class="price">₱${b.price}.00</div>
            <img src="${b.image}" alt="${b.name}">
            <h3>${b.name}</h3>
            <button onclick="addtofave(${b.id}, '${b.name}', '${b.price}', '${b.image}', this)" class="fav-btn ${isFaved ? 'active' : ''}">&#10084;</button>
            <button onclick="addtocart(${b.id}, '${b.name}', '${b.price}', '${b.image}')" class="add-btn">ADD</button>
        `;
        productsbox.appendChild(div);
    });
}

function addtocart(id, name, price, image){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = cart.find(item => item.id === id);
    if (exists){
        exists.quantity += 1;
    } else {
        cart.push({id, name, price, image, quantity: 1});
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart :)`);
}

function addtofave(id, name, price, image, btn) {
    let fave = JSON.parse(localStorage.getItem('fave')) || [];
    const exists = fave.find(item => item.id === id);
    if (exists) {
        fave = fave.filter(item => item.id !== id);
        btn.classList.remove('active');
        localStorage.setItem('fave', JSON.stringify(fave));
        alert(`${name} removed from favorites `);
    } else {
        fave.push({ id, name, price, image });
        btn.classList.add('active');
        localStorage.setItem('fave', JSON.stringify(fave));
        alert(`${name} added to favorites `);
    }
}





function showsearch(){

    const searchbar = document.querySelector(".searchbar");
   
    if (searchbar.style.display === "flex") {
    searchbar.style.display = "none"; 
    } else {
    searchbar.style.display = "flex"; 
    }
}

function searchProducts() {
    const query = document.getElementById("srchinpt").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filtered);
}


const productCategories = {
  savory: [
    "Kare Kare Cookie",
    "PutoPao Asado",
    "PutoPao Deluxe",
    "Longganisa Sausage Roll",
    "Corned Beef Stuffed Pandesal",
    "Spicy Tuna Pandesal",
    "Palabok Pie",
    "Palabok Sandwich",
    "Veggie Crunch Toast",
    "Queso De Bola Puff"
  ],
  sweet: [
    "Ube Cheesecake",
    "Buko Pandan Croissant",
    "Mango Graham Tres Leches",
    "Milo Sugar Cookie",
    "Calamansi Sugar Cookie",
    "Sapin Sapin Cups",
    "Ube De Lengua",
    "Sans Rival Cookie",
    "Buko Pandan Crinkles",
    "Buko Pandan Chiffon",
    "Buko Pie Slice",
    "Triple Chocnut Donut",
    "Chocnut Brookie",
    "Mango Silvanas",
    "Ube Pie Tart",
    "Brazo De Mercedes Slice",
    "Yema Cassava Cake",
    "Ube Macapuno Brownie",
    "Calamansi Mini Cake"
  ]
};


const productPopularity = {
  "Ube Cheesecake": 6,
  "Buko Pandan Croissant": 6,
  "Mango Graham Tres Leches": 5,
  "Milo Sugar Cookie": 6,
  "Calamansi Sugar Cookie": 6,
  "Sapin Sapin Cups": 6,
  "Ube De Lengua": 4,
  "Choco-desal": 4,
  "Sans Rival Cookie": 5,
  "Buko Pandan Crinkles": 4,
  "Buko Pandan Chiffon": 5,
  "Buko Pie Slice": 4,
  "Triple Chocnut Donut": 5,
  "Chocnut Brookie": 4,
  "Mango Silvanas": 5,
  "Ube Pie Tart": 4,
  "Brazo De Mercedes Slice": 3,
  "Yema Cassava Cake": 4,
  "Ube Macapuno Brownie": 3,
  "Calamansi Mini Cake": 4,
  "Kare Kare Cookie": 4,
  "PutoPao Asado": 5,
  "PutoPao Deluxe": 5,
  "Queso De Bola Puff": 3,
  "Longganisa Sausage Roll": 4,
  "Palabok Pie": 5,
  "Palabok Sandwich": 4,
  "Veggie Crunch Toast": 3,
  "Corned Beef Stuffed Pandesal": 4,
  "Spicy Tuna Pandesal": 4
};


let currentFilter = localStorage.getItem("filterSelect") || "Filter: All";
let currentPrice = localStorage.getItem("priceSelect") || "Price: ";
let currentSort = localStorage.getItem("sortSelect") || "Sort by: ";
let currentSearch = localStorage.getItem("searchValue") || "";


function applyFilters() {
  let filteredProducts = [...products];


  if (currentFilter === "Savory") {
    filteredProducts = filteredProducts.filter(p =>productCategories.savory.includes(p.name));
  } else if (currentFilter === "Sweet") {
    filteredProducts = filteredProducts.filter(p =>
      productCategories.sweet.includes(p.name)
    );
  }


  if (currentSearch.trim() !== "") {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(currentSearch.toLowerCase())
    );
  }


  if (currentPrice === "Low to High") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (currentPrice === "High to Low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }


  if (currentSort === "Name") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentSort === "Popularity") {
    filteredProducts.sort(
      (a, b) =>
        (productPopularity[b.name] || 0) -
        (productPopularity[a.name] || 0)
    );
  }

  renderProducts(filteredProducts);
}


document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll(".filter-bar select");
  const [filterSelect, priceSelect, sortSelect] = selects;
  const searchInput = document.getElementById("srchinpt");


  filterSelect.value = currentFilter;
  priceSelect.value = currentPrice;
  sortSelect.value = currentSort;
  if (searchInput) searchInput.value = currentSearch;


  applyFilters();


  selects.forEach(select => {
    select.addEventListener("change", () => {

      if (select === sortSelect && sortSelect.value !== "Sort by:") {
        priceSelect.value = "Price:";
        currentPrice = "Price:";
        localStorage.setItem("priceSelect", currentPrice);
      } 
      else if (select === priceSelect && priceSelect.value !== "Price:") {
        sortSelect.value = "Sort by:";
        currentSort = "Sort by:";
        localStorage.setItem("sortSelect", currentSort);
      }

      currentFilter = filterSelect.value;
      currentPrice = priceSelect.value;
      currentSort = sortSelect.value;


      localStorage.setItem("filterSelect", currentFilter);
      localStorage.setItem("priceSelect", currentPrice);
      localStorage.setItem("sortSelect", currentSort);

      applyFilters();
    });
  });


  if (searchInput) {
    searchInput.addEventListener("input", () => {
      currentSearch = searchInput.value;
      localStorage.setItem("searchValue", currentSearch);
      applyFilters();
    });
  }
});

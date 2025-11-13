document.addEventListener('DOMContentLoaded', loadfave);

function loadfave(filteredItems = null){
    let fave = filteredItems || JSON.parse(localStorage.getItem('fave')) || [];
    const productsbox = document.getElementById("faveItems");
    productsbox.innerHTML = '';

    fave.forEach(b => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <div class="price">₱${b.price}.00</div>
            <img src="${b.image}" alt="${b.name}">
            <h3>${b.name}</h3>
            <button onclick="removeFromFave(${b.id})" class="remove-btn">&#10084</button>
            <button onclick="addtocart(${b.id}, '${b.name}', '${b.price}', '${b.image}')" class="add-btn">ADD</button>
        `;
        productsbox.appendChild(div);
    });
}

function removeFromFave(id) {
    let fave = JSON.parse(localStorage.getItem('fave')) || [];
    fave = fave.filter(item => item.id !== id);
    localStorage.setItem('fave', JSON.stringify(fave));
    loadfave(); 
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

function showsearch(){

    const searchbar = document.querySelector(".searchbar");
   
    if (searchbar.style.display === "flex") {
    searchbar.style.display = "none"; 
    } else {
    searchbar.style.display = "flex"; 
    }
}

function searchProducts() {
    
}

function searchProducts() {
    const query = document.getElementById('srchinpt').value.toLowerCase().trim();
    let fave = JSON.parse(localStorage.getItem('fave')) || [];
    
    const filtered = fave.filter(item => item.name.toLowerCase().includes(query));
    const productsbox = document.getElementById("faveItems");
    productsbox.innerHTML = '';
    
    if (filtered.length === 0 && query !== '') {
        productsbox.innerHTML = '<center><p style="font-size: 20px; margin-top: 5rem;">No items match your search.</p><center>';
    } else {
 
    filtered.forEach(b => {
       const div = document.createElement('div');
       div.className = 'product-card';
       div.innerHTML = `
           <div class="price">₱${b.price}.00</div>
           <img src="${b.image}" alt="${b.name}">
           <h3>${b.name}</h3>
           <button onclick="removeFromFave(${b.id})" class="remove-btn">&#10084</button>
           <button onclick="addtocart(${b.id}, '${b.name}', '${b.price}', '${b.image}')" class="add-btn">ADD</button>
       `;
        productsbox.appendChild(div);

        });
    }
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
let currentPrice = localStorage.getItem("priceSelect") || "Price:";
let currentSort = localStorage.getItem("sortSelect") || "Sort by:";
let currentSearch = localStorage.getItem("searchValue") || "";


function applyFilters() {
  let fave = JSON.parse(localStorage.getItem('fave')) || [];
  let filteredProducts = [...fave];


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

  loadfave(filteredProducts);
}


document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll(".filter-bar select");
  const [filterSelect, priceSelect, sortSelect] = selects;
  const searchInput = document.getElementById("srchinpt");

   currentFilter = localStorage.getItem("filterSelect") || "Filter: All";
   currentPrice = localStorage.getItem("priceSelect") || "Price:";
   currentSort = localStorage.getItem("sortSelect") || "Sort by:";
   currentSearch = localStorage.getItem("searchValue") || "";

  if (filterSelect) filterSelect.value = currentFilter;
  if (priceSelect) priceSelect.value = currentPrice;
  if (sortSelect) sortSelect.value = currentSort;
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


/* ============================================================
   SERPENTAIRE – script.js
   Compatible con: index.html, producto.html, index.html
   ============================================================ */
 
const STORAGE_KEY = "serpentaire_favorites";
const CART_KEY    = "serpentaire_cart";
 
/* ── Catálogo de productos ─────────────────────────────────── */
const products = {
  serpente_marino: {
    id: "serpente_marino",
    name: "Bolso Serpenté",
    price: "445 EUR",
    priceValue: 445,
    description: "Bolso de piel marino con emblema dorado y localizador integrado, combinando estilo y seguridad en una pieza exclusiva.",
    details: "Dimensiones: 35 x 25 x 15 cm\nMaterial: Piel premium\nHerrajes dorados\nLocalizador integrado",
    care: "Limpiar con paño suave y seco.\nGuardar en su funda protectora.\nEvitar humedad y sol directo.",
    images: [
      "serpente_marino.png",
      "serpente_marino.png",
      "serpente_marino.png",
      "serpente_verde.png"
    ],
    colors: [
      { name: "Cherry",    hex: "#8c1d23", id: "serpente_cherry",    image: "serpente_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpente_chocolate", image: "cartera_marino.png"  },
      { name: "Verde",     hex: "#0f5b39", id: "serpente_verde",     image: "serpente_verde.png"  },
      { name: "Chicle",    hex: "#ef68bf", id: "serpente_chicle",    image: "serpente_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpente_beige",     image: "serpente_beige.png"  }
    ],
    companions: [
      { name: "Cartera serpentaire",   image: "cartera_marino.png" },
      { name: "Tarjetero serpentaire", image: "cartera_beige.png"  }
    ],
    suggestions: [
      { name: "Charm serpentaire",  image: "cartera_beige.png"  },
      { name: "Serpentina verde",   image: "serpente_verde.png" },
      { name: "Reloj serpentaire",  image: "cartera_cereza.png" }
    ]
  },
 
  serpente_verde: {
    id: "serpente_verde",
    name: "Bolso Serpenté Verde",
    price: "445 EUR",
    priceValue: 445,
    description: "Bolso de piel verde con emblema dorado y localizador integrado, combinando estilo y seguridad en una pieza exclusiva.",
    details: "Dimensiones: 35 x 25 x 15 cm\nMaterial: Piel premium\nHerrajes dorados\nLocalizador integrado",
    care: "Limpiar con paño suave y seco.\nGuardar en su funda protectora.\nEvitar humedad y sol directo.",
    images: [
      "serpente_verde.png",
      "serpente_verde.png",
      "serpente_marino.png",
      "serpente_beige.png"
    ],
    colors: [
      { name: "Cherry",    hex: "#8c1d23", id: "serpente_cherry",    image: "serpente_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpente_chocolate", image: "cartera_marino.png"  },
      { name: "Verde",     hex: "#0f5b39", id: "serpente_verde",     image: "serpente_verde.png"  },
      { name: "Chicle",    hex: "#ef68bf", id: "serpente_chicle",    image: "serpente_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpente_beige",     image: "serpente_beige.png"  }
    ],
    companions: [
      { name: "Cartera serpentaire",   image: "cartera_verde.png" },
      { name: "Tarjetero serpentaire", image: "cartera_beige.png" }
    ],
    suggestions: [
      { name: "Charm serpentaire",  image: "cartera_beige.png"  },
      { name: "Serpentina verde",   image: "serpente_verde.png" },
      { name: "Reloj serpentaire",  image: "cartera_cereza.png" }
    ]
  },
 
  serpente_cherry: {
    id: "serpente_cherry",
    name: "Bolso Serpenté Cherry",
    price: "445 EUR",
    priceValue: 445,
    description: "Bolso cherry con el mismo acabado estructurado y firma dorada de la colección.",
    details: "Dimensiones: 35 x 25 x 15 cm\nMaterial: Piel premium\nHerrajes dorados\nLocalizador integrado",
    care: "Limpiar con paño suave y seco.\nGuardar en su funda protectora.\nEvitar humedad y sol directo.",
    images: [
      "serpente_cereza.png",
      "serpente_cereza.png",
      "serpente_marino.png",
      "serpente_beige.png"
    ],
    colors: [
      { name: "Cherry",    hex: "#8c1d23", id: "serpente_cherry",    image: "serpente_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpente_chocolate", image: "cartera_marino.png"  },
      { name: "Verde",     hex: "#0f5b39", id: "serpente_verde",     image: "serpente_verde.png"  },
      { name: "Chicle",    hex: "#ef68bf", id: "serpente_chicle",    image: "serpente_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpente_beige",     image: "serpente_beige.png"  }
    ],
    companions: [
      { name: "Cartera serpentaire",   image: "cartera_cereza.png" },
      { name: "Tarjetero serpentaire", image: "cartera_beige.png"  }
    ],
    suggestions: [
      { name: "Charm serpentaire",  image: "cartera_beige.png"  },
      { name: "Serpentina verde",   image: "serpente_verde.png" },
      { name: "Reloj serpentaire",  image: "cartera_cereza.png" }
    ]
  },
 
  serpente_chocolate: {
    id: "serpente_chocolate",
    name: "Bolso Serpenté Chocolate",
    price: "445 EUR",
    priceValue: 445,
    description: "Bolso de piel chocolate con el emblema dorado característico de la colección Serpentaire.",
    details: "Dimensiones: 35 x 25 x 15 cm\nMaterial: Piel premium\nHerrajes dorados\nLocalizador integrado",
    care: "Limpiar con paño suave y seco.\nGuardar en su funda protectora.\nEvitar humedad y sol directo.",
    images: [
      "cartera_marino.png",
      "cartera_marino.png",
      "serpente_marino.png",
      "serpente_beige.png"
    ],
    colors: [
      { name: "Cherry",    hex: "#8c1d23", id: "serpente_cherry",    image: "serpente_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpente_chocolate", image: "cartera_marino.png"  },
      { name: "Verde",     hex: "#0f5b39", id: "serpente_verde",     image: "serpente_verde.png"  },
      { name: "Chicle",    hex: "#ef68bf", id: "serpente_chicle",    image: "serpente_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpente_beige",     image: "serpente_beige.png"  }
    ],
    companions: [
      { name: "Cartera serpentaire",   image: "cartera_marino.png" },
      { name: "Tarjetero serpentaire", image: "cartera_beige.png"  }
    ],
    suggestions: [
      { name: "Charm serpentaire",  image: "cartera_beige.png"  },
      { name: "Serpentina verde",   image: "serpente_verde.png" },
      { name: "Reloj serpentaire",  image: "cartera_cereza.png" }
    ]
  },
 
  serpente_chicle: {
    id: "serpente_chicle",
    name: "Bolso Serpenté Chicle",
    price: "445 EUR",
    priceValue: 445,
    description: "Bolso de piel chicle con el emblema dorado característico de la colección Serpentaire.",
    details: "Dimensiones: 35 x 25 x 15 cm\nMaterial: Piel premium\nHerrajes dorados\nLocalizador integrado",
    care: "Limpiar con paño suave y seco.\nGuardar en su funda protectora.\nEvitar humedad y sol directo.",
    images: [
      "serpente_chicle.png",
      "serpente_chicle.png",
      "serpente_marino.png",
      "serpente_beige.png"
    ],
    colors: [
      { name: "Cherry",    hex: "#8c1d23", id: "serpente_cherry",    image: "serpente_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpente_chocolate", image: "cartera_marino.png"  },
      { name: "Verde",     hex: "#0f5b39", id: "serpente_verde",     image: "serpente_verde.png"  },
      { name: "Chicle",    hex: "#ef68bf", id: "serpente_chicle",    image: "serpente_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpente_beige",     image: "serpente_beige.png"  }
    ],
    companions: [
      { name: "Cartera serpentaire",   image: "cartera_cichle.png" },
      { name: "Tarjetero serpentaire", image: "cartera_beige.png"  }
    ],
    suggestions: [
      { name: "Charm serpentaire",  image: "cartera_beige.png"  },
      { name: "Serpentina verde",   image: "serpente_verde.png" },
      { name: "Reloj serpentaire",  image: "cartera_cereza.png" }
    ]
  },
 
  serpente_beige: {
    id: "serpente_beige",
    name: "Bolso Serpenté Beige",
    price: "445 EUR",
    priceValue: 445,
    description: "Bolso de piel beige con el emblema dorado característico de la colección Serpentaire.",
    details: "Dimensiones: 35 x 25 x 15 cm\nMaterial: Piel premium\nHerrajes dorados\nLocalizador integrado",
    care: "Limpiar con paño suave y seco.\nGuardar en su funda protectora.\nEvitar humedad y sol directo.",
    images: [
      "serpente_beige.png",
      "serpente_beige.png",
      "serpente_marino.png",
      "serpente_verde.png"
    ],
    colors: [
      { name: "Cherry",    hex: "#8c1d23", id: "serpente_cherry",    image: "serpente_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpente_chocolate", image: "cartera_marino.png"  },
      { name: "Verde",     hex: "#0f5b39", id: "serpente_verde",     image: "serpente_verde.png"  },
      { name: "Chicle",    hex: "#ef68bf", id: "serpente_chicle",    image: "serpente_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpente_beige",     image: "serpente_beige.png"  }
    ],
    companions: [
      { name: "Cartera serpentaire",   image: "cartera_beige.png" },
      { name: "Tarjetero serpentaire", image: "cartera_beige.png" }
    ],
    suggestions: [
      { name: "Charm serpentaire",  image: "cartera_beige.png"  },
      { name: "Serpentina verde",   image: "serpente_verde.png" },
      { name: "Reloj serpentaire",  image: "cartera_cereza.png" }
    ]
  }
};
 
/* ── Favoritos (localStorage) ──────────────────────────────── */
function getFavorites() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}
 
function saveFavorites(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}
 
function isFavorite(id) {
  return getFavorites().some(item => item.id === id);
}
 
function toggleFavorite(item) {
  const favorites = getFavorites();
  const index = favorites.findIndex(f => f.id === item.id);
  if (index >= 0) favorites.splice(index, 1);
  else favorites.push(item);
  saveFavorites(favorites);
  updateWishlistUI();
  syncFavoriteButtons();
}
 
function removeFavorite(id) {
  saveFavorites(getFavorites().filter(item => item.id !== id));
  updateWishlistUI();
  syncFavoriteButtons();
}
 
/* ── Carrito (sessionStorage para esta demo) ───────────────── */
function getCart() {
  try { return JSON.parse(sessionStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}
 
function saveCart(items) {
  sessionStorage.setItem(CART_KEY, JSON.stringify(items));
}
 
function addToCart(item) {
  const cart = getCart();
  cart.push(item);
  saveCart(cart);
  updateCartUI();
}
 
function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  updateCartUI();
}
 
/* ── Actualizar UI del carrito ─────────────────────────────── */
function updateCartUI() {
  const cart = getCart();
 
  // Badge
  const badge = document.getElementById("cartCountBadge");
  if (badge) {
    badge.textContent = cart.length > 0 ? cart.length : "0";
    badge.style.display = cart.length > 0 ? "flex" : "none";
  }
 
  // Container 
  const container = document.getElementById("cartItemsContainer");
  const totalEl   = document.getElementById("cartTotal");
  if (!container) return;
 
  if (cart.length === 0) {
    container.innerHTML = `<p class="empty-wishlist" style="padding:1rem;font-family:var(--font-body);color:var(--color-text-medium)">Tu carrito está vacío.</p>`;
    if (totalEl) totalEl.textContent = "";
    return;
  }
 
  container.innerHTML = cart.map((item, i) => `
    <div class="wishlist-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <p>${item.price}</p>
      </div>
      <button class="remove-fav-btn" onclick="removeFromCart(${i})">Quitar</button>
    </div>
  `).join("");
 
  if (totalEl) {
    const total = cart.reduce((sum, item) => sum + (item.priceValue || 0), 0);
    totalEl.textContent = `Total: ${total} EUR`;
  }
}
 
/* ── Actualizar UI del wishlist ────────────────────────────── */
function updateWishlistUI() {
  const favorites = getFavorites();
 
  const count  = document.getElementById("wishlistCount");
  const badge  = document.getElementById("wishlistCountBadge");
  const drawerCount = document.getElementById("wishlistDrawerCount");
 
  if (count)       count.textContent = favorites.length;
  if (drawerCount) drawerCount.textContent = favorites.length;
  if (badge) {
    badge.textContent = favorites.length > 0 ? favorites.length : "0";
    badge.style.display = favorites.length > 0 ? "flex" : "none";
  }
 
  const container = document.getElementById("wishlistItemsContainer");
  if (!container) return;
 
  if (favorites.length === 0) {
    container.innerHTML = `<p class="empty-wishlist">No hay artículos guardados.</p>`;
    return;
  }
 
  container.innerHTML = favorites.map(item => `
    <div class="wishlist-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <p>${item.price}</p>
      </div>
      <button class="remove-fav-btn" onclick="removeFavorite('${item.id}')">Quitar</button>
    </div>
  `).join("");
}
 
function syncFavoriteButtons() {
  document.querySelectorAll(".like-btn").forEach(btn => {
    btn.classList.toggle("active", isFavorite(btn.dataset.id));
  });
 
  const mainWishlist = document.getElementById("mainWishlist");
  if (mainWishlist) {
    const params    = new URLSearchParams(window.location.search);
    const currentId = params.get("id") || "serpente_marino";
    mainWishlist.classList.toggle("active", isFavorite(currentId));
  }
}
 
/* ── Drawers: abrir / cerrar ───────────────────────────────── */
function openDrawer(drawerId) {
  document.getElementById(drawerId)?.classList.add("active");
  document.getElementById("uiOverlay")?.classList.add("active");
}
 
function closeDrawer(drawerId) {
  document.getElementById(drawerId)?.classList.remove("active");
  const anyOpen = document.querySelector(".wishlist-drawer.active, .cart-drawer.active, .drawer.active");
  if (!anyOpen) {
    document.getElementById("uiOverlay")?.classList.remove("active");
  }
}
 
function openWishlist()  { openDrawer("wishlistDrawer"); }
function closeWishlist() { closeDrawer("wishlistDrawer"); document.getElementById("uiOverlay")?.classList.remove("active"); }
function openCart()      { openDrawer("cartDrawer"); }
function closeCart()     { closeDrawer("cartDrawer"); document.getElementById("uiOverlay")?.classList.remove("active"); }
 
/* ── Eventos compartidos (wishlist, overlay, like-btns) ───── */
function setupSharedEvents() {
  document.getElementById("wishlistBtn")?.addEventListener("click", openWishlist);
  document.getElementById("closeWishlistBtn")?.addEventListener("click", closeWishlist);
  
  // Esto ahora sí funciona correctamente porque el HTML tiene el ID cartBtn
  document.getElementById("cartBtn")?.addEventListener("click", openCart);
  document.getElementById("closeCartBtn")?.addEventListener("click", closeCart);
 
  document.getElementById("uiOverlay")?.addEventListener("click", () => {
    closeWishlist();
    closeCart();
  });
 
  document.querySelectorAll(".like-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      toggleFavorite({
        id:    btn.dataset.id,
        name:  btn.dataset.name,
        price: btn.dataset.price,
        image: btn.dataset.image
      });
    });
  });
}
 
/* ── Header: iconos extra (buscar, usuario) ─────────────────── */
function setupHeaderIcons() {
  const iconButtons = document.querySelectorAll(".header-icons .icon-btn");
  iconButtons.forEach(btn => {
    // Si son la cesta o favoritos, saltar este paso porque ya lo gestiona setupSharedEvents()
    if (btn.id === "wishlistBtn" || btn.id === "cartBtn") return;
 
    btn.addEventListener("click", () => {
      const label = btn.getAttribute("aria-label") || "";
      if (label === "Buscar") {
        const searchTerm = prompt("¿Qué producto estás buscando?");
        if (searchTerm) alert(`Buscando: ${searchTerm}`);
      } else if (label === "Usuario") {
        alert("Perfil de Usuario - Accede a tu cuenta");
      }
    });
  });
}
 
/* ── Renderizado de la página de producto ──────────────────── */
function renderProductPage() {
  const mainImage = document.getElementById("mainImage");
  if (!mainImage) return; 
 
  const params    = new URLSearchParams(window.location.search);
  const productId = params.get("id") || "serpente_marino";
  const product   = products[productId] || products.serpente_marino;
 
  let currentImageIndex = 0;
 
  const titleEl = document.getElementById("productTitle");
  if (titleEl) titleEl.textContent = product.name;
 
  const priceEl = document.getElementById("productPrice");
  if (priceEl) priceEl.textContent = product.price;
 
  const descEl = document.getElementById("productDescription");
  if (descEl) descEl.textContent = product.description;
 
  const detailsEl = document.getElementById("detailsContent");
  if (detailsEl) detailsEl.textContent = product.details;
 
  const careEl = document.getElementById("careContent");
  if (careEl) careEl.textContent = product.care;
 
  function updateMainImage() {
    mainImage.src = product.images[currentImageIndex];
    mainImage.alt = product.name;
  }
 
  function updateThumbState() {
    thumbnailsContainer?.querySelectorAll(".thumbnail").forEach((thumb, i) => {
      thumb.classList.toggle("active", i === currentImageIndex);
    });
  }
 
  updateMainImage();
 
  const thumbnailsContainer = document.getElementById("thumbnailsContainer");
  if (thumbnailsContainer) {
    thumbnailsContainer.innerHTML = product.images.map((img, index) => `
      <img
        src="${img}"
        alt="Miniatura ${index + 1}"
        class="thumbnail ${index === 0 ? "active" : ""}"
        data-index="${index}"
      >
    `).join("");
 
    thumbnailsContainer.querySelectorAll(".thumbnail").forEach(thumb => {
      thumb.addEventListener("click", () => {
        currentImageIndex = Number(thumb.dataset.index);
        updateMainImage();
        updateThumbState();
      });
    });
  }
 
  document.getElementById("prevBtn")?.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + product.images.length) % product.images.length;
    updateMainImage();
    updateThumbState();
  });
 
  document.getElementById("nextBtn")?.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % product.images.length;
    updateMainImage();
    updateThumbState();
  });
 
  const colorGrid = document.getElementById("colorGrid");
  if (colorGrid) {
    colorGrid.innerHTML = product.colors.map((color) => {
      const isActive = color.id === product.id;
      return `
        <div class="color-option">
          <button
            class="color-btn ${isActive ? "active" : ""}"
            data-image="${color.image}"
            data-product-id="${color.id}"
            style="background:${color.hex}"
            aria-label="${color.name}">
          </button>
          <span>${color.name}</span>
        </div>
      `;
    }).join("");
 
    colorGrid.querySelectorAll(".color-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        colorGrid.querySelectorAll(".color-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const targetId = btn.dataset.productId;
        if (targetId && targetId !== productId) {
          const currentPage = window.location.pathname.split("/").pop() || "producto.html";
          window.location.href = `${currentPage}?id=${targetId}`;
        } else {
          mainImage.src = btn.dataset.image;
          currentImageIndex = 0;
          updateThumbState();
        }
      });
    });
  }
 
  const companionsGrid = document.getElementById("companionsGrid");
  if (companionsGrid) {
    companionsGrid.innerHTML = product.companions.map(item => `
      <article class="companion-card">
        <img src="${item.image}" alt="${item.name}">
        <p>${item.name}</p>
      </article>
    `).join("");
  }
 
  const suggestionsGrid = document.getElementById("suggestionsGrid");
  if (suggestionsGrid) {
    suggestionsGrid.innerHTML = product.suggestions.map(item => `
      <article class="suggestion-card">
        <img src="${item.image}" alt="${item.name}">
        <p>${item.name}</p>
      </article>
    `).join("");
  }
 
  document.getElementById("mainWishlist")?.addEventListener("click", function () {
    toggleFavorite({
      id:    product.id,
      name:  product.name,
      price: product.price,
      image: product.images[0]
    });
    this.classList.toggle("active", isFavorite(product.id));
  });
 
  document.getElementById("addToCartBtn")?.addEventListener("click", function () {
    addToCart({
      id:         product.id,
      name:       product.name,
      price:      product.price,
      priceValue: product.priceValue,
      image:      mainImage.src
    });
 
    const originalText = this.textContent;
    this.textContent = "✓ Añadido";
    this.classList.add("success");
 
    setTimeout(() => {
      this.textContent = originalText;
      this.classList.remove("success");
    }, 2000);
  });
 
  document.querySelectorAll(".expand-btn").forEach(btn => {
    const sectionId = btn.dataset.section;
    if (!sectionId) return;
    const section = document.getElementById(sectionId);
    if (!section) return;
 
    btn.addEventListener("click", () => {
      section.classList.toggle("active");
      const icon = btn.querySelector(".expand-icon");
      if (icon) {
        icon.style.transform = section.classList.contains("active")
          ? "rotate(90deg)" : "rotate(0deg)";
      }
    });
  });
 
  setupBagDropdown();
}
 
/* ── Dropdown de bolsos (index.html) ──────────────────────── */
function setupBagDropdown() {
  const dropdownBtn  = document.getElementById("bagDropdownBtn");
  const dropdownMenu = document.getElementById("bagDropdown");
  if (!dropdownBtn || !dropdownMenu) return;
 
  dropdownMenu.innerHTML = Object.values(products).map(p => `
    <a href="producto.html?id=${p.id}" class="dropdown-item">${p.name}</a>
  `).join("");
 
  dropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = dropdownMenu.classList.toggle("active");
    dropdownMenu.style.display = isOpen ? "block" : "none";
  });
 
  document.addEventListener("click", () => {
    dropdownMenu.classList.remove("active");
    dropdownMenu.style.display = "none";
  });
}
 
/* ── Init ───────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  updateWishlistUI();
  updateCartUI();
  setupSharedEvents();
  setupHeaderIcons();
  renderProductPage();
  syncFavoriteButtons();
});
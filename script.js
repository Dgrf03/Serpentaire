const products = {
  serpente: {
    name: "Bolso Serpenté",
    price: "445 EUR",
    description:
      "Bolso de piel marine con bordado dorado y localizador integrado. Combina estilo y seguridad en una belleza exclusiva.",
    details: "Dimensiones: 35cm x 25cm x 15cm\nMaterial: Piel Marina Premium\nLocalizador: GPS integrado",
    care: "Limpiar con paño suave y seco.\nEvitar exposición prolongada al sol.\nGuardar en lugar fresco y seco.",
    colors: [
      { name: "Cherry", hex: "#8B1E3F" },
      { name: "Chocolate", hex: "#5C3D2E" },
      { name: "Verde", hex: "#1A4031" },
      { name: "Chicle", hex: "#E91E63" },
      { name: "Beige", hex: "#D4C4B0" },
    ],
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=700&fit=crop",
    ],
    companions: [
      {
        name: "Cartera Serpenté",
        price: "95 EUR",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
      },
      {
        name: "Tarjetero Serpenté",
        price: "65 EUR",
        image: "https://images.unsplash.com/photo-1512163143273-bde0e3cc763b?w=400&h=400&fit=crop",
      },
    ],
    suggestions: [
      {
        name: "Charm Serpenté",
        price: "45 EUR",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop",
      },
      {
        name: "Bolso Mini Serpenté",
        price: "285 EUR",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=300&fit=crop",
      },
      {
        name: "Reloj Serpenté",
        price: "320 EUR",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=300&fit=crop",
      },
    ],
  },
  clasico: {
    name: "Bolso Clásico",
    price: "385 EUR",
    description: "Diseño atemporal con localizador integrado. La perfección en líneas simples y elegancia absoluta.",
    details: "Dimensiones: 32cm x 22cm x 12cm\nMaterial: Piel Marina Premium\nLocalizador: GPS integrado",
    care: "Limpiar con paño suave y seco.\nEvitar exposición prolongada al sol.\nGuardar en lugar fresco y seco.",
    colors: [
      { name: "Negro", hex: "#1a1a1a" },
      { name: "Chocolate", hex: "#5C3D2E" },
      { name: "Verde", hex: "#1A4031" },
      { name: "Rosa", hex: "#E91E63" },
    ],
    images: [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=700&fit=crop",
    ],
    companions: [
      {
        name: "Cartera Clásica",
        price: "85 EUR",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
      },
      {
        name: "Llavero Elegante",
        price: "35 EUR",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      },
    ],
    suggestions: [
      {
        name: "Bolso Pequeño",
        price: "265 EUR",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=300&fit=crop",
      },
      {
        name: "Bolso Tote",
        price: "395 EUR",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=300&h=300&fit=crop",
      },
      {
        name: "Bolso Noche",
        price: "245 EUR",
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=300&h=300&fit=crop",
      },
    ],
  },
  moderno: {
    name: "Bolso Moderno",
    price: "520 EUR",
    description: "Tecnología de punta con estética contemporánea. Localizador inteligente y diseño futurista.",
    details: "Dimensiones: 38cm x 28cm x 16cm\nMaterial: Piel Marina Premium\nLocalizador: GPS + Bluetooth integrado",
    care: "Limpiar con paño suave y seco.\nEvitar exposición prolongada al sol.\nGuardar en lugar fresco y seco.",
    colors: [
      { name: "Gris", hex: "#6B7280" },
      { name: "Negro", hex: "#1a1a1a" },
      { name: "Verde", hex: "#1A4031" },
      { name: "Azul", hex: "#1e3a5f" },
    ],
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=700&fit=crop",
    ],
    companions: [
      {
        name: "Monedero Moderno",
        price: "75 EUR",
        image: "https://images.unsplash.com/photo-1512163143273-bde0e3cc763b?w=400&h=400&fit=crop",
      },
      {
        name: "Correa Ajustable",
        price: "55 EUR",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      },
    ],
    suggestions: [
      {
        name: "Bolso Urbano",
        price: "345 EUR",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=300&h=300&fit=crop",
      },
      {
        name: "Bolso Sport",
        price: "285 EUR",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=300&fit=crop",
      },
      {
        name: "Bolso Viaje",
        price: "445 EUR",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      },
    ],
  },
}

let currentProduct = "serpente"
let currentImageIndex = 0
const cart = []

function handleScroll() {
  const header = document.getElementById("mainHeader")
  const heroSection = document.getElementById("heroSection")

  if (!heroSection) return

  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
}

function initializeApp() {
  populateBagDropdown()
  populateProductUI(currentProduct)
  setupEventListeners()

  window.addEventListener("scroll", handleScroll)

  const exploreCta = document.getElementById("exploreCta")
  if (exploreCta) {
    exploreCta.addEventListener("click", () => {
      const productSection = document.querySelector(".product-section")
      if (productSection) {
        productSection.scrollIntoView({ behavior: "smooth" })
      }
    })
  }

  console.log("App initialized successfully")
}

function populateBagDropdown() {
  const dropdown = document.getElementById("bagDropdown")
  dropdown.innerHTML = ""

  Object.entries(products).forEach(([key, product]) => {
    const link = document.createElement("a")
    link.href = "#"
    link.className = "dropdown-item"
    link.textContent = product.name
    link.addEventListener("click", (e) => {
      e.preventDefault()
      selectProduct(key)
      dropdown.classList.remove("active")
      document.getElementById("bagDropdownBtn").textContent = `${product.name} ▾`
      console.log("Selected product:", key)
    })
    dropdown.appendChild(link)
  })
}

function selectProduct(productKey) {
  currentProduct = productKey
  currentImageIndex = 0
  populateProductUI(productKey)
  window.scrollTo({ top: 0, behavior: "smooth" })
}

function populateProductUI(productKey) {
  const product = products[productKey]

  document.getElementById("productTitle").textContent = product.name
  document.getElementById("productPrice").textContent = product.price
  document.getElementById("productDescription").textContent = product.description

  document.getElementById("mainImage").src = product.images[0]
  updateThumbnails(product.images)

  populateColors(product.colors)

  document.getElementById("detailsContent").textContent = product.details
  document.getElementById("careContent").textContent = product.care

  populateCompanions(product.companions)
  populateSuggestions(product.suggestions)
}

function updateThumbnails(images) {
  const thumbnailsContainer = document.getElementById("thumbnailsContainer")
  thumbnailsContainer.innerHTML = ""

  images.forEach((img, index) => {
    const thumb = document.createElement("img")
    thumb.className = "thumbnail" + (index === 0 ? " active" : "")
    thumb.src = img
    thumb.alt = `Vista ${index + 1}`
    thumb.dataset.index = index
    thumb.addEventListener("click", () => selectImage(index))
    thumbnailsContainer.appendChild(thumb)
  })
}

function populateColors(colors) {
  const colorGrid = document.getElementById("colorGrid")
  colorGrid.innerHTML = ""

  colors.forEach((color, index) => {
    const colorOption = document.createElement("div")
    colorOption.className = "color-option"
    colorOption.innerHTML = `
      <button class="color-btn${index === 0 ? " active" : ""}" style="background-color: ${color.hex};" data-color="${color.name}" title="${color.name}"></button>
      <span class="color-label">${color.name}</span>
    `
    colorGrid.appendChild(colorOption)
  })

  setupColorListeners()
}

function populateCompanions(companions) {
  const grid = document.getElementById("companionsGrid")
  grid.innerHTML = ""

  companions.forEach((companion) => {
    const card = document.createElement("div")
    card.className = "companion-card"
    card.innerHTML = `
      <img src="${companion.image}" alt="${companion.name}">
      <p class="companion-name">${companion.name}</p>
      <p class="companion-price">${companion.price}</p>
      <button class="companion-add-btn">Añadir a la cesta</button>
    `
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("companion-add-btn")) {
        e.target.textContent = "✓ Añadido"
        e.target.classList.add("success")
        setTimeout(() => {
          e.target.textContent = "Añadir a la cesta"
          e.target.classList.remove("success")
        }, 2000)
      }
    })
    grid.appendChild(card)
  })
}

function populateSuggestions(suggestions) {
  const grid = document.getElementById("suggestionsGrid")
  grid.innerHTML = ""

  suggestions.forEach((suggestion) => {
    const card = document.createElement("div")
    card.className = "suggestion-card"
    card.innerHTML = `
      <div class="suggestion-image-wrapper">
        <img src="${suggestion.image}" alt="${suggestion.name}">
        <button class="wishlist-icon" aria-label="Añadir a favoritos">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M10 17.5c-3.5-2.5-7-5-7-8.5 0-2.2 1.3-3.5 3-3.5 1.3 0 2.5.7 3 1.8.5-1.1 1.7-1.8 3-1.8 1.7 0 3 1.3 3 3.5 0 3.5-3.5 6-7 8.5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <p class="suggestion-name">${suggestion.name}</p>
      <p class="suggestion-price">${suggestion.price}</p>
    `
    grid.appendChild(card)
  })
}

function selectImage(index) {
  currentImageIndex = index
  const product = products[currentProduct]
  document.getElementById("mainImage").src = product.images[index]

  const thumbnails = document.querySelectorAll(".thumbnail")
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index)
  })
}

function setupEventListeners() {
  const bagBtn = document.getElementById("bagDropdownBtn")
  const bagDropdown = document.getElementById("bagDropdown")

  // Dropdown toggle
  bagBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    bagDropdown.classList.toggle("active")
  })

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-dropdown")) {
      bagDropdown.classList.remove("active")
    }
  })

  document.getElementById("accessoriesBtn").addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "#accesorios"
    console.log("[v0] Navegando a Accesorios")
  })

  document.getElementById("leatherBtn").addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "#marroquineria"
    console.log("[v0] Navegando a Marroquinería")
  })

  // Gallery navigation
  document.getElementById("prevBtn").addEventListener("click", () => {
    const product = products[currentProduct]
    currentImageIndex = (currentImageIndex - 1 + product.images.length) % product.images.length
    selectImage(currentImageIndex)
  })

  document.getElementById("nextBtn").addEventListener("click", () => {
    const product = products[currentProduct]
    currentImageIndex = (currentImageIndex + 1) % product.images.length
    selectImage(currentImageIndex)
  })

  // Expandable sections
  document.querySelectorAll(".expand-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const sectionId = btn.dataset.section
      const content = document.getElementById(sectionId)
      btn.classList.toggle("active")
      content.classList.toggle("active")
    })
  })

  // Main Add to cart button
  document.getElementById("addToCartBtn").addEventListener("click", function () {
    const product = products[currentProduct]
    cart.push({
      name: product.name,
      price: product.price,
      image: product.images[0],
    })
    this.textContent = "✓ Añadido"
    this.classList.add("success")
    console.log("[v0] Añadido al carrito:", product.name, "Total items:", cart.length)
    setTimeout(() => {
      this.textContent = "Añadir a la cesta"
      this.classList.remove("success")
    }, 2000)
  })

  // Wishlist button
  document.querySelector(".wishlist-btn").addEventListener("click", function () {
    this.classList.toggle("active")
    const product = products[currentProduct]
    if (this.classList.contains("active")) {
      this.style.fill = "#1A4031"
      this.style.stroke = "#1A4031"
      console.log("[v0] Añadido a favoritos:", product.name)
    } else {
      this.style.fill = "none"
      this.style.stroke = "currentColor"
      console.log("[v0] Eliminado de favoritos:", product.name)
    }
  })

  document.querySelectorAll(".icon-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const labels = ["Buscar", "Carrito", "Favoritos", "Usuario"]
      if (index === 0) {
        // Botón de búsqueda
        console.log("[v0] Abriendo búsqueda")
        const searchTerm = prompt("¿Qué producto estás buscando?")
        if (searchTerm) {
          console.log("[v0] Búsqueda:", searchTerm)
          alert(`Buscando: ${searchTerm}`)
        }
      } else if (index === 1) {
        // Botón de carrito
        console.log("[v0] Abriendo carrito. Items:", cart.length)
        if (cart.length === 0) {
          alert("Tu carrito está vacío")
        } else {
          const cartItems = cart.map((item) => `${item.name} - ${item.price}`).join("\n")
          alert(`Carrito (${cart.length} items):\n\n${cartItems}`)
        }
      } else if (index === 2) {
        // Botón de favoritos
        console.log("[v0] Abriendo favoritos")
        alert("Favoritos - Tus productos guardados aparecerán aquí")
      } else if (index === 3) {
        // Botón de usuario
        console.log("[v0] Abriendo perfil de usuario")
        alert("Perfil de Usuario - Accede a tu cuenta")
      }
    })
  })
}

function setupColorListeners() {
  document.querySelectorAll(".color-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".color-btn").forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
      console.log("Selected color:", btn.dataset.color)
    })
  })
}

document.addEventListener("DOMContentLoaded", initializeApp)

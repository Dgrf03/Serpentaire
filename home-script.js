// Scroll effect for header and logo - GTA 6 style
window.addEventListener("scroll", () => {
  const header = document.getElementById("mainHeader")
  const scrollPosition = window.scrollY
  if (scrollPosition > 100) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// Navigation buttons
document.getElementById("accessoriesBtn")?.addEventListener("click", (e) => {
  e.preventDefault()
  alert("Sección de Accesorios - Próximamente")
})

document.getElementById("leatherBtn")?.addEventListener("click", (e) => {
  e.preventDefault()
  alert("Sección de Marroquinería - Próximamente")
})

// Header icons
document.querySelectorAll(".icon-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const labels = ["Buscar", "Carrito", "Favoritos", "Usuario"]
    alert(labels[index] + " - Funcionalidad disponible próximamente")
  })
})

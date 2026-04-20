/* ============================================================
   SERPENTAIRE – script.js
   Compatible con: index.html, producto.html
   ============================================================ */
 
const STORAGE_KEY = "serpentaire_favorites";
const CART_KEY    = "serpentaire_cart";
 
/* ── Catálogo de productos ─────────────────────────────────── */
const products = {
  
  /* ================== FAMILIA: BOLSOS (SERPENTÉ) ================== */
  serpente_marino: {
    id: "serpente_marino", name: "Bolso Serpenté Marino", price: "445 EUR", priceValue: 445,
    description: "Bolso de piel marino con emblema dorado y localizador integrado, combinando estilo y seguridad en una pieza exclusiva.",
    details: "Dimensiones: 35 x 25 x 15 cm\nMaterial: Piel premium\nHerrajes dorados\nLocalizador integrado",
    care: "Limpiar con paño suave y seco.\nGuardar en su funda protectora.\nEvitar humedad y sol directo.",
    images: ["serpente_marino.png", "serpente-marino-lateral .png", "serpente azul parte trasera .png", "mock up serpente marino .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpente_marino",    image: "serpente_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpente_cherry",    image: "serpente_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpente_chocolate", image: "serpente_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpente_verde",     image: "serpente_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpente_chicle",    image: "serpente_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpente_beige",     image: "serpente_beige.png" }
    ],
    companions: [{ name: "Cartera serpentaire", image: "cartera_marino.png" }, { name: "Tarjetero serpentaire", image: "tarjetero chicle .png" }],
    suggestions: [{ name: "Charm serpentaire", image: "cartera_beige.png" }, { name: "Serpentina verde", image: "serpente_verde.png" }, { name: "Reloj serpentaire", image: "cartera_cereza.png" }]
  },
  serpente_verde: {
    id: "serpente_verde", name: "Bolso Serpenté Verde", price: "445 EUR", priceValue: 445,
    description: "Bolso de piel verde con emblema dorado y localizador integrado.",
    details: "Dimensiones: 35 x 25 x 15 cm\nMaterial: Piel premium\nHerrajes dorados\nLocalizador integrado",
    care: "Limpiar con paño suave y seco.\nGuardar en su funda protectora.",
    images: ["serpente_verde.png", "serpente-verde-lateral.png", "serpente verde trasera .png", "mock up verde .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpente_marino",    image: "serpente_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpente_cherry",    image: "serpente_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpente_chocolate", image: "serpente_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpente_verde",     image: "serpente_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpente_chicle",    image: "serpente_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpente_beige",     image: "serpente_beige.png" }
    ],
    companions: [{ name: "Cartera serpentaire", image: "cartera_verde.png" }, { name: "Tarjetero serpentaire", image: "tarjetero chicle .png" }],
    suggestions: [{ name: "Charm serpentaire", image: "cartera_beige.png" }, { name: "Serpentina verde", image: "serpente_verde.png" }, { name: "Reloj serpentaire", image: "cartera_cereza.png" }]
  },
  serpente_cherry: {
    id: "serpente_cherry", name: "Bolso Serpenté Cherry", price: "445 EUR", priceValue: 445,
    description: "Bolso cherry con el mismo acabado estructurado y firma dorada.",
    details: "Dimensiones: 35 x 25 x 15 cm\nMaterial: Piel premium\nHerrajes dorados\nLocalizador integrado",
    care: "Limpiar con paño suave y seco.\nGuardar en su funda protectora.",
    images: ["serpente_cereza.png", "serpente-cherry-lateral.png", "serpente cherry trasera .png", "mockup serpente cherry .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpente_marino",    image: "serpente_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpente_cherry",    image: "serpente_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpente_chocolate", image: "serpente_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpente_verde",     image: "serpente_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpente_chicle",    image: "serpente_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpente_beige",     image: "serpente_beige.png" }
    ],
    companions: [{ name: "Cartera serpentaire", image: "cartera_cereza.png" }, { name: "Tarjetero serpentaire", image: "tarjetero chicle .png" }],
    suggestions: [{ name: "Charm serpentaire", image: "cartera_beige.png" }, { name: "Serpentina verde", image: "serpente_verde.png" }, { name: "Reloj serpentaire", image: "cartera_cereza.png" }]
  },
  serpente_chocolate: {
    id: "serpente_chocolate", name: "Bolso Serpenté Chocolate", price: "445 EUR", priceValue: 445,
    description: "Bolso de piel chocolate con emblema dorado de Serpentaire.",
    details: "Dimensiones: 35 x 25 x 15 cm\nMaterial: Piel premium\nHerrajes dorados\nLocalizador integrado",
    care: "Limpiar con paño suave y seco.\nGuardar en su funda protectora.",
    images: ["serpente╠ü chocolate .png", "serpente-chocolate-lateral.png", "serpente chocolate trasera .png", "mock up serpente chocolate 2 .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpente_marino",    image: "serpente_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpente_cherry",    image: "serpente_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpente_chocolate", image: "serpente_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpente_verde",     image: "serpente_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpente_chicle",    image: "serpente_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpente_beige",     image: "serpente_beige.png" }
    ],
    companions: [{ name: "Cartera serpentaire", image: "cartera_marino.png" }, { name: "Tarjetero serpentaire", image: "tarjetero chicle .png" }],
    suggestions: [{ name: "Charm serpentaire", image: "cartera_beige.png" }, { name: "Serpentina verde", image: "serpente_verde.png" }, { name: "Reloj serpentaire", image: "cartera_cereza.png" }]
  },
  serpente_chicle: {
    id: "serpente_chicle", name: "Bolso Serpenté Chicle", price: "445 EUR", priceValue: 445,
    description: "Bolso de piel chicle con el emblema dorado característico.",
    details: "Dimensiones: 35 x 25 x 15 cm\nMaterial: Piel premium\nHerrajes dorados\nLocalizador integrado",
    care: "Limpiar con paño suave y seco.\nGuardar en su funda protectora.",
    images: ["serpente_chicle.png", "serpente-chicle-lateral.png", "serpente chicle trasera .png",],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpente_marino",    image: "serpente_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpente_cherry",    image: "serpente_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpente_chocolate", image: "serpente_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpente_verde",     image: "serpente_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpente_chicle",    image: "serpente_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpente_beige",     image: "serpente_beige.png" }
    ],
    companions: [{ name: "Cartera serpentaire", image: "cartera_cichle.png" }, { name: "Tarjetero serpentaire", image: "tarjetero chicle .png" }],
    suggestions: [{ name: "Charm serpentaire", image: "cartera_beige.png" }, { name: "Serpentina verde", image: "serpente_verde.png" }, { name: "Reloj serpentaire", image: "cartera_cereza.png" }]
  },
  serpente_beige: {
    id: "serpente_beige", name: "Bolso Serpenté Beige", price: "445 EUR", priceValue: 445,
    description: "Bolso de piel beige con el emblema dorado característico.",
    details: "Dimensiones: 35 x 25 x 15 cm\nMaterial: Piel premium\nHerrajes dorados\nLocalizador integrado",
    care: "Limpiar con paño suave y seco.\nGuardar en su funda protectora.",
    images: ["serpente_beige.png", "serpente-beige-lateral.png", "serpente beige trasero .png", "mockup serpente beige 1 .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpente_marino",    image: "serpente_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpente_cherry",    image: "serpente_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpente_chocolate", image: "serpente_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpente_verde",     image: "serpente_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpente_chicle",    image: "serpente_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpente_beige",     image: "serpente_beige.png" }
    ],
    companions: [{ name: "Cartera serpentaire", image: "cartera_beige.png" }, { name: "Tarjetero serpentaire", image: "tarjetero chicle .png" }],
    suggestions: [{ name: "Charm serpentaire", image: "cartera_beige.png" }, { name: "Serpentina verde", image: "serpente_verde.png" }, { name: "Reloj serpentaire", image: "cartera_cereza.png" }]
  },

  /* ================== FAMILIA: CARTERAS ================== */
  cartera_marino: {
    id: "cartera_marino", name: "Cartera Serpentaire Marino", price: "445 EUR", priceValue: 445,
    description: "Cartera de piel marino con emblema dorado y localizador integrado.",
    details: "Material: Piel premium\nHerrajes dorados\nDiseño compacto",
    care: "Limpiar con paño suave y seco.\nGuardar en su funda protectora.",
    images: ["cartera marino .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "cartera_marino",    image: "cartera_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "cartera_cherry",    image: "cartera_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "cartera_chocolate", image: "cartera_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "cartera_verde",     image: "cartera_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "cartera_chicle",    image: "cartera_cichle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "cartera_beige",     image: "cartera_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_marino.png" }, { name: "Tarjetero serpentaire", image: "tarjetero chicle .png" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png" }]
  },
  cartera_verde: {
    id: "cartera_verde", name: "Cartera Serpentaire Verde", price: "445 EUR", priceValue: 445,
    description: "Cartera de piel verde con emblema dorado y localizador integrado.",
    details: "Material: Piel premium\nHerrajes dorados\nDiseño compacto",
    care: "Limpiar con paño suave y seco.",
    images: ["cartera verde .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "cartera_marino",    image: "cartera_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "cartera_cherry",    image: "cartera_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "cartera_chocolate", image: "cartera_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "cartera_verde",     image: "cartera_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "cartera_chicle",    image: "cartera_cichle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "cartera_beige",     image: "cartera_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_verde.png" }, { name: "Tarjetero serpentaire", image: "tarjetero chicle .png" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png" }]
  },
  cartera_cherry: {
    id: "cartera_cherry", name: "Cartera Serpentaire Cherry", price: "445 EUR", priceValue: 445,
    description: "Cartera de piel cherry con emblema dorado y localizador integrado.",
    details: "Material: Piel premium\nHerrajes dorados\nDiseño compacto",
    care: "Limpiar con paño suave y seco.",
    images: ["cartera_cereza.png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "cartera_marino",    image: "cartera_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "cartera_cherry",    image: "cartera_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "cartera_chocolate", image: "cartera_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "cartera_verde",     image: "cartera_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "cartera_chicle",    image: "cartera_cichle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "cartera_beige",     image: "cartera_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_cereza.png" }, { name: "Tarjetero serpentaire", image: "tarjetero chicle .png" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png" }]
  },
  cartera_chocolate: {
    id: "cartera_chocolate", name: "Cartera Serpentaire Chocolate", price: "445 EUR", priceValue: 445,
    description: "Cartera de piel chocolate con emblema dorado y localizador integrado.",
    details: "Material: Piel premium\nHerrajes dorados\nDiseño compacto",
    care: "Limpiar con paño suave y seco.",
    images: ["cartera chocolate .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "cartera_marino",    image: "cartera_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "cartera_cherry",    image: "cartera_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "cartera_chocolate", image: "cartera_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "cartera_verde",     image: "cartera_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "cartera_chicle",    image: "cartera_cichle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "cartera_beige",     image: "cartera_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_chocolate.png" }, { name: "Tarjetero serpentaire", image: "tarjetero chicle .png" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png" }]
  },
  cartera_chicle: {
    id: "cartera_chicle", name: "Cartera Serpentaire Chicle", price: "445 EUR", priceValue: 445,
    description: "Cartera de piel chicle con emblema dorado y localizador integrado.",
    details: "Material: Piel premium\nHerrajes dorados\nDiseño compacto",
    care: "Limpiar con paño suave y seco.",
    images: ["cartera_cichle.png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "cartera_marino",    image: "cartera_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "cartera_cherry",    image: "cartera_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "cartera_chocolate", image: "cartera_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "cartera_verde",     image: "cartera_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "cartera_chicle",    image: "cartera_cichle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "cartera_beige",     image: "cartera_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_chicle.png" }, { name: "Tarjetero serpentaire", image: "tarjetero chicle .png" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png" }]
  },
  cartera_beige: {
    id: "cartera_beige", name: "Cartera Serpentaire Beige", price: "445 EUR", priceValue: 445,
    description: "Cartera de piel beige con emblema dorado y localizador integrado.",
    details: "Material: Piel premium\nHerrajes dorados\nDiseño compacto",
    care: "Limpiar con paño suave y seco.",
    images: ["cartera_beige.png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "cartera_marino",    image: "cartera_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "cartera_cherry",    image: "cartera_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "cartera_chocolate", image: "cartera_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "cartera_verde",     image: "cartera_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "cartera_chicle",    image: "cartera_cichle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "cartera_beige",     image: "cartera_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_beige.png" }, { name: "Tarjetero serpentaire", image: "tarjetero chicle .png" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png" }]
  },

  /* ================== FAMILIA: SERPENTINAS ================== */
  serpentina_marino: {
    id: "serpentina_marino", name: "Serpentina Marino", price: "445 EUR", priceValue: 445,
    description: "Serpentina de piel marino con emblema dorado, perfecta como accesorio exclusivo.",
    details: "Material: Piel premium\nHerrajes dorados\nAccesorio versátil",
    care: "Limpiar con paño suave y seco.",
    images: ["serpentina marino .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpentina_marino",    image: "serpentina_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpentina_cherry",    image: "serpentina_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpentina_chocolate", image: "serpentina_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpentina_verde",     image: "serpentina_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpentina_chicle",    image: "serpentina_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpentina_beige",     image: "serpentina_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_marino.png" }, { name: "Cartera serpentaire", image: "cartera_marino.png" }],
    suggestions: [{ name: "Tarjetero serpentaire", image: "tarjetero chicle .png" }]
  },
  serpentina_verde: {
    id: "serpentina_verde", name: "Serpentina Verde", price: "445 EUR", priceValue: 445,
    description: "Serpentina de piel verde con emblema dorado, perfecta como accesorio exclusivo.",
    details: "Material: Piel premium\nHerrajes dorados\nAccesorio versátil",
    care: "Limpiar con paño suave y seco.",
    images: ["serpentina verde .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpentina_marino",    image: "serpentina_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpentina_cherry",    image: "serpentina_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpentina_chocolate", image: "serpentina_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpentina_verde",     image: "serpentina_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpentina_chicle",    image: "serpentina_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpentina_beige",     image: "serpentina_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_verde.png" }, { name: "Cartera serpentaire", image: "cartera_verde.png" }],
    suggestions: [{ name: "Tarjetero serpentaire", image: "tarjetero chicle .png" }]
  },
  serpentina_cherry: {
    id: "serpentina_cherry", name: "Serpentina Cherry", price: "445 EUR", priceValue: 445,
    description: "Serpentina de piel cherry con emblema dorado, perfecta como accesorio exclusivo.",
    details: "Material: Piel premium\nHerrajes dorados\nAccesorio versátil",
    care: "Limpiar con paño suave y seco.",
    images: ["serpentina cherry .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpentina_marino",    image: "serpentina_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpentina_cherry",    image: "serpentina_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpentina_chocolate", image: "serpentina_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpentina_verde",     image: "serpentina_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpentina_chicle",    image: "serpentina_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpentina_beige",     image: "serpentina_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_cereza.png" }, { name: "Cartera serpentaire", image: "cartera_cereza.png" }],
    suggestions: [{ name: "Tarjetero serpentaire", image: "tarjetero chicle .png" }]
  },
  serpentina_chocolate: {
    id: "serpentina_chocolate", name: "Serpentina Chocolate", price: "445 EUR", priceValue: 445,
    description: "Serpentina de piel chocolate con emblema dorado, perfecta como accesorio exclusivo.",
    details: "Material: Piel premium\nHerrajes dorados\nAccesorio versátil",
    care: "Limpiar con paño suave y seco.",
    images: ["serpentina chocolate .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpentina_marino",    image: "serpentina_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpentina_cherry",    image: "serpentina_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpentina_chocolate", image: "serpentina_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpentina_verde",     image: "serpentina_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpentina_chicle",    image: "serpentina_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpentina_beige",     image: "serpentina_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_chocolate.png" }, { name: "Cartera serpentaire", image: "cartera_chocolate.png" }],
    suggestions: [{ name: "Tarjetero serpentaire", image: "tarjetero chicle .png" }]
  },
  serpentina_chicle: {
    id: "serpentina_chicle", name: "Serpentina Chicle", price: "445 EUR", priceValue: 445,
    description: "Serpentina de piel chicle con emblema dorado, perfecta como accesorio exclusivo.",
    details: "Material: Piel premium\nHerrajes dorados\nAccesorio versátil",
    care: "Limpiar con paño suave y seco.",
    images: ["serpentina chiche .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpentina_marino",    image: "serpentina_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpentina_cherry",    image: "serpentina_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpentina_chocolate", image: "serpentina_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpentina_verde",     image: "serpentina_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpentina_chicle",    image: "serpentina_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpentina_beige",     image: "serpentina_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_chicle.png" }, { name: "Cartera serpentaire", image: "cartera_cichle.png" }],
    suggestions: [{ name: "Tarjetero serpentaire", image: "tarjetero chicle .png" }]
  },
  serpentina_beige: {
    id: "serpentina_beige", name: "Serpentina Beige", price: "445 EUR", priceValue: 445,
    description: "Serpentina de piel beige con emblema dorado, perfecta como accesorio exclusivo.",
    details: "Material: Piel premium\nHerrajes dorados\nAccesorio versátil",
    care: "Limpiar con paño suave y seco.",
    images: ["serpentina beige  .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpentina_marino",    image: "serpentina_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpentina_cherry",    image: "serpentina_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpentina_chocolate", image: "serpentina_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpentina_verde",     image: "serpentina_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpentina_chicle",    image: "serpentina_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpentina_beige",     image: "serpentina_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_beige.png" }, { name: "Cartera serpentaire", image: "cartera_beige.png" }],
    suggestions: [{ name: "Tarjetero serpentaire", image: "tarjetero chicle .png" }]
  },

  /* ================== FAMILIA: TARJETEROS ================== */
  tarjetero_marino: {
    id: "tarjetero_marino", name: "Tarjetero Serpentaire Marino", price: "445 EUR", priceValue: 445,
    description: "Tarjetero de piel marino con emblema dorado, el complemento perfecto para la colección Serpentaire.",
    details: "Material: Piel premium\nHerrajes dorados\nCapacidad: 8 tarjetas",
    care: "Limpiar con paño suave y seco.\nGuardar en su funda protectora.",
    images: ["tarjetero marino .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "tarjetero_marino",    image: "tarjetero_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "tarjetero_cherry",    image: "tarjetero_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "tarjetero_chocolate", image: "tarjetero_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "tarjetero_verde",     image: "tarjetero_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "tarjetero_chicle",    image: "tarjetero chicle .png" },
      { name: "Beige",     hex: "#d9bd89", id: "tarjetero_beige",     image: "tarjetero_beige.png" }
    ],
    companions: [{ name: "Cartera serpentaire", image: "cartera_marino.png" }, { name: "Bolso serpentaire", image: "serpente_marino.png" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png" }, { name: "Serpenté marino", image: "serpente_marino.png" }]
  },
  tarjetero_verde: {
    id: "tarjetero_verde", name: "Tarjetero Serpentaire Verde", price: "445 EUR", priceValue: 445,
    description: "Tarjetero de piel verde con emblema dorado, el complemento perfecto para la colección Serpentaire.",
    details: "Material: Piel premium\nHerrajes dorados\nCapacidad: 8 tarjetas",
    care: "Limpiar con paño suave y seco.\nGuardar en su funda protectora.",
    images: ["tarjetero verde .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "tarjetero_marino",    image: "tarjetero_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "tarjetero_cherry",    image: "tarjetero_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "tarjetero_chocolate", image: "tarjetero_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "tarjetero_verde",     image: "tarjetero_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "tarjetero_chicle",    image: "tarjetero chicle .png" },
      { name: "Beige",     hex: "#d9bd89", id: "tarjetero_beige",     image: "tarjetero_beige.png" }
    ],
    companions: [{ name: "Cartera serpentaire", image: "cartera_verde.png" }, { name: "Bolso serpentaire", image: "serpente_verde.png" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png" }, { name: "Serpenté verde", image: "serpente_verde.png" }]
  },
  tarjetero_cherry: {
    id: "tarjetero_cherry", name: "Tarjetero Serpentaire Cherry", price: "445 EUR", priceValue: 445,
    description: "Tarjetero de piel cherry con emblema dorado, el complemento perfecto para la colección Serpentaire.",
    details: "Material: Piel premium\nHerrajes dorados\nCapacidad: 8 tarjetas",
    care: "Limpiar con paño suave y seco.\nGuardar en su funda protectora.",
    images: ["tarjetero cherry .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "tarjetero_marino",    image: "tarjetero_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "tarjetero_cherry",    image: "tarjetero_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "tarjetero_chocolate", image: "tarjetero_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "tarjetero_verde",     image: "tarjetero_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "tarjetero_chicle",    image: "tarjetero chicle .png" },
      { name: "Beige",     hex: "#d9bd89", id: "tarjetero_beige",     image: "tarjetero_beige.png" }
    ],
    companions: [{ name: "Cartera serpentaire", image: "cartera_cereza.png" }, { name: "Bolso serpentaire", image: "serpente_cereza.png" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png" }, { name: "Serpenté cherry", image: "serpente_cereza.png" }]
  },
  tarjetero_chocolate: {
    id: "tarjetero_chocolate", name: "Tarjetero Serpentaire Chocolate", price: "445 EUR", priceValue: 445,
    description: "Tarjetero de piel chocolate con emblema dorado, el complemento perfecto para la colección Serpentaire.",
    details: "Material: Piel premium\nHerrajes dorados\nCapacidad: 8 tarjetas",
    care: "Limpiar con paño suave y seco.\nGuardar en su funda protectora.",
    images: ["tarjetero chocolate .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "tarjetero_marino",    image: "tarjetero_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "tarjetero_cherry",    image: "tarjetero_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "tarjetero_chocolate", image: "tarjetero_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "tarjetero_verde",     image: "tarjetero_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "tarjetero_chicle",    image: "tarjetero chicle .png" },
      { name: "Beige",     hex: "#d9bd89", id: "tarjetero_beige",     image: "tarjetero_beige.png" }
    ],
    companions: [{ name: "Cartera serpentaire", image: "cartera_chocolate.png" }, { name: "Bolso serpentaire", image: "serpente_chocolate.png" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png" }, { name: "Serpenté chocolate", image: "serpente_chocolate.png" }]
  },
  tarjetero_chicle: {
    id: "tarjetero_chicle", name: "Tarjetero Serpentaire Chicle", price: "445 EUR", priceValue: 445,
    description: "Tarjetero de piel chicle con emblema dorado, el complemento perfecto para la colección Serpentaire.",
    details: "Material: Piel premium\nHerrajes dorados\nCapacidad: 8 tarjetas",
    care: "Limpiar con paño suave y seco.\nGuardar en su funda protectora.",
    images: ["tarjetero chicle .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "tarjetero_marino",    image: "tarjetero_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "tarjetero_cherry",    image: "tarjetero_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "tarjetero_chocolate", image: "tarjetero_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "tarjetero_verde",     image: "tarjetero_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "tarjetero_chicle",    image: "tarjetero chicle .png" },
      { name: "Beige",     hex: "#d9bd89", id: "tarjetero_beige",     image: "tarjetero_beige.png" }
    ],
    companions: [{ name: "Cartera serpentaire", image: "cartera_cichle.png" }, { name: "Bolso serpentaire", image: "serpente_chicle.png" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png" }, { name: "Serpenté chicle", image: "serpente_chicle.png" }]
  },
  tarjetero_beige: {
    id: "tarjetero_beige", name: "Tarjetero Serpentaire Beige", price: "445 EUR", priceValue: 445,
    description: "Tarjetero de piel beige con emblema dorado, el complemento perfecto para la colección Serpentaire.",
    details: "Material: Piel premium\nHerrajes dorados\nCapacidad: 8 tarjetas",
    care: "Limpiar con paño suave y seco.\nGuardar en su funda protectora.",
    images: ["tarjetera beige .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "tarjetero_marino",    image: "tarjetero_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "tarjetero_cherry",    image: "tarjetero_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "tarjetero_chocolate", image: "tarjetero_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "tarjetero_verde",     image: "tarjetero_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "tarjetero_chicle",    image: "tarjetero chicle .png" },
      { name: "Beige",     hex: "#d9bd89", id: "tarjetero_beige",     image: "tarjetero_beige.png" }
    ],
    companions: [{ name: "Cartera serpentaire", image: "cartera_beige.png" }, { name: "Bolso serpentaire", image: "serpente_beige.png" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png" }, { name: "Serpenté beige", image: "serpente_beige.png" }]
  }
};

/* ── Favoritos (localStorage) ──────────────────────────────── */
function getFavorites() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}
function saveFavorites(items) { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); }
function isFavorite(id) { return getFavorites().some(item => item.id === id); }
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

/* ── Carrito (sessionStorage) ──────────────────────────────── */
function getCart() {
  try { return JSON.parse(sessionStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}
function saveCart(items) { sessionStorage.setItem(CART_KEY, JSON.stringify(items)); }
function addToCart(item) { const cart = getCart(); cart.push(item); saveCart(cart); updateCartUI(); }
function removeFromCart(index) { const cart = getCart(); cart.splice(index, 1); saveCart(cart); updateCartUI(); }

/* ── UI Carrito ────────────────────────────────────────────── */
function updateCartUI() {
  const cart = getCart();
  const badge = document.getElementById("cartCountBadge");
  if (badge) { badge.textContent = cart.length; badge.style.display = cart.length > 0 ? "flex" : "none"; }
  const container = document.getElementById("cartItemsContainer");
  const totalEl   = document.getElementById("cartTotal");
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = `<p class="empty-wishlist" style="padding:1rem;">Tu carrito está vacío.</p>`;
    if (totalEl) totalEl.textContent = "";
    return;
  }
  container.innerHTML = cart.map((item, i) => `
    <div class="wishlist-item">
      <img src="${item.image}" alt="${item.name}">
      <div><h4>${item.name}</h4><p>${item.price}</p></div>
      <button class="remove-fav-btn" onclick="removeFromCart(${i})">Quitar</button>
    </div>`).join("");
  if (totalEl) {
    const total = cart.reduce((sum, item) => sum + (item.priceValue || 0), 0);
    totalEl.textContent = `Total: ${total} EUR`;
  }
}

/* ── UI Wishlist ───────────────────────────────────────────── */
function updateWishlistUI() {
  const favorites = getFavorites();
  const badge = document.getElementById("wishlistCountBadge");
  if (badge) { badge.textContent = favorites.length; badge.style.display = favorites.length > 0 ? "flex" : "none"; }
  const container = document.getElementById("wishlistItemsContainer");
  if (!container) return;
  if (favorites.length === 0) { container.innerHTML = `<p class="empty-wishlist">No hay artículos guardados.</p>`; return; }
  container.innerHTML = favorites.map(item => `
    <div class="wishlist-item">
      <img src="${item.image}" alt="${item.name}">
      <div><h4>${item.name}</h4><p>${item.price}</p></div>
      <button class="remove-fav-btn" onclick="removeFavorite('${item.id}')">Quitar</button>
    </div>`).join("");
}

function syncFavoriteButtons() {
  document.querySelectorAll(".like-btn").forEach(btn => btn.classList.toggle("active", isFavorite(btn.dataset.id)));
  const mainWishlist = document.getElementById("mainWishlist");
  if (mainWishlist) {
    const currentId = new URLSearchParams(window.location.search).get("id") || "serpente_marino";
    mainWishlist.classList.toggle("active", isFavorite(currentId));
  }
}

/* ── Drawers ───────────────────────────────────────────────── */
function openDrawer(id)  { document.getElementById(id)?.classList.add("active"); document.getElementById("uiOverlay")?.classList.add("active"); }
function closeDrawer(id) { document.getElementById(id)?.classList.remove("active"); if (!document.querySelector(".wishlist-drawer.active, .drawer.active")) document.getElementById("uiOverlay")?.classList.remove("active"); }
function openWishlist()  { openDrawer("wishlistDrawer"); }
function closeWishlist() { closeDrawer("wishlistDrawer"); document.getElementById("uiOverlay")?.classList.remove("active"); }
function openCart()      { openDrawer("cartDrawer"); }
function closeCart()     { closeDrawer("cartDrawer"); document.getElementById("uiOverlay")?.classList.remove("active"); }

/* ── Eventos compartidos ───────────────────────────────────── */
function setupSharedEvents() {
  document.getElementById("wishlistBtn")?.addEventListener("click", openWishlist);
  document.getElementById("closeWishlistBtn")?.addEventListener("click", closeWishlist);
  document.getElementById("cartBtn")?.addEventListener("click", openCart);
  document.getElementById("closeCartBtn")?.addEventListener("click", closeCart);
  document.getElementById("uiOverlay")?.addEventListener("click", () => { closeWishlist(); closeCart(); });
  document.querySelectorAll(".like-btn").forEach(btn => {
    btn.addEventListener("click", () => toggleFavorite({ id: btn.dataset.id, name: btn.dataset.name, price: btn.dataset.price, image: btn.dataset.image }));
  });
}

function setupHeaderIcons() {
  document.querySelectorAll(".header-icons .icon-btn").forEach(btn => {
    if (btn.id === "wishlistBtn" || btn.id === "cartBtn") return;
    btn.addEventListener("click", () => {
      const label = btn.getAttribute("aria-label") || "";
      if (label === "Buscar") { const s = prompt("¿Qué producto estás buscando?"); if (s) alert(`Buscando: ${s}`); }
      else if (label === "Usuario") alert("Perfil de Usuario - Accede a tu cuenta");
    });
  });
}

/* ── Dropdown: ahora con 4 categorías ─────────────────────── */
function setupBagDropdown() {
  const dropdownBtn  = document.getElementById("productosDropdownBtn");
  const dropdownMenu = document.getElementById("productosDropdown");
  if (!dropdownBtn || !dropdownMenu) return;

  const productCategories = [
    { name: "Serpenté",    image: "serpente_verde.png",    link: "producto.html?id=serpente_verde" },
    { name: "Serpentinas", image: "serpentina verde .png", link: "producto.html?id=serpentina_verde" },
    { name: "Carteras",    image: "cartera_verde.png",     link: "producto.html?id=cartera_verde" },
    { name: "Tarjeteros",  image: "tarjetero verde .png",  link: "producto.html?id=tarjetero_verde" }
  ];

  dropdownMenu.innerHTML = productCategories.map(cat => `
    <a href="${cat.link}" class="dropdown-item" style="display:flex; align-items:center; gap:1rem; padding:0.8rem 1rem; border-bottom:1px solid var(--color-border); text-decoration:none;">
      <img src="${cat.image}" alt="${cat.name}" style="width:50px; height:50px; object-fit:cover; border-radius:4px;">
      <span style="white-space:normal; line-height:1.2; color:var(--color-primary);">${cat.name}</span>
    </a>`).join("");

  dropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = dropdownMenu.classList.toggle("active");
    dropdownMenu.style.display = isOpen ? "block" : "none";
  });

  document.addEventListener("click", () => {
    if (dropdownMenu.classList.contains("active")) {
      dropdownMenu.classList.remove("active");
      dropdownMenu.style.display = "none";
    }
  });
}

/* ── Renderizado de producto ───────────────────────────────── */
function renderProductPage() {
  const mainImage = document.getElementById("mainImage");
  if (!mainImage) return;
  const params    = new URLSearchParams(window.location.search);
  const productId = params.get("id") || "serpente_marino";
  const product   = products[productId] || products.serpente_marino;
  let currentImageIndex = 0;

  document.getElementById("productTitle")?.setAttribute("textContent", product.name);
  ["productTitle","productPrice","productDescription","detailsContent","careContent"].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (id === "productTitle")       el.textContent = product.name;
    if (id === "productPrice")       el.textContent = product.price;
    if (id === "productDescription") el.textContent = product.description;
    if (id === "detailsContent")     el.textContent = product.details;
    if (id === "careContent")        el.textContent = product.care;
  });

  function updateMainImage()  { mainImage.src = product.images[currentImageIndex]; mainImage.alt = product.name; }
  function updateThumbState() { document.getElementById("thumbnailsContainer")?.querySelectorAll(".thumbnail").forEach((t, i) => t.classList.toggle("active", i === currentImageIndex)); }

  updateMainImage();

  const thumbnailsContainer = document.getElementById("thumbnailsContainer");
  if (thumbnailsContainer) {
    thumbnailsContainer.innerHTML = product.images.map((img, i) => `<img src="${img}" alt="Miniatura ${i+1}" class="thumbnail ${i===0?"active":""}" data-index="${i}">`).join("");
    thumbnailsContainer.querySelectorAll(".thumbnail").forEach(thumb => {
      thumb.addEventListener("click", () => { currentImageIndex = Number(thumb.dataset.index); updateMainImage(); updateThumbState(); });
    });
  }

  document.getElementById("prevBtn")?.addEventListener("click", () => { currentImageIndex = (currentImageIndex - 1 + product.images.length) % product.images.length; updateMainImage(); updateThumbState(); });
  document.getElementById("nextBtn")?.addEventListener("click", () => { currentImageIndex = (currentImageIndex + 1) % product.images.length; updateMainImage(); updateThumbState(); });

  const colorGrid = document.getElementById("colorGrid");
  if (colorGrid) {
    colorGrid.innerHTML = product.colors.map(color => `
      <div class="color-option">
        <button class="color-btn ${color.id === product.id ? "active" : ""}" data-image="${color.image}" data-product-id="${color.id}" style="background:${color.hex}" aria-label="${color.name}"></button>
        <span>${color.name}</span>
      </div>`).join("");
    colorGrid.querySelectorAll(".color-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        colorGrid.querySelectorAll(".color-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const targetId = btn.dataset.productId;
        if (targetId && targetId !== productId) {
          window.location.href = `${window.location.pathname.split("/").pop() || "producto.html"}?id=${targetId}`;
        } else {
          mainImage.src = btn.dataset.image;
          currentImageIndex = 0;
          updateThumbState();
        }
      });
    });
  }

  const companionsGrid = document.getElementById("companionsGrid");
  if (companionsGrid) companionsGrid.innerHTML = product.companions.map(item => `<article class="companion-card"><img src="${item.image}" alt="${item.name}"><p>${item.name}</p></article>`).join("");

  const suggestionsGrid = document.getElementById("suggestionsGrid");
  if (suggestionsGrid) suggestionsGrid.innerHTML = product.suggestions.map(item => `<article class="suggestion-card"><img src="${item.image}" alt="${item.name}"><p>${item.name}</p></article>`).join("");

  document.getElementById("mainWishlist")?.addEventListener("click", function () {
    toggleFavorite({ id: product.id, name: product.name, price: product.price, image: product.images[0] });
    this.classList.toggle("active", isFavorite(product.id));
  });

  document.getElementById("addToCartBtn")?.addEventListener("click", function () {
    addToCart({ id: product.id, name: product.name, price: product.price, priceValue: product.priceValue, image: mainImage.src });
    const orig = this.textContent;
    this.textContent = "✓ Añadido";
    this.classList.add("success");
    setTimeout(() => { this.textContent = orig; this.classList.remove("success"); }, 2000);
  });

  document.querySelectorAll(".expand-btn").forEach(btn => {
    const section = document.getElementById(btn.dataset.section);
    if (!section) return;
    btn.addEventListener("click", () => {
      section.classList.toggle("active");
      const icon = btn.querySelector(".expand-icon");
      if (icon) icon.style.transform = section.classList.contains("active") ? "rotate(90deg)" : "rotate(0deg)";
    });
  });
}

/* ── Init ───────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  updateWishlistUI();
  updateCartUI();
  setupSharedEvents();
  setupHeaderIcons();
  setupBagDropdown();
  renderProductPage();
  syncFavoriteButtons();
});
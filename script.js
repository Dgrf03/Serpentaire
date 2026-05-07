/* ============================================================
   SERPENTAIRE – script.js
   Compatible con: index.html, producto.html
   ============================================================ */
 
const STORAGE_KEY = "serpentaire_favorites";
const CART_KEY    = "serpentaire_cart";

const textLocalizador = "El serpente lleva incorporado en su diseño un localizador integrado que permite conocer su ubicación en todo momento a través de la app de Serpentaire. Desde al app, puedes consultar su localización en tiempo real y decidir quién tiene acceso a esa ubicación, aportando mayor seguridad y tranquilidad es tu día a día";
const textGarantia = "El sistema cuenta con una autonomía hasta de 4 años y la posibilidad de sustituir el dispositivo contactando con serpentaire, así garantizando una experiencia duradera y funcional";
 
/* ── Catálogo de productos ─────────────────────────────────── */
const products = {
  
  /* ================== FAMILIA: BOLSOS (SERPENTÉ) ================== */
  serpente_marino: {
    id: "serpente_marino", name: "Bolso Serpenté Marino", price: "445 EUR", priceValue: 445,
    description: "Bolso de piel marino con emblema dorado y localizador integrado, combinando estilo y seguridad en una pieza exclusiva.",
    details: textLocalizador,
    care: textGarantia,
    images: ["serpente_marino.png", "serpente-marino-lateral .png", "serpente azul parte trasera .png", "mock up serpente marino .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpente_marino",    image: "serpente_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpente_cherry",    image: "serpente_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpente_chocolate", image: "serpente_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpente_verde",     image: "serpente_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpente_chicle",    image: "serpente_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpente_beige",     image: "serpente_beige.png" }
    ],
    companions: [{ name: "Tarjetero cherry", image: "tarjetero cherry .png", id: "tarjetero_cherry" }, { name: "Charm", image: "llavero serpentaire .png", id: "charm_serpentaire" }],
    suggestions: [{ name: "Cartera marino", image: "cartera marino .png", id: "cartera_marino" }, { name: "Reloj", image: "reloj serpentaire .png", id: "reloj_serpentaire" }, { name: "Serpentina beige", image: "serpentina beige  .png", id: "serpentina_beige" }]
  },
  serpente_verde: {
    id: "serpente_verde", name: "Bolso Serpenté Verde", price: "445 EUR", priceValue: 445,
    description: "Bolso de piel verde con emblema dorado y localizador integrado.",
    details: textLocalizador,
    care: textGarantia,
    images: ["serpente_verde.png", "serpente-verde-lateral.png", "serpente verde trasera .png", "mock up verde .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpente_marino",    image: "serpente_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpente_cherry",    image: "serpente_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpente_chocolate", image: "serpente_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpente_verde",     image: "serpente_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpente_chicle",    image: "serpente_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpente_beige",     image: "serpente_beige.png" }
    ],
    companions: [{ name: "Cartera marino", image: "cartera marino .png", id: "cartera_marino" }, { name: "Tarjetero chocolate", image: "tarjetero chocolate .png", id: "tarjetero_chocolate" }],
    suggestions: [{ name: "Serpentina cherry", image: "serpentina cherry .png", id: "serpentina_cherry" }, { name: "Charm", image: "llavero serpentaire .png", id: "charm_serpentaire" }, { name: "Cartera beige", image: "cartera_beige.png", id: "cartera_beige" }]
  },
  serpente_cherry: {
    id: "serpente_cherry", name: "Bolso Serpenté Cherry", price: "445 EUR", priceValue: 445,
    description: "Bolso cherry con el mismo acabado estructurado y firma dorada.",
    details: textLocalizador,
    care: textGarantia,
    images: ["serpente_cereza.png", "serpente-cherry-lateral.png", "serpente cherry trasera .png", "mockup serpente cherry .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpente_marino",    image: "serpente_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpente_cherry",    image: "serpente_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpente_chocolate", image: "serpente_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpente_verde",     image: "serpente_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpente_chicle",    image: "serpente_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpente_beige",     image: "serpente_beige.png" }
    ],
    companions: [{ name: "Tarjetero verde", image: "tarjetero verde .png", id: "tarjetero_verde" }, { name: "Reloj", image: "reloj serpentaire .png", id: "reloj_serpentaire" }],
    suggestions: [{ name: "Tarjetero marino", image: "tarjetero marino .png", id: "tarjetero_marino" }, { name: "Serpenté verde", image: "serpente_verde.png", id: "serpente_verde" }, { name: "Serpentina chocolate", image: "serpentina chocolate .png", id: "serpentina_chocolate" }]
  },
  serpente_chocolate: {
    id: "serpente_chocolate", name: "Bolso Serpenté Chocolate", price: "445 EUR", priceValue: 445,
    description: "Bolso de piel chocolate con emblema dorado de Serpentaire.",
    details: textLocalizador,
    care: textGarantia,
    images: ["serpente╠ü chocolate .png", "serpente-chocolate-lateral.png", "serpente chocolate trasera .png", "mock up serpente chocolate 2 .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpente_marino",    image: "serpente_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpente_cherry",    image: "serpente_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpente_chocolate", image: "serpente_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpente_verde",     image: "serpente_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpente_chicle",    image: "serpente_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpente_beige",     image: "serpente_beige.png" }
    ],
    companions: [{ name: "Cartera serpentaire", image: "cartera_marino.png", id: "cartera_marino" }, { name: "Tarjetero serpentaire", image: "tarjetero chicle .png", id: "tarjetero_chicle" }],
    suggestions: [{ name: "Charm serpentaire", image: "cartera_beige.png", id: "cartera_beige" }, { name: "Serpentina verde", image: "serpente_verde.png", id: "serpente_verde" }, { name: "Reloj serpentaire", image: "cartera_cereza.png", id: "cartera_cherry" }]
  },
  serpente_chicle: {
    id: "serpente_chicle", name: "Bolso Serpenté Chicle", price: "445 EUR", priceValue: 445,
    description: "Bolso de piel chicle con el emblema dorado característico.",
    details: textLocalizador,
    care: textGarantia,
    images: ["serpente_chicle.png", "serpente-chicle-lateral.png", "serpente chicle trasera .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpente_marino",    image: "serpente_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpente_cherry",    image: "serpente_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpente_chocolate", image: "serpente_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpente_verde",     image: "serpente_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpente_chicle",    image: "serpente_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpente_beige",     image: "serpente_beige.png" }
    ],
    companions: [{ name: "Cartera serpentaire", image: "cartera_cichle.png", id: "cartera_chicle" }, { name: "Tarjetero serpentaire", image: "tarjetero chicle .png", id: "tarjetero_chicle" }],
    suggestions: [{ name: "Charm serpentaire", image: "cartera_beige.png", id: "cartera_beige" }, { name: "Serpentina verde", image: "serpente_verde.png", id: "serpente_verde" }, { name: "Reloj serpentaire", image: "cartera_cereza.png", id: "cartera_cherry" }]
  },
  serpente_beige: {
    id: "serpente_beige", name: "Bolso Serpenté Beige", price: "445 EUR", priceValue: 445,
    description: "Bolso de piel beige con el emblema dorado característico.",
    details: textLocalizador,
    care: textGarantia,
    images: ["serpente╠ü beige .png", "serpente-beige-lateral.png", "serpente beige trasero .png", "mockup serpente beige 1 .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpente_marino",    image: "serpente_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpente_cherry",    image: "serpente_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpente_chocolate", image: "serpente_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpente_verde",     image: "serpente_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpente_chicle",    image: "serpente_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpente_beige",     image: "serpente_beige.png" }
    ],
    companions: [{ name: "Cartera serpentaire", image: "cartera_beige.png", id: "cartera_beige" }, { name: "Tarjetero serpentaire", image: "tarjetero chicle .png", id: "tarjetero_chicle" }],
    suggestions: [{ name: "Charm serpentaire", image: "cartera_beige.png", id: "cartera_beige" }, { name: "Serpentina verde", image: "serpente_verde.png", id: "serpente_verde" }, { name: "Reloj serpentaire", image: "cartera_cereza.png", id: "cartera_cherry" }]
  },

  /* ================== FAMILIA: CARTERAS ================== */
  cartera_marino: {
    id: "cartera_marino", name: "Cartera Serpentaire Marino", price: "445 EUR", priceValue: 445,
    description: "Cartera de piel marino con emblema dorado y localizador integrado.",
    details: textLocalizador,
    care: textGarantia,
    images: ["cartera marino .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "cartera_marino",    image: "cartera_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "cartera_cherry",    image: "cartera_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "cartera_chocolate", image: "cartera_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "cartera_verde",     image: "cartera_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "cartera_chicle",    image: "cartera_cichle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "cartera_beige",     image: "cartera_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_marino.png", id: "serpente_marino" }, { name: "Tarjetero serpentaire", image: "tarjetero chicle .png", id: "tarjetero_chicle" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png", id: "serpentina_marino" }]
  },
  cartera_verde: {
    id: "cartera_verde", name: "Cartera Serpentaire Verde", price: "445 EUR", priceValue: 445,
    description: "Cartera de piel verde con emblema dorado y localizador integrado.",
    details: textLocalizador,
    care: textGarantia,
    images: ["cartera verde .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "cartera_marino",    image: "cartera_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "cartera_cherry",    image: "cartera_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "cartera_chocolate", image: "cartera_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "cartera_verde",     image: "cartera_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "cartera_chicle",    image: "cartera_cichle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "cartera_beige",     image: "cartera_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_verde.png", id: "serpente_verde" }, { name: "Tarjetero serpentaire", image: "tarjetero chicle .png", id: "tarjetero_chicle" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png", id: "serpentina_verde" }]
  },
  cartera_cherry: {
    id: "cartera_cherry", name: "Cartera Serpentaire Cherry", price: "445 EUR", priceValue: 445,
    description: "Cartera de piel cherry con emblema dorado y localizador integrado.",
    details: textLocalizador,
    care: textGarantia,
    images: ["cartera_cereza.png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "cartera_marino",    image: "cartera_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "cartera_cherry",    image: "cartera_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "cartera_chocolate", image: "cartera_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "cartera_verde",     image: "cartera_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "cartera_chicle",    image: "cartera_cichle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "cartera_beige",     image: "cartera_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_cereza.png", id: "serpente_cherry" }, { name: "Tarjetero serpentaire", image: "tarjetero chicle .png", id: "tarjetero_chicle" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png", id: "serpentina_cherry" }]
  },
  cartera_chocolate: {
    id: "cartera_chocolate", name: "Cartera Serpentaire Chocolate", price: "445 EUR", priceValue: 445,
    description: "Cartera de piel chocolate con emblema dorado y localizador integrado.",
    details: textLocalizador,
    care: textGarantia,
    images: ["cartera chocolate .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "cartera_marino",    image: "cartera_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "cartera_cherry",    image: "cartera_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "cartera_chocolate", image: "cartera_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "cartera_verde",     image: "cartera_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "cartera_chicle",    image: "cartera_cichle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "cartera_beige",     image: "cartera_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_chocolate.png", id: "serpente_chocolate" }, { name: "Tarjetero serpentaire", image: "tarjetero chicle .png", id: "tarjetero_chicle" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png", id: "serpentina_chocolate" }]
  },
  cartera_chicle: {
    id: "cartera_chicle", name: "Cartera Serpentaire Chicle", price: "445 EUR", priceValue: 445,
    description: "Cartera de piel chicle con emblema dorado y localizador integrado.",
    details: textLocalizador,
    care: textGarantia,
    images: ["cartera_cichle.png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "cartera_marino",    image: "cartera_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "cartera_cherry",    image: "cartera_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "cartera_chocolate", image: "cartera_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "cartera_verde",     image: "cartera_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "cartera_chicle",    image: "cartera_cichle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "cartera_beige",     image: "cartera_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_chicle.png", id: "serpente_chicle" }, { name: "Tarjetero serpentaire", image: "tarjetero chicle .png", id: "tarjetero_chicle" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png", id: "serpentina_chicle" }]
  },
  cartera_beige: {
    id: "cartera_beige", name: "Cartera Serpentaire Beige", price: "445 EUR", priceValue: 445,
    description: "Cartera de piel beige con emblema dorado y localizador integrado.",
    details: textLocalizador,
    care: textGarantia,
    images: ["cartera_beige.png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "cartera_marino",    image: "cartera_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "cartera_cherry",    image: "cartera_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "cartera_chocolate", image: "cartera_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "cartera_verde",     image: "cartera_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "cartera_chicle",    image: "cartera_cichle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "cartera_beige",     image: "cartera_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_beige.png", id: "serpente_beige" }, { name: "Tarjetero serpentaire", image: "tarjetero chicle .png", id: "tarjetero_chicle" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png", id: "serpentina_beige" }]
  },

  /* ================== FAMILIA: SERPENTINAS ================== */
  serpentina_marino: {
    id: "serpentina_marino", name: "Serpentina Marino", price: "445 EUR", priceValue: 445,
    description: "Serpentina de piel marino con emblema dorado, perfecta como accesorio exclusivo.",
    details: textLocalizador,
    care: textGarantia,
    images: ["serpentina marino .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpentina_marino",    image: "serpentina_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpentina_cherry",    image: "serpentina_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpentina_chocolate", image: "serpentina_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpentina_verde",     image: "serpentina_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpentina_chicle",    image: "serpentina_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpentina_beige",     image: "serpentina_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_marino.png", id: "serpente_marino" }, { name: "Cartera serpentaire", image: "cartera_marino.png", id: "cartera_marino" }],
    suggestions: [{ name: "Tarjetero serpentaire", image: "tarjetero chicle .png", id: "tarjetero_chicle" }]
  },
  serpentina_verde: {
    id: "serpentina_verde", name: "Serpentina Verde", price: "445 EUR", priceValue: 445,
    description: "Serpentina de piel verde con emblema dorado, perfecta como accesorio exclusivo.",
    details: textLocalizador,
    care: textGarantia,
    images: ["serpentina verde .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpentina_marino",    image: "serpentina_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpentina_cherry",    image: "serpentina_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpentina_chocolate", image: "serpentina_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpentina_verde",     image: "serpentina_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpentina_chicle",    image: "serpentina_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpentina_beige",     image: "serpentina_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_verde.png", id: "serpente_verde" }, { name: "Cartera serpentaire", image: "cartera_verde.png", id: "cartera_verde" }],
    suggestions: [{ name: "Tarjetero serpentaire", image: "tarjetero chicle .png", id: "tarjetero_chicle" }]
  },
  serpentina_cherry: {
    id: "serpentina_cherry", name: "Serpentina Cherry", price: "445 EUR", priceValue: 445,
    description: "Serpentina de piel cherry con emblema dorado, perfecta como accesorio exclusivo.",
    details: textLocalizador,
    care: textGarantia,
    images: ["serpentina cherry .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpentina_marino",    image: "serpentina_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpentina_cherry",    image: "serpentina_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpentina_chocolate", image: "serpentina_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpentina_verde",     image: "serpentina_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpentina_chicle",    image: "serpentina_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpentina_beige",     image: "serpentina_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_cereza.png", id: "serpente_cherry" }, { name: "Cartera serpentaire", image: "cartera_cereza.png", id: "cartera_cherry" }],
    suggestions: [{ name: "Tarjetero serpentaire", image: "tarjetero chicle .png", id: "tarjetero_chicle" }]
  },
  serpentina_chocolate: {
    id: "serpentina_chocolate", name: "Serpentina Chocolate", price: "445 EUR", priceValue: 445,
    description: "Serpentina de piel chocolate con emblema dorado, perfecta como accesorio exclusivo.",
    details: textLocalizador,
    care: textGarantia,
    images: ["serpentina chocolate .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpentina_marino",    image: "serpentina_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpentina_cherry",    image: "serpentina_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpentina_chocolate", image: "serpentina_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpentina_verde",     image: "serpentina_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpentina_chicle",    image: "serpentina_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpentina_beige",     image: "serpentina_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_chocolate.png", id: "serpente_chocolate" }, { name: "Cartera serpentaire", image: "cartera_chocolate.png", id: "cartera_chocolate" }],
    suggestions: [{ name: "Tarjetero serpentaire", image: "tarjetero chicle .png", id: "tarjetero_chicle" }]
  },
  serpentina_chicle: {
    id: "serpentina_chicle", name: "Serpentina Chicle", price: "445 EUR", priceValue: 445,
    description: "Serpentina de piel chicle con emblema dorado, perfecta como accesorio exclusivo.",
    details: textLocalizador,
    care: textGarantia,
    images: ["serpentina chiche .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpentina_marino",    image: "serpentina_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpentina_cherry",    image: "serpentina_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpentina_chocolate", image: "serpentina_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpentina_verde",     image: "serpentina_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpentina_chicle",    image: "serpentina_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpentina_beige",     image: "serpentina_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_chicle.png", id: "serpente_chicle" }, { name: "Cartera serpentaire", image: "cartera_cichle.png", id: "cartera_chicle" }],
    suggestions: [{ name: "Tarjetero serpentaire", image: "tarjetero chicle .png", id: "tarjetero_chicle" }]
  },
  serpentina_beige: {
    id: "serpentina_beige", name: "Serpentina Beige", price: "445 EUR", priceValue: 445,
    description: "Serpentina de piel beige con emblema dorado, perfecta como accesorio exclusivo.",
    details: textLocalizador,
    care: textGarantia,
    images: ["serpentina beige  .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "serpentina_marino",    image: "serpentina_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "serpentina_cherry",    image: "serpentina_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "serpentina_chocolate", image: "serpentina_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "serpentina_verde",     image: "serpentina_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "serpentina_chicle",    image: "serpentina_chicle.png" },
      { name: "Beige",     hex: "#d9bd89", id: "serpentina_beige",     image: "serpentina_beige.png" }
    ],
    companions: [{ name: "Bolso serpentaire", image: "serpente_beige.png", id: "serpente_beige" }, { name: "Cartera serpentaire", image: "cartera_beige.png", id: "cartera_beige" }],
    suggestions: [{ name: "Tarjetero serpentaire", image: "tarjetero chicle .png", id: "tarjetero_chicle" }]
  },

  /* ================== FAMILIA: TARJETEROS ================== */
  tarjetero_marino: {
    id: "tarjetero_marino", name: "Tarjetero Serpentaire Marino", price: "445 EUR", priceValue: 445,
    description: "Tarjetero de piel marino con emblema dorado, el complemento perfecto para la colección Serpentaire.",
    details: textLocalizador,
    care: textGarantia,
    images: ["tarjetero marino .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "tarjetero_marino",    image: "tarjetero_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "tarjetero_cherry",    image: "tarjetero_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "tarjetero_chocolate", image: "tarjetero_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "tarjetero_verde",     image: "tarjetero_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "tarjetero_chicle",    image: "tarjetero chicle .png" },
      { name: "Beige",     hex: "#d9bd89", id: "tarjetero_beige",     image: "tarjetero_beige.png" }
    ],
    companions: [{ name: "Cartera serpentaire", image: "cartera_marino.png", id: "cartera_marino" }, { name: "Bolso serpentaire", image: "serpente_marino.png", id: "serpente_marino" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png", id: "serpentina_marino" }, { name: "Serpenté marino", image: "serpente_marino.png", id: "serpente_marino" }]
  },
  tarjetero_verde: {
    id: "tarjetero_verde", name: "Tarjetero Serpentaire Verde", price: "445 EUR", priceValue: 445,
    description: "Tarjetero de piel verde con emblema dorado, el complemento perfecto para la colección Serpentaire.",
    details: textLocalizador,
    care: textGarantia,
    images: ["tarjetero verde .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "tarjetero_marino",    image: "tarjetero_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "tarjetero_cherry",    image: "tarjetero_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "tarjetero_chocolate", image: "tarjetero_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "tarjetero_verde",     image: "tarjetero_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "tarjetero_chicle",    image: "tarjetero chicle .png" },
      { name: "Beige",     hex: "#d9bd89", id: "tarjetero_beige",     image: "tarjetero_beige.png" }
    ],
    companions: [{ name: "Cartera serpentaire", image: "cartera_verde.png", id: "cartera_verde" }, { name: "Bolso serpentaire", image: "serpente_verde.png", id: "serpente_verde" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png", id: "serpentina_verde" }, { name: "Serpenté verde", image: "serpente_verde.png", id: "serpente_verde" }]
  },
  tarjetero_cherry: {
    id: "tarjetero_cherry", name: "Tarjetero Serpentaire Cherry", price: "445 EUR", priceValue: 445,
    description: "Tarjetero de piel cherry con emblema dorado, el complemento perfecto para la colección Serpentaire.",
    details: textLocalizador,
    care: textGarantia,
    images: ["tarjetero cherry .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "tarjetero_marino",    image: "tarjetero_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "tarjetero_cherry",    image: "tarjetero_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "tarjetero_chocolate", image: "tarjetero_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "tarjetero_verde",     image: "tarjetero_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "tarjetero_chicle",    image: "tarjetero chicle .png" },
      { name: "Beige",     hex: "#d9bd89", id: "tarjetero_beige",     image: "tarjetero_beige.png" }
    ],
    companions: [{ name: "Cartera serpentaire", image: "cartera_cereza.png", id: "cartera_cherry" }, { name: "Bolso serpentaire", image: "serpente_cereza.png", id: "serpente_cherry" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png", id: "serpentina_cherry" }, { name: "Serpenté cherry", image: "serpente_cereza.png", id: "serpente_cherry" }]
  },
  tarjetero_chocolate: {
    id: "tarjetero_chocolate", name: "Tarjetero Serpentaire Chocolate", price: "445 EUR", priceValue: 445,
    description: "Tarjetero de piel chocolate con emblema dorado, el complemento perfecto para la colección Serpentaire.",
    details: textLocalizador,
    care: textGarantia,
    images: ["tarjetero chocolate .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "tarjetero_marino",    image: "tarjetero_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "tarjetero_cherry",    image: "tarjetero_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "tarjetero_chocolate", image: "tarjetero_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "tarjetero_verde",     image: "tarjetero_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "tarjetero_chicle",    image: "tarjetero chicle .png" },
      { name: "Beige",     hex: "#d9bd89", id: "tarjetero_beige",     image: "tarjetero_beige.png" }
    ],
    companions: [{ name: "Cartera serpentaire", image: "cartera_chocolate.png", id: "cartera_chocolate" }, { name: "Bolso serpentaire", image: "serpente_chocolate.png", id: "serpente_chocolate" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png", id: "serpentina_chocolate" }, { name: "Serpenté chocolate", image: "serpente_chocolate.png", id: "serpente_chocolate" }]
  },
  tarjetero_chicle: {
    id: "tarjetero_chicle", name: "Tarjetero Serpentaire Chicle", price: "445 EUR", priceValue: 445,
    description: "Tarjetero de piel chicle con emblema dorado, el complemento perfecto para la colección Serpentaire.",
    details: textLocalizador,
    care: textGarantia,
    images: ["tarjetero chicle .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "tarjetero_marino",    image: "tarjetero_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "tarjetero_cherry",    image: "tarjetero_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "tarjetero_chocolate", image: "tarjetero_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "tarjetero_verde",     image: "tarjetero_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "tarjetero_chicle",    image: "tarjetero chicle .png" },
      { name: "Beige",     hex: "#d9bd89", id: "tarjetero_beige",     image: "tarjetero_beige.png" }
    ],
    companions: [{ name: "Cartera serpentaire", image: "cartera_cichle.png", id: "cartera_chicle" }, { name: "Bolso serpentaire", image: "serpente_chicle.png", id: "serpente_chicle" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png", id: "serpentina_chicle" }, { name: "Serpenté chicle", image: "serpente_chicle.png", id: "serpente_chicle" }]
  },
  tarjetero_beige: {
    id: "tarjetero_beige", name: "Tarjetero Serpentaire Beige", price: "445 EUR", priceValue: 445,
    description: "Tarjetero de piel beige con emblema dorado, el complemento perfecto para la colección Serpentaire.",
    details: textLocalizador,
    care: textGarantia,
    images: ["tarjetera beige .png"],
    colors: [
      { name: "Marino",    hex: "#1a2436", id: "tarjetero_marino",    image: "tarjetero_marino.png" },
      { name: "Cherry",    hex: "#8c1d23", id: "tarjetero_cherry",    image: "tarjetero_cereza.png" },
      { name: "Chocolate", hex: "#6b3a00", id: "tarjetero_chocolate", image: "tarjetero_chocolate.png" },
      { name: "Verde",     hex: "#0f5b39", id: "tarjetero_verde",     image: "tarjetero_verde.png" },
      { name: "Chicle",    hex: "#ef68bf", id: "tarjetero_chicle",    image: "tarjetero chicle .png" },
      { name: "Beige",     hex: "#d9bd89", id: "tarjetero_beige",     image: "tarjetero_beige.png" }
    ],
    companions: [{ name: "Cartera serpentaire", image: "cartera_beige.png", id: "cartera_beige" }, { name: "Bolso serpentaire", image: "serpente_beige.png", id: "serpente_beige" }],
    suggestions: [{ name: "Serpentina", image: "mockup-serpentinas.png", id: "serpentina_beige" }, { name: "Serpenté beige", image: "serpente_beige.png", id: "serpente_beige" }]
  },

    /* ================== FAMILIA: ACCESORIOS (RELOJ Y CHARM) ================== */
  reloj_serpentaire: {
    id: "reloj_serpentaire", name: "Reloj Serpentaire", price: "285 EUR", priceValue: 285,
    description: "Reloj analógico con correa de piel premium y esfera dorada con el emblema de la casa.",
    details: "Movimiento de cuarzo japonés\nCristal de zafiro resistente a arañazos\nCorrea de piel premium intercambiable\nResistencia al agua 5ATM",
    care: "Evitar contacto con perfumes y cosméticos.\nLimpiar la correa con un paño seco.\nGuardar en su estuche original cuando no se use.",
    images: ["reloj serpentaire .png"],
    colors: [
      { name: "Estándar", hex: "#c6a15c", id: "reloj_serpentaire", image: "reloj serpentaire .png" }
    ],
    companions: [{ name: "Bolso Serpenté Marino", image: "serpente_marino.png", id: "serpente_marino" }],
    suggestions: [{ name: "Cartera Cherry", image: "cartera_cereza.png", id: "cartera_cherry" }, { name: "Charm", image: "llavero serpentaire .png", id: "charm_serpentaire" }]
  },
  
  charm_serpentaire: {
    id: "charm_serpentaire", name: "Charm Serpentaire", price: "95 EUR", priceValue: 95,
    description: "Elegante llavero/charm dorado con el icónico emblema de Serpentaire, ideal para personalizar tu bolso o llaves.",
    details: "Latón con baño de oro\nLogotipo en relieve\nMosquetón de apertura rápida\nDimensiones: 6 cm de largo",
    care: "Limpiar con un paño suave y seco.\nEvitar la exposición directa a líquidos y humedad.\nGuardar en su bolsa protectora.",
    images: ["llavero serpentaire .png"],
    colors: [
      { name: "Dorado", hex: "#c6a15c", id: "charm_serpentaire", image: "llavero serpentaire .png" }
    ],
    companions: [{ name: "Bolso Serpenté Verde", image: "serpente_verde.png", id: "serpente_verde" }],
    suggestions: [{ name: "Reloj", image: "reloj serpentaire .png", id: "reloj_serpentaire" }]
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

/* ── Drawers y Modales ─────────────────────────────────────── */
function openDrawer(id)  { document.getElementById(id)?.classList.add("active"); document.getElementById("uiOverlay")?.classList.add("active"); }
function closeDrawer(id) { document.getElementById(id)?.classList.remove("active"); hideOverlayIfNoModals(); }
function openWishlist()  { openDrawer("wishlistDrawer"); }
function closeWishlist() { closeDrawer("wishlistDrawer"); }
function openCart()      { openDrawer("cartDrawer"); }
function closeCart()     { closeDrawer("cartDrawer"); }

function openSearch() { document.getElementById("searchModal")?.classList.add("active"); document.getElementById("searchInput")?.focus(); }
function closeSearch() { document.getElementById("searchModal")?.classList.remove("active"); }

function openAuth() { document.getElementById("authModal")?.classList.add("active"); }
function closeAuth() { document.getElementById("authModal")?.classList.remove("active"); }

function hideOverlayIfNoModals() {
  if (!document.querySelector(".wishlist-drawer.active, .drawer.active")) {
    document.getElementById("uiOverlay")?.classList.remove("active");
  }
}

/* ── Sistema de Notificaciones (Sustituto de Alert) ────────── */
function showNotification(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.innerHTML = `
    <span class="toast-icon">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
    </span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Pequeño retardo para que la transición CSS funcione (animación de entrada)
  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  // Desaparece y se destruye a los 3.5 segundos
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400); // Espera a que termine la animación para borrarlo del DOM
  }, 3500);
}

/* ── Eventos compartidos ───────────────────────────────────── */
function setupSharedEvents() {
  document.getElementById("wishlistBtn")?.addEventListener("click", openWishlist);
  document.getElementById("closeWishlistBtn")?.addEventListener("click", closeWishlist);
  document.getElementById("cartBtn")?.addEventListener("click", openCart);
  document.getElementById("closeCartBtn")?.addEventListener("click", closeCart);
  
  // Overlay
  document.getElementById("uiOverlay")?.addEventListener("click", () => { closeWishlist(); closeCart(); });
  
  // Modales Búsqueda y Login
  document.getElementById("searchBtn")?.addEventListener("click", openSearch);
  document.getElementById("closeSearchBtn")?.addEventListener("click", closeSearch);
  document.getElementById("userBtn")?.addEventListener("click", openAuth);
  document.getElementById("footerAccount")?.addEventListener("click", (e)=>{e.preventDefault(); openAuth();});
  document.getElementById("footerAccount2")?.addEventListener("click", (e)=>{e.preventDefault(); openAuth();});
  document.getElementById("closeAuthBtn")?.addEventListener("click", closeAuth);

  // Cerrar pop-up de promo
  document.getElementById("closePromoBtn")?.addEventListener("click", () => {
    document.getElementById("promoPopup")?.classList.remove("active");
  });

  document.querySelectorAll(".like-btn").forEach(btn => {
    btn.addEventListener("click", () => toggleFavorite({ id: btn.dataset.id, name: btn.dataset.name, price: btn.dataset.price, image: btn.dataset.image }));
  });

  // Funcionalidad Buscar en vivo
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase();
      const resultsContainer = document.getElementById("searchResults");
      if (term.length < 2) { resultsContainer.innerHTML = ""; return; }
      
      const results = Object.values(products).filter(p => p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term));
      
      if (results.length === 0) {
        resultsContainer.innerHTML = "<p style='color: var(--color-primary);'>No se encontraron productos.</p>";
      } else {
        resultsContainer.innerHTML = results.map(p => `
          <a href="producto.html?id=${p.id}" class="search-result-item">
            <img src="${p.images[0]}" alt="${p.name}">
            <div>
              <h4 style="color: var(--color-primary); font-size: 1rem; margin-bottom: 0.2rem;">${p.name}</h4>
              <p style="color: var(--color-text-medium); font-size: 0.9rem;">${p.price}</p>
            </div>
          </a>
        `).join("");
      }
    });
  }

  // Submit Login sin alert
  document.getElementById("authForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    showNotification("¡Bienvenido a Serpentaire!");
    closeAuth();
  });

  // Newsletter sin alert
  document.getElementById("newsletterForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    showNotification("¡Gracias por suscribirte a Serpentaire!");
    document.getElementById("promoPopup")?.classList.remove("active");
  });
}

/* ── Dropdown Categorías ─────────────────────────────────────── */
function setupBagDropdown() {
  const dropdownBtn  = document.getElementById("productosDropdownBtn");
  const dropdownMenu = document.getElementById("productosDropdown");
  if (!dropdownBtn || !dropdownMenu) return;

  const productCategories = [
    { name: "Serpenté",    image: "serpente_verde.png",    link: "producto.html?id=serpente_verde" },
    { name: "Serpentinas", image: "serpentina verde .png", link: "producto.html?id=serpentina_verde" },
    { name: "Carteras",    image: "cartera_verde.png",     link: "producto.html?id=cartera_verde" },
    { name: "Tarjeteros",  image: "tarjetero verde .png",  link: "producto.html?id=tarjetero_verde" },
    { name: "Relojes",     image: "reloj serpentaire .png", link: "producto.html?id=reloj_serpentaire" },
    { name: "Charms",      image: "llavero serpentaire .png", link: "producto.html?id=charm_serpentaire" }
  ];

  dropdownMenu.innerHTML = productCategories.map(cat => `
    <a href="${cat.link}" class="dropdown-item" style="display:flex; align-items:center; gap:1rem; padding:0.8rem 1rem; border-bottom:1px solid var(--color-border); text-decoration:none;">
      <img src="${cat.image}" alt="${cat.name}" style="width:50px; height:50px; object-fit:cover; border-radius:4px;">
      <span style="white-space:normal; line-height:1.2; color:var(--color-primary);">${cat.name}</span>
    </a>`).join("");

  dropdownBtn.addEventListener("click", () => {
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.style.display = "none";
    }
  });
}

/* ── Página Producto ───────────────────────────────────────── */
function initProductPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id") || "serpente_marino";
  const product = products[productId];
  if (!product) return;

  let currentImageIndex = 0;
  
  document.getElementById("productTitle").textContent = product.name;
  document.getElementById("productPrice").textContent = product.price;
  document.getElementById("productDescription").textContent = product.description;
  document.getElementById("detailsContent").innerHTML = product.details.replace(/\n/g, '<br>');
  document.getElementById("careContent").innerHTML = product.care.replace(/\n/g, '<br>');

  const mainImage = document.getElementById("mainImage");
  const thumbnailsContainer = document.getElementById("thumbnailsContainer");

  function updateGallery(index) {
    currentImageIndex = index;
    mainImage.src = product.images[currentImageIndex];
    document.querySelectorAll(".thumbnail").forEach((thumb, i) => {
      thumb.classList.toggle("active", i === currentImageIndex);
    });
  }

  thumbnailsContainer.innerHTML = product.images.map((img, i) => `
    <img src="${img}" alt="${product.name} miniatura ${i+1}" class="thumbnail ${i===0?'active':''}" data-index="${i}">
  `).join("");

  thumbnailsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("thumbnail")) {
      updateGallery(parseInt(e.target.dataset.index, 10));
    }
  });

  document.getElementById("prevBtn")?.addEventListener("click", () => {
    updateGallery(currentImageIndex > 0 ? currentImageIndex - 1 : product.images.length - 1);
  });
  document.getElementById("nextBtn")?.addEventListener("click", () => {
    updateGallery(currentImageIndex < product.images.length - 1 ? currentImageIndex + 1 : 0);
  });

  const colorGrid = document.getElementById("colorGrid");
  if (colorGrid) {
    colorGrid.innerHTML = product.colors.map(color => `
      <a href="producto.html?id=${color.id}" class="color-option">
        <div class="color-btn ${color.id === productId ? 'active' : ''}" style="background-color: ${color.hex};"></div>
        <span>${color.name}</span>
      </a>
    `).join("");
  }

  document.querySelectorAll(".expand-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const content = document.getElementById(btn.dataset.section);
      const isExpanded = content.classList.contains("active");
      document.querySelectorAll(".section-content").forEach(el => el.classList.remove("active"));
      document.querySelectorAll(".expand-icon").forEach(icon => icon.style.transform = "rotate(0)");
      if (!isExpanded) {
        content.classList.add("active");
        btn.querySelector(".expand-icon").style.transform = "rotate(90deg)";
      }
    });
  });

  const addToCartBtn = document.getElementById("addToCartBtn");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      addToCart({ id: product.id, name: product.name, price: product.price, priceValue: product.priceValue, image: product.images[0] });
      addToCartBtn.textContent = "Añadido";
      addToCartBtn.classList.add("success");
      setTimeout(() => { addToCartBtn.textContent = "Añadir a la cesta"; addToCartBtn.classList.remove("success"); }, 2000);
      openCart();
    });
  }

  document.getElementById("mainWishlist")?.addEventListener("click", function () {
    toggleFavorite({ id: product.id, name: product.name, price: product.price, image: product.images[0] });
  });

  // Enlaces clicables a compañeros y sugerencias
  const companionsGrid = document.getElementById("companionsGrid");
  if (companionsGrid) companionsGrid.innerHTML = product.companions.map(item => `
    <article class="companion-card">
      <a href="producto.html?id=${item.id}" style="display:block; text-decoration:none;">
        <img src="${item.image}" alt="${item.name}">
        <p>${item.name}</p>
      </a>
    </article>`).join("");

  const suggestionsGrid = document.getElementById("suggestionsGrid");
  if (suggestionsGrid) suggestionsGrid.innerHTML = product.suggestions.map(item => `
    <article class="suggestion-card">
      <a href="producto.html?id=${item.id}" style="display:block; text-decoration:none;">
        <img src="${item.image}" alt="${item.name}">
        <p>${item.name}</p>
      </a>
    </article>`).join("");

  updateGallery(0);
}

/* ── Inicialización ────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  setupSharedEvents();
  setupBagDropdown();
  updateCartUI();
  updateWishlistUI();
  syncFavoriteButtons();

  if (document.body.classList.contains("page-product")) {
    initProductPage();
  }

  // Lógica del Pop-up de 10 segundos
  if (!sessionStorage.getItem("promoShown")) {
    setTimeout(() => {
      document.getElementById("promoPopup")?.classList.add("active");
      sessionStorage.setItem("promoShown", "true");
    }, 10000);
  }
});
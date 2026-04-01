const categories = [
  "Gros oeuvres",
  "Second oeuvres",
  "MEP",
  "Decoration",
  "Materiel et outillage",
  "Service",
  "Technologie",
  "Durabilite",
];

const products = [
  {
    id: "celio",
    name: "Fauteuil C-ELIO",
    brand: "CELIO",
    category: "Canapes et fauteuils",
    subcategory: "Decoration",
    material: "Tissu boucle",
    price: 12000,
    rating: 4.8,
    delivery: "Livraison gratuite pour les 58 wilayas",
    leadTime: "Expedie sous 2 semaines",
    stock: "Disponible en stock",
    color: "Marron cannelle",
    description:
      "Une piece expressive pensee pour les salons intimes, les lobbys boutiques et les coins lecture apaises.",
    details:
      "Sa silhouette sculptee, son assise basse et son revetement boucle texturé creent un point focal chaleureux avec une presence architecturale douce.",
    dimensions: "L 120 x P 85 x H 70 cm",
    image:
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "nube",
    name: "Canape modulaire Nube",
    brand: "Roche Bobois",
    category: "Canapes et fauteuils",
    subcategory: "Decoration",
    material: "Velours",
    price: 16400,
    rating: 4.7,
    delivery: "Livraison premium a domicile",
    leadTime: "Expedie sous 10 jours",
    stock: "Edition limitee",
    color: "Sable",
    description: "Un canape modulaire aux formes arrondies pour des espaces lounge souples et confortables.",
    details: "Concu pour etre compose en ilots, angles ou configurations de salon plus scenographiques.",
    dimensions: "L 250 x P 110 x H 76 cm",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "lina",
    name: "Fauteuil Lina",
    brand: "Kartell",
    category: "Canapes et fauteuils",
    subcategory: "Decoration",
    material: "Laine",
    price: 9800,
    rating: 4.6,
    delivery: "Livraison gratuite",
    leadTime: "Expedie sous 7 jours",
    stock: "En stock",
    color: "Creme",
    description: "Un fauteuil d'appoint tres doux avec un profil moderne et calme.",
    details: "Ideal pour les coins accueil, les salles d'attente et les projets residentiels elegants.",
    dimensions: "L 88 x P 80 x H 74 cm",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "rosa",
    name: "Banquette Rosa",
    brand: "Fama",
    category: "Canapes et fauteuils",
    subcategory: "Decoration",
    material: "Tissu",
    price: 7600,
    rating: 4.5,
    delivery: "Livraison standard",
    leadTime: "Expedie sous 5 jours",
    stock: "En stock",
    color: "Rose poudree",
    description: "Une banquette rembourree expressive pour des interieurs au caractere assume.",
    details: "Structure mousse compacte avec un rythme sculptural et une empreinte au sol reduite.",
    dimensions: "L 152 x P 64 x H 48 cm",
    image:
      "https://images.unsplash.com/photo-1512218168353-4bba6ac5f9c2?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512218168353-4bba6ac5f9c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "halo",
    name: "Fauteuil pivotant Halo",
    brand: "Flos",
    category: "Canapes et fauteuils",
    subcategory: "Decoration",
    material: "Microfibre",
    price: 11200,
    rating: 4.8,
    delivery: "Livraison gratuite",
    leadTime: "Expedie sous 12 jours",
    stock: "Restock dans 4 jours",
    color: "Gris perle",
    description: "Un fauteuil pivotant arrondi concu pour les espaces lounge et zones d'accueil premium.",
    details: "Des proportions equilibrees, une base compacte et un confort enveloppant pour les espaces frequentes.",
    dimensions: "L 92 x P 90 x H 76 cm",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505409628601-edc9af17fda6?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "terra",
    name: "Ottoman Terra",
    brand: "Roche Bobois",
    category: "Canapes et fauteuils",
    subcategory: "Decoration",
    material: "Cuir",
    price: 5400,
    rating: 4.4,
    delivery: "Livraison standard",
    leadTime: "Expedie sous 6 jours",
    stock: "En stock",
    color: "Terracotta",
    description: "Un ottoman circulaire au caractere chaleureux et a la grande polyvalence.",
    details: "Utile comme assise d'appoint, repose-pieds ou repere souple dans les plans ouverts.",
    dimensions: "D 72 x H 42 cm",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "atelier",
    name: "Suspension Atelier",
    brand: "Flos",
    category: "Luminaires",
    subcategory: "Technologie",
    material: "Metal",
    price: 6900,
    rating: 4.9,
    delivery: "Livraison professionnelle",
    leadTime: "Expedie sous 14 jours",
    stock: "En stock",
    color: "Noir graphite",
    description: "Un luminaire architectural pour les salles a manger, reunions et zones de reception.",
    details: "Silhouette minimale, lumiere indirecte chaleureuse et structure metal durable.",
    dimensions: "D 60 x H 24 cm",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "axis",
    name: "Lampe de bureau Axis",
    brand: "Fama",
    category: "Luminaires",
    subcategory: "Technologie",
    material: "Aluminium",
    price: 4300,
    rating: 4.6,
    delivery: "Livraison nationale",
    leadTime: "Expedie sous 5 jours",
    stock: "En stock",
    color: "Bleu cobalt",
    description: "Une lampe de travail compacte avec une forte identite visuelle.",
    details: "Ideale pour les studios, bureaux techniques et coins accent au ton contemporain.",
    dimensions: "L 34 x P 18 x H 44 cm",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "forge",
    name: "Kit d'outils Forge",
    brand: "Apex",
    category: "Materiel et outillage",
    subcategory: "Materiel et outillage",
    material: "Acier",
    price: 5700,
    rating: 4.7,
    delivery: "Livraison rapide",
    leadTime: "Expedie sous 48h",
    stock: "En stock",
    color: "Argent",
    description: "Un kit essentiel de niveau professionnel pour les equipes de chantier et de finition.",
    details: "Comprend une selection d'outils manuels fiables reunis dans un organisateur compact.",
    dimensions: "40 x 28 x 18 cm",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "grid",
    name: "Systeme de rangement Grid",
    brand: "Francois Bal",
    category: "Rangements",
    subcategory: "Second oeuvres",
    material: "Bois",
    price: 14200,
    rating: 4.7,
    delivery: "Livraison installee",
    leadTime: "Expedie sous 3 semaines",
    stock: "Fabrication sur commande",
    color: "Rouge terre",
    description: "Un systeme d'etageres modulaire pour bibliotheques, vitrines retail et studios.",
    details: "Associe une structure bois chaleureuse a un rythme vertical marque pour une exposition pratique.",
    dimensions: "L 180 x P 42 x H 220 cm",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "marmo",
    name: "Table a manger Marmo",
    brand: "Kartell",
    category: "Tables et chaises",
    subcategory: "Decoration",
    material: "Marbre",
    price: 21900,
    rating: 4.9,
    delivery: "Livraison premium",
    leadTime: "Expedie sous 4 semaines",
    stock: "Petite serie",
    color: "Ivoire",
    description: "Une table statement pensee pour les interieurs haut de gamme et l'hospitalite premium.",
    details: "Un plateau minéral aux details precis equilibre par une base fine et contemporaine.",
    dimensions: "L 240 x P 110 x H 75 cm",
    image:
      "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "softline",
    name: "Chaise Softline",
    brand: "Francois Bal",
    category: "Tables et chaises",
    subcategory: "Decoration",
    material: "Bois",
    price: 6500,
    rating: 4.5,
    delivery: "Livraison standard",
    leadTime: "Expedie sous 8 jours",
    stock: "En stock",
    color: "Naturel",
    description: "Une chaise raffinee avec des proportions douces et un bon maintien ergonomique.",
    details: "Concue pour les restaurants, les tables de reunion et les projets residentiels premium.",
    dimensions: "L 52 x P 58 x H 78 cm",
    image:
      "https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "nova-canape",
    name: "Canape Nova",
    brand: "CELIO",
    category: "Canapes et fauteuils",
    subcategory: "Decoration",
    material: "Lin",
    price: 18600,
    rating: 4.8,
    delivery: "Livraison gratuite pour les 58 wilayas",
    leadTime: "Expedie sous 12 jours",
    stock: "En stock",
    color: "Beige sable",
    description: "Un canape enveloppant avec une silhouette basse et contemporaine.",
    details: "Ideal pour les salons premium et les espaces d'accueil qui recherchent un confort visuel fort.",
    dimensions: "L 230 x P 98 x H 76 cm",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "sora-fauteuil",
    name: "Fauteuil Sora",
    brand: "Kartell",
    category: "Canapes et fauteuils",
    subcategory: "Decoration",
    material: "Boucle",
    price: 10200,
    rating: 4.7,
    delivery: "Livraison gratuite",
    leadTime: "Expedie sous 8 jours",
    stock: "En stock",
    color: "Ecru",
    description: "Un fauteuil sculptural aux formes arrondies pour coin lecture ou lounge.",
    details: "Sa base compacte et son dossier genereux en font une piece facile a integrer dans plusieurs ambiances.",
    dimensions: "L 90 x P 82 x H 74 cm",
    image:
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "alto-table",
    name: "Table Alto",
    brand: "Francois Bal",
    category: "Tables et chaises",
    subcategory: "Decoration",
    material: "Bois massif",
    price: 17400,
    rating: 4.8,
    delivery: "Livraison premium",
    leadTime: "Expedie sous 18 jours",
    stock: "Serie atelier",
    color: "Noyer",
    description: "Une table chaleureuse pour salles a manger, reunions et espaces de reception.",
    details: "Plateau epais et pieds elances pour une presence sobre mais architecturale.",
    dimensions: "L 220 x P 98 x H 75 cm",
    image:
      "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "bloom-chaise",
    name: "Chaise Bloom",
    brand: "Fama",
    category: "Tables et chaises",
    subcategory: "Decoration",
    material: "Tissu",
    price: 5900,
    rating: 4.5,
    delivery: "Livraison nationale",
    leadTime: "Expedie sous 6 jours",
    stock: "En stock",
    color: "Corail",
    description: "Une chaise expressive et confortable pour espaces repas et cafe.",
    details: "Elle apporte une touche de couleur sans perdre en elegance ni en confort.",
    dimensions: "L 51 x P 56 x H 80 cm",
    image:
      "https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "mono-etagere",
    name: "Etagere Mono",
    brand: "Francois Bal",
    category: "Rangements",
    subcategory: "Second oeuvres",
    material: "Metal",
    price: 11800,
    rating: 4.6,
    delivery: "Livraison avec installation",
    leadTime: "Expedie sous 2 semaines",
    stock: "En stock",
    color: "Noir mat",
    description: "Un systeme de rangement ouvert pour showroom, bureau et bibliotheque.",
    details: "Sa structure verticale permet de composer de grands murs fonctionnels avec une vraie presence graphique.",
    dimensions: "L 140 x P 36 x H 210 cm",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "atlas-bibliotheque",
    name: "Bibliotheque Atlas",
    brand: "Roche Bobois",
    category: "Rangements",
    subcategory: "Second oeuvres",
    material: "Bois",
    price: 19600,
    rating: 4.8,
    delivery: "Livraison premium",
    leadTime: "Expedie sous 3 semaines",
    stock: "Fabrication sur commande",
    color: "Chene fumee",
    description: "Une bibliotheque modulaire a fort impact visuel pour habitat et halleries.",
    details: "Des niches ouvertes et des volumes fermes permettent de composer un mur vivant et fonctionnel.",
    dimensions: "L 240 x P 40 x H 230 cm",
    image:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "aura-suspension",
    name: "Suspension Aura",
    brand: "Flos",
    category: "Luminaires",
    subcategory: "Technologie",
    material: "Verre",
    price: 8700,
    rating: 4.9,
    delivery: "Livraison professionnelle",
    leadTime: "Expedie sous 9 jours",
    stock: "En stock",
    color: "Blanc opalin",
    description: "Une suspension elegante pour salle a manger, hall ou reception.",
    details: "Diffuse une lumiere douce et homogene avec une silhouette intemporelle.",
    dimensions: "D 48 x H 28 cm",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "linea-applique",
    name: "Applique Linea",
    brand: "Kartell",
    category: "Luminaires",
    subcategory: "Technologie",
    material: "Aluminium",
    price: 5200,
    rating: 4.6,
    delivery: "Livraison standard",
    leadTime: "Expedie sous 5 jours",
    stock: "En stock",
    color: "Champagne",
    description: "Une applique murale fine pour couloirs, chambres et compositions decoratives.",
    details: "Elle cree une ligne lumineuse nette avec une integration facile dans les projets contemporains.",
    dimensions: "L 60 x P 9 x H 6 cm",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "pro-drill",
    name: "Perceuse Pro X12",
    brand: "Bosch",
    category: "Materiel et outillage",
    subcategory: "Materiel et outillage",
    material: "Acier",
    price: 7900,
    rating: 4.8,
    delivery: "Livraison rapide",
    leadTime: "Expedie sous 48h",
    stock: "En stock",
    color: "Bleu industriel",
    description: "Une perceuse-visseuse pour professionnels du chantier et interventions de finition.",
    details: "Compacte, puissante et adaptee a un usage quotidien sur site.",
    dimensions: "32 x 24 x 10 cm",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "safety-kit",
    name: "Kit Securite Chantier",
    brand: "Apex",
    category: "Materiel et outillage",
    subcategory: "Materiel et outillage",
    material: "Composite",
    price: 3400,
    rating: 4.4,
    delivery: "Livraison rapide",
    leadTime: "Expedie sous 72h",
    stock: "En stock",
    color: "Jaune securite",
    description: "Un kit essentiel pour les equipes de pose, maintenance et travaux techniques.",
    details: "Comprend casque, gants, lunettes et accessoires essentiels pour demarrer rapidement.",
    dimensions: "38 x 30 x 18 cm",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "cement-premium",
    name: "Ciment Premium 42.5",
    brand: "Lafarge",
    category: "Gros oeuvres",
    subcategory: "Gros oeuvres",
    material: "Mineral",
    price: 1600,
    rating: 4.5,
    delivery: "Livraison chantier",
    leadTime: "Disponible sous 72h",
    stock: "Disponible",
    color: "Gris",
    description: "Ciment structurel pour projets de gros oeuvre et travaux intensifs.",
    details: "Formule stable adaptee aux besoins de resistance et regularite sur chantier.",
    dimensions: "Sac 25kg",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "isol-plus",
    name: "Panneau Isol Plus",
    brand: "Knauf",
    category: "Second oeuvres",
    subcategory: "Second oeuvres",
    material: "Composite",
    price: 2800,
    rating: 4.6,
    delivery: "Livraison nationale",
    leadTime: "Disponible sous 5 jours",
    stock: "En stock",
    color: "Blanc",
    description: "Panneau d'isolation pour cloisons, faux plafonds et finitions techniques.",
    details: "Combine performance thermique et facilite de pose pour chantiers interieurs.",
    dimensions: "120 x 60 cm",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "smart-switch",
    name: "Interrupteur Smart One",
    brand: "Schneider",
    category: "Technologie",
    subcategory: "Technologie",
    material: "Composite",
    price: 3100,
    rating: 4.7,
    delivery: "Livraison standard",
    leadTime: "Expedie sous 4 jours",
    stock: "En stock",
    color: "Blanc mat",
    description: "Commande connectee pour projets domotiques et espaces intelligents.",
    details: "Interface simple avec integration facile dans les environnements tertiaires ou residentiels.",
    dimensions: "8 x 8 cm",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "eco-paint",
    name: "Peinture Eco Mat",
    brand: "Sika",
    category: "Durabilite",
    subcategory: "Durabilite",
    material: "Mineral",
    price: 2600,
    rating: 4.5,
    delivery: "Livraison nationale",
    leadTime: "Expedie sous 6 jours",
    stock: "En stock",
    color: "Blanc casse",
    description: "Peinture a faible emission pour projets soucieux de qualite d'air interieur.",
    details: "Finition mate douce adaptee aux logements, bureaux et espaces recevant du public.",
    dimensions: "Pot 10L",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "membrane-pro",
    name: "Membrane d'Etancheite Pro",
    brand: "Veltec",
    category: "Membranes d'Etancheite",
    subcategory: "Gros oeuvres",
    material: "Composite",
    price: 4800,
    rating: 4.7,
    delivery: "Livraison chantier",
    leadTime: "Disponible sous 5 jours",
    stock: "En stock",
    color: "Gris technique",
    description: "Une membrane souple pour proteger durablement les toitures et zones sensibles a l'humidite.",
    details: "Concue pour renforcer l'etancheite et prolonger la duree de vie des ouvrages exposes.",
    dimensions: "Rouleau 10m",
    image:
      "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "roof-sheet",
    name: "Feuille de Toiture Thermo",
    brand: "Knauf",
    category: "Couverture et toiture",
    subcategory: "Gros oeuvres",
    material: "Composite",
    price: 5300,
    rating: 4.6,
    delivery: "Livraison chantier",
    leadTime: "Disponible sous 1 semaine",
    stock: "En stock",
    color: "Terre cuite",
    description: "Panneau de couverture pour une protection durable et une pose rapide.",
    details: "Associe resistance et finition propre pour les projets de couverture et renovation.",
    dimensions: "200 x 90 cm",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "pipe-evac",
    name: "Tuyau d'Evacuation Flex",
    brand: "Apex",
    category: "Tuyaux d'evacuation",
    subcategory: "MEP",
    material: "PVC",
    price: 2200,
    rating: 4.5,
    delivery: "Livraison nationale",
    leadTime: "Expedie sous 4 jours",
    stock: "En stock",
    color: "Noir",
    description: "Composant indispensable pour l'assainissement et l'evacuation des eaux usees.",
    details: "Sa surface reguliere facilite l'installation et garantit un ecoulement fiable.",
    dimensions: "3m",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "drain-plus",
    name: "Drainage Pluvial Plus",
    brand: "Geberit",
    category: "Composants de drainage",
    subcategory: "MEP",
    material: "PVC",
    price: 4100,
    rating: 4.7,
    delivery: "Livraison rapide",
    leadTime: "Expedie sous 72h",
    stock: "En stock",
    color: "Graphite",
    description: "Kit de drainage pour toitures, terrasses et zones exterieures exposees.",
    details: "Pense pour gerer efficacement les eaux pluviales sur des installations techniques exigeantes.",
    dimensions: "Kit 6 pieces",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "wall-panel",
    name: "Panneau de Revetement Oak",
    brand: "CELIO",
    category: "Revetements muraux",
    subcategory: "Second oeuvres",
    material: "Bois",
    price: 6200,
    rating: 4.6,
    delivery: "Livraison standard",
    leadTime: "Expedie sous 6 jours",
    stock: "En stock",
    color: "Chene brun",
    description: "Panneau decoratif pour murs interieurs et amenagements a forte texture.",
    details: "Apporte rythme, chaleur et profondeur aux espaces commerciaux et residentiels.",
    dimensions: "240 x 60 cm",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "rideau-linen",
    name: "Rideau Linen Soft",
    brand: "Fama",
    category: "Rideaux et stores",
    subcategory: "Second oeuvres",
    material: "Lin",
    price: 3900,
    rating: 4.4,
    delivery: "Livraison standard",
    leadTime: "Expedie sous 5 jours",
    stock: "En stock",
    color: "Sable clair",
    description: "Textile de fenetre pour filtrer la lumiere et adoucir les espaces.",
    details: "Un rideau souple et chaleureux pour chambres, salons et hospitality.",
    dimensions: "140 x 260 cm",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "ambient-light",
    name: "Luminaire Ambient Ring",
    brand: "Flos",
    category: "Eclairage d'ambiance",
    subcategory: "Technologie",
    material: "Metal",
    price: 9600,
    rating: 4.8,
    delivery: "Livraison professionnelle",
    leadTime: "Expedie sous 10 jours",
    stock: "En stock",
    color: "Noir satine",
    description: "Luminaire circulaire pour creer une ambiance douce dans les espaces premium.",
    details: "Diffuse une lumiere reguliere et moderne, ideale pour hospitality et bureaux contemporains.",
    dimensions: "D 72 cm",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "urban-bench",
    name: "Banc Urbain Modulo",
    brand: "Astra",
    category: "Mobilier urbain",
    subcategory: "Gros oeuvres",
    material: "Metal",
    price: 12400,
    rating: 4.5,
    delivery: "Livraison chantier",
    leadTime: "Disponible sous 2 semaines",
    stock: "Sur commande",
    color: "Gris anthracite",
    description: "Banc exterieur concu pour places, promenades et zones de detente.",
    details: "Structure robuste et assise durable pour les amenagements urbains exigeants.",
    dimensions: "L 180 x P 56 x H 82 cm",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
];

const brandHighlights = [
  {
    name: "Roche Bobois",
    type: "Confort sculpte",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Kartell",
    type: "Objets et icones",
    image:
      "https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Francois Bal",
    type: "Pieces architecturales",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Flos",
    type: "Systemes lumineux",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
  },
];

const partnerLogos = [
  "epo",
  "Knauf",
  "Sika",
  "ABB",
  "Siemens",
  "Astra",
  "Lafarge",
  "Bosch",
  "Ariston",
  "Grohe",
  "Geberit",
  "Schneider",
];

const testimonials = [
  {
    quote:
      "Construst rend tout le parcours d'achat plus clair. On passe de l'inspiration a la commande sans friction.",
    author: "Sara B.",
    role: "Architecte d'interieur",
  },
  {
    quote:
      "La plateforme est premium mais tres pratique. On peut montrer des options au client puis finaliser un panier rapidement.",
    author: "Mehdi T.",
    role: "Chef de projet",
  },
  {
    quote:
      "La mise en valeur des produits est solide et le parcours de paiement est fluide. Pour une version statique, l'experience parait tres complete.",
    author: "Lina K.",
    role: "Consultante retail",
  },
];

const sectionContent = {
  "Gros oeuvres": {
    title: "Gros Oeuvre",
    description:
      "La decoration joue ici un role de support a la structure du projet. Retrouvez les grandes familles pour les travaux lourds et l'enveloppe du batiment.",
    cards: [
      {
        title: "Structure",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Facade",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Couverture, Toiture et Etancheite",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Assainissement et Reseaux Divers",
        image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Amenagement Exterieur",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Materiaux de Construction",
        image: "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  "Second oeuvres": {
    title: "Second oeuvres",
    description:
      "La decoration joue ici un role de support dans la finition d'espaces accueillants et fonctionnels. Parcourez les univers qui donnent du caractere aux interieurs.",
    cards: [
      {
        title: "Selection de Meubles",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Revetements Muraux",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Conception Eclairage",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Accessoires Decoratifs",
        image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Textiles",
        image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  MEP: {
    title: "MEP",
    description:
      "Rassemblez les composants pour les installations techniques, l'evacuation, les reseaux et les equipements utilitaires.",
    cards: [
      {
        title: "Tuyaux d'Evacuation",
        image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Composants de Drainage des Eaux Pluviales",
        image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Tuyaux pour Reseaux Utilitaires",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  Decoration: {
    title: "Selection de Meubles",
    description:
      "La decoration joue un role essentiel dans la creation d'espaces accueillants et fonctionnels. Cette section reprend l'esprit de tes maquettes avec des points d'entree visuels.",
    cards: [
      {
        title: "Canapes et Fauteuils",
        image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Tables et Chaises",
        image: "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Rangements",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  "Materiel et outillage": {
    title: "Acier Structurel",
    description:
      "Les aciers structuraux sont des materiaux essentiels dans le domaine de la construction. Retrouvez les familles outillage et structure les plus utiles.",
    cards: [
      {
        title: "Acier Structurel",
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Blocs de Beton",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Beton Prefabrique",
        image: "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  Service: {
    title: "Services",
    description:
      "Une section service pour accompagner la selection produit avec assistance, devis, logistique et pose.",
    cards: [
      {
        title: "Pose",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Livraison",
        image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Assistance Projet",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  Technologie: {
    title: "Conception Eclairage",
    description:
      "Decouvrez les systemes lumineux, commandes intelligentes et solutions techniques qui modernisent les espaces.",
    cards: [
      {
        title: "Eclairage d'Ambiance",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Eclairage d'Accentuation",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Commandes Smart",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  Durabilite: {
    title: "Durabilite",
    description:
      "Materiaux a faible impact, finitions responsables et solutions durables pour des projets plus sains et performants.",
    cards: [
      {
        title: "Peintures Eco",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Panneaux Recycles",
        image: "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Isolants Performants",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
};

const state = {
  route: "home",
  search: "",
  navSection: "Decoration",
  activeCategory: "Tous",
  activeMaterial: "Tous",
  sort: "featured",
  selectedProductId: "celio",
  selectedGalleryIndex: 0,
  cart: [{ id: "celio", qty: 1 }],
  checkoutStep: 1,
  paymentMethod: "dahabia",
  promoCode: "",
  promoApplied: false,
  newsletterEmail: "",
  checkoutForm: {
    address: "",
    city: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    cardName: "",
  },
};

const app = document.getElementById("app");
const topbar = document.getElementById("topbar");
const footer = document.getElementById("footer");

function dzd(value) {
  return `${value.toLocaleString("fr-FR")}DA`;
}

function cartCount() {
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function findProduct(id) {
  return products.find((item) => item.id === id) || products[0];
}

function cartItemsDetailed() {
  return state.cart.map((item) => ({ ...findProduct(item.id), qty: item.qty }));
}

function subtotal() {
  return cartItemsDetailed().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function discountAmount() {
  return state.promoApplied ? Math.round(subtotal() * 0.08) : 0;
}

function total() {
  return subtotal() - discountAmount();
}

function currentSectionData() {
  return sectionContent[state.navSection] || sectionContent.Decoration;
}

function persistCheckoutDraft() {
  const addressInput = document.getElementById("address-input");
  const cityInput = document.getElementById("city-input");
  const cardNumberInput = document.getElementById("card-number");
  const cardExpiryInput = document.getElementById("card-expiry");
  const cardCvcInput = document.getElementById("card-cvc");
  const cardNameInput = document.getElementById("card-name");

  if (addressInput) state.checkoutForm.address = addressInput.value.trim();
  if (cityInput) state.checkoutForm.city = cityInput.value;
  if (cardNumberInput) state.checkoutForm.cardNumber = cardNumberInput.value.trim();
  if (cardExpiryInput) state.checkoutForm.expiry = cardExpiryInput.value.trim();
  if (cardCvcInput) state.checkoutForm.cvc = cardCvcInput.value.trim();
  if (cardNameInput) state.checkoutForm.cardName = cardNameInput.value.trim();
}

function renderTopbar() {
  topbar.innerHTML = `
    <div class="container">
      <div class="topbar-inner">
        <a class="brand" href="#home" data-route="home">
          <span class="brand-mark">C</span>
          <span>onstruct</span>
        </a>
        <label class="searchbar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="7"></circle>
            <path d="m20 20-3.5-3.5"></path>
          </svg>
          <input
            id="global-search"
            type="search"
            placeholder="Rechercher parmi plus de 1000 produits, producteurs, designers..."
            value="${state.search}"
          />
        </label>
        <div class="nav-actions">
          <button class="icon-btn" type="button" aria-label="Favoris">
            ❤
          </button>
          <a class="icon-btn" href="#cart" aria-label="Panier">
            🛒
            <span class="badge">${cartCount()}</span>
          </a>
          <a class="primary-btn" href="#checkout">Commencer</a>
        </div>
      </div>
      <div class="subnav">
        <nav class="nav-links nav-links-secondary">
          ${categories
            .map(
              (label) => `<button class="nav-link nav-link-secondary ${state.navSection === label ? "active" : ""}" data-set-nav="${label}">${label}</button>`
            )
            .join("")}
        </nav>
      </div>
    </div>
  `;
}

function renderFooter() {
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <a class="brand" href="#home">
            <span class="brand-mark">C</span>
            <span>onstruct</span>
          </a>
          <p>Plateforme statique premium pour l'ameublement, les materiaux et le sourcing design.</p>
        </div>
        <div>
          <h4>Produit</h4>
          <a href="#catalog">Salon</a>
          <a href="#catalog">Espaces de travail</a>
          <a href="#catalog">Luminaires</a>
          <a href="#catalog">Contract</a>
        </div>
        <div>
          <h4>Usages</h4>
          <a href="#catalog">Hotellerie</a>
          <a href="#catalog">Residentiel</a>
          <a href="#catalog">Retail</a>
          <a href="#catalog">Bureaux</a>
        </div>
        <div>
          <h4>Ressources</h4>
          <a href="#home">Academie</a>
          <a href="#home">Tendances</a>
          <a href="#home">Assistance</a>
          <a href="#home">Themes</a>
        </div>
        <div>
          <h4>Entreprise</h4>
          <a href="#home">A propos</a>
          <a href="#home">Equipe</a>
          <a href="#home">Contact</a>
          <a href="#home">Partenaires</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>Politique de confidentialite</span>
        <span>Conditions d'utilisation</span>
        <span>Ventes et remboursements</span>
        <span>Mentions legales</span>
        <span>Plan du site</span>
      </div>
    </div>
  `;
}

function newsletterBlock() {
  return `
    <section class="newsletter container">
      <div class="newsletter-grid">
        <div class="newsletter-copy">
          <h2>Abonnez-vous a<br />Notre Newsletter</h2>
          <p>Recevez chaque semaine des nouveautes produits, des actualites partenaires et des selections pour vos projets d'interieur et de construction.</p>
          <form class="newsletter-form" id="newsletter-form">
            <input type="email" name="email" placeholder="your@email.com" value="${state.newsletterEmail}" required />
            <button class="secondary-btn" type="submit">S'abonner</button>
          </form>
        </div>
        <div class="newsletter-art"></div>
      </div>
    </section>
  `;
}

function homePage() {
  const featured = products.filter((item) => item.featured).slice(0, 8);

  return `
    <div class="page-shell">
      <section class="hero">
        <div class="container hero-grid">
          <article class="hero-card">
            <div class="eyebrow">Plateforme de sourcing pour espaces design</div>
            <h1>Design d'interieur, sourcing et achat en ligne</h1>
            <p>
              Explorez les collections, comparez les pieces, ouvrez les fiches produits, ajoutez au panier et finalisez une commande en deux etapes.
              Cette version est statique, mais chaque ecran principal est interactif.
            </p>
            <div class="hero-actions">
              <a class="primary-btn" href="#catalog">Explorer la collection</a>
              <a class="ghost-btn" href="#product/celio">Voir le produit</a>
            </div>
          </article>
          <div class="hero-side">
            <article class="panel stat-card">
              <h3>Pret pour presentation</h3>
              <div class="stat-big">${products.length} produits integres</div>
              <div class="mini-list">
                <div class="mini-item"><span>Catalogue interactif</span><strong>Filtres en direct</strong></div>
                <div class="mini-item"><span>Fiches produit</span><strong>Galerie + caracteristiques</strong></div>
                <div class="mini-item"><span>Parcours d'achat</span><strong>Panier + paiement</strong></div>
              </div>
            </article>
            <article class="panel spotlight-card">
              <h3>Selections par univers</h3>
              <p>Mobilier, luminaires, outillage, materiaux et objets premium reunis dans une seule vitrine statique.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-head">
            <div>
              <h2>Selection de Meubles</h2>
              <p>La decoration joue un role essentiel dans la creation d'espaces accueillants et fonctionnels. Commencez avec des entrees visuelles proches de tes maquettes.</p>
            </div>
            <a class="ghost-btn" href="#catalog">Voir tous les produits</a>
          </div>
          <div class="selection-grid">
            <a href="#catalog" class="selection-card">
              <img src="https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=900&q=80" alt="Canapes et fauteuils" />
              <div class="selection-overlay">
                <h3>Canapes et Fauteuils</h3>
              </div>
            </a>
            <a href="#catalog" class="selection-card">
              <img src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=900&q=80" alt="Tables et chaises" />
              <div class="selection-overlay">
                <h3>Tables et Chaises</h3>
              </div>
            </a>
            <a href="#catalog" class="selection-card">
              <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80" alt="Rangements" />
              <div class="selection-overlay">
                <h3>Rangements</h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-head">
            <div>
              <h2>Recherche par Marque</h2>
              <p>Decouvrez une selection de fabricants et de marques pensee pour des interieurs premium.</p>
            </div>
          </div>
          <div class="brands-grid">
            ${brandHighlights
              .map(
                (brand) => `
                  <article class="brand-card">
                    <img src="${brand.image}" alt="${brand.name}" />
                    <div class="brand-overlay">
                      <div class="brand-tag">${brand.type}</div>
                      <h3>${brand.name}</h3>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-head">
            <div>
              <h2>Selection de la semaine</h2>
              <p>Les cartes produits menent directement vers la fiche detail et le panier.</p>
            </div>
            <a class="ghost-btn" href="#catalog">Tous les produits</a>
          </div>
          <div class="product-grid">
            ${featured.map(renderProductCard).join("")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-head">
            <div>
              <h2>Nos Partenaires</h2>
              <p>Une bande partenaires inspiree de tes maquettes pour renforcer la credibilite visuelle.</p>
            </div>
          </div>
          <div class="partners-grid">
            ${partnerLogos.map((name) => `<div class="partner-strip">${name}</div>`).join("")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-head">
            <div>
              <h2>Ce que disent les equipes</h2>
              <p>Quelques retours pour renforcer la presentation de la plateforme.</p>
            </div>
          </div>
          <div class="quotes-grid">
            ${testimonials
              .map(
                (item) => `
                  <article class="quote-card">
                    <p>${item.quote}</p>
                    <div class="quote-author">
                      <div class="avatar">${item.author.split(" ").map((part) => part[0]).join("")}</div>
                      <div>
                        <strong>${item.author}</strong>
                        <div>${item.role}</div>
                      </div>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      ${newsletterBlock()}
    </div>
  `;
}

function renderProductCard(item) {
  return `
    <article class="product-card">
      <a class="product-media" href="#product/${item.id}">
        <span class="chip">${item.brand}</span>
        <img src="${item.image}" alt="${item.name}" />
      </a>
      <div class="product-copy">
        <div class="product-meta">
          <span>${item.category}</span>
          <span>${item.rating}★</span>
        </div>
        <h3 class="product-title">${item.name}</h3>
        <p>${item.description}</p>
        <div class="price-row">
          <div>
            <div class="price">${dzd(item.price)}</div>
            <small>${item.stock}</small>
          </div>
          <div class="inline-actions">
            <a class="ghost-btn" href="#product/${item.id}">Voir</a>
            <button class="primary-btn" type="button" data-add-to-cart="${item.id}">Ajouter</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function filteredProducts() {
  return products
    .filter((item) => {
      const searchText = `${item.name} ${item.brand} ${item.category} ${item.subcategory}`.toLowerCase();
      const matchesSearch = state.search ? searchText.includes(state.search.toLowerCase()) : true;
      const matchesSection = state.navSection ? item.subcategory === state.navSection || item.category === state.navSection : true;
      const matchesCategory = state.activeCategory === "Tous" ? true : item.category === state.activeCategory;
      const matchesMaterial = state.activeMaterial === "Tous" ? true : item.material === state.activeMaterial;
      return matchesSearch && matchesSection && matchesCategory && matchesMaterial;
    })
    .sort((a, b) => {
      if (state.sort === "price-asc") return a.price - b.price;
      if (state.sort === "price-desc") return b.price - a.price;
      if (state.sort === "rating") return b.rating - a.rating;
      return Number(b.featured) - Number(a.featured);
    });
}

function catalogPage() {
  const section = currentSectionData();
  const scopedProducts = products.filter(
    (item) => item.subcategory === state.navSection || item.category === state.navSection
  );
  const categoriesSet = ["Tous", ...new Set(scopedProducts.map((item) => item.category))];
  const materialsSet = ["Tous", ...new Set(scopedProducts.map((item) => item.material))];
  const results = filteredProducts();

  return `
    <div class="page-shell">
      <div class="container">
        <div class="breadcrumb">Accueil / Catalogue</div>
        <div class="catalog-shell panel">
          <div class="section-head">
            <div>
              <h1 class="page-title">${section.title}</h1>
              <p>${section.description}</p>
            </div>
          </div>
          <div class="selection-grid selection-grid-catalog">
            ${section.cards
              .map(
                (card) => `
                  <article class="selection-card selection-card-catalog">
                    <img src="${card.image}" alt="${card.title}" />
                    <div class="selection-overlay">
                      <h3>${card.title}</h3>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
          <div class="catalog-layout">
            <aside class="filters">
              <div class="filter-group">
                <h3>Categories</h3>
                <div class="filter-stack">
                  ${categoriesSet
                    .map(
                      (label) => `
                        <button class="pill ${state.activeCategory === label ? "active" : ""}" type="button" data-category="${label}">
                          ${label}
                        </button>
                      `
                    )
                    .join("")}
                </div>
              </div>
              <div class="filter-group">
                <h3>Materiau</h3>
                <div class="filter-stack">
                  ${materialsSet
                    .map(
                      (label) => `
                        <button class="pill ${state.activeMaterial === label ? "active" : ""}" type="button" data-material="${label}">
                          ${label}
                        </button>
                      `
                    )
                    .join("")}
                </div>
              </div>
              <div class="filter-group">
                <h3>Budget</h3>
                <input id="budget-range" type="range" min="3000" max="25000" value="18000" />
                <div class="range-row">
                  <span>3,000DA</span>
                  <span>25,000DA</span>
                </div>
              </div>
            </aside>
            <section>
              <div class="results-head">
                <div>
                  <strong>${results.length} produits</strong>
                  <p>Parcourez par marque, materiau ou type puis ouvrez une fiche produit plus complete.</p>
                </div>
                <label>
                  <select id="sort-select">
                    <option value="featured" ${state.sort === "featured" ? "selected" : ""}>Trier: Selection</option>
                    <option value="price-asc" ${state.sort === "price-asc" ? "selected" : ""}>Prix croissant</option>
                    <option value="price-desc" ${state.sort === "price-desc" ? "selected" : ""}>Prix decroissant</option>
                    <option value="rating" ${state.sort === "rating" ? "selected" : ""}>Mieux notes</option>
                  </select>
                </label>
              </div>
              <div class="product-grid catalog-grid">
                ${results.map(renderProductCard).join("")}
              </div>
            </section>
          </div>
        </div>
      </div>
      ${newsletterBlock()}
    </div>
  `;
}

function productPage() {
  const product = findProduct(state.selectedProductId);
  const gallery = product.gallery || [product.image];

  return `
    <div class="page-shell">
      <div class="container">
        <div class="breadcrumb">Accueil / Catalogue / ${product.name}</div>
        <div class="product-shell panel">
          <div class="product-layout">
            <section>
              <div class="gallery-main">
                <img src="${gallery[state.selectedGalleryIndex] || gallery[0]}" alt="${product.name}" />
              </div>
              <div class="gallery-strip">
                ${gallery
                  .map(
                    (image, index) => `
                      <button class="gallery-thumb ${state.selectedGalleryIndex === index ? "active" : ""}" type="button" data-gallery-index="${index}">
                        <img src="${image}" alt="${product.name} view ${index + 1}" />
                      </button>
                    `
                  )
                  .join("")}
              </div>
            </section>
            <aside class="product-side">
              <div>
                <div class="chip">${product.brand}</div>
                <h1 class="page-title">${product.name}</h1>
                <p>${product.category} en ${product.material}</p>
              </div>
              <div class="price">${dzd(product.price)}</div>
              <p><strong>${product.stock}</strong><br />${product.delivery}<br />${product.leadTime}</p>
              <div class="inline-actions">
                <button class="ghost-btn" type="button" data-qty-adjust="-1">-</button>
                <span class="pill">1</span>
                <button class="ghost-btn" type="button" data-qty-adjust="1">+</button>
                <button class="primary-btn" type="button" data-add-to-cart="${product.id}">Ajouter au panier</button>
              </div>
              <div class="spec-list">
                <div><strong>Description:</strong> ${product.description}</div>
                <div><strong>Caracteristiques:</strong> ${product.details}</div>
                <div><strong>Dimensions:</strong> ${product.dimensions}</div>
                <div><strong>Couleur:</strong> ${product.color}</div>
              </div>
              <div class="summary-block">
                <h3>Contact ${product.brand}</h3>
                <p>Demandez un devis, un prix projet ou une fiche technique personnalisee directement depuis cette fiche produit statique.</p>
                <button class="secondary-btn" type="button" data-request-info="${product.id}">Demande des informations</button>
              </div>
            </aside>
          </div>
          <section class="section">
            <div class="section-head">
              <div>
                <h2>Vous aimerez aussi...</h2>
              </div>
            </div>
            <div class="product-grid">
              ${products
                .filter((item) => item.id !== product.id)
                .slice(0, 4)
                .map(renderProductCard)
                .join("")}
            </div>
          </section>
        </div>
      </div>
      ${newsletterBlock()}
    </div>
  `;
}

function cartPage() {
  const items = cartItemsDetailed();

  if (!items.length) {
    return `
      <div class="page-shell">
        <div class="container">
          <div class="cart-shell panel empty-state">
            <h2>Votre panier est vide</h2>
            <p>Ajoutez un produit depuis le catalogue ou une fiche produit pour continuer vers le paiement.</p>
            <a class="primary-btn" href="#catalog">Ouvrir le catalogue</a>
          </div>
        </div>
        ${newsletterBlock()}
      </div>
    `;
  }

  return `
    <div class="page-shell">
      <div class="container">
        <div class="breadcrumb">Accueil / Panier</div>
        <div class="cart-shell panel">
          <div class="cart-layout">
            <section class="cart-list">
              ${items
                .map(
                  (item) => `
                    <article class="cart-item">
                      <a class="cart-item-media" href="#product/${item.id}">
                        <img src="${item.image}" alt="${item.name}" />
                      </a>
                      <div>
                        <h3>${item.name}</h3>
                        <p>${item.material} · ${item.color}<br />${item.brand}</p>
                        <div class="qty-control">
                          <button type="button" data-cart-update="${item.id}" data-cart-change="-1">-</button>
                          <input type="text" value="${item.qty}" readonly />
                          <button type="button" data-cart-update="${item.id}" data-cart-change="1">+</button>
                        </div>
                      </div>
                      <div>
                        <div class="price">${dzd(item.price * item.qty)}</div>
                        <button class="ghost-btn" type="button" data-remove-item="${item.id}">Supprimer</button>
                      </div>
                    </article>
                  `
                )
                .join("")}
            </section>
            <aside class="summary-block">
              <h3>Resume</h3>
              <div class="summary-row"><span>Sous total</span><strong>${dzd(subtotal())}</strong></div>
              <div class="summary-row"><span>Frais livraison</span><strong>0DA</strong></div>
              <div class="summary-row"><span>Reduction</span><strong>${dzd(discountAmount())}</strong></div>
              <div class="summary-row total"><span>Total</span><strong>${dzd(total())}</strong></div>
              <div class="promo-row">
                <input type="text" id="promo-input" placeholder="Code promo" value="${state.promoCode}" />
                <button class="primary-btn" type="button" id="apply-promo">Appliquer</button>
              </div>
              <p>${items[0].delivery}</p>
              <a class="primary-btn" href="#checkout">Finalisez la commande</a>
            </aside>
          </div>
        </div>
      </div>
      ${newsletterBlock()}
    </div>
  `;
}

function checkoutPage() {
  if (state.checkoutStep === 3) {
    return `
      <div class="page-shell">
        <div class="container">
          <div class="checkout-shell panel empty-state">
            <div class="success-badge">✓</div>
            <h2>Paiement confirme</h2>
            <p>Votre commande a ete validee dans ce parcours de demonstration. Le panier a ete vide et la plateforme reste pleinement navigable.</p>
            <a class="primary-btn" href="#home">Retour a l'accueil</a>
          </div>
        </div>
        ${newsletterBlock()}
      </div>
    `;
  }

  const items = cartItemsDetailed();

  if (!items.length) {
    location.hash = "#cart";
    return "";
  }

  return `
    <div class="page-shell">
      <div class="container">
        <div class="breadcrumb">Accueil / Paiement</div>
        <div class="checkout-shell panel">
          <div class="checkout-layout">
            <section class="checkout-column">
              <div class="checkout-stepper">
                <button class="step-node ${state.checkoutStep === 1 ? "active" : ""}" type="button" data-step="1">1</button>
                <span class="step-line"></span>
                <button class="step-node ${state.checkoutStep === 2 ? "active" : ""}" type="button" data-step="2">2</button>
              </div>
              ${
                state.checkoutStep === 1
                  ? `
                    <h2>Adresse de livraison</h2>
                    <div class="form-card">
                      <label>
                        N, voie, a/s...
                        <input id="address-input" type="text" placeholder="N, voie, a/s..." value="${state.checkoutForm.address}" />
                      </label>
                      <label>
                        Ville
                        <select id="city-input">
                          <option value="">Choisissez votre wilaya</option>
                          <option value="Alger" ${state.checkoutForm.city === "Alger" ? "selected" : ""}>Alger</option>
                          <option value="Oran" ${state.checkoutForm.city === "Oran" ? "selected" : ""}>Oran</option>
                          <option value="Constantine" ${state.checkoutForm.city === "Constantine" ? "selected" : ""}>Constantine</option>
                          <option value="Annaba" ${state.checkoutForm.city === "Annaba" ? "selected" : ""}>Annaba</option>
                        </select>
                      </label>
                      <label>Methode de paiement</label>
                      <div class="payment-options">
                        <button class="payment-option ${state.paymentMethod === "dahabia" ? "active" : ""}" type="button" data-payment="dahabia">Carte Dahabia</button>
                        <button class="payment-option ${state.paymentMethod === "cash" ? "active" : ""}" type="button" data-payment="cash">A la main</button>
                      </div>
                      ${
                        state.paymentMethod === "cash"
                          ? `<p>Le paiement a la main confirme directement la commande apres validation de l'adresse.</p>`
                          : ``
                      }
                    </div>
                    <div class="step-actions">
                      <a class="ghost-btn" href="#cart">Precedent</a>
                      <button class="secondary-btn" type="button" id="next-step">${state.paymentMethod === "cash" ? "Commander" : "Suivant"}</button>
                    </div>
                  `
                  : `
                    <h2>Paiement</h2>
                    <div class="form-card">
                      <label>
                        Numero de la carte
                        <input id="card-number" type="text" placeholder="Numero" value="${state.checkoutForm.cardNumber}" />
                      </label>
                      <label>
                        Date d'expiration
                        <input id="card-expiry" type="text" placeholder="MM/AA" value="${state.checkoutForm.expiry}" />
                      </label>
                      <label>
                        CVC
                        <input id="card-cvc" type="text" placeholder="***" value="${state.checkoutForm.cvc}" />
                      </label>
                      <label>
                        Nom sur la carte
                        <input id="card-name" type="text" placeholder="Saisir votre nom et prenom" value="${state.checkoutForm.cardName}" />
                      </label>
                    </div>
                    <div class="step-actions">
                      <button class="ghost-btn" type="button" id="prev-step">Precedent</button>
                      <button class="secondary-btn" type="button" id="complete-payment">Payer</button>
                    </div>
                  `
              }
            </section>
            <aside class="checkout-side summary-block">
              <h3>Resume de commande</h3>
              <p>${items.length} article(s) · ${items[0].name}</p>
              <div class="summary-row"><span>Sous total</span><strong>${dzd(subtotal())}</strong></div>
              <div class="summary-row"><span>Frais livraison</span><strong>0DA</strong></div>
              <div class="summary-row"><span>Reduction</span><strong>${dzd(discountAmount())}</strong></div>
              <div class="summary-row total"><span>Total</span><strong>${dzd(total())}</strong></div>
              <div class="promo-row">
                <input type="text" id="promo-input-checkout" placeholder="Code promo" value="${state.promoCode}" />
                <button class="primary-btn" type="button" id="apply-promo-checkout">Appliquer</button>
              </div>
            </aside>
          </div>
        </div>
      </div>
      ${newsletterBlock()}
    </div>
  `;
}

function render() {
  renderTopbar();
  renderFooter();

  if (state.route === "catalog") app.innerHTML = catalogPage();
  else if (state.route === "product") app.innerHTML = productPage();
  else if (state.route === "cart") app.innerHTML = cartPage();
  else if (state.route === "checkout") app.innerHTML = checkoutPage();
  else app.innerHTML = homePage();

  bindEvents();
}

function showToast(title, copy) {
  let stack = document.querySelector(".toast-stack");
  if (!stack) {
    stack = document.createElement("div");
    stack.className = "toast-stack";
    document.body.appendChild(stack);
  }

  const template = document.getElementById("toast-template");
  const node = template.content.firstElementChild.cloneNode(true);
  node.querySelector(".toast-title").textContent = title;
  node.querySelector(".toast-copy").textContent = copy;
  stack.appendChild(node);

  setTimeout(() => {
    node.remove();
  }, 3200);
}

function addToCart(id) {
  const existing = state.cart.find((item) => item.id === id);
  if (existing) existing.qty += 1;
  else state.cart.push({ id, qty: 1 });
  showToast("Ajoute au panier", `${findProduct(id).name} a ete ajoute a votre panier.`);
  render();
}

function updateRouteFromHash() {
  const hash = location.hash.replace(/^#/, "") || "home";
  const [route, slug] = hash.split("/");

  if (route === "product" && slug) {
    state.route = "product";
    state.selectedProductId = slug;
    state.selectedGalleryIndex = 0;
    state.navSection = findProduct(slug).subcategory;
  } else if (["home", "catalog", "cart", "checkout"].includes(route)) {
    state.route = route;
  } else {
    state.route = "home";
  }
  render();
}

function applyPromo(code) {
  state.promoCode = code.trim();
  state.promoApplied = state.promoCode.toUpperCase() === "CONSTRUST8";
  showToast(
    state.promoApplied ? "Code promo applique" : "Code invalide",
    state.promoApplied ? "Une reduction de 8% a ete appliquee a votre commande." : "Essayez CONSTRUST8 pour tester le parcours promo."
  );
  render();
}

function goToCatalogSection(section) {
  state.navSection = section;
  state.search = "";
  state.activeCategory = "Tous";
  state.activeMaterial = "Tous";
  state.sort = "featured";

  if (state.route === "catalog" && location.hash === "#catalog") {
    render();
    return;
  }

  location.hash = "#catalog";
}

function bindEvents() {
  document.querySelectorAll("[data-add-to-cart]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.addToCart));
  });

  document.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeCategory = button.dataset.category;
      render();
    });
  });

  document.querySelectorAll("[data-material]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeMaterial = button.dataset.material;
      render();
    });
  });

  document.querySelectorAll("[data-gallery-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedGalleryIndex = Number(button.dataset.galleryIndex);
      render();
    });
  });

  document.querySelectorAll("[data-cart-update]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = state.cart.find((entry) => entry.id === button.dataset.cartUpdate);
      if (!item) return;
      item.qty += Number(button.dataset.cartChange);
      if (item.qty <= 0) {
        state.cart = state.cart.filter((entry) => entry.id !== button.dataset.cartUpdate);
      }
      render();
    });
  });

  document.querySelectorAll("[data-remove-item]").forEach((button) => {
    button.addEventListener("click", () => {
      state.cart = state.cart.filter((item) => item.id !== button.dataset.removeItem);
      render();
    });
  });

  document.querySelectorAll("[data-step]").forEach((button) => {
    button.addEventListener("click", () => {
      state.checkoutStep = Number(button.dataset.step);
      render();
    });
  });

  document.querySelectorAll("[data-payment]").forEach((button) => {
    button.addEventListener("click", () => {
      persistCheckoutDraft();
      state.paymentMethod = button.dataset.payment;
      render();
    });
  });

  document.querySelectorAll("[data-request-info]").forEach((button) => {
    button.addEventListener("click", () => {
      showToast("Demande envoyee", `Une demande pour ${findProduct(button.dataset.requestInfo).brand} a ete simulee.`);
    });
  });

  document.querySelectorAll("[data-set-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      goToCatalogSection(button.dataset.setNav);
    });
  });

  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (event) => {
      state.sort = event.target.value;
      render();
    });
  }

  const searchInput = document.getElementById("global-search");
  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      state.search = event.target.value;
      if (state.route !== "catalog") render();
      else render();
    });
  }

  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(newsletterForm);
      state.newsletterEmail = String(formData.get("email") || "");
      showToast("Inscription enregistree", "L'inscription newsletter a bien ete simulee dans cette version statique.");
      newsletterForm.reset();
    });
  }

  const promoInput = document.getElementById("promo-input");
  const applyPromoBtn = document.getElementById("apply-promo");
  if (promoInput && applyPromoBtn) {
    applyPromoBtn.addEventListener("click", () => applyPromo(promoInput.value));
  }

  const promoInputCheckout = document.getElementById("promo-input-checkout");
  const applyPromoCheckout = document.getElementById("apply-promo-checkout");
  if (promoInputCheckout && applyPromoCheckout) {
    applyPromoCheckout.addEventListener("click", () => applyPromo(promoInputCheckout.value));
  }

  const nextStep = document.getElementById("next-step");
  if (nextStep) {
    nextStep.addEventListener("click", () => {
      persistCheckoutDraft();
      if (!state.checkoutForm.address || !state.checkoutForm.city) {
        showToast("Formulaire incomplet", "Veuillez renseigner l'adresse et la ville avant de continuer.");
        return;
      }
      if (state.paymentMethod === "cash") {
        state.checkoutStep = 3;
        state.cart = [];
        render();
        return;
      }
      state.checkoutStep = 2;
      render();
    });
  }

  const prevStep = document.getElementById("prev-step");
  if (prevStep) {
    prevStep.addEventListener("click", () => {
      state.checkoutStep = 1;
      render();
    });
  }

  const completePayment = document.getElementById("complete-payment");
  if (completePayment) {
    completePayment.addEventListener("click", () => {
      persistCheckoutDraft();
      if (state.paymentMethod === "dahabia") {
        const fields = [
          state.checkoutForm.cardNumber,
          state.checkoutForm.expiry,
          state.checkoutForm.cvc,
          state.checkoutForm.cardName,
        ];
        if (fields.some((value) => !value)) {
          showToast("Paiement incomplet", "Veuillez completer tous les champs de carte pour simuler le paiement.");
          return;
        }
      }
      state.checkoutStep = 3;
      state.cart = [];
      render();
    });
  }
}

window.addEventListener("hashchange", updateRouteFromHash);

updateRouteFromHash();

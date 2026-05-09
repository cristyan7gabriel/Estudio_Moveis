export const categories = [
  { id: 'mesas', name: 'Mesas', isHighlight: true },
  { id: 'sofas', name: 'Sofás' },
  { id: 'poltronas', name: 'Poltronas' },
  { id: 'cadeiras', name: 'Cadeiras & Banquetas' },
  { id: 'area-externa', name: 'Área Externa' }
];

export const products = [
  // SOFAS
  {
    id: 'sofa-horizonte',
    categoryId: 'sofas',
    title: 'Sofá Modular Horizonte',
    description: 'Minimalismo e conforto supremo em linho cru. Design versátil e atemporal.',
    longDescription: 'O Sofá Modular Horizonte é a peça central perfeita para um living contemporâneo. Com estrutura em madeira maciça e revestimento em linho de alta gramatura, oferece flexibilidade para diferentes layouts.',
    image: '/images/sofas/product_sofa_1778203716919.png',
    price: 'Sob Consulta',
  },
  {
    id: 'sofa-retratil-couro',
    categoryId: 'sofas',
    title: 'Sofá Retrátil Aspen',
    description: 'Luxo e comodidade em couro legítimo marrom.',
    longDescription: 'Revestido em couro natural legítimo, possui mecanismos automatizados para ajustes precisos de inclinação e extensão.',
    image: '/images/sofas/cat_sofa_1_1778206174114.png',
    price: 'Sob Consulta',
  },
  {
    id: 'sofa-modular-clean',
    categoryId: 'sofas',
    title: 'Sofá Modular Clean',
    description: 'Linhas retas e puras em tecido claro.',
    longDescription: 'Design limpo que se adapta perfeitamente a ambientes minimalistas e iluminados.',
    image: '/images/sofas/cat_sofa_2_1778206190702.png',
    price: 'Sob Consulta',
  },
  {
    id: 'sofa-organico-boucle',
    categoryId: 'sofas',
    title: 'Sofá Orgânico Nuvem',
    description: 'Design escultural curvo em tecido bouclé branco.',
    longDescription: 'Trazendo fluidez para a sala de estar, o sofá orgânico é a maior tendência do design de luxo contemporâneo.',
    image: '/images/sofas/cat_sofa_4_1778207154338.png',
    price: 'Sob Consulta',
  },

  // POLTRONAS
  {
    id: 'poltrona-costela',
    categoryId: 'poltronas',
    title: 'Poltrona Design Costela',
    description: 'Um clássico do design mobiliário com extremo conforto.',
    longDescription: 'Estrutura em madeira nobre e estofamento ripado ergonômico. Base giratória em aço carbono.',
    image: '/images/poltronas/cat_poltrona_1_1778206211754.png',
    price: 'Sob Consulta',
  },
  {
    id: 'poltrona-caramelo',
    categoryId: 'poltronas',
    title: 'Poltrona Giratória Cognac',
    description: 'Couro caramelo e base estrela em alumínio.',
    longDescription: 'Elegante para escritórios e salas de estar, com couro envelhecido que ganha personalidade com o tempo.',
    image: '/images/poltronas/cat_poltrona_2_1778207168412.png',
    price: 'Sob Consulta',
  },
  {
    id: 'poltrona-lounge',
    categoryId: 'poltronas',
    title: 'Lounge Chair Noir',
    description: 'Madeira preta e linho claro em um contraste perfeito.',
    longDescription: 'Uma peça minimalista que funciona perfeitamente como poltrona de apoio ou cadeira de leitura em ambientes modernos.',
    image: '/images/poltronas/cat_poltrona_3_1778207180821.png',
    price: 'Sob Consulta',
  },
  {
    id: 'poltrona-oversized',
    categoryId: 'poltronas',
    title: 'Poltrona de Leitura Cozy',
    description: 'Proporções exageradas e lã cinza para máximo conforto.',
    longDescription: 'Acompanha puff ottoman para proporcionar a melhor experiência de leitura ou descanso após um longo dia.',
    image: '/images/poltronas/cat_poltrona_4_1778207206604.png',
    price: 'Sob Consulta',
  },

  // CADEIRAS
  {
    id: 'cadeira-nordica',
    categoryId: 'cadeiras',
    title: 'Cadeira Jantar Nórdica',
    description: 'Design arrojado com estrutura em aço carbono e couro.',
    longDescription: 'Cadeira ergonômica ideal para salas de jantar sofisticadas. Assento anatômico com espuma de alta densidade.',
    image: '/images/cadeiras/product_chair_1778203737398.png',
    price: 'Sob Consulta',
  },
  {
    id: 'cadeira-veludo',
    categoryId: 'cadeiras',
    title: 'Cadeira Esmeralda',
    description: 'Estofada em veludo verde com pernas em dourado fosco.',
    longDescription: 'Elegância e ousadia, essa cadeira é uma peça de destaque para uma mesa de jantar de luxo.',
    image: '/images/cadeiras/cat_cadeira_1_1778206250323.png',
    price: 'Sob Consulta',
  },
  {
    id: 'cadeira-palhinha',
    categoryId: 'cadeiras',
    title: 'Cadeira Bossa Nova',
    description: 'Madeira carvalho e encosto em palhinha indiana.',
    longDescription: 'Traz a tropicalidade do design brasileiro com um toque refinado contemporâneo.',
    image: '/images/cadeiras/cat_cadeira_3_1778207219424.png',
    price: 'Sob Consulta',
  },
  {
    id: 'banqueta-industrial',
    categoryId: 'cadeiras',
    title: 'Banqueta Bar Soho',
    description: 'Couro desgastado e metal preto matte.',
    longDescription: 'O assento perfeito para sua bancada de ilha ou varanda gourmet, unindo o estilo industrial à sofisticação.',
    image: '/images/cadeiras/cat_cadeira_4_1778207230053.png',
    price: 'Sob Consulta',
  },

  // MESAS

  {
    id: 'mesa-jantar-06-cadeiras',
    categoryId: 'mesas',
    title: 'Mesa de Jantar com 06 Cadeiras',
    description: 'Conjunto completo com mesa de jantar e 06 cadeiras estofadas.',
    longDescription: 'Este conjunto de mesa de jantar com 06 cadeiras une o design clássico ao conforto contemporâneo. Ideal para reunir a família em momentos especiais, com acabamento refinado e materiais de alta durabilidade.',
    image: '/images/Mesas/Mesa_de_Jantar_com_06_cadeiras/IMG_2108.jpg',
    images: [
      '/images/Mesas/Mesa_de_Jantar_com_06_cadeiras/IMG_2108.jpg',
      '/images/Mesas/Mesa_de_Jantar_com_06_cadeiras/IMG_2109.jpg',
      '/images/Mesas/Mesa_de_Jantar_com_06_cadeiras/IMG_2110.jpg',
      '/images/Mesas/Mesa_de_Jantar_com_06_cadeiras/IMG_2111.jpg',
      '/images/Mesas/Mesa_de_Jantar_com_06_cadeiras/IMG_2112.jpg',
      '/images/Mesas/Mesa_de_Jantar_com_06_cadeiras/IMG_2113.jpg',
      '/images/Mesas/Mesa_de_Jantar_com_06_cadeiras/IMG_2114.jpg',
      '/images/Mesas/Mesa_de_Jantar_com_06_cadeiras/IMG_2115.jpg',
      '/images/Mesas/Mesa_de_Jantar_com_06_cadeiras/IMG_2116.jpg'
    ],
    price: 'Sob Consulta',
  },

  // AREA EXTERNA
  {
    id: 'sofa-outdoor-corda',
    categoryId: 'area-externa',
    title: 'Sofá Outdoor Náutico',
    description: 'Beleza e durabilidade para a sua varanda gourmet.',
    longDescription: 'Estrutura em alumínio leve e corda náutica resistente a raios UV e intempéries. Almofadas em tecido impermeável.',
    image: '/images/area-externa/cat_externa_2_1778206264823.png',
    price: 'Sob Consulta',
  },
  {
    id: 'poltrona-outdoor',
    categoryId: 'area-externa',
    title: 'Poltrona Náutica Individual',
    description: 'Conforto resistente às intempéries.',
    longDescription: 'Perfeita para compor junto ao sofá outdoor, com a mesma qualidade de corda náutica e tecido impermeável.',
    image: '/images/area-externa/cat_externa_2_1778206264823.png',
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-centro-outdoor',
    categoryId: 'area-externa',
    title: 'Mesa de Centro Outdoor',
    description: 'Alumínio resistente para apoiar drinks na piscina.',
    longDescription: 'Prática, leve e projetada para não enferrujar ou descascar no sol.',
    image: '/images/area-externa/cat_externa_2_1778206264823.png',
    price: 'Sob Consulta',
  },
  {
    id: 'espreguicadeira-nautica',
    categoryId: 'area-externa',
    title: 'Espreguiçadeira Náutica',
    description: 'Relaxe na borda da piscina com máximo luxo.',
    longDescription: 'Ergonômica e resistente, o design vazado permite ventilação e secagem rápida após o uso.',
    image: '/images/area-externa/cat_externa_2_1778206264823.png',
    price: 'Sob Consulta',
  }
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByCategory = (categoryId) => products.filter(p => p.categoryId === categoryId);
export const getProductById = (id) => products.find(p => p.id === id);

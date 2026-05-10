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
    image: '/images/Mesas/mesa-06-cadeiras/IMG_2108.jpg',
    images: [
      '/images/Mesas/mesa-06-cadeiras/IMG_2108.jpg',
      '/images/Mesas/mesa-06-cadeiras/IMG_2109.jpg',
      '/images/Mesas/mesa-06-cadeiras/IMG_2110.jpg',
      '/images/Mesas/mesa-06-cadeiras/IMG_2111.jpg',
      '/images/Mesas/mesa-06-cadeiras/IMG_2112.jpg',
      '/images/Mesas/mesa-06-cadeiras/IMG_2113.jpg',
      '/images/Mesas/mesa-06-cadeiras/IMG_2114.jpg',
      '/images/Mesas/mesa-06-cadeiras/IMG_2115.jpg',
      '/images/Mesas/mesa-06-cadeiras/IMG_2116.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-barcelona',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Barcelona',
    description: 'Mesa de jantar de 1,80x90 a 2,20x1,00.',
    longDescription: 'A Mesa de Jantar Barcelona apresenta dimensões generosas e design requintado, proporcionando charme e espaço para jantares inesquecíveis.',
    image: '/images/Mesas/mesa-barcelona/whatsapp-image-2026-05-09-at-10.35.24.jpeg',
    images: [
      '/images/Mesas/mesa-barcelona/whatsapp-image-2026-05-09-at-10.35.24.jpeg',
      '/images/Mesas/mesa-barcelona/1.890.jpeg',
      '/images/Mesas/mesa-barcelona/2.450.jpeg',
      '/images/Mesas/mesa-barcelona/whatsapp-image-2026-05-09-at-10.35.24-1.jpeg',
      '/images/Mesas/mesa-barcelona/whatsapp-image-2026-05-09-at-10.35.24-2.jpeg',
      '/images/Mesas/mesa-barcelona/whatsapp-image-2026-05-09-at-10.35.24-3.jpeg',
      '/images/Mesas/mesa-barcelona/whatsapp-image-2026-05-09-at-10.35.24-4.jpeg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-denver',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Denver',
    description: 'Mesa de 2,70m acompanhada de 10 cadeiras Liz.',
    longDescription: 'Conjunto imponente e moderno, a Mesa Denver acompanhada de 10 cadeiras Liz é ideal para grandes encontros e salas de jantar amplas.',
    image: '/images/Mesas/mesa-denver/whatsapp-image-2026-05-09-at-10.35.23.jpeg',
    images: [
      '/images/Mesas/mesa-denver/whatsapp-image-2026-05-09-at-10.35.23.jpeg',
      '/images/Mesas/mesa-denver/3.60000.jpeg',
      '/images/Mesas/mesa-denver/950000.jpeg',
      '/images/Mesas/mesa-denver/whatsapp-image-2026-05-09-at-10.35.22.jpeg',
      '/images/Mesas/mesa-denver/whatsapp-image-2026-05-09-at-10.35.22-3.jpeg',
      '/images/Mesas/mesa-denver/whatsapp-image-2026-05-09-at-10.35.23-1.jpeg',
      '/images/Mesas/mesa-denver/whatsapp-video-2026-05-07-at-09.03.17.mp4'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-ilha-bela',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Ilha Bela',
    description: 'Mesa 2,20x1,10 com cadeiras Pérola.',
    longDescription: 'A Mesa de Jantar Ilha Bela traz elegância, complementada pelo conforto supremo das cadeiras Pérola.',
    image: '/images/Mesas/mesa-ilha-bela/IMG_1914.jpg',
    images: [
      '/images/Mesas/mesa-ilha-bela/IMG_1914.jpg',
      '/images/Mesas/mesa-ilha-bela/IMG_1915.jpg',
      '/images/Mesas/mesa-ilha-bela/IMG_1916.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-jade',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Jade',
    description: 'Mesa 1,80x90 com cadeiras Florença.',
    longDescription: 'Beleza e sofisticação marcam a Mesa de Jantar Jade, perfeitamente harmonizada com as cadeiras Florença.',
    image: '/images/Mesas/mesa-jade/InShot_20250520_102032887_Original.JPG',
    images: [
      '/images/Mesas/mesa-jade/InShot_20250520_102032887_Original.JPG'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-jantar',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Clássica',
    description: 'Design elegante para sua sala de jantar.',
    longDescription: 'Mesa de jantar de altíssimo padrão com design clássico, ideal para complementar um ambiente sofisticado e acolhedor.',
    image: '/images/Mesas/mesa-jantar/IMG_2096.jpg',
    images: [
      '/images/Mesas/mesa-jantar/IMG_2096.jpg',
      '/images/Mesas/mesa-jantar/IMG_2097.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-jasmim-helena',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Jasmim e Cadeiras Helena',
    description: 'Mesa 1,20x80 com 04 cadeiras Helena.',
    longDescription: 'Ideal para espaços otimizados, a Mesa Jasmim traz funcionalidade sem abrir mão do estilo, acompanhada pelas charmosas cadeiras Helena.',
    image: '/images/Mesas/mesa-jasmim-helena/whatsapp-image-2026-05-09-at-10.35.25.jpeg',
    images: [
      '/images/Mesas/mesa-jasmim-helena/whatsapp-image-2026-05-09-at-10.35.25.jpeg',
      '/images/Mesas/mesa-jasmim-helena/1.750.jpeg',
      '/images/Mesas/mesa-jasmim-helena/1100.jpeg',
      '/images/Mesas/mesa-jasmim-helena/1500.jpeg',
      '/images/Mesas/mesa-jasmim-helena/250.jpeg',
      '/images/Mesas/mesa-jasmim-helena/whatsapp-image-2026-05-09-at-10.35.24-6.jpeg',
      '/images/Mesas/mesa-jasmim-helena/whatsapp-image-2026-05-09-at-10.35.25-1.jpeg',
      '/images/Mesas/mesa-jasmim-helena/whatsapp-image-2026-05-09-at-10.35.25-2.jpeg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-jasmim-lola',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Jasmim e Cadeiras Lola',
    description: 'Mesa 1,20x80 com 04 cadeiras Lola.',
    longDescription: 'Conjunto versátil e charmoso, combinando a mesa compacta Jasmim com a leveza e o design único das cadeiras Lola.',
    image: '/images/Mesas/mesa-jasmim-lola/IMG-20250412-WA0121_Original.JPG',
    images: [
      '/images/Mesas/mesa-jasmim-lola/IMG-20250412-WA0121_Original.JPG',
      '/images/Mesas/mesa-jasmim-lola/IMG-20250414-WA0154_Original.JPG',
      '/images/Mesas/mesa-jasmim-lola/IMG-20250418-WA0060_Original.JPG'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-oval-siena',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Oval Siena',
    description: 'Mesa de jantar oval 2,20x1,10 com cadeira Siena.',
    longDescription: 'Design fluido e convidativo. A mesa oval promove melhor circulação e interação, complementada pelas sofisticadas cadeiras Siena.',
    image: '/images/Mesas/mesa-oval-siena/IMG_2109.jpg',
    images: [
      '/images/Mesas/mesa-oval-siena/IMG_2109.jpg',
      '/images/Mesas/mesa-oval-siena/conjunto-6399.jpg',
      '/images/Mesas/mesa-oval-siena/IMG_2110.jpg',
      '/images/Mesas/mesa-oval-siena/IMG_2111.jpg',
      '/images/Mesas/mesa-oval-siena/IMG_2112.jpg',
      '/images/Mesas/mesa-oval-siena/IMG_2113.jpg',
      '/images/Mesas/mesa-oval-siena/IMG_2114.jpg',
      '/images/Mesas/mesa-oval-siena/IMG_2115.jpg',
      '/images/Mesas/mesa-oval-siena/IMG_2116.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-redonda-fenix',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Redonda Fênix',
    description: 'Tamanhos de 1,20m a 1,50m.',
    longDescription: 'Perfeita para criar ambientes intimistas e aconchegantes. A base em formato escultural torna a Mesa Fênix uma obra de arte.',
    image: '/images/Mesas/mesa-redonda-fenix/1.600.jpeg',
    images: [
      '/images/Mesas/mesa-redonda-fenix/1.600.jpeg',
      '/images/Mesas/mesa-redonda-fenix/2.300.jpeg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-safira',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Safira',
    description: 'Mesa 1,36x90 com 04 cadeiras estofadas.',
    longDescription: 'Conjunto moderno e versátil para o seu dia a dia. A mesa Safira se destaca por sua base geométrica robusta e tampo refinado.',
    image: '/images/Mesas/mesa-safira/Screenshot_2026-02-06-10-32-43-075_com.whatsapp.w4b-edit_Original.jpg',
    images: [
      '/images/Mesas/mesa-safira/Screenshot_2026-02-06-10-32-43-075_com.whatsapp.w4b-edit_Original.jpg',
      '/images/Mesas/mesa-safira/Screenshot_2026-02-06-10-33-14-707_com.whatsapp.w4b-edit_Original.jpg',
      '/images/Mesas/mesa-safira/Screenshot_2026-02-06-10-33-38-560_com.whatsapp.w4b-edit_Original.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-siena',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Siena',
    description: 'Mesa redonda 1,20m com 04 cadeiras Siena.',
    longDescription: 'Clássica e atemporal, a Mesa Siena é ideal para quem busca conforto e tradição, trazendo um toque amadeirado à decoração.',
    image: '/images/Mesas/mesa-siena/IMG_2101.jpg',
    images: [
      '/images/Mesas/mesa-siena/IMG_2101.jpg',
      '/images/Mesas/mesa-siena/IMG_2102.jpg',
      '/images/Mesas/mesa-siena/IMG_2103.jpg',
      '/images/Mesas/mesa-siena/IMG_2104.jpg',
      '/images/Mesas/mesa-siena/IMG_2105.jpg',
      '/images/Mesas/mesa-siena/IMG_2106.jpg',
      '/images/Mesas/mesa-siena/IMG_2107.jpg'
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

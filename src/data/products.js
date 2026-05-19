export const categories = [
  { id: 'mesas', name: 'Mesas', isHighlight: true },
  { id: 'cadeiras', name: 'Cadeiras' },
  { id: 'sofas', name: 'Sofás' },
  { id: 'poltronas', name: 'Poltronas' },
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
    id: 'cadeira-alice-palhinha',
    categoryId: 'cadeiras',
    title: 'Cadeira Alice com Palhinha',
    description: 'Encosto em palhinha natural com estrutura robusta.',
    longDescription: 'A Cadeira Alice combina a elegância da palhinha com uma estrutura resistente, trazendo charme e sofisticação para a sua sala de jantar.',
    image: '/images/cadeiras/cadeira-alice-palhinha/img_5.webp',
    images: [
      '/images/cadeiras/cadeira-alice-palhinha/img_1.jpg',
      '/images/cadeiras/cadeira-alice-palhinha/img_2.jpg',
      '/images/cadeiras/cadeira-alice-palhinha/img_3.jpg',
      '/images/cadeiras/cadeira-alice-palhinha/img_4.webp',
      '/images/cadeiras/cadeira-alice-palhinha/img_5.webp',
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'cadeira-classic',
    categoryId: 'cadeiras',
    title: 'Cadeira Classic',
    description: 'Design clássico e atemporal para qualquer ambiente.',
    longDescription: 'A Cadeira Classic une tradição e conforto, com acabamento impecável e linhas elegantes que se adaptam a diversos estilos de decoração.',
    image: '/images/cadeiras/cadeira-classic/img_1.webp',
    images: [
      '/images/cadeiras/cadeira-classic/img_1.webp',
      '/images/cadeiras/cadeira-classic/img_2.webp',
      '/images/cadeiras/cadeira-classic/img_3.webp',
      '/images/cadeiras/cadeira-classic/img_4.webp',
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'cadeira-curitiba-plus',
    categoryId: 'cadeiras',
    title: 'Cadeira Curitiba Plus',
    description: 'Conforto plus com design moderno e refinado.',
    longDescription: 'A Cadeira Curitiba Plus oferece assento estofado de alta densidade e encosto ergonômico, ideal para longas refeições em família.',
    image: '/images/cadeiras/cadeira-curitiba-plus/img_1.webp',
    images: [
      '/images/cadeiras/cadeira-curitiba-plus/img_1.webp',
      '/images/cadeiras/cadeira-curitiba-plus/img_2.webp',
      '/images/cadeiras/cadeira-curitiba-plus/img_3.webp',
      '/images/cadeiras/cadeira-curitiba-plus/img_4.webp',
      '/images/cadeiras/cadeira-curitiba-plus/img_5.webp',
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'cadeira-dobravel-rattan',
    categoryId: 'cadeiras',
    title: 'Cadeira Dobrável com Rattan',
    description: 'Praticidade e estilo com acabamento em rattan.',
    longDescription: 'A Cadeira Dobrável com Rattan é perfeita para quem busca versatilidade sem abrir mão do design. Fácil de guardar e ideal para eventos e espaços compactos.',
    image: '/images/cadeiras/cadeira-dobravel-rattan/img_1.webp',
    images: [
      '/images/cadeiras/cadeira-dobravel-rattan/img_1.webp',
      '/images/cadeiras/cadeira-dobravel-rattan/img_2.webp',
      '/images/cadeiras/cadeira-dobravel-rattan/img_3.webp',
      '/images/cadeiras/cadeira-dobravel-rattan/img_4.webp',
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'cadeira-ilheus-plus',
    categoryId: 'cadeiras',
    title: 'Cadeira Ilhéus Plus',
    description: 'Estofamento premium com linhas contemporâneas.',
    longDescription: 'A Cadeira Ilhéus Plus se destaca pelo estofamento generoso e design arrojado, proporcionando conforto e elegância para a sua mesa de jantar.',
    image: '/images/cadeiras/cadeira-ilheus-plus/img_1.webp',
    images: [
      '/images/cadeiras/cadeira-ilheus-plus/img_1.webp',
      '/images/cadeiras/cadeira-ilheus-plus/img_2.webp',
      '/images/cadeiras/cadeira-ilheus-plus/img_3.webp',
      '/images/cadeiras/cadeira-ilheus-plus/img_4.webp',
      '/images/cadeiras/cadeira-ilheus-plus/img_5.webp',
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'cadeira-italia-plus',
    categoryId: 'cadeiras',
    title: 'Cadeira Itália Plus',
    description: 'Revestimento em poliéster marrom com design italiano.',
    longDescription: 'Inspirada no design italiano, a Cadeira Itália Plus combina sofisticação e funcionalidade com revestimento em poliéster de alta qualidade.',
    image: '/images/cadeiras/cadeira-italia-plus/img_1.webp',
    images: [
      '/images/cadeiras/cadeira-italia-plus/img_1.webp',
      '/images/cadeiras/cadeira-italia-plus/img_2.webp',
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'cadeira-liz-mel',
    categoryId: 'cadeiras',
    title: 'Cadeira Liz Mel',
    description: 'Tela lisa com acabamento mel e estofado confortável.',
    longDescription: 'A Cadeira Liz Mel traz leveza e elegância com sua tela lisa e acabamento em tom mel, ideal para complementar mesas de jantar em ambientes aconchegantes.',
    image: '/images/cadeiras/cadeira-liz-mel/img_1.webp',
    images: [
      '/images/cadeiras/cadeira-liz-mel/img_1.webp',
      '/images/cadeiras/cadeira-liz-mel/img_2.webp',
      '/images/cadeiras/cadeira-liz-mel/img_3.webp',
      '/images/cadeiras/cadeira-liz-mel/img_4.webp',
      '/images/cadeiras/cadeira-liz-mel/img_5.webp',
      '/images/cadeiras/cadeira-liz-mel/img_6.webp',
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'cadeira-maragogi-plus',
    categoryId: 'cadeiras',
    title: 'Cadeira Maragogi Plus',
    description: 'Conforto tropical com design sofisticado.',
    longDescription: 'A Cadeira Maragogi Plus é ideal para quem busca um toque de brasilidade na decoração, com assento amplo e acabamento de alta qualidade.',
    image: '/images/cadeiras/cadeira-maragogi-plus/img_1.webp',
    images: [
      '/images/cadeiras/cadeira-maragogi-plus/img_1.webp',
      '/images/cadeiras/cadeira-maragogi-plus/img_2.webp',
      '/images/cadeiras/cadeira-maragogi-plus/img_3.webp',
      '/images/cadeiras/cadeira-maragogi-plus/img_4.webp',
      '/images/cadeiras/cadeira-maragogi-plus/img_5.webp',
      '/images/cadeiras/cadeira-maragogi-plus/img_6.webp',
      '/images/cadeiras/cadeira-maragogi-plus/img_7.webp',
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'cadeira-perola-bronze',
    categoryId: 'cadeiras',
    title: 'Cadeira Pérola Bronze',
    description: 'Elegância em acabamento bronze com assento estofado.',
    longDescription: 'A Cadeira Pérola Bronze é sinônimo de requinte. Seu acabamento em bronze e estofado premium fazem dela a escolha perfeita para ambientes sofisticados.',
    image: '/images/cadeiras/cadeira-perola-bronze/img_1.webp',
    images: [
      '/images/cadeiras/cadeira-perola-bronze/img_1.webp',
      '/images/cadeiras/cadeira-perola-bronze/img_2.webp',
      '/images/cadeiras/cadeira-perola-bronze/img_3.webp',
      '/images/cadeiras/cadeira-perola-bronze/img_4.webp',
      '/images/cadeiras/cadeira-perola-bronze/img_5.webp',
      '/images/cadeiras/cadeira-perola-bronze/img_6.webp',
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'cadeira-safira',
    categoryId: 'cadeiras',
    title: 'Cadeira Safira',
    description: 'Design geométrico com estofamento de alta densidade.',
    longDescription: 'A Cadeira Safira impressiona com seu design geométrico e conforto excepcional, sendo a companheira ideal para a Mesa de Jantar Safira.',
    image: '/images/cadeiras/cadeira-safira/img_1.webp',
    images: [
      '/images/cadeiras/cadeira-safira/img_1.webp',
      '/images/cadeiras/cadeira-safira/img_2.webp',
      '/images/cadeiras/cadeira-safira/img_3.webp',
      '/images/cadeiras/cadeira-safira/img_4.webp',
      '/images/cadeiras/cadeira-safira/img_5.webp',
      '/images/cadeiras/cadeira-safira/img_6.webp',
      '/images/cadeiras/cadeira-safira/img_7.webp',
      '/images/cadeiras/cadeira-safira/img_8.webp',
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'cadeiras-siena-pop',
    categoryId: 'cadeiras',
    title: 'Cadeiras Siena Pop',
    description: 'Versão moderna e despojada da clássica Siena.',
    longDescription: 'As Cadeiras Siena Pop trazem uma releitura contemporânea da linha Siena, com cores vibrantes e design que combina perfeitamente com ambientes modernos.',
    image: '/images/cadeiras/cadeiras-siena-pop/img_1.webp',
    images: [
      '/images/cadeiras/cadeiras-siena-pop/img_1.webp',
      '/images/cadeiras/cadeiras-siena-pop/img_2.webp',
      '/images/cadeiras/cadeiras-siena-pop/img_3.webp',
      '/images/cadeiras/cadeiras-siena-pop/img_4.webp',
      '/images/cadeiras/cadeiras-siena-pop/img_5.webp',
    ],
    price: 'Sob Consulta',
  },

  // MESAS

  {
    id: 'mesa-jantar-06-cadeiras',
    categoryId: 'mesas',
    title: 'Mesa de Jantar com 06 Cadeiras',
    description: 'Conjunto completo com mesa de jantar e 06 cadeiras estofadas.',
    longDescription: 'Este conjunto de mesa de jantar com 06 cadeiras une o design clássico ao conforto contemporâneo. Ideal para reunir a família em momentos especiais, com acabamento refinado e materiais de alta durabilidade.',
    image: '/images/Mesas/mesa-06-cadeiras/img_2108.jpg',
    images: [
      '/images/Mesas/mesa-06-cadeiras/img_2108.jpg',
      '/images/Mesas/mesa-06-cadeiras/img_2109.jpg',
      '/images/Mesas/mesa-06-cadeiras/img_2110.jpg',
      '/images/Mesas/mesa-06-cadeiras/img_2111.jpg',
      '/images/Mesas/mesa-06-cadeiras/img_2112.jpg',
      '/images/Mesas/mesa-06-cadeiras/img_2113.jpg',
      '/images/Mesas/mesa-06-cadeiras/img_2114.jpg',
      '/images/Mesas/mesa-06-cadeiras/img_2115.jpg',
      '/images/Mesas/mesa-06-cadeiras/img_2116.jpg'
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
    id: 'mesa-barcelona-viena',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Barcelona com 08 Cadeiras Viena',
    description: 'Mesa 2,20x1,00 acompanhada de 08 cadeiras Viena.',
    longDescription: 'Este conjunto reúne a elegância imponente da Mesa de Jantar Barcelona com o extremo conforto e sofisticação das 08 cadeiras Viena. O tampo generoso de 2,20x1,00 oferece espaço abundante e acabamento refinado de altíssimo padrão, ideal para grandes momentos em família.',
    image: '/images/Mesas/mesa-barcelona-viena/img_1.jpeg',
    images: [
      '/images/Mesas/mesa-barcelona-viena/img_1.jpeg',
      '/images/Mesas/mesa-barcelona-viena/img_2.jpeg',
      '/images/Mesas/mesa-barcelona-viena/img_3.jpeg',
      '/images/Mesas/mesa-barcelona-viena/video_1.mp4'
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
    id: 'mesa-jantar-cascata',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Cascata',
    description: 'Mesa 2,20x1,10 com cadeiras Pérola.',
    longDescription: 'A Mesa de Jantar Cascata traz elegância, complementada pelo conforto supremo das cadeiras Pérola.',
    image: '/images/Mesas/mesa-jantar-cascata/img_1914.jpg',
    images: [
      '/images/Mesas/mesa-jantar-cascata/img_1914.jpg',
      '/images/Mesas/mesa-jantar-cascata/img_1915.jpg',
      '/images/Mesas/mesa-jantar-cascata/img_1916.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-jade',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Jade',
    description: 'Mesa 1,80x90 com cadeiras Florença.',
    longDescription: 'Beleza e sofisticação marcam a Mesa de Jantar Jade, perfeitamente harmonizada com as cadeiras Florença.',
    image: '/images/Mesas/mesa-jade/inshot_20250520_102032887_original.jpg',
    images: [
      '/images/Mesas/mesa-jade/inshot_20250520_102032887_original.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-jantar',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Clássica',
    description: 'Design elegante para sua sala de jantar.',
    longDescription: 'Mesa de jantar de altíssimo padrão com design clássico, ideal para complementar um ambiente sofisticado e acolhedor.',
    image: '/images/Mesas/mesa-jantar/img_2096.jpg',
    images: [
      '/images/Mesas/mesa-jantar/img_2096.jpg',
      '/images/Mesas/mesa-jantar/img_2097.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-jasmim-helena',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Jasmim e Cadeiras Helena',
    description: 'Mesa 1,20x80 com 04 cadeiras Helena.',
    longDescription: `Características do Conjunto
Mesa Roma
Medidas: 1,20m x 0,80m
Formato: Retangular
Base: Madeira padrão Imbuia Mel
Tampo: Vidro laqueado Off White
Estilo: Moderno contemporâneo

Cadeiras Helena
Quantidade: 4 cadeiras
Estrutura: Madeira
Uso indicado: Ambientes internos
Medidas das Cadeiras Helena
Altura: 98 cm
Largura: 44 cm
Profundidade: 54 cm`,
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
    price: 'R$ 1.750,00 conjunto e R$ 250,00 a cadeira',
  },
  {
    id: 'mesa-jasmim-lola',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Jasmim e Cadeiras Lola',
    description: 'Mesa 1,20x80 com 04 cadeiras Lola.',
    longDescription: 'Conjunto versátil e charmoso, combinando a mesa compacta Jasmim com a leveza e o design único das cadeiras Lola.',
    image: '/images/Mesas/mesa-jasmim-lola/img-20250412-wa0121_original.jpg',
    images: [
      '/images/Mesas/mesa-jasmim-lola/img-20250412-wa0121_original.jpg',
      '/images/Mesas/mesa-jasmim-lola/img-20250414-wa0154_original.jpg',
      '/images/Mesas/mesa-jasmim-lola/img-20250418-wa0060_original.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-jasmim-120',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Jasmim com 04 Cadeiras',
    description: 'Mesa compacta 1,20x80m acompanhada de 04 cadeiras estofadas.',
    longDescription: 'O conjunto Mesa de Jantar Jasmim com 04 Cadeiras oferece o equilíbrio perfeito entre funcionalidade para espaços compactos e sofisticação contemporânea. Com tampo de 1,20m x 0,80m, base robusta e cadeiras estofadas ergonômicas, é o conjunto ideal para momentos aconchegantes.',
    image: '/images/Mesas/mesa-jasmim-120/img_12.jpg',
    images: [
      '/images/Mesas/mesa-jasmim-120/img_1.webp',
      '/images/Mesas/mesa-jasmim-120/img_2.webp',
      '/images/Mesas/mesa-jasmim-120/img_3.webp',
      '/images/Mesas/mesa-jasmim-120/img_4.webp',
      '/images/Mesas/mesa-jasmim-120/img_5.webp',
      '/images/Mesas/mesa-jasmim-120/img_6.webp',
      '/images/Mesas/mesa-jasmim-120/img_7.webp',
      '/images/Mesas/mesa-jasmim-120/img_8.webp',
      '/images/Mesas/mesa-jasmim-120/img_9.webp',
      '/images/Mesas/mesa-jasmim-120/img_10.webp',
      '/images/Mesas/mesa-jasmim-120/img_11.webp',
      '/images/Mesas/mesa-jasmim-120/img_12.jpg',
      '/images/Mesas/mesa-jasmim-120/img_13.jpg',
      '/images/Mesas/mesa-jasmim-120/img_14.jpg',
      '/images/Mesas/mesa-jasmim-120/img_15.jpg',
      '/images/Mesas/mesa-jasmim-120/img_16.jpg',
      '/images/Mesas/mesa-jasmim-120/img_17.jpg',
      '/images/Mesas/mesa-jasmim-120/img_18.jpg',
      '/images/Mesas/mesa-jasmim-120/img_19.jpg',
      '/images/Mesas/mesa-jasmim-120/img_20.jpg',
      '/images/Mesas/mesa-jasmim-120/img_21.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-oval-rubi',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Oval Rubi',
    description: 'Mesa de jantar oval 2,20x1,10 com cadeira Siena.',
    longDescription: 'Design fluido e convidativo. A mesa oval promove melhor circulação e interação, complementada pelas sofisticadas cadeiras Siena.',
    image: '/images/Mesas/mesa-oval-rubi/img_2109.jpg',
    images: [
      '/images/Mesas/mesa-oval-rubi/img_2109.jpg',
      '/images/Mesas/mesa-oval-rubi/conjunto-6399.jpg',
      '/images/Mesas/mesa-oval-rubi/img_2110.jpg',
      '/images/Mesas/mesa-oval-rubi/img_2111.jpg',
      '/images/Mesas/mesa-oval-rubi/img_2112.jpg',
      '/images/Mesas/mesa-oval-rubi/img_2113.jpg',
      '/images/Mesas/mesa-oval-rubi/img_2114.jpg',
      '/images/Mesas/mesa-oval-rubi/img_2115.jpg',
      '/images/Mesas/mesa-oval-rubi/img_2116.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-redonda-fenix',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Redonda Fênix',
    description: 'Tamanhos de 1,20m a 1,50m.',
    longDescription: 'Perfeita para criar ambientes intimistas e aconchegantes. A base em formato escultural torna a Mesa Fênix uma obra de arte.',
    image: '/images/Mesas/mesa-redonda-fenix/img_4.jpg',
    images: [
      '/images/Mesas/mesa-redonda-fenix/img_4.jpg',
      '/images/Mesas/mesa-redonda-fenix/img_1.jpg',
      '/images/Mesas/mesa-redonda-fenix/img_2.jpg',
      '/images/Mesas/mesa-redonda-fenix/img_3.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-safira',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Safira',
    description: 'Mesa 1,36x90 com 04 cadeiras estofadas.',
    longDescription: 'Conjunto moderno e versátil para o seu dia a dia. A mesa Safira se destaca por sua base geométrica robusta e tampo refinado.',
    image: '/images/Mesas/mesa-safira/screenshot_2026-02-06-10-32-43-075_com.whatsapp.w4b-edit_original.jpg',
    images: [
      '/images/Mesas/mesa-safira/screenshot_2026-02-06-10-32-43-075_com.whatsapp.w4b-edit_original.jpg',
      '/images/Mesas/mesa-safira/screenshot_2026-02-06-10-33-14-707_com.whatsapp.w4b-edit_original.jpg',
      '/images/Mesas/mesa-safira/screenshot_2026-02-06-10-33-38-560_com.whatsapp.w4b-edit_original.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-jantar-rubi',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Rubi',
    description: 'Mesa redonda 1,20m com 04 cadeiras Siena.',
    longDescription: 'Clássica e atemporal, a Mesa Rubi é ideal para quem busca conforto e tradição, trazendo um toque amadeirado à decoração.',
    image: '/images/Mesas/mesa-jantar-rubi/img_2101.jpg',
    images: [
      '/images/Mesas/mesa-jantar-rubi/img_2101.jpg',
      '/images/Mesas/mesa-jantar-rubi/img_2102.jpg',
      '/images/Mesas/mesa-jantar-rubi/img_2103.jpg',
      '/images/Mesas/mesa-jantar-rubi/img_2104.jpg',
      '/images/Mesas/mesa-jantar-rubi/img_2105.jpg',
      '/images/Mesas/mesa-jantar-rubi/img_2106.jpg',
      '/images/Mesas/mesa-jantar-rubi/img_2107.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-alegra',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Alegra',
    description: 'Mesa 1,20x80 com 04 cadeiras estofadas.',
    longDescription: 'A Mesa de Jantar Alegra é a escolha perfeita para espaços compactos que não abrem mão de estilo. Seu design leve e contemporâneo acompanha 04 cadeiras estofadas de alta qualidade.',
    image: '/images/Mesas/mesa-alegra/img_1.png',
    images: [
      '/images/Mesas/mesa-alegra/img_1.png',
      '/images/Mesas/mesa-alegra/img_2.png',
      '/images/Mesas/mesa-alegra/img_3.png',
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-cone-liz',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Cone com Cadeiras Liz',
    description: 'Mesa redonda 1,20m com 04 cadeiras Liz.',
    longDescription: 'A Mesa Cone com base escultural e tampo redondo de 1,20m acompanha 04 cadeiras Liz, formando um conjunto elegante e funcional para sua sala de jantar.',
    image: '/images/Mesas/mesa-cone-liz/img_1.png',
    images: [
      '/images/Mesas/mesa-cone-liz/img_1.png',
      '/images/Mesas/mesa-cone-liz/img_2.png',
      '/images/Mesas/mesa-cone-liz/img_3.png',
      '/images/Mesas/mesa-cone-liz/img_4.png',
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-jantar-cascata-oval',
    categoryId: 'mesas',
    title: 'Mesa Cascata com Tampo Oval',
    description: 'Mesa oval 2,20x1,00 com design fluido e convidativo.',
    longDescription: 'A Mesa Cascata com tampo oval de 2,20x1,00 promove melhor circulação e interação entre os convidados, com acabamento impecável e design que é puro requinte.',
    image: '/images/Mesas/mesa-jantar-cascata-oval/img_1.png',
    images: [
      '/images/Mesas/mesa-jantar-cascata-oval/img_1.png',
      '/images/Mesas/mesa-jantar-cascata-oval/img_2.png',
      '/images/Mesas/mesa-jantar-cascata-oval/img_3.png',
      '/images/Mesas/mesa-jantar-cascata-oval/img_4.png',
      '/images/Mesas/mesa-jantar-cascata-oval/img_5.png',
      '/images/Mesas/mesa-jantar-cascata-oval/img_6.png',
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-rubi-redonda-perola',
    categoryId: 'mesas',
    title: 'Mesa Rubi Redonda com Cadeiras Pérola',
    description: 'Mesa redonda 1,50m ou 1,35m com 04 cadeiras Pérola.',
    longDescription: 'Transforme sua sala de jantar com o Conjunto Mesa Rubi Redonda 1,50m ou 1,35m + 4 Cadeiras Pérola, perfeito para quem busca sofisticação, conforto and funcionalidade no dia a dia.',
    image: '/images/Mesas/mesa-rubi-redonda-perola/img_1.png',
    images: [
      '/images/Mesas/mesa-rubi-redonda-perola/img_1.png',
      '/images/Mesas/mesa-rubi-redonda-perola/img_2.png',
      '/images/Mesas/mesa-rubi-redonda-perola/img_3.jpg',
      '/images/Mesas/mesa-rubi-redonda-perola/img_4.jpg',
      '/images/Mesas/mesa-rubi-redonda-perola/img_5.jpg',
      '/images/Mesas/mesa-rubi-redonda-perola/img_6.jpg'
    ],
    price: 'R$ 3.600,00',
  },
  {
    id: 'mesa-siera-ilheus',
    categoryId: 'mesas',
    title: 'Mesa Siera com Cadeiras Ilhéus',
    description: 'Mesa 1,30x0,90 tampo MDF com vidro e 04 cadeiras Ilhéus.',
    longDescription: `Características do Conjunto
Mesa Roma
Medidas: 1,30m x 0,90m
Formato: Retangular
Base: Madeira padrão Imbuia Mel
Tampo: Vidro laqueado Off White 
Estilo: Moderno contemporâneo

Cadeiras Ilheus
Quantidade: 4 cadeiras
Estrutura: Madeira
Uso indicado: Ambientes internos
Medidas das Cadeiras Helena
Altura: 96 cm
Largura: 48 cm
Profundidade: 62 cm`,
    image: '/images/Mesas/mesa-siera-ilheus/img_1.png',
    images: [
      '/images/Mesas/mesa-siera-ilheus/img_1.png',
      '/images/Mesas/mesa-siera-ilheus/img_2.png',
      '/images/Mesas/mesa-siera-ilheus/img_3.png',
      '/images/Mesas/mesa-siera-ilheus/img_4.png',
    ],
    price: 'R$ 1.850,00',
  },
  {
    id: 'mesa-alice-4-cadeiras',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Alice com 04 Cadeiras',
    description: 'Conjunto completo com mesa Alice e 04 cadeiras.',
    longDescription: 'O Conjunto Mesa de Jantar Alice combina delicadeza e robustez. Acompanha 04 cadeiras estofadas confortáveis, ideal para jantares íntimos e cozinhas modernas.',
    image: '/images/Mesas/mesa-alice-4-cadeiras/img_1.png',
    images: [
      '/images/Mesas/mesa-alice-4-cadeiras/img_1.png'
    ],
    price: 'R$ 940,00',
  },
  {
    id: 'mesa-malva-4-cadeiras-madeira',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Malva com Tampo de Madeira',
    description: 'Mesa Malva com 04 cadeiras e elegante tampo de madeira.',
    longDescription: 'O Conjunto Mesa de Jantar Malva com tampo de madeira maciça traz aconchego e a beleza natural do estilo amadeirado. Acompanha 04 cadeiras com estofamento premium.',
    image: '/images/Mesas/mesa-malva-4-cadeiras-madeira/img_1.png',
    images: [
      '/images/Mesas/mesa-malva-4-cadeiras-madeira/img_1.png'
    ],
    price: 'R$ 1.320,00',
  },
  {
    id: 'mesa-malva-tampo-vidro',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Malva com Tampo de Vidro',
    description: 'Mesa Malva com 04 ou 06 cadeiras e moderno tampo de vidro.',
    longDescription: 'Com tampo de vidro laqueado Off White de alto padrão, a Mesa Malva oferece elegância contemporânea. Disponível em conjunto com 04 ou 06 cadeiras estofadas ergonômicas.',
    image: '/images/Mesas/mesa-malva-tampo-vidro/img_1.png',
    images: [
      '/images/Mesas/mesa-malva-tampo-vidro/img_1.png',
      '/images/Mesas/mesa-malva-tampo-vidro/img_2.png'
    ],
    price: 'R$ 1.680,00',
  },
  {
    id: 'mesa-rubi-organica-perola',
    categoryId: 'mesas',
    title: 'Mesa Rubi Orgânica com Cadeiras Pérola',
    description: 'Mesa orgânica 1,35m com 04 cadeiras Pérola.',
    longDescription: 'O design orgânico escultural da Mesa Rubi (anteriormente Siena) traz fluidez para o ambiente, perfeitamente harmonizado com o conforto e requinte das 04 cadeiras Pérola.',
    image: '/images/Mesas/mesa-rubi-organica-perola/img_1.jpg',
    images: [
      '/images/Mesas/mesa-rubi-organica-perola/img_1.jpg',
      '/images/Mesas/mesa-rubi-organica-perola/img_2.jpg',
      '/images/Mesas/mesa-rubi-organica-perola/img_3.jpg',
      '/images/Mesas/mesa-rubi-organica-perola/img_4.jpg',
      '/images/Mesas/mesa-rubi-organica-perola/img_5.jpg',
      '/images/Mesas/mesa-rubi-organica-perola/img_6.mp4'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-rubi-redonda-perola-6-cadeiras',
    categoryId: 'mesas',
    title: 'Mesa Rubi Redonda com 06 Cadeiras Pérola',
    description: 'Mesa redonda 1,50m com 06 cadeiras Pérola.',
    longDescription: 'Conjunto imponente e clássico. A Mesa Rubi Redonda de 1,50m acomoda confortavelmente 06 pessoas com as elegantes e ergonômicas cadeiras Pérola.',
    image: '/images/Mesas/mesa-rubi-redonda-perola-6-cadeiras/img_1.jpg',
    images: [
      '/images/Mesas/mesa-rubi-redonda-perola-6-cadeiras/img_1.jpg',
      '/images/Mesas/mesa-rubi-redonda-perola-6-cadeiras/img_2.jpg',
      '/images/Mesas/mesa-rubi-redonda-perola-6-cadeiras/img_3.jpg',
      '/images/Mesas/mesa-rubi-redonda-perola-6-cadeiras/img_4.jpg',
      '/images/Mesas/mesa-rubi-redonda-perola-6-cadeiras/img_5.jpg',
      '/images/Mesas/mesa-rubi-redonda-perola-6-cadeiras/img_6.jpg',
      '/images/Mesas/mesa-rubi-redonda-perola-6-cadeiras/img_7.jpg',
      '/images/Mesas/mesa-rubi-redonda-perola-6-cadeiras/img_8.jpg',
      '/images/Mesas/mesa-rubi-redonda-perola-6-cadeiras/img_9.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-ametista-tampo-vidro',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Ametista com Tampo de Vidro',
    description: 'Mesa de jantar de 1,36m a 1,80m com tampo de vidro.',
    longDescription: 'A Mesa de Jantar Ametista apresenta tampo de vidro de altíssima qualidade com base geométrica de design refinado. Disponível em múltiplos tamanhos de 1,36m a 1,80m para se adaptar perfeitamente ao seu living.',
    image: '/images/Mesas/mesa-ametista-tampo-vidro/img_1.png',
    images: [
      '/images/Mesas/mesa-ametista-tampo-vidro/img_1.png'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-jasmim-itaipava',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Jasmim com Cadeiras Itaipava',
    description: 'Mesa 1,20x0,80m acompanhada de 04 cadeiras Itaipava.',
    longDescription: 'O design leve da Mesa compacta Jasmim 1,20m x 0,80m combina perfeitamente com a sofisticação e conforto exclusivo das cadeiras Itaipava.',
    image: '/images/Mesas/mesa-jasmim-itaipava/img_1.jpg',
    images: [
      '/images/Mesas/mesa-jasmim-itaipava/img_1.jpg',
      '/images/Mesas/mesa-jasmim-itaipava/img_2.jpg',
      '/images/Mesas/mesa-jasmim-itaipava/img_3.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-liz-100',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Liz 1,00m',
    description: 'Mesa redonda Liz de 1,00m de diâmetro.',
    longDescription: 'Compacta, moderna e ideal para pequenos espaços, a Mesa de Jantar Liz com base cônica e tampo redondo traz elegância sem comprometer a circulação.',
    image: '/images/Mesas/mesa-liz-100/img_1.jpg',
    images: [
      '/images/Mesas/mesa-liz-100/img_1.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-aura-oval-8-cadeiras',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Aura Oval com 08 Cadeiras',
    description: 'Mesa oval Aura de 2,20m x 1,10m com 08 cadeiras.',
    longDescription: 'A Mesa Aura Oval possui tampo generoso e design curvo refinado. O conjunto acompanha 08 cadeiras estofadas de altíssimo padrão, unindo luxo e conforto ergonômico.',
    image: '/images/Mesas/mesa-aura-oval-8-cadeiras/img_1.jpg',
    images: [
      '/images/Mesas/mesa-aura-oval-8-cadeiras/img_1.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-barcelona-180',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Barcelona 1,80m',
    description: 'Mesa de jantar Barcelona com 1,80m de comprimento.',
    longDescription: 'Versão de 1,80m da clássica Mesa Barcelona. Suas linhas limpas e design requintado agregam charme e excelente espaço para sua sala de jantar.',
    image: '/images/Mesas/mesa-barcelona-180/img_1.jpg',
    images: [
      '/images/Mesas/mesa-barcelona-180/img_1.jpg',
      '/images/Mesas/mesa-barcelona-180/img_2.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-barcelona-emilly',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Barcelona com 08 Cadeiras Emilly',
    description: 'Mesa Barcelona de 2,20m com 08 cadeiras Emilly.',
    longDescription: 'Sofisticação e conforto extremo. A Mesa Barcelona de 2,20m acompanhada de 08 luxuosas cadeiras Emilly é o conjunto definitivo para grandes salas de jantar.',
    image: '/images/Mesas/mesa-barcelona-emilly/img_1.jpg',
    images: [
      '/images/Mesas/mesa-barcelona-emilly/img_1.jpg',
      '/images/Mesas/mesa-barcelona-emilly/img_2.jpg',
      '/images/Mesas/mesa-barcelona-emilly/img_3.jpg',
      '/images/Mesas/mesa-barcelona-emilly/img_4.jpg',
      '/images/Mesas/mesa-barcelona-emilly/img_5.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-barcelona-pequim',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Barcelona com 08 Cadeiras Pequim',
    description: 'Mesa Barcelona de 2,20m com 08 cadeiras Pequim.',
    longDescription: 'Design cosmopolita e acabamento de altíssimo nível. A Mesa Barcelona combinada com o conforto anatômico das 08 cadeiras Pequim garante um living memorável.',
    image: '/images/Mesas/mesa-barcelona-pequim/img_1.jpg',
    images: [
      '/images/Mesas/mesa-barcelona-pequim/img_1.jpg',
      '/images/Mesas/mesa-barcelona-pequim/img_2.jpg',
      '/images/Mesas/mesa-barcelona-pequim/img_3.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-denver-270',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Denver 2,70m',
    description: 'Mesa de jantar Denver de 2,70m de comprimento.',
    longDescription: 'Para ambientes de proporções generosas, a Mesa Denver de 2,70m de comprimento oferece imponência, beleza e estabilidade em sua estrutura de madeira nobre.',
    image: '/images/Mesas/mesa-denver-270/img_1.jpg',
    images: [
      '/images/Mesas/mesa-denver-270/img_1.jpg',
      '/images/Mesas/mesa-denver-270/img_2.jpg',
      '/images/Mesas/mesa-denver-270/img_3.jpg',
      '/images/Mesas/mesa-denver-270/img_4.jpg',
      '/images/Mesas/mesa-denver-270/img_5.mp4'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-herval-mh5384',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Herval MH 5384',
    description: 'Mesa de jantar Herval de 2,20m x 1,10m com tampo especial.',
    longDescription: 'O altíssimo padrão da marca Herval na Mesa MH 5384. Com tampo de 2,20m x 1,10m, apresenta uma base escultural única que valoriza qualquer decoração contemporânea.',
    image: '/images/Mesas/mesa-herval-mh5384/img_1.png',
    images: [
      '/images/Mesas/mesa-herval-mh5384/img_1.png',
      '/images/Mesas/mesa-herval-mh5384/img_2.webp',
      '/images/Mesas/mesa-herval-mh5384/img_3.png',
      '/images/Mesas/mesa-herval-mh5384/img_4.jpg',
      '/images/Mesas/mesa-herval-mh5384/img_5.jpg',
      '/images/Mesas/mesa-herval-mh5384/img_6.mp4'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-jasmim-italia',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Jasmim com Cadeiras Itália',
    description: 'Mesa 1,20x0,80m com 04 cadeiras Itália.',
    longDescription: 'A compacta Mesa Jasmim une forças com o design ergonômico consagrado das cadeiras Itália, criando o conjunto ideal para apartamentos modernos.',
    image: '/images/Mesas/mesa-jasmim-italia/img_1.png',
    images: [
      '/images/Mesas/mesa-jasmim-italia/img_1.png',
      '/images/Mesas/mesa-jasmim-italia/img_2.png',
      '/images/Mesas/mesa-jasmim-italia/img_3.png',
      '/images/Mesas/mesa-jasmim-italia/img_4.png',
      '/images/Mesas/mesa-jasmim-italia/img_5.png',
      '/images/Mesas/mesa-jasmim-italia/img_6.png',
      '/images/Mesas/mesa-jasmim-italia/img_7.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-jasmim-turquia',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Jasmim com Cadeiras Turquia',
    description: 'Mesa 1,20x0,80m acompanhada de 04 cadeiras Turquia.',
    longDescription: 'A versatilidade da Mesa Jasmim encontra o conforto estofado e a costura refinada das cadeiras Turquia. Visual clean e aconchego perfeito.',
    image: '/images/Mesas/mesa-jasmim-turquia/img_1.jpg',
    images: [
      '/images/Mesas/mesa-jasmim-turquia/img_1.jpg',
      '/images/Mesas/mesa-jasmim-turquia/img_2.jpg',
      '/images/Mesas/mesa-jasmim-turquia/img_3.jpg',
      '/images/Mesas/mesa-jasmim-turquia/img_4.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-montreal-costa-rica',
    categoryId: 'mesas',
    title: 'Mesa Montreal com Cadeiras Costa Rica',
    description: 'Mesa oval 2,20x1,10m com tampo orgânico e 06 cadeiras Costa Rica.',
    longDescription: 'Com tampo orgânico levemente ovalado, a Mesa Montreal traz modernidade para jantares. Acompanha 06 cadeiras Costa Rica com encosto ergonômico.',
    image: '/images/Mesas/mesa-montreal-costa-rica/img_1.jpg',
    images: [
      '/images/Mesas/mesa-montreal-costa-rica/img_1.jpg',
      '/images/Mesas/mesa-montreal-costa-rica/img_2.jpg',
      '/images/Mesas/mesa-montreal-costa-rica/img_3.jpg',
      '/images/Mesas/mesa-montreal-costa-rica/img_4.jpg',
      '/images/Mesas/mesa-montreal-costa-rica/img_5.jpg',
      '/images/Mesas/mesa-montreal-costa-rica/img_6.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-athenas-redonda',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Athenas Redonda',
    description: 'Mesa redonda de 1,03m com 04 cadeiras Athenas.',
    longDescription: 'O Conjunto Mesa de Jantar Athenas redonda (sem vidro) de 1,03m de diâmetro é prático, aconchegante e traz o calor da madeira natural, acompanhado por 04 cadeiras confortáveis.',
    image: '/images/Mesas/mesa-athenas-redonda/img_1.jpg',
    images: [
      '/images/Mesas/mesa-athenas-redonda/img_1.jpg'
    ],
    price: 'R$ 1.320,00',
  },
  {
    id: 'mesa-celeste-6-cadeiras',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Celeste com 06 Cadeiras',
    description: 'Mesa Celeste de 1,60m com 06 cadeiras estofadas.',
    longDescription: 'Beleza celestial e conforto. O Conjunto Mesa Celeste de 1,60m vem acompanhado de 06 cadeiras estofadas robustas, sendo uma excelente opção de custo-benefício e elegância.',
    image: '/images/Mesas/mesa-celeste-6-cadeiras/img_1.jpg',
    images: [
      '/images/Mesas/mesa-celeste-6-cadeiras/img_1.jpg'
    ],
    price: 'R$ 2.199,00',
  },
  {
    id: 'mesa-italia-tampo-vidro',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Itália com Tampo de Vidro',
    description: 'Mesa Itália de 2,00m acompanhada de 08 cadeiras.',
    longDescription: 'Conjunto grandioso de altíssimo padrão. Com tampo de vidro laqueado Off White de 2,00m e 08 cadeiras super confortáveis, é a peça ideal para salas de jantar de luxo.',
    image: '/images/Mesas/mesa-italia-tampo-vidro/img_1.jpg',
    images: [
      '/images/Mesas/mesa-italia-tampo-vidro/img_1.jpg'
    ],
    price: 'R$ 5.549,00',
  },
  {
    id: 'mesa-safira-sem-vidro',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Safira (Sem Vidro)',
    description: 'Mesa Safira de 1,36m com tampo em madeira natural.',
    longDescription: 'Para quem prefere o toque natural e rústico-chique da madeira pura. A base geométrica da Mesa Safira ganha uma versão clean e atemporal sem a sobreposição de vidro.',
    image: '/images/Mesas/mesa-safira-sem-vidro/img_1.jpg',
    images: [
      '/images/Mesas/mesa-safira-sem-vidro/img_1.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-valencia',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Valência',
    description: 'Mesa de jantar disponível nos tamanhos 1,36x0,75m a 1,70x0,75m.',
    longDescription: 'Design nórdico clean e minimalista. A Mesa de Jantar Valência oferece pernas anguladas de madeira maciça e tampo com acabamento fosco refinado, ideal para composições contemporâneas.',
    image: '/images/Mesas/mesa-valencia/img_1.jpg',
    images: [
      '/images/Mesas/mesa-valencia/img_1.jpg'
    ],
    price: 'Sob Consulta',
  },
  {
    id: 'mesa-valencia-170',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Valência 1,70m',
    description: 'Mesa de jantar Valência de 1,70m x 0,75m.',
    longDescription: 'Versão de 1,70m da charmosa Mesa Valência. Sua proporção alongada é perfeita para salas de almoço e ambientes integrados com extremo requinte.',
    image: '/images/Mesas/mesa-valencia-170/img_1.jpg',
    images: [
      '/images/Mesas/mesa-valencia-170/img_1.jpg'
    ],
    price: 'R$ 1.790,00',
  },
  {
    id: 'mesa-valencia-6-cadeiras',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Valência com 06 Cadeiras',
    description: 'Mesa Valência 1,70m com conjunto de 06 cadeiras.',
    longDescription: 'Conjunto completo e acolhedor. A Mesa Valência de 1,70m de comprimento é acompanhada por 06 cadeiras com excelente ergonomia e design leve.',
    image: '/images/Mesas/mesa-valencia-6-cadeiras/img_1.png',
    images: [
      '/images/Mesas/mesa-valencia-6-cadeiras/img_1.png',
      '/images/Mesas/mesa-valencia-6-cadeiras/img_2.jpg',
      '/images/Mesas/mesa-valencia-6-cadeiras/img_3.jpg',
      '/images/Mesas/mesa-valencia-6-cadeiras/img_4.jpg'
    ],
    price: 'R$ 2.000,00',
  },
  {
    id: 'mesa-veneza-tampo-vidro',
    categoryId: 'mesas',
    title: 'Mesa de Jantar Veneza com Tampo de Vidro',
    description: 'Mesa Veneza de 2,00m acompanhada de 06 cadeiras.',
    longDescription: 'Com tampo de vidro laqueado Off White de 2,00m de comprimento, a Mesa Veneza traz imponência e sofisticação europeia para a sua sala de jantar, acompanhada de 06 cadeiras de altíssimo padrão.',
    image: '/images/Mesas/mesa-veneza-tampo-vidro/img_1.webp',
    images: [
      '/images/Mesas/mesa-veneza-tampo-vidro/img_1.webp',
      '/images/Mesas/mesa-veneza-tampo-vidro/img_2.webp',
      '/images/Mesas/mesa-veneza-tampo-vidro/img_3.webp',
      '/images/Mesas/mesa-veneza-tampo-vidro/img_4.webp',
      '/images/Mesas/mesa-veneza-tampo-vidro/img_5.webp',
      '/images/Mesas/mesa-veneza-tampo-vidro/img_6.jpg'
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


export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  discountPrice?: number;
  images: string[];
  description: string;
  categoryId: string;
  rating: number;
  ratingCount: number;
  isPopular?: boolean;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Batom Matte Vermelho',
    brand: 'GlowUp',
    price: 49.90,
    discountPrice: 39.90,
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=500&auto=format',
      'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=500&auto=format'
    ],
    description: 'Batom de longa duração com acabamento matte perfeito. Textura cremosa que não resseca os lábios. Alta pigmentação e conforto o dia todo.',
    categoryId: 'makeup',
    rating: 4.8,
    ratingCount: 356,
    isPopular: true
  },
  {
    id: '2',
    name: 'Base Líquida HD',
    brand: 'BeautyPro',
    price: 89.90,
    images: [
      'https://images.unsplash.com/photo-1631215583473-4710df684c89?q=80&w=500&auto=format',
      'https://images.unsplash.com/photo-1614159102653-0c680464bd5c?q=80&w=500&auto=format'
    ],
    description: 'Base de alta cobertura com acabamento natural. Desenvolvida para todos os tipos de pele, oferece uniformização perfeita e longa duração.',
    categoryId: 'makeup',
    rating: 4.5,
    ratingCount: 212,
    isPopular: true
  },
  {
    id: '3',
    name: 'Sérum Facial Vitamina C',
    brand: 'PureSkin',
    price: 119.90,
    discountPrice: 99.90,
    images: [
      'https://images.unsplash.com/photo-1611930022073-84f53017a8a7?q=80&w=500&auto=format',
      'https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=500&auto=format'
    ],
    description: 'Sérum antioxidante que ilumina e uniformiza o tom da pele. Combate os sinais de envelhecimento e protege contra danos ambientais.',
    categoryId: 'skin',
    rating: 4.9,
    ratingCount: 482,
    isNew: true
  },
  {
    id: '4',
    name: 'Paleta de Sombras Sunset',
    brand: 'GlowUp',
    price: 129.90,
    images: [
      'https://images.unsplash.com/photo-1592136957897-b2b6ca21e10d?q=80&w=500&auto=format',
      'https://images.unsplash.com/photo-1599446795919-a569f645444a?q=80&w=500&auto=format'
    ],
    description: 'Paleta com 12 cores altamente pigmentadas, perfeita para looks do dia e da noite. Textura acetinada e matte com alta fixação.',
    categoryId: 'makeup',
    rating: 4.7,
    ratingCount: 187,
    isPopular: true
  },
  {
    id: '5',
    name: 'Brincos Dourados',
    brand: 'GlamAcess',
    price: 79.90,
    discountPrice: 59.90,
    images: [
      'https://images.unsplash.com/photo-1630019852942-7a3592f6e763?q=80&w=500&auto=format',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=500&auto=format'
    ],
    description: 'Brincos banhados a ouro com design elegante e sofisticado. Perfeito para ocasiões especiais e uso diário.',
    categoryId: 'accessories',
    rating: 4.6,
    ratingCount: 98,
    isNew: true
  },
  {
    id: '6',
    name: 'Vestido Slip Dress',
    brand: 'ChicStyle',
    price: 199.90,
    images: [
      'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?q=80&w=500&auto=format',
      'https://images.unsplash.com/photo-1583846783214-7229a3250c8f?q=80&w=500&auto=format'
    ],
    description: 'Vestido leve e elegante com tecido fluido e caimento perfeito. Ideal para diversas ocasiões, do dia à noite.',
    categoryId: 'fashion',
    rating: 4.8,
    ratingCount: 156,
    isPopular: true
  },
  {
    id: '7',
    name: 'Máscara Capilar Hidratante',
    brand: 'HairLux',
    price: 79.90,
    images: [
      'https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?q=80&w=500&auto=format',
      'https://images.unsplash.com/photo-1617422275559-d0cc33eecf8e?q=80&w=500&auto=format'
    ],
    description: 'Tratamento intensivo para cabelos danificados. Repara e hidrata profundamente, deixando os fios macios e brilhantes.',
    categoryId: 'hair',
    rating: 4.7,
    ratingCount: 278,
    isNew: true
  },
  {
    id: '8',
    name: 'Esmalte Gel Nude',
    brand: 'NailPro',
    price: 29.90,
    images: [
      'https://images.unsplash.com/photo-1610992458223-4b1f55b4153e?q=80&w=500&auto=format',
      'https://images.unsplash.com/photo-1636018435131-705bc9060ec9?q=80&w=500&auto=format'
    ],
    description: 'Esmalte com efeito gel de longa duração. Secagem rápida, brilho intenso e acabamento profissional.',
    categoryId: 'nails',
    rating: 4.5,
    ratingCount: 123,
    isPopular: true
  }
];

export const getProductsByCategoryId = (categoryId: string): Product[] => {
  return products.filter(product => product.categoryId === categoryId);
};

export const getPopularProducts = (): Product[] => {
  return products.filter(product => product.isPopular);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};


export interface Category {
  id: string;
  name: string;
  icon: string;
  imageUrl: string;
}

export const categories: Category[] = [
  {
    id: 'makeup',
    name: 'Maquiagem',
    icon: '💄',
    imageUrl: 'https://images.unsplash.com/photo-1596704017204-0af89c23d101?q=80&w=500&auto=format'
  },
  {
    id: 'skin',
    name: 'Skincare',
    icon: '✨',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=500&auto=format'
  },
  {
    id: 'accessories',
    name: 'Acessórios',
    icon: '👑',
    imageUrl: 'https://images.unsplash.com/photo-1601397211355-9e0af5af0d16?q=80&w=500&auto=format'
  },
  {
    id: 'fashion',
    name: 'Moda',
    icon: '👗',
    imageUrl: 'https://images.unsplash.com/photo-1589130786175-e761829309dd?q=80&w=500&auto=format'
  },
  {
    id: 'hair',
    name: 'Cabelo',
    icon: '💇‍♀️',
    imageUrl: 'https://images.unsplash.com/photo-1603560683885-77931bb0db33?q=80&w=500&auto=format'
  },
  {
    id: 'nails',
    name: 'Unhas',
    icon: '💅',
    imageUrl: 'https://images.unsplash.com/photo-1604654894611-6973b164bb81?q=80&w=500&auto=format'
  }
];

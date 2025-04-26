
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/data/products';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title }) => {
  if (products.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-500">Nenhum produto encontrado</p>
      </div>
    );
  }
  
  return (
    <div className="mb-8">
      {title && (
        <h2 className="text-xl font-heading font-semibold mb-4">{title}</h2>
      )}
      <div className="grid grid-cols-2 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

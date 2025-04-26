
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { categories } from '@/data/categories';
import { getProductsByCategoryId } from '@/data/products';
import ProductGrid from '@/components/products/ProductGrid';

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const category = categories.find(cat => cat.id === id);
  const products = getProductsByCategoryId(id || '');
  
  if (!category) {
    return (
      <Layout header={{ showBackButton: true, title: 'Categoria não encontrada' }}>
        <div className="text-center py-10">
          <p className="text-gray-500">A categoria que você está procurando não existe.</p>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout header={{ showBackButton: true, title: category.name }}>
      <div className="mb-6">
        <div className="mb-6">
          <div className="bg-white rounded-lg overflow-hidden h-40 mb-6">
            <img 
              src={category.imageUrl} 
              alt={category.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-heading font-semibold mb-2">{category.name}</h1>
          <p className="text-gray-600 mb-6">
            Encontre os melhores produtos de {category.name.toLowerCase()} com entrega rápida.
          </p>
        </div>
        
        <ProductGrid
          products={products}
        />
      </div>
    </Layout>
  );
};

export default CategoryPage;


import React from 'react';
import Layout from '@/components/layout/Layout';
import { categories } from '@/data/categories';
import { getPopularProducts, getNewProducts } from '@/data/products';
import CategoryCard from '@/components/products/CategoryCard';
import ProductGrid from '@/components/products/ProductGrid';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const popularProducts = getPopularProducts();
  const newProducts = getNewProducts();
  const navigate = useNavigate();
  
  const handleSearchFocus = () => {
    navigate('/search');
  };
  
  return (
    <Layout>
      <div className="mb-6">
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <Input
            placeholder="Buscar produtos..."
            className="pl-10 bg-white"
            onFocus={handleSearchFocus}
            readOnly
          />
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-heading font-semibold mb-4">Categorias</h2>
          <div className="grid grid-cols-3 gap-4">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <div className="bg-gradient-app p-5 rounded-xl text-white">
            <h2 className="text-xl font-heading font-bold mb-2">Beleza Express</h2>
            <p className="mb-4">Receba seus produtos favoritos em até 1 hora!</p>
            <button 
              className="bg-white text-primary px-4 py-2 rounded-full font-medium text-sm"
              onClick={() => navigate('/category/makeup')}
            >
              Comprar Agora
            </button>
          </div>
        </div>
        
        <ProductGrid
          title="Produtos Populares"
          products={popularProducts}
        />
        
        <ProductGrid
          title="Novidades"
          products={newProducts}
        />
      </div>
    </Layout>
  );
};

export default HomePage;

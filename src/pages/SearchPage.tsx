
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';
import { products, Product } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import Loader from '@/components/ui/Loader';

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setResults([]);
      return;
    }
    
    setLoading(true);
    
    // Simulando uma busca com delay
    const timer = setTimeout(() => {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      setResults(filtered);
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [searchTerm]);
  
  const handleClear = () => {
    setSearchTerm('');
  };
  
  return (
    <Layout header={{ showBackButton: true, title: 'Busca' }}>
      <div className="mb-6">
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar produtos, marcas..."
            className="pl-10 pr-10 bg-white"
            autoFocus
          />
          
          {searchTerm && (
            <button 
              className="absolute inset-y-0 right-3 flex items-center"
              onClick={handleClear}
            >
              <X size={18} className="text-gray-400" />
            </button>
          )}
        </div>
        
        {loading ? (
          <Loader />
        ) : (
          <>
            {searchTerm.trim() !== '' && (
              <div className="mb-4">
                <p className="text-gray-500">
                  {results.length === 0 
                    ? 'Nenhum resultado encontrado' 
                    : `${results.length} resultado${results.length !== 1 ? 's' : ''} para "${searchTerm}"`}
                </p>
              </div>
            )}
            
            {results.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {results.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
            
            {searchTerm.trim() === '' && (
              <div className="text-center py-10">
                <p className="text-gray-500">Busque por produtos, marcas ou categorias</p>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default SearchPage;

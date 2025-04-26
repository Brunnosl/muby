
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { getProductById } from '@/data/products';
import { formatPrice } from '@/utils/formatters';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProductById(id || '');
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  if (!product) {
    return (
      <Layout header={{ showBackButton: true, title: 'Produto não encontrado' }}>
        <div className="text-center py-10">
          <p className="text-gray-500 mb-4">O produto que você está procurando não existe.</p>
          <Button onClick={() => navigate('/')}>Voltar para a página inicial</Button>
        </div>
      </Layout>
    );
  }
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart', { state: { from: `/product/${id}` } });
  };
  
  return (
    <Layout header={{ showBackButton: true, title: product.brand }}>
      <div className="mb-24">
        <div className="relative mb-4">
          <div className="rounded-lg overflow-hidden bg-white">
            <img 
              src={product.images[activeImage]} 
              alt={product.name}
              className="w-full h-72 object-cover"
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="flex mt-2 gap-2 justify-center">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-14 h-14 rounded-md overflow-hidden border-2 ${
                    activeImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - imagem ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="bg-white rounded-lg p-4 mb-4">
          <h1 className="text-xl font-heading font-semibold mb-1">{product.name}</h1>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? "text-gold-400" : "text-gray-300"}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500">({product.ratingCount} avaliações)</span>
          </div>
          
          <div className="mb-4">
            {product.discountPrice ? (
              <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold text-secondary">{formatPrice(product.discountPrice)}</span>
                <span className="text-gray-400 text-sm line-through">{formatPrice(product.price)}</span>
                <span className="bg-secondary/10 text-secondary text-xs font-medium px-2 py-1 rounded-full">
                  {Math.round((1 - product.discountPrice / product.price) * 100)}% Off
                </span>
              </div>
            ) : (
              <span className="text-2xl font-semibold">{formatPrice(product.price)}</span>
            )}
          </div>
          
          <Tabs defaultValue="description">
            <TabsList className="w-full">
              <TabsTrigger value="description" className="flex-1">Descrição</TabsTrigger>
              <TabsTrigger value="details" className="flex-1">Detalhes</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <p className="text-gray-600">{product.description}</p>
            </TabsContent>
            <TabsContent value="details" className="mt-4">
              <ul className="text-gray-600 space-y-2">
                <li><span className="font-medium">Marca:</span> {product.brand}</li>
                <li><span className="font-medium">Categoria:</span> {product.categoryId}</li>
                <li><span className="font-medium">Entrega:</span> Em até 1 hora</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <div className="flex items-center border rounded-full overflow-hidden">
            <button 
              onClick={decreaseQuantity}
              className="px-3 py-2 text-gray-600 hover:bg-gray-100"
            >
              <Minus size={16} />
            </button>
            <span className="px-3 min-w-8 text-center">{quantity}</span>
            <button 
              onClick={increaseQuantity}
              className="px-3 py-2 text-gray-600 hover:bg-gray-100"
            >
              <Plus size={16} />
            </button>
          </div>
          
          <Button onClick={handleAddToCart} className="bg-gradient-app">
            <ShoppingCart size={18} className="mr-2" />
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;

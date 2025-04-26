
import React from 'react';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/context/CartContext';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const CartPage: React.FC = () => {
  const { items, totalItems } = useCart();
  const navigate = useNavigate();
  
  if (items.length === 0) {
    return (
      <Layout header={{ title: 'Seu Carrinho', showBackButton: true }}>
        <div className="flex flex-col items-center justify-center py-12">
          <ShoppingCart size={64} className="text-gray-300 mb-4" />
          <h2 className="text-xl font-heading font-semibold mb-2">Seu carrinho está vazio</h2>
          <p className="text-gray-500 mb-6 text-center">
            Adicione alguns produtos para começar suas compras.
          </p>
          <Button onClick={() => navigate('/')} className="bg-gradient-app">
            Explorar Produtos
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout header={{ title: `Seu Carrinho (${totalItems})`, showBackButton: true }}>
      <div className="mb-40">
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          {items.map(item => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
        
        <CartSummary />
      </div>
    </Layout>
  );
};

export default CartPage;

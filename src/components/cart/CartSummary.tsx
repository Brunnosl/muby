
import React from 'react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/formatters';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CartSummary: React.FC = () => {
  const { subtotal, shipping, totalPrice } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    navigate('/checkout');
  };
  
  return (
    <div className="bg-white rounded-lg shadow p-4 sticky bottom-20">
      <h3 className="font-heading font-semibold mb-4">Resumo do Pedido</h3>
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Frete</span>
          <span>{formatPrice(shipping)}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-2 mt-2">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span className="text-primary">{formatPrice(totalPrice)}</span>
          </div>
        </div>
      </div>
      
      <Button onClick={handleCheckout} className="w-full bg-gradient-app">
        Finalizar Compra
      </Button>
    </div>
  );
};

export default CartSummary;


import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/formatters';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Check, CreditCard, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const CheckoutPage: React.FC = () => {
  const { items, subtotal, shipping, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  const handlePlaceOrder = () => {
    setLoading(true);
    
    // Simulação de processamento de pedido
    setTimeout(() => {
      setLoading(false);
      clearCart();
      
      toast({
        title: "Pedido confirmado!",
        description: "Seu pedido foi recebido e está sendo processado.",
      });
      
      navigate('/order-tracking');
    }, 1500);
  };
  
  if (items.length === 0) {
    navigate('/');
    return null;
  }
  
  return (
    <Layout header={{ title: 'Finalizar Compra', showBackButton: true }}>
      <div className="mb-24">
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <div className="flex items-center mb-4">
            <MapPin className="text-primary mr-2" size={20} />
            <h3 className="font-heading font-semibold">Endereço de Entrega</h3>
          </div>
          
          <div className="space-y-3 mb-4">
            <div>
              <Label htmlFor="name">Nome completo</Label>
              <Input id="name" placeholder="Seu nome completo" defaultValue="Maria Silva" />
            </div>
            
            <div>
              <Label htmlFor="address">Endereço</Label>
              <Input id="address" placeholder="Rua, número" defaultValue="Av. Paulista, 1000" />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="city">Cidade</Label>
                <Input id="city" placeholder="Cidade" defaultValue="São Paulo" />
              </div>
              <div>
                <Label htmlFor="zipcode">CEP</Label>
                <Input id="zipcode" placeholder="00000-000" defaultValue="01310-100" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <div className="flex items-center mb-4">
            <CreditCard className="text-primary mr-2" size={20} />
            <h3 className="font-heading font-semibold">Método de Pagamento</h3>
          </div>
          
          <div className="border border-primary rounded-lg p-3 bg-primary/5 mb-4">
            <div className="flex items-center">
              <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center mr-2">
                <Check size={16} className="text-white" />
              </div>
              <span className="font-medium">Pix</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Gere um QR Code Pix e pague rapidamente.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h3 className="font-heading font-semibold mb-4">Resumo do Pedido</h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Produtos ({items.length})</span>
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
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-lg mx-auto">
          <Button 
            onClick={handlePlaceOrder} 
            className="w-full bg-gradient-app"
            disabled={loading}
          >
            {loading ? 'Processando...' : 'Confirmar Pedido'}
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;

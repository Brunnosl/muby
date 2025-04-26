
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Check, Clock, Package, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const OrderTrackingPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  
  // Simula o progresso do pedido
  useEffect(() => {
    if (currentStep < 3) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 4000);
      
      return () => clearTimeout(timer);
    }
  }, [currentStep]);
  
  const steps = [
    { 
      id: 1, 
      title: 'Pedido Confirmado', 
      description: 'Seu pedido foi recebido e está sendo processado.',
      icon: <Clock size={24} />,
      time: '10:30'
    },
    { 
      id: 2, 
      title: 'Pedido em Preparação', 
      description: 'Estamos separando seus produtos.',
      icon: <Package size={24} />,
      time: '10:45'
    },
    { 
      id: 3, 
      title: 'Em Rota de Entrega', 
      description: 'Seu pedido está a caminho!',
      icon: <Truck size={24} />,
      time: '11:15'
    }
  ];
  
  return (
    <Layout header={{ title: 'Acompanhe seu pedido', showBackButton: true }}>
      <div className="py-4">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-heading font-semibold mb-2">Pedido #12345</h2>
          <p className="text-gray-500 mb-6">Realizado hoje às 10:30</p>
          
          <div className="relative">
            {/* Linha de progresso */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-200 z-0" />
            
            {steps.map((step, index) => {
              const isCompleted = currentStep >= step.id;
              const isActive = currentStep === step.id;
              
              return (
                <div key={step.id} className="relative z-10 flex mb-8 last:mb-0">
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center mr-4 transition-colors ${
                    isCompleted ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {isCompleted ? <Check size={24} /> : step.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className={`font-medium ${isActive ? 'text-primary' : ''}`}>
                        {step.title}
                      </h3>
                      {(isCompleted || isActive) && (
                        <span className="text-gray-500 text-sm">{step.time}</span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h3 className="font-medium mb-2">Tempo estimado de entrega</h3>
          <p className="text-2xl font-heading font-semibold text-primary mb-2">10:30 - 11:30</p>
          <p className="text-gray-500 text-sm mb-4">O entregador chegará em breve</p>
          
          <Button 
            onClick={() => navigate('/')} 
            variant="outline" 
            className="w-full"
          >
            Voltar para a loja
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default OrderTrackingPage;

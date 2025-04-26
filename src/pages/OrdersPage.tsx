
import React from 'react';
import Layout from '@/components/layout/Layout';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/utils/formatters';
import Loader from '@/components/ui/Loader';

type Order = {
  id: string;
  total: number;
  status: 'Confirmado' | 'Enviado' | 'Entregue';
  created_at: string;
  items: Array<{
    product_name: string;
    quantity: number;
    price: number;
  }>;
};

const OrdersPage: React.FC = () => {
  const { data: orders, isLoading, error } = useQuery<Order[]>({
    queryKey: ['user-orders'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return [];

      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    }
  });

  const renderOrderStatus = (status: Order['status']) => {
    const statusColors = {
      'Confirmado': 'bg-yellow-100 text-yellow-800',
      'Enviado': 'bg-blue-100 text-blue-800',
      'Entregue': 'bg-green-100 text-green-800'
    };

    return (
      <Badge variant="outline" className={statusColors[status]}>
        {status}
      </Badge>
    );
  };

  if (isLoading) return <Loader />;
  if (error) return <div>Erro ao carregar pedidos</div>;

  return (
    <Layout header={{ title: 'Meus Pedidos', showBackButton: true }}>
      <div className="space-y-4 p-4">
        {orders?.length === 0 ? (
          <div className="text-center text-gray-500">
            Você ainda não tem pedidos
          </div>
        ) : (
          orders?.map(order => (
            <Card key={order.id} className="w-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Pedido #{order.id.slice(-6)}
                </CardTitle>
                {renderOrderStatus(order.status)}
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground mb-2">
                  {new Date(order.created_at).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                  })}
                </div>
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between py-1">
                    <span>{item.product_name}</span>
                    <span>{item.quantity} x {formatCurrency(item.price)}</span>
                  </div>
                ))}
                <div className="border-t mt-2 pt-2 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{formatCurrency(order.total)}</span>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </Layout>
  );
};

export default OrdersPage;

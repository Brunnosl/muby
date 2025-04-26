
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  LogOut, 
  User, 
  ShoppingBag, 
  MapPin, 
  CreditCard, 
  Heart, 
  Bell 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleLogout = () => {
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado da sua conta.",
    });
    
    // Simulação de logout
    navigate('/login');
  };
  
  return (
    <Layout header={{ title: 'Seu Perfil' }}>
      <div className="py-4">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center">
            <Avatar className="h-16 w-16 mr-4">
              <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            
            <div>
              <h2 className="text-xl font-heading font-semibold">Maria Silva</h2>
              <p className="text-gray-500">maria.silva@exemplo.com</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
          <div className="divide-y">
            <ProfileItem 
              icon={<ShoppingBag size={20} />}
              title="Meus Pedidos"
              onClick={() => navigate('/orders')}
            />
            
            <ProfileItem 
              icon={<MapPin size={20} />}
              title="Endereços"
              onClick={() => navigate('/addresses')}
            />
            
            <ProfileItem 
              icon={<CreditCard size={20} />}
              title="Métodos de Pagamento"
              onClick={() => navigate('/payment-methods')}
            />
            
            <ProfileItem 
              icon={<Heart size={20} />}
              title="Favoritos"
              onClick={() => navigate('/favorites')}
            />
            
            <ProfileItem 
              icon={<Bell size={20} />}
              title="Notificações"
              onClick={() => navigate('/notifications')}
            />
            
            <ProfileItem 
              icon={<User size={20} />}
              title="Editar Perfil"
              onClick={() => navigate('/edit-profile')}
            />
          </div>
        </div>
        
        <Button 
          variant="outline" 
          className="w-full text-red-500 border-red-100 hover:bg-red-50 hover:text-red-600"
          onClick={handleLogout}
        >
          <LogOut size={18} className="mr-2" />
          Sair da Conta
        </Button>
      </div>
    </Layout>
  );
};

interface ProfileItemProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}

const ProfileItem: React.FC<ProfileItemProps> = ({ icon, title, onClick }) => {
  return (
    <button 
      className="flex items-center justify-between w-full p-4 hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="text-primary mr-3">{icon}</div>
        <span>{title}</span>
      </div>
      <span className="text-gray-400">›</span>
    </button>
  );
};

export default ProfilePage;

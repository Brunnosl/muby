
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, ShoppingCart, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Badge } from '@/components/ui/badge';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalItems } = useCart();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <button 
        onClick={() => navigate('/')}
        className={`navbar-icon ${isActive('/') ? 'text-primary' : ''}`}
      >
        <Home size={24} />
        <span className="text-xs mt-1">Início</span>
      </button>
      
      <button 
        onClick={() => navigate('/search')}
        className={`navbar-icon ${isActive('/search') ? 'text-primary' : ''}`}
      >
        <Search size={24} />
        <span className="text-xs mt-1">Buscar</span>
      </button>
      
      <button 
        onClick={() => navigate('/cart')}
        className={`navbar-icon ${isActive('/cart') ? 'text-primary' : ''} relative`}
      >
        <ShoppingCart size={24} />
        {totalItems > 0 && (
          <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-secondary text-xs rounded-full">
            {totalItems}
          </Badge>
        )}
        <span className="text-xs mt-1">Carrinho</span>
      </button>
      
      <button 
        onClick={() => navigate('/profile')}
        className={`navbar-icon ${isActive('/profile') ? 'text-primary' : ''}`}
      >
        <User size={24} />
        <span className="text-xs mt-1">Perfil</span>
      </button>
    </nav>
  );
};

export default Navbar;

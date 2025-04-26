
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  rightContent?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  showBackButton = false, 
  rightContent 
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleBack = () => {
    if (location.pathname === '/cart' && location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate(-1);
    }
  };

  return (
    <header className="header">
      <div className="flex items-center">
        {showBackButton && (
          <button 
            onClick={handleBack}
            className="mr-2 p-1 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        {title && (
          <h1 className="text-xl font-heading font-semibold">{title}</h1>
        )}
      </div>
      {rightContent}
    </header>
  );
};

export default Header;

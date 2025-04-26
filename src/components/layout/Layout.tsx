
import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
  header?: {
    title?: string;
    showBackButton?: boolean;
    rightContent?: React.ReactNode;
  };
  showNavbar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  header = {}, 
  showNavbar = true 
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {(header.title || header.showBackButton || header.rightContent) && (
        <Header
          title={header.title}
          showBackButton={header.showBackButton}
          rightContent={header.rightContent}
        />
      )}
      
      <main className="flex-1 page-container">
        {children}
      </main>
      
      {showNavbar && <Navbar />}
    </div>
  );
};

export default Layout;

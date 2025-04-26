
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '@/data/products';
import { formatPrice } from '@/utils/formatters';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };
  
  return (
    <div 
      className={`product-card cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <div className="relative">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
            Novo
          </span>
        )}
        {product.discountPrice && (
          <span className="absolute top-2 right-2 bg-secondary text-white text-xs font-medium px-2 py-1 rounded-full">
            {Math.round((1 - product.discountPrice / product.price) * 100)}% Off
          </span>
        )}
      </div>
      
      <div className="p-3">
        <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        <h3 className="font-medium text-gray-800 mb-1 truncate">{product.name}</h3>
        
        <div className="flex items-center gap-2">
          {product.discountPrice ? (
            <>
              <span className="font-semibold text-secondary">{formatPrice(product.discountPrice)}</span>
              <span className="text-gray-400 text-sm line-through">{formatPrice(product.price)}</span>
            </>
          ) : (
            <span className="font-semibold">{formatPrice(product.price)}</span>
          )}
        </div>
        
        <div className="flex items-center mt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(product.rating) ? "text-gold-400" : "text-gray-300"}>
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.ratingCount})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

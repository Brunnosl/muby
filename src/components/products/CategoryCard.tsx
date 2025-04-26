
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Category } from '@/data/categories';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/category/${category.id}`);
  };
  
  return (
    <div 
      className="category-card"
      onClick={handleClick}
    >
      <div className="w-14 h-14 rounded-full overflow-hidden bg-muted mb-1">
        <img 
          src={category.imageUrl} 
          alt={category.name}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-sm font-medium text-center">{category.name}</span>
    </div>
  );
};

export default CategoryCard;

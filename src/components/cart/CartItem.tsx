
import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/context/CartContext';
import { formatPrice } from '@/utils/formatters';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  
  const handleIncrease = () => {
    updateQuantity(product.id, quantity + 1);
  };
  
  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };
  
  const handleRemove = () => {
    removeFromCart(product.id);
  };
  
  const price = product.discountPrice || product.price;
  const totalPrice = price * quantity;
  
  return (
    <div className="flex border-b border-gray-200 py-4">
      <div className="w-20 h-20 rounded-md overflow-hidden mr-3">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1">
        <p className="text-sm text-gray-500">{product.brand}</p>
        <h3 className="font-medium text-gray-800">{product.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center border rounded-full overflow-hidden">
            <button 
              onClick={handleDecrease}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            >
              <Minus size={16} />
            </button>
            <span className="px-2">{quantity}</span>
            <button 
              onClick={handleIncrease}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            >
              <Plus size={16} />
            </button>
          </div>
          
          <div className="flex items-center">
            <span className="font-semibold mr-2">{formatPrice(totalPrice)}</span>
            <button 
              onClick={handleRemove}
              className="text-gray-400 hover:text-red-500"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

import React from 'react';
import { Product } from '../types';
import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_WHATSAPP, BUSINESS_PHONE } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_WHATSAPP}?text=Hi, I'm interested in the ${product.name} (ID: ${product.id})`;
  const phoneUrl = `tel:${BUSINESS_PHONE}`;

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-stone-200">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-semibold text-stone-900 shadow-sm">
          {product.category}
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-stone-900 line-clamp-1">{product.name}</h3>
          <p className="text-lg font-semibold text-amber-700">${product.price}</p>
        </div>
        <p className="text-stone-500 text-sm mb-4 line-clamp-2 flex-1">{product.description}</p>
        
        <div className="flex gap-2 mt-auto">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-green-50 text-green-700 hover:bg-green-100 py-2 px-3 rounded-lg text-sm font-medium transition-colors"
          >
            <MessageCircle size={16} />
            Order
          </a>
          <a 
            href={phoneUrl}
            className="flex-1 flex items-center justify-center gap-2 bg-stone-100 text-stone-700 hover:bg-stone-200 py-2 px-3 rounded-lg text-sm font-medium transition-colors"
          >
            <Phone size={16} />
            Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
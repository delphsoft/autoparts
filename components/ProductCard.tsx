'use client';
import Image from 'next/image';
import { Heart, Star } from 'lucide-react';
import { useCart } from '@/lib/cartStore';

type Product = {
  id: number;
  name: string;
  image: string;
  discount: number;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
};

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="product-card bg-white border rounded-3xl overflow-hidden group">
      <div className="relative">
        <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-2xl z-10">
          -{product.discount}%
        </div>
        <Heart className="absolute top-4 right-4 text-gray-400 hover:text-red-500 cursor-pointer z-10" size={22} />
        
        <Image 
          src={product.image} 
          alt={product.name} 
          width={400} 
          height={300} 
          className="w-full h-56 object-contain p-6 bg-white" 
        />
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
          ))}
          <span className="text-xs text-gray-500 ml-2">({product.reviews})</span>
        </div>

        <h3 className="font-semibold text-sm mt-3 line-clamp-2 h-10">{product.name}</h3>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-3xl font-bold text-emerald-600">${(product.price/100).toFixed(2)}</span>
          <span className="text-gray-400 line-through text-sm">${(product.originalPrice/100).toFixed(2)}</span>
        </div>

        <button 
          onClick={() => addItem({ id: product.id, name: product.name, price: product.price/100, image: product.image })}
          className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-2xl transition"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

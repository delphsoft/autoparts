'use client';
import Image from 'next/image';
import { Heart, Star } from 'lucide-react';

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
  return (
    <div className="group bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition-all">
      <div className="relative">
        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-xl z-10">
          -{product.discount}%
        </div>
        <Heart className="absolute top-3 right-3 text-gray-400 hover:text-red-500 cursor-pointer z-10" size={20} />
        <Image src={product.image} alt={product.name} width={300} height={200} className="w-full h-48 object-contain p-4" />
      </div>
      <div className="p-4">
        <div className="flex text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill={i < product.rating ? "currentColor" : "none"} />
          ))}
        </div>
        <h3 className="font-semibold text-sm mt-2 line-clamp-2">{product.name}</h3>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-2xl font-bold">${product.price}</span>
          <span className="line-through text-gray-400 text-sm">${product.originalPrice}</span>
        </div>
        <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

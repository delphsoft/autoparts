'use client';
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';

const allProducts = [
  // Puedes agregar más productos aquí
  { id: 1, name: "Aceite Mobil 1 5W-30 5L", image: "https://picsum.photos/id/20/300/300", discount: 25, rating: 4.8, reviews: 124, price: 24500, originalPrice: 32900 },
  { id: 2, name: "Filtro de Aceite Toyota", image: "https://picsum.photos/id/107/300/300", discount: 18, rating: 4.5, reviews: 89, price: 8900, originalPrice: 10900 },
  { id: 3, name: "Pastillas de Freno", image: "https://picsum.photos/id/201/300/300", discount: 32, rating: 4.9, reviews: 67, price: 18500, originalPrice: 26900 },
];

export default function ProductosPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = allProducts.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Todos los Repuestos</h1>

      <input
        type="text"
        placeholder="Buscar repuestos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md border rounded-full px-6 py-3 mb-8"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

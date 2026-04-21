'use client';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';
import CartDrawer from './CartDrawer';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="lg:hidden"><Menu size={28} /></button>
            <div className="text-3xl font-bold text-red-600 tracking-tight">
              AUTONEX
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-red-600">Inicio</a>
            <a href="/productos" className="hover:text-red-600">Repuestos</a>
            <a href="#" className="hover:text-red-600">Marcas</a>
            <a href="#" className="hover:text-red-600">Ofertas</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block w-80">
              <input
                type="text"
                placeholder="Buscar repuestos, marcas..."
                className="w-full pl-10 pr-4 py-3 border rounded-full text-sm focus:outline-none focus:border-red-600"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            </div>

            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User size={24} />
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full relative"
            >
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}

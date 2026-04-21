'use client';
import { X } from 'lucide-react';
import { useCart } from '@/lib/cartStore';
import MercadoPagoButton from './MercadoPagoButton';

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, removeItem, total, clearCart } = useCart();

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/70 z-50" onClick={onClose} />}
      
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Tu Carrito</h2>
            <button onClick={onClose}>
              <X size={28} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-center">
              <p className="text-gray-500">Tu carrito está vacío</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-auto space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b pb-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-contain" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-red-600 font-bold">${item.price}</p>
                      <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-red-500 text-sm">
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t">
                <div className="flex justify-between text-xl font-bold mb-6">
                  <span>Total:</span>
                  <span>${total().toFixed(2)}</span>
                </div>
                <MercadoPagoButton />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

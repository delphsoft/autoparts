'use client';
import { useState } from 'react';
import { useCart } from '@/lib/cartStore';

export default function MercadoPagoButton() {
  const { items, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/create-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });

      const data = await response.json();

      if (data.init_point) {
        clearCart();
        window.location.href = data.init_point;
      } else {
        alert('Error al procesar el pago. Intente nuevamente.');
      }
    } catch (error) {
      console.error(error);
      alert('Error al conectar con MercadoPago.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading || items.length === 0}
      className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white font-bold py-4 rounded-2xl transition text-lg flex items-center justify-center gap-2"
    >
      {isLoading ? 'Procesando...' : '💳 Pagar con MercadoPago'}
    </button>
  );
}

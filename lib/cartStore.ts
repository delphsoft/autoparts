// lib/cartStore.ts
import { create } from 'zustand';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartStore = {
  items: CartItem[];
  addItem: (product: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  total: () => number;
  itemCount: () => number;
};

export const useCart = create<CartStore>((set, get) => ({
  items: [],

  addItem: (product) =>
    set((state) => {
      const exists = state.items.findIndex((item) => item.id === product.id);
      if (exists !== -1) {
        const updatedItems = [...state.items];
        updatedItems[exists].quantity += 1;
        return { items: updatedItems };
      }
      return { items: [...state.items, { ...product, quantity: 1 }] };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  clearCart: () => set({ items: [] }),

  total: () => {
    return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },

  itemCount: () => {
    return get().items.reduce((sum, item) => sum + item.quantity, 0);
  },
}));

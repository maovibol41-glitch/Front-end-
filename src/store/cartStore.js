import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],
  
  // បន្ថែមទំនិញចូលកន្ត្រក
  addToCart: (product) => set((state) => {
    const existingItem = state.cart.find((item) => item.id === product.id);
    if (existingItem) {
      // បើទំនិញមានរួចហើយ បន្ថែមចំនួន (Quantity + 1)
      return {
        cart: state.cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    }
    // បើទំនិញថ្មី បន្ថែមចូលធម្មតាជាមួយ quantity: 1
    return { cart: [...state.cart, { ...product, quantity: 1 }] };
  }),

  // លុបទំនិញចេញពីកន្ត្រក
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== productId),
  })),

  // ថែមបន្ថែរចំនួនទិញរបស់មួយទំនិញ (យឺថ� 0 មកកាន់ 0)
  adjustQuantity: (productId, delta) => set((state) => ({
    cart: state.cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(0, item.quantity + delta) }
        : item
    ),
  })),

  // សម្អាតកន្ត្រកទាំងអស់
  clearCart: () => set({ cart: [] }),
}));
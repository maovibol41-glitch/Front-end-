import { create } from "zustand";
import { persist } from "zustand/middleware";
import productsData from "../data/products.json";

const DEFAULT_STOCK = 10;

// Build the starting stock map from the product list
const initialStock = Object.fromEntries(
  productsData.map((p) => [p.id, DEFAULT_STOCK]),
);

export const useProductStore = create(
  persist(
    (set) => ({
      products: productsData,
      stock: initialStock,

      // Change stock by delta, never below 0
      adjustStock: (id, delta) =>
        set((state) => ({
          stock: {
            ...state.stock,
            [id]: Math.max(0, (state.stock[id] ?? 0) + delta),
          },
        })),

      // Add a new product and set its starting stock
      addProduct: (product) =>
        set((state) => ({
          products: [...state.products, product],
          stock: { ...state.stock, [product.id]: Number(product.stock) || 0 },
        })),

      removeProduct: (id) =>
        set((state) => {
          const { [id]: _removed, ...restStock } = state.stock;
          return {
            products: state.products.filter((p) => p.id !== id),
            stock: restStock,
          };
        }),
    }),
    {
      name: "khmer-product-storage", // LocalStorage key
    },
  ),
);
